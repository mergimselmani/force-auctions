'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface StepSchedule {
  until: number;
  step: number;
}

interface Props {
  startPrice: number;
  minPrice: number;
  marketValue?: number;
  durationSeconds: number;
  currency?: string;
  stepSchedule?: StepSchedule[];
  onBuy?: (price: number) => void;
  autoStart?: boolean;
  listingId?: string;
}

const DEFAULT_STEP_SCHEDULE: StepSchedule[] = [
  { until: 0.25, step: 0.05 },
  { until: 0.75, step: 0.2 },
  { until: 1.0, step: 0.5 },
];

const VAT_RATE = 0.21;

export default function DutchAuctionClock({
  startPrice,
  minPrice,
  marketValue,
  durationSeconds,
  currency = 'EUR',
  stepSchedule = DEFAULT_STEP_SCHEDULE,
  onBuy,
  autoStart = true,
  listingId,
}: Props) {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isSold, setIsSold] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isRunning || isSold) return;

    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= durationSeconds) {
          setIsRunning(false);
          return durationSeconds;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isSold, durationSeconds]);

  const currentPrice = useMemo(() => {
    const progress = Math.min(elapsed / durationSeconds, 1);
    const priceRange = startPrice - minPrice;

    let totalDecrement = 0;
    for (const { until, step } of stepSchedule) {
      if (progress <= until) {
        const segmentStart = stepSchedule
          .filter((s) => s.until < until)
          .reduce((sum, s) => sum + (s.until * durationSeconds * step), 0);

        const segmentProgress = progress - (stepSchedule
          .filter((s) => s.until < until)
          .reduce((sum, s) => sum + s.until, 0));

        totalDecrement = segmentStart + (segmentProgress * durationSeconds * step);
        break;
      }
    }

    const calculatedPrice = startPrice - (totalDecrement / durationSeconds) * priceRange;
    return Math.max(minPrice, Math.round(calculatedPrice));
  }, [elapsed, startPrice, minPrice, durationSeconds, stepSchedule]);

  const priceWithVAT = currentPrice * (1 + VAT_RATE);
  const progress = Math.min(elapsed / durationSeconds, 1);
  const remainingMinutes = Math.ceil((durationSeconds - elapsed) / 60);

  const marketDotPosition = useMemo(() => {
    if (!marketValue || marketValue < minPrice || marketValue > startPrice) return null;
    const range = startPrice - minPrice;
    const offset = startPrice - marketValue;
    return (offset / range) * 100;
  }, [marketValue, minPrice, startPrice]);

  const handleBuy = () => {
    if (isSold || !isRunning || isProcessing) return;
    
    setIsProcessing(true);
    
    // If listingId is provided, make API call to persist the sale
    if (listingId) {
      fetch(`/api/auction/${listingId}/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sold_price: currentPrice,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to complete purchase');
          }
          return response.json();
        })
        .then((data) => {
          setIsSold(true);
          setIsRunning(false);
          onBuy?.(currentPrice);
        })
        .catch((error) => {
          console.error('Error completing purchase:', error);
          alert('Failed to complete purchase. Please try again.');
        })
        .finally(() => {
          setIsProcessing(false);
        });
    } else {
      // Fallback for demo mode without persistence
      setIsSold(true);
      setIsRunning(false);
      onBuy?.(currentPrice);
      setIsProcessing(false);
    }
  };

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <Card className="p-8 max-w-2xl w-full">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-granite-200"
            />

            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-accent-600 transition-all duration-1000"
              strokeLinecap="round"
            />

            {marketDotPosition !== null && (
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="none"
              >
                <circle
                  cx={100 + 90 * Math.cos((marketDotPosition / 100) * 2 * Math.PI - Math.PI / 2)}
                  cy={100 + 90 * Math.sin((marketDotPosition / 100) * 2 * Math.PI - Math.PI / 2)}
                  r="6"
                  fill="#2563eb"
                  className="drop-shadow-lg"
                />
              </circle>
            )}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-granite-800">
              {currency === 'EUR' ? '€' : currency}{' '}
              {currentPrice.toLocaleString('nl-NL')}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              incl. VAT: {currency === 'EUR' ? '€' : currency}{' '}
              {Math.round(priceWithVAT).toLocaleString('nl-NL')}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          {marketValue && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <span>Market value: {currency === 'EUR' ? '€' : currency} {marketValue.toLocaleString('nl-NL')}</span>
            </div>
          )}
          <div className="text-sm text-muted-foreground">
            Floor price: {currency === 'EUR' ? '€' : currency} {minPrice.toLocaleString('nl-NL')}
          </div>
          <div className="text-lg font-medium">
            {isRunning && !isSold ? `${remainingMinutes} min remaining` : isSold ? 'SOLD!' : 'Ended'}
          </div>
        </div>

        <div className="w-full space-y-2">
          {isRunning && !isSold && currentPrice > minPrice && !isProcessing && (
            <Button
              onClick={handleBuy}
              size="lg"
              variant="accent"
              className="w-full text-lg font-bold"
            >
              Take it for {currency === 'EUR' ? '€' : currency}{' '}
              {currentPrice.toLocaleString('nl-NL')}
            </Button>
          )}

          {isProcessing && (
            <Button
              size="lg"
              variant="accent"
              className="w-full text-lg font-bold"
              disabled
            >
              Processing...
            </Button>
          )}

          {!isRunning && !isSold && currentPrice <= minPrice && (
            <div className="text-center text-lg font-medium text-destructive">
              Reserve not met
            </div>
          )}

          {isSold && (
            <div className="text-center text-2xl font-bold text-accent-600">
              SOLD for {currency === 'EUR' ? '€' : currency}{' '}
              {currentPrice.toLocaleString('nl-NL')}!
            </div>
          )}
        </div>

        <div className="text-xs text-muted-foreground">
          VAT {(VAT_RATE * 100).toFixed(0)}% included in final price
        </div>
      </div>
    </Card>
  );
}

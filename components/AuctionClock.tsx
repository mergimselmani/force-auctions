'use client';
import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  start: number;
  floor: number;
  market?: number;
  durationSec: number;
};

export default function AuctionClock({ start, floor, market, durationSec }: Props) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT(v => Math.min(v + 1, durationSec)), 1000);
    return () => clearInterval(id);
  }, [durationSec]);

  const price = useMemo(() => {
    const pct = Math.min(1, t / durationSec);
    const p = start - (start - floor) * pct;
    return Math.max(floor, Math.round(p));
  }, [t, durationSec, start, floor]);

  const progress = Math.min(1, t / durationSec);
  const dotLeft = (() => {
    if (typeof market !== 'number' || start === floor) return undefined;
    const rel = (start - market) / (start - floor);
    const pct = Math.max(0, Math.min(1, rel)) * 100;
    return `${pct}%`;
  })();

  return (
    <div className="w-full max-w-xl border rounded p-4">
      <div className="text-lg mb-2">Current price: <b>€ {price.toLocaleString('nl-NL')}</b></div>
      <div className="relative h-6 bg-gray-100 rounded">
        <div className="absolute left-0 top-0 h-6 bg-gray-300 rounded" style={{ width: `${progress * 100}%` }} />
        {dotLeft && (
          <div
            title={`Market € ${market!.toLocaleString('nl-NL')}`}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600"
            style={{ left: dotLeft }}
          />
        )}
      </div>
      <div className="text-xs mt-2">Stops at min € {floor.toLocaleString('nl-NL')}</div>
    </div>
  );
}

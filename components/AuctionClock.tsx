'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  startPrice: number;
  floorPrice: number;
  durationSec: number;
  startedAtMs: number;
  marketValue?: number | null;
  stopAtMarket?: boolean;
  marketStopThreshold?: number;
  currency?: string;
  onStopNearMarket?: (atPrice: number) => void;
};

export default function AuctionClock({
  startPrice, floorPrice, durationSec, startedAtMs,
  marketValue, stopAtMarket = true, marketStopThreshold = 200,
  currency = 'EUR', onStopNearMarket
}: Props) {
  const [now, setNow] = useState<number>(() => performance.now());
  const raf = useRef<number | null>(null);
  const anchor = useRef<number>(performance.now());
  const wall = useRef<number>(Date.now());
  useEffect(() => {
    const tick = () => {
      const elapsed = performance.now() - anchor.current;
      setNow(wall.current + elapsed);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);
  const elapsedSec = Math.max(0, (now - startedAtMs) / 1000);
  const progress = Math.max(0, Math.min(1, elapsedSec / durationSec));
  const currentPrice = Math.max(floorPrice, startPrice - (startPrice - floorPrice) * progress);
  const stoppedRef = useRef(false);
  useEffect(() => {
    if (stoppedRef.current) return;
    if (!stopAtMarket || !marketValue) return;
    const near = currentPrice <= marketValue + (marketStopThreshold ?? 0);
    const aboveFloor = currentPrice >= floorPrice;
    if (near && aboveFloor) {
      stoppedRef.current = true;
      onStopNearMarket?.(Math.round(currentPrice));
    }
  }, [currentPrice, floorPrice, marketValue, stopAtMarket, marketStopThreshold, onStopNearMarket]);
  const size = 280, cx = size/2, cy = size/2, r = size*0.42;
  const angle = useMemo(()=>2*Math.PI*(1-progress),[progress]);
  const hx = cx + r*Math.cos(angle - Math.PI/2);
  const hy = cy + r*Math.sin(angle - Math.PI/2);
  const marketAngle = useMemo(()=>{
    if (!marketValue) return null;
    const rel = 1 - ((startPrice - marketValue) / (startPrice - floorPrice));
    const p = Math.max(0, Math.min(1, rel));
    return 2*Math.PI*(1-p);
  }, [marketValue, startPrice, floorPrice]);
  const mx = marketAngle != null ? cx + r*Math.cos((marketAngle)-Math.PI/2) : 0;
  const my = marketAngle != null ? cy + r*Math.sin((marketAngle)-Math.PI/2) : 0;
  const fmt = (n:number)=> new Intl.NumberFormat('nl-NL', { style:'currency', currency }).format(Math.round(n));
  const rem = Math.max(0, durationSec - elapsedSec);
  const whole = Math.floor(rem); const mm = String(Math.floor(whole/60)).padStart(2,'0'); const ss = String(whole%60).padStart(2,'0');
  return (
    <div style={{display:'grid', justifyItems:'center', gap:12}}>
      <svg width={size} height={size}>
        <circle cx={cx} cy={cy} r={r} fill="white" stroke="#e5e7eb" strokeWidth="8" />
        {Array.from({length:60}).map((_,i)=>{
          const a=(i/60)*2*Math.PI;
          const ix=cx + (r-6)*Math.cos(a-Math.PI/2);
          const iy=cy + (r-6)*Math.sin(a-Math.PI/2);
          const ox=cx + (r)*Math.cos(a-Math.PI/2);
          const oy=cy + (r)*Math.sin(a-Math.PI/2);
          return <line key={i} x1={ix} y1={iy} x2={ox} y2={oy} stroke="#d1d5db" strokeWidth={i%5===0?3:1}/>;
        })}
        {marketAngle != null && <circle cx={mx} cy={my} r={6} fill="#2563eb" stroke="white" strokeWidth="2" />}
        <line x1={cx} y1={cy} x2={hx} y2={hy} stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={8} fill="#ef4444" />
      </svg>
      <div style={{fontSize:28, fontWeight:800}}>{fmt(currentPrice)}</div>
      <div style={{color:'#6b7280'}}>Tijd over: {mm}:{ss}</div>
      {marketValue != null && <div style={{fontSize:12, color:'#2563eb'}}>Marktwaardestip: {fmt(marketValue)}</div>}
    </div>
  );
}

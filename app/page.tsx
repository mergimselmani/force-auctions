'use client';
import React, { useEffect, useMemo, useState } from 'react';

function round2(n: number) { return Math.round(n * 100) / 100; }
function money(n: number) {
  const nearInt = Math.abs(n - Math.round(n)) < 0.001;
  return nearInt ? Math.round(n).toLocaleString() : n.toFixed(2);
}
function withVAT(n: number, rate = 0.21) { return round2(n * (1 + rate)); }
function durationStr(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}
type DropStrategy = (ctx: { elapsedSec: number; currentPrice: number; initialPrice: number }) => { step: number; intervalSec: number };
const defaultDropStrategy: DropStrategy = ({ elapsedSec, currentPrice }) => {
  if (elapsedSec < 20) return { step: 0.05, intervalSec: 2 };
  if (elapsedSec < 60) return { step: 1, intervalSec: 2 };
  if (elapsedSec < 120) return { step: 5, intervalSec: 1.5 };
  if (currentPrice > 120_000) return { step: 100, intervalSec: 1 };
  return { step: 50, intervalSec: 1 };
};
function useDutchAuctionState({ startAt, now, initialPrice, floorPrice, dropStrategy }:
  { startAt: number; now: number; initialPrice: number; floorPrice: number; dropStrategy: DropStrategy }) {
  return React.useMemo(() => {
    if (now < startAt) {
      return { phase: 'pre' as const, currentPrice: initialPrice, displayedPrice: initialPrice,
        secondsToStart: Math.ceil((startAt - now)/1000), secondsToEnd: 0, step: 0, nextIntervalSec: 0 };
    }
    const elapsedTotal = Math.max(0, (now - startAt) / 1000);
    let t = 0; let p = initialPrice; let lastDropAt = 0;
    while (p > floorPrice) {
      const { step, intervalSec } = dropStrategy({ elapsedSec: t, currentPrice: p, initialPrice });
      if (t + intervalSec > elapsedTotal) break;
      t += intervalSec; p = Math.max(floorPrice, round2(p - step)); lastDropAt = t;
    }
    const { step: nextStep, intervalSec: nextInterval } = dropStrategy({ elapsedSec: t, currentPrice: p, initialPrice });
    const since = Math.max(0, elapsedTotal - lastDropAt);
    const nextIn = Math.max(0.01, nextInterval - since);
    const progress = Math.min(1, since / Math.max(0.001, nextInterval));
    const displayed = round2(p + (1 - progress) * nextStep);
    let estT = 0, estP = p, estSim = t, guard = 0;
    while (estP > floorPrice && guard < 200000) {
      const { step, intervalSec } = dropStrategy({ elapsedSec: estSim, currentPrice: estP, initialPrice });
      estSim += intervalSec; estT += intervalSec; estP = Math.max(floorPrice, round2(estP - step));
      if (estT > 3600) break; guard++;
    }
    const ended = p === floorPrice && estT === 0;
    return { phase: ended ? 'ended' as const : 'live' as const, currentPrice: p, displayedPrice: displayed,
      secondsToStart: 0, secondsToEnd: Math.ceil(estT), step: nextStep, nextIntervalSec: nextIn };
  }, [now, startAt, initialPrice, floorPrice, dropStrategy]);
}
function Spotlight() {
  const [now, setNow] = useState(() => Date.now());
  const [claimed, setClaimed] = useState(false);
  const [locking, setLocking] = useState(false);
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(i); }, []);
  const startAt = useMemo(() => Date.now() + 4000, []);
  const initialPrice = 125_000;
  const floorPrice = 89_000;
  const state = useDutchAuctionState({ startAt, now, initialPrice, floorPrice, dropStrategy: defaultDropStrategy });
  return (
    <div className="card" style={{overflow:'hidden'}}>
      <div className="row row-2">
        <div>
          <div className="badge">{state.phase === 'pre' ? `Starts in ${durationStr(state.secondsToStart)}` :
            state.phase === 'live' ? `Ends in ${durationStr(state.secondsToEnd)}` : 'Ended'}</div>
          <h2 style={{margin:'8px 0'}}>Haas VF-2 CNC Mill (2018)</h2>
          <div style={{fontSize:12, color:'#6b7280'}}>Seller: <b>Wido Trading BV</b> · Trader · NL</div>
          <div className="card" style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontSize:12, color:'#6b7280', textTransform:'uppercase'}}>Current price (excl. VAT)</div>
              <div style={{fontSize:28, fontWeight:800}}>€{money(state.displayedPrice)}</div>
              <div style={{fontSize:12, color:'#6b7280'}}>Starting price €{money(initialPrice)}</div>
            </div>
            {state.phase === 'live' && (
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:12, color:'#6b7280'}}>Next drop (−€{money(state.step)}) in</div>
                <div style={{fontSize:16, fontWeight:700}}>{Math.ceil(state.nextIntervalSec)}s</div>
              </div>
            )}
          </div>
          <div className="card" style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center', background:'#f3f4f6'}}>
            <div style={{fontSize:14, color:'#374151'}}>Total incl. 21% VAT</div>
            <div style={{fontSize:20, fontWeight:800}}>€{money(withVAT(state.currentPrice))}</div>
          </div>
          <button className="btn" disabled={state.phase!=='live' || claimed || locking}
            onClick={async () => { setLocking(true); await new Promise(r=>setTimeout(r,800)); setClaimed(true); setLocking(false); }}>
            {claimed ? "Reserved" : locking ? "Reserving…" : `TAKE IT for €${money(withVAT(state.currentPrice))} incl. VAT`}
          </button>
          <div style={{fontSize:12, color:'#6b7280', marginTop:8}}>Escrow checkout. 6% seller commission.</div>
        </div>
        <img alt="Machine" src="https://images.unsplash.com/photo-1581091870622-2b4f7b1a87ae?q=80&w=1600&auto=format&fit=crop"
          style={{width:'100%', height:280, objectFit:'cover', borderRadius:12}}/>
      </div>
    </div>
  );
}
export default function Page() {
  return (
    <div>
      <div className="header">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div className="brand"><span className="force">FORCE</span> <span className="auctions">AUCTIONS</span></div>
        </div>
      </div>
      <main className="container" style={{paddingTop:24}}>
        <h1>Force Auctions</h1>
        <p>International Dutch Auction platform. Prices go down — not up.</p>
        <Spotlight />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Force Auctions BV · All rights reserved.</div>
      </footer>
    </div>
  );
}

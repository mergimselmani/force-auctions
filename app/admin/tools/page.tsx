'use client';
import React from 'react';

const Row = ({label, href}:{label:string; href:string}) => (
  <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <div>
      <div style={{fontWeight:700}}>{label}</div>
      <div style={{fontSize:12, color:'#6b7280'}}>{href}</div>
    </div>
    <a className="btn" href={href} target="_blank" rel="noreferrer">Open</a>
  </div>
);

export default function Tools() {
  return (
    <div>
      <h1>Platform Tools</h1>
      <div className="row" style={{marginTop:12}}>
        <Row label="API Health" href="/api/health" />
        <Row label="API Status" href="/api/status" />
        <Row label="Version" href="/api/version" />
        <Row label="Env sanity" href="/api/env-sanity" />
      </div>
    </div>
  );
}

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p style={{color:'#6b7280'}}>Beheer veilingen, listings, en systeemstatus.</p>
      <div className="row row-3" style={{marginTop:16}}>
        <div className="card"><b>Listings</b><div style={{color:'#6b7280'}}>Maak en beheer kavels</div></div>
        <div className="card"><b>Auctions</b><div style={{color:'#6b7280'}}>Plan Dutch Auctions</div></div>
        <div className="card"><b>Tools</b><div style={{color:'#6b7280'}}>Gezondheidschecks & logs</div></div>
      </div>
    </div>
  );
}

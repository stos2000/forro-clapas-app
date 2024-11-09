export default function Home() {
  return (
    <div style={{padding: '20px', backgroundColor: '#009c3b', color: 'white', margin: '20px'}}>
      <div style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#ffd700',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
      }}>
        <span style={{color: '#009c3b', fontWeight: 'bold'}}>FC</span>
      </div>
      <h1 style={{margin: '0'}}>Forró Clapas</h1>
      <p style={{color: '#ffd700', margin: '5px 0'}}>Association de Forró de Montpellier</p>
    </div>
  )
}

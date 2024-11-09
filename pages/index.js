export default function Home() {
  const Logo = () => (
    <svg width="50" height="50" viewBox="0 0 100 100" style={{
      marginRight: '10px'
    }}>
      <circle cx="50" cy="50" r="48" fill="#009c3b" />
      <circle cx="50" cy="50" r="44" fill="#ffd700" />
      <text 
        x="50" 
        y="65" 
        textAnchor="middle" 
        fill="#009c3b" 
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial"
      >
        FC
      </text>
    </svg>
  );

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '20px auto', 
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#009c3b',
        padding: '15px',
        borderRadius: '8px',
        color: 'white'
      }}>
        <Logo />
        <div>
          <h1 style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0'
          }}>Forró Clapas</h1>
          <p style={{
            color: '#ffd700',
            margin: '5px 0 0 0',
            fontSize: '14px'
          }}>Association de Forró de Montpellier</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 40%)
        `,
        pointerEvents: 'none'
      }} />

      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '250px',
        height: '250px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.05))',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'float 6s ease-in-out infinite reverse'
      }} />

      {/* Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 10,
        padding: '40px'
      }}>
        {/* Logo/Brand */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)'
        }}>
          <span style={{ fontSize: '2.5rem' }}>N</span>
        </div>

        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '15px',
          letterSpacing: '-0.02em'
        }}>
          Nadav Digital
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1.1rem',
          marginBottom: '50px'
        }}>
          Private Reports Portal
        </p>

        {/* Divider */}
        <div style={{
          width: '60px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)',
          margin: '0 auto 50px'
        }} />

        <p style={{
          color: 'rgba(255,255,255,0.35)',
          fontSize: '0.95rem',
          maxWidth: '400px',
          lineHeight: '1.7'
        }}>
          Access your personalized report using the direct link provided to you.
        </p>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: 0,
        right: 0,
        textAlign: 'center'
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: '0.8rem'
        }}>
          © 2025 Nadav Digital
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

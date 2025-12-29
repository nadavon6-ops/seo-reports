import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: 'white',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Nadav Digital Reports
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          fontSize: '1.2rem',
          marginBottom: '60px'
        }}>
          SEO Reports & Presentations
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {/* Manpower Schema Implementation - Featured */}
          <Link href="/manpower-schema.html" style={{
            background: 'linear-gradient(135deg, #00d4aa 0%, #00a8cc 100%)',
            borderRadius: '20px',
            padding: '40px',
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📋</div>
            <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px' }}>
              Manpower Schema Guide
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
              הנחיות להטמעת Schema | Next.js
            </p>
            <div style={{
              marginTop: '20px',
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 20px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '0.9rem'
            }}>
              צפה במדריך →
            </div>
          </Link>

          {/* ManpowerGroup Schema - HubSpot */}
          <Link href="/manpowergroup-schema-hubspot.html" style={{
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
            borderRadius: '20px',
            padding: '40px',
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔧</div>
            <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px' }}>
              ManpowerGroup Schema Guide
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
              הנחיות להטמעת Schema | HubSpot
            </p>
            <div style={{
              marginTop: '20px',
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 20px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '0.9rem'
            }}>
              NEW - צפה במדריך →
            </div>
          </Link>

          {/* Schema Presentation */}
          <Link href="/schema-presentation.html" style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '20px',
            padding: '40px',
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            gridColumn: 'span 2'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
            <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px' }}>
              Schema SEO + GEO Presentation
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
              מדריך מלא להטמעת Schema - 24 שקפים | Google SEO + AI Tools
            </p>
            <div style={{
              marginTop: '20px',
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 20px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '0.9rem'
            }}>
              צפה במצגת →
            </div>
          </Link>

          {/* Other Reports */}
          <Link href="/manpower_2025_comprehensive.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📈</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              Manpower 2025
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Comprehensive SEO Report
            </p>
          </Link>

          <Link href="/cardioteam_2025_annual_report.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>❤️</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              CardioTeam 2025
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Annual SEO Report
            </p>
          </Link>

          <Link href="/maromg_2025_comprehensive.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏢</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              MaromG 2025
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Comprehensive SEO Report
            </p>
          </Link>

          <Link href="/qilates-seo-analysis.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧘</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              Qilates SEO Analysis
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Technical SEO Report
            </p>
          </Link>

          <Link href="/bespirit-technical-seo.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✨</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              BeSpirit Technical SEO
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Technical Analysis
            </p>
          </Link>

          <Link href="/bespirit-doula-recommendation.html" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '30px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👶</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '8px' }}>
              BeSpirit Doula
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Recommendation Report
            </p>
          </Link>
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.4)',
          textAlign: 'center',
          marginTop: '60px',
          fontSize: '0.9rem'
        }}>
          © 2025 Nadav Digital | report.n-c.digital
        </p>
      </div>
    </div>
  )
}

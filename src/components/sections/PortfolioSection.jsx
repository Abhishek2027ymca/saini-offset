import React from 'react';
import { colors } from '../../assets/colors';
import { PORTFOLIO_ITEMS, BREAKPOINTS } from '../../assets/constants';

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.mobile);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile);
      setIsTablet(
        window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < 1024
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: isMobile ? '60px 20px' : '100px 40px',
        backgroundColor: colors.bgLight,
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <h2
          style={{
            fontSize: isMobile ? '28px' : '48px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: isMobile ? '40px' : '80px',
            color: colors.textPrimary
          }}
        >
          Our Work Gallery
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? '15px' : '25px',
            marginBottom: '50px'
          }}
        >
          {PORTFOLIO_ITEMS.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: colors.borderMedium,
                aspectRatio: '1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ fontSize: '48px' }}>🖼️</div>
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    margin: '0',
                    color: colors.textPrimary
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: colors.textSecondary,
                    margin: '5px 0 0 0'
                  }}
                >
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: colors.bgWhite,
            padding: isMobile ? '25px' : '40px',
            borderRadius: '12px',
            textAlign: 'center',
            border: `2px dashed ${colors.primary}`
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              color: colors.primary,
              fontWeight: '600',
              margin: 0
            }}
          >
            📸 Portfolio images coming soon. Contact us for samples!
          </p>
        </div>
      </div>
    </section>
  );
}
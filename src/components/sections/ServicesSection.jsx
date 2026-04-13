import React from 'react';
import { colors } from '../../assets/colors';
import { SERVICES, BREAKPOINTS } from '../../assets/constants';
import Card from '../common/Card';

export default function ServicesSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.tablet);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth >= BREAKPOINTS.tablet && window.innerWidth < 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
      setIsTablet(
        window.innerWidth >= BREAKPOINTS.tablet && window.innerWidth < 1024
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridCols = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  return (
    <section
      id="services"
      style={{
        padding: isMobile ? '60px 20px' : '100px 40px',
        backgroundColor: colors.bgLightGray,
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
          Our Services
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridCols(),
            gap: isMobile ? '20px' : '30px'
          }}
        >
          {SERVICES.map(service => (
            <Card key={service.id} hoverable>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '18px' : '22px',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: colors.textPrimary
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? '14px' : '15px',
                  color: colors.textSecondary,
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}
              >
                {service.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '14px',
                      color: colors.textSecondary,
                      padding: '8px 0',
                      borderBottom:
                        idx < service.items.length - 1
                          ? `1px solid ${colors.borderLight}`
                          : 'none'
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { colors } from '../../assets/colors';
import { SERVICES, BREAKPOINTS } from '../../assets/constants';
import Card from '../common/Card';

export default function ServicesSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.tablet);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth >= BREAKPOINTS.tablet && window.innerWidth < 1024
  );
  const [hoveredCard, setHoveredCard] = React.useState(null);

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
        background: `linear-gradient(180deg, #FFFFFF 0%, ${colors.bgLightGray} 100%)`,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: isMobile ? '60px 20px' : '120px 20px'
      }}
    >
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .service-card {
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '50px' : '100px' }}>
          <p
            style={{
              color: colors.primary,
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              margin: '0 0 15px 0'
            }}
          >
            What We Offer
          </p>
          
          <h2
            style={{
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: '800',
              color: colors.textPrimary,
              margin: '0 0 20px 0',
              letterSpacing: '-1px'
            }}
          >
            Our Services
          </h2>

          <p
            style={{
              fontSize: isMobile ? '15px' : '18px',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
          >
            Professional printing solutions tailored to your business needs
          </p>
        </div>

        {/* CARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridCols(),
            gap: isMobile ? '20px' : '30px'
          }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: colors.bgWhite,
                padding: isMobile ? '30px 20px' : '40px 30px',
                borderRadius: '16px',
                border: `2px solid ${colors.borderLight}`,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(220, 20, 60, 0.15)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.05)',
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* TOP ACCENT LINE */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
                  transform: hoveredCard === index ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s'
                }}
              />

              {/* ICON CONTAINER */}
              <div
                style={{
                  fontSize: isMobile ? '48px' : '56px',
                  marginBottom: '20px',
                  display: 'inline-block',
                  transition: 'transform 0.4s',
                  transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                }}
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3
                style={{
                  fontSize: isMobile ? '18px' : '22px',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: colors.textPrimary,
                  letterSpacing: '-0.5px'
                }}
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: isMobile ? '14px' : '15px',
                  color: colors.textSecondary,
                  marginBottom: '25px',
                  lineHeight: '1.7'
                }}
              >
                {service.description}
              </p>

              {/* DIVIDER */}
              <div
                style={{
                  height: '1px',
                  background: colors.borderLight,
                  margin: '20px 0'
                }}
              />

              {/* ITEMS LIST */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '14px',
                      color: colors.textSecondary,
                      padding: '10px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.3s',
                      transform: hoveredCard === index ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  >
                    <span
                      style={{
                        color: colors.primary,
                        fontWeight: '700',
                        fontSize: '16px'
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* HOVER BACKGROUND EFFECT */}
              <div
                style={{
                  position: 'absolute',
                  top: '-100%',
                  right: '-100%',
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transition: 'all 0.4s',
                  transform: hoveredCard === index ? 'translate(-50%, 50%)' : 'translate(0, 0)'
                }}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM ACCENT */}
        <div
          style={{
            marginTop: isMobile ? '60px' : '100px',
            padding: '40px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.primary}05 100%)`,
            border: `1px solid ${colors.primary}30`,
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              color: colors.textSecondary,
              margin: 0,
              lineHeight: '1.8'
            }}
          >
            <span style={{ color: colors.primary, fontWeight: '700' }}>✨ Custom Solutions</span>
            {' '}— Need something specific? We offer tailored printing solutions for your unique requirements
          </p>
        </div>
      </div>
    </section>
  );
}
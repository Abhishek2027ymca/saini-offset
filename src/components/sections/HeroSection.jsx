import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { colors } from '../../assets/colors';
import { COMPANY_INFO, CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import Button from '../common/Button';
// import bf from '../../../public/herobg.jpg';
import bf from '../../../public/backgr.jpg'

export default function HeroSection({ onScrollToSection }) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.tablet);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const primaryPhone = CONTACT_INFO.phones[0];
  const whatsappPhone = CONTACT_INFO.phones[0].number.replace(/\D/g, '');

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bf})`, // 🔥 BACKGROUND IMAGE
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: isMobile ? '60px 20px' : '80px 40px',
        minHeight: isMobile ? 'auto' : '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-content {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .hero-images {
          animation: fadeInRight 0.8s ease forwards;
          opacity: 0;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2C2C2C 0%, ${colors.primary} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* 🔥 FULL WIDTH STRIP */
        .ticker-wrapper {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          background: linear-gradient(90deg, #dc143c, #ff4d6d);
          overflow: hidden;
          margin-top: 40px;
        }

        .ticker {
          white-space: nowrap;
          overflow: hidden;
        }

        .ticker-content {
          display: inline-block;
          padding: 12px 0;
          padding-left: 100%;
          animation: ticker 50s linear infinite;
          font-weight: 600;
          color: white;
          gap: 50px;
          font-size: 14px;
          letter-spacing: 1px;
        }

        /* smooth infinite scroll */
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* 🔥 OVERLAY - Makes text readable over background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.80)', // White overlay with 80% opacity
          backdropFilter: 'blur(1px)',
          zIndex: 1
        }}
      />

      {/* DECORATIVE ELEMENTS */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1
        }}
      />

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', zIndex: 2 }}>
        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: isMobile ? '40px' : '60px',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          {/* LEFT CONTENT */}
          <div className="hero-content">
            {/* BADGE */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 16px',
                backgroundColor: `${colors.primary}15`,
                borderRadius: '25px',
                marginBottom: '25px',
                border: `1px solid ${colors.primary}30`
              }}
            >
              <span style={{ fontSize: '16px' }}>✨</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: colors.primary }}>
                Professional Printing Solutions
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1
              style={{
                fontSize: isMobile ? '36px' : '56px',
                fontWeight: '800',
                marginBottom: '20px',
                lineHeight: '1.15',
                letterSpacing: '-1.2px'
              }}
              className="gradient-text"
            >
              {COMPANY_INFO.name}
            </h1>

            {/* ACCENT LINE */}
            <div
              style={{
                height: '4px',
                width: '80px',
                background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
                margin: '25px 0',
                borderRadius: '2px'
              }}
            />

            {/* TAGLINE */}
            <p
              style={{
                fontSize: isMobile ? '20px' : '28px',
                color: colors.primary,
                fontWeight: '700',
                marginBottom: '25px',
                letterSpacing: '-0.5px'
              }}
            >
              {COMPANY_INFO.tagline}
            </p>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: isMobile ? '15px' : '17px',
                color: colors.textSecondary,
                lineHeight: '1.8',
                marginBottom: '40px',
                maxWidth: '500px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              {COMPANY_INFO.description}
            </p>

            {/* CTA BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: isMobile ? '10px' : '15px',
                flexWrap: 'wrap'
              }}
            >
              <Button
                variant="primary"
                onClick={() => (window.location.href = `tel:${primaryPhone.number}`)}
              >
                Book a Consultation
              </Button>

              <Button
                variant="secondary"
                onClick={() => onScrollToSection('contact')}
              >
                Explore Services
              </Button>
            </div>

            {/* STATS */}
            <div
              style={{
                display: 'flex',
                gap: isMobile ? '30px' : '50px',
                marginTop: '50px',
                paddingTop: '30px',
                borderTop: `1px solid ${colors.borderLight}`
              }}
            >
              <div>
                <p style={{ fontSize: '26px', fontWeight: '800', color: colors.primary, margin: 0 }}>
                  1000+
                </p>
                <p style={{ fontSize: '16px', color: colors.textSecondary, margin: '5px 0 0 0' }}>
                  Happy Clients
                </p>
              </div>
              <div>
                <p style={{ fontSize: '26px', fontWeight: '800', color: colors.primary, margin: 0 }}>
                  10+
                </p>
                <p style={{ fontSize: '16px', color: colors.textSecondary, margin: '5px 0 0 0' }}>
                  Years Experience
                </p>
              </div>
              <div>
                <p style={{ fontSize: '26px', fontWeight: '800', color: colors.primary, margin: 0 }}>
                  4
                </p>
                <p style={{ fontSize: '16px', color: colors.textSecondary, margin: '5px 0 0 0' }}>
                  Service Types
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGES */}
          <div
            className="hero-images"
            style={{
              position: 'relative',
              height: isMobile ? '400px' : '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* MAIN IMAGE PLACEHOLDER */}
            <div
              style={{
                position: 'absolute',
                width: isMobile ? '80%' : '100%',
                height: isMobile ? '80%' : '100%',
                backgroundColor: colors.bgWhite,
                borderRadius: '20px',
                border: `3px solid ${colors.borderLight}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                zIndex: 2
              }}
            >
              <img
                src="/images/image1.png"
                alt="SAINI Services"
                style={{
                  width: isMobile ? '80%' : '100%',
                  height: isMobile ? '80%' : '100%',
                  objectFit: 'contain',
                  opacity: 0.6
                }}
              />
            </div>

            {/* FLOATING CARD 1 */}
            <div
              style={{
                position: 'absolute',
                top: isMobile ? '-20px' : '-30px',
                right: isMobile ? '-20px' : '-40px',
                width: isMobile ? '120px' : '150px',
                height: isMobile ? '120px' : '150px',
                backgroundColor: colors.primary,
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 3,
                boxShadow: '0 10px 30px rgba(220, 20, 60, 0.3)',
                overflow: 'hidden',
                padding: '10px'
              }}
            >
              <img
                src="/images/herobg.jpg"
                alt="Quality Prints"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  opacity: 0.8
                }}
              />
            </div>

            {/* FLOATING CARD 2 */}
            <div
              style={{
                position: 'absolute',
                bottom: isMobile ? '-20px' : '-30px',
                left: isMobile ? '-20px' : '-40px',
                width: isMobile ? '120px' : '150px',
                height: isMobile ? '120px' : '150px',
                backgroundColor: colors.bgLight,
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.primary,
                zIndex: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: `2px solid ${colors.borderLight}`
              }}
            >
              <div style={{ fontSize: isMobile ? '32px' : '40px', marginBottom: '5px' }}>
                🚀
              </div>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '700',
                  textAlign: 'center',
                  margin: 0
                }}
              >
                Fast Delivery
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 FULL WIDTH SERVICES STRIP */}
        <div className="ticker-wrapper">
          <div className="ticker">
            <div
              className="ticker-content"
              style={{ fontSize: isMobile ? '12px' : '14px', gap: isMobile ? '30px' : '50px' }}
            >
              Offset Printing • Visiting Cards • Brochures • Catalogs • Bill Books •
              Screen Printing • Stickers • Labels • Packaging •
              Digital Printing • Posters • Flyers • Certificates • ID Cards •
              Stationery Supply • Notebooks • Files & Folders • Receipt Books •
              &nbsp;&nbsp;&nbsp;&nbsp;
              Offset Printing • Visiting Cards • Brochures • Catalogs • Bill Books •
              Screen Printing • Stickers • Labels • Packaging •
              Digital Printing • Posters • Flyers • Certificates • ID Cards •
              Stationery Supply • Notebooks • Files & Folders • Receipt Books •
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
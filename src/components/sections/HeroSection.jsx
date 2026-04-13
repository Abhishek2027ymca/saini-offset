import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { colors } from '../../assets/colors';
import { COMPANY_INFO, CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import Button from '../common/Button';

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
        background: `linear-gradient(135deg, ${colors.bgWhite} 0%, #F5F5F5 100%)`,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: isMobile ? '60px 20px' : '100px 20px',
        minHeight: isMobile ? 'auto' : '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      {/* CONTENT */}
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', zIndex: 1, position: 'relative' }}>
        
        {/* LOGO AT TOP */}
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/logo.png"
            alt="SAINI Logo"
            style={{
              height: isMobile ? '60px' : '80px',
              width: 'auto',
              objectFit: 'contain',
              animation: 'fadeInDown 0.8s ease'
            }}
          />
        </div>

        <style>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <h1
          style={{
            fontSize: isMobile ? '32px' : '64px',
            fontWeight: '800',
            marginBottom: '15px',
            color: colors.textPrimary,
            lineHeight: '1.15',
            letterSpacing: '-1.2px',
            animation: 'fadeInUp 0.8s ease 0.1s both'
          }}
        >
          {COMPANY_INFO.name}
        </h1>

        <div
          style={{
            height: '4px',
            width: '80px',
            background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
            margin: '25px auto',
            borderRadius: '2px',
            animation: 'fadeInUp 0.8s ease 0.2s both'
          }}
        />

        <p
          style={{
            fontSize: isMobile ? '20px' : '32px',
            color: colors.primary,
            fontWeight: '700',
            marginBottom: '30px',
            letterSpacing: '-0.5px',
            animation: 'fadeInUp 0.8s ease 0.3s both'
          }}
        >
          {COMPANY_INFO.tagline}
        </p>

        <p
          style={{
            fontSize: isMobile ? '15px' : '18px',
            color: colors.textSecondary,
            lineHeight: '1.8',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto',
            animation: 'fadeInUp 0.8s ease 0.4s both'
          }}
        >
          {COMPANY_INFO.description}
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: 'flex',
            gap: isMobile ? '10px' : '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.5s both'
          }}
        >
          <Button
            variant="primary"
            onClick={() => (window.location.href = `tel:${primaryPhone.number}`)}
          >
            Call Now
          </Button>

          <Button
            variant="whatsapp"
            onClick={() =>
              (window.location.href = `https://wa.me/${whatsappPhone}?text=Hi%20SAINI%20Offset%2C%20I%20need%20printing%20services`)
            }
          >
            WhatsApp
          </Button>

          <Button
            variant="secondary"
            onClick={() => onScrollToSection('contact')}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
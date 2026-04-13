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
        backgroundColor: colors.bgWhite,
        padding: isMobile ? '60px 20px' : '140px 40px',
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: isMobile ? '32px' : '64px',
            fontWeight: '800',
            marginBottom: '20px',
            color: colors.textPrimary,
            lineHeight: '1.15'
          }}
        >
          {COMPANY_INFO.name}
        </h1>

        <p
          style={{
            fontSize: isMobile ? '20px' : '32px',
            color: colors.primary,
            fontWeight: '700',
            marginBottom: '30px'
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
            margin: '0 auto 50px auto'
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
            flexWrap: 'wrap'
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
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { colors } from '../../assets/colors';
import { CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import ContactForm from '../forms/ContactForm';
import Button from '../common/Button';

export default function ContactSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.tablet);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const primaryPhone = CONTACT_INFO.phones[0];
  const whatsappPhone = primaryPhone.number.replace(/\D/g, '');

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? '60px 20px' : '100px 40px',
        backgroundColor: colors.bgWhite,
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
          Get In Touch
        </h2>

        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: isMobile ? '40px' : '80px',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          {/* CONTACT INFO */}
          <div>
            <h3
              style={{
                fontSize: isMobile ? '20px' : '24px',
                fontWeight: '700',
                marginBottom: '30px',
                color: colors.textPrimary
              }}
            >
              Contact Details
            </h3>

            {/* PHONES */}
            {CONTACT_INFO.phones.map(phone => (
              <div key={phone.type} style={{ marginBottom: '30px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}
                >
                  <Phone size={20} style={{ color: colors.primary }} />
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '700',
                      color: colors.textPrimary
                    }}
                  >
                    {phone.type === 'office' ? 'Office' : 'Mobile'}
                  </p>
                </div>
                <a
                  href={`tel:${phone.number}`}
                  style={{
                    fontSize: '16px',
                    color: colors.primary,
                    textDecoration: 'none',
                    marginLeft: '32px',
                    display: 'block',
                    fontWeight: '500'
                  }}
                >
                  {phone.display}
                </a>
              </div>
            ))}

            {/* EMAILS */}
            {CONTACT_INFO.emails.map(email => (
              <div key={email.type} style={{ marginBottom: '30px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}
                >
                  <Mail size={20} style={{ color: colors.primary }} />
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '700',
                      color: colors.textPrimary
                    }}
                  >
                    Email
                  </p>
                </div>
                <a
                  href={`mailto:${email.email}`}
                  style={{
                    fontSize: '16px',
                    color: colors.primary,
                    textDecoration: 'none',
                    marginLeft: '32px',
                    display: 'block',
                    fontWeight: '500'
                  }}
                >
                  {email.email}
                </a>
              </div>
            ))}

            {/* ADDRESS */}
            <div style={{ marginBottom: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '10px'
                }}
              >
                <MapPin size={20} style={{ color: colors.primary, marginTop: '2px' }} />
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '700',
                      color: colors.textPrimary
                    }}
                  >
                    Address
                  </p>
                  <p
                    style={{
                      margin: '10px 0 0 0',
                      fontSize: '16px',
                      color: colors.textSecondary,
                      lineHeight: '1.6'
                    }}
                  >
                    {CONTACT_INFO.address.line1}
                    <br />
                    {CONTACT_INFO.address.line2}
                    <br />
                    {CONTACT_INFO.address.line3}
                  </p>
                </div>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
            <Button
              variant="whatsapp"
              onClick={() =>
                (window.location.href = `https://wa.me/${whatsappPhone}?text=Hi%20SAINI%20Offset%2C%20I%20need%20printing%20services`)
              }
              fullWidth
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h3
              style={{
                fontSize: isMobile ? '20px' : '24px',
                fontWeight: '700',
                marginBottom: '30px',
                color: colors.textPrimary
              }}
            >
              Send us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
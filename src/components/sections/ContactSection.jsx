import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { colors } from '../../assets/colors';
import { CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import ContactForm from '../forms/ContactForm';
import Button from '../common/Button';

export default function ContactSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.tablet);
  const [focusedField, setFocusedField] = React.useState(null);

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
        background: `linear-gradient(180deg, #FFFFFF 0%, ${colors.bgLight} 100%)`,
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-left {
          animation: slideInLeft 0.6s ease forwards;
          opacity: 0;
        }

        .contact-right {
          animation: slideInRight 0.6s ease forwards;
          opacity: 0;
        }

        .contact-item {
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
        }

        .contact-item:nth-child(1) { animation-delay: 0.1s; }
        .contact-item:nth-child(2) { animation-delay: 0.2s; }
        .contact-item:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '50px' : '80px' }}>
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
            Contact Us
          </p>

          <h2
            style={{
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: '800',
              color: colors.textPrimary,
              margin: '0 0 30px 0',
              letterSpacing: '-1px'
            }}
          >
            Get In Touch
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
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* MAIN CONTENT - TWO COLUMNS */}
        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: isMobile ? '50px' : '80px',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="contact-left">
            <h3
              style={{
                fontSize: isMobile ? '20px' : '28px',
                fontWeight: '700',
                marginBottom: '40px',
                color: colors.textPrimary,
                letterSpacing: '-0.5px'
              }}
            >
              Contact Information
            </h3>

            {/* PHONE CARDS */}
            {CONTACT_INFO.phones.map((phone, idx) => (
              <div
                key={phone.type}
                className="contact-item"
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '30px',
                  padding: '25px',
                  backgroundColor: colors.bgWhite,
                  borderRadius: '16px',
                  border: `2px solid ${colors.borderLight}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    borderColor: colors.primary,
                    boxShadow: '0 10px 30px rgba(220, 20, 60, 0.1)'
                  }
                }}
                onClick={() => window.location.href = `tel:${phone.number}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 20, 60, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderLight;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: `${colors.primary}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={24} style={{ color: colors.primary }} />
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: '600',
                      color: colors.textSecondary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '5px'
                    }}
                  >
                    {phone.type === 'office' ? 'Office Phone' : 'Mobile'}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '18px',
                      fontWeight: '700',
                      color: colors.primary
                    }}
                  >
                    {phone.display}
                  </p>
                </div>
              </div>
            ))}

            {/* EMAIL CARDS */}
            {CONTACT_INFO.emails.map((email, idx) => (
              <div
                key={email.type}
                className="contact-item"
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '30px',
                  padding: '25px',
                  backgroundColor: colors.bgWhite,
                  borderRadius: '16px',
                  border: `2px solid ${colors.borderLight}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.location.href = `mailto:${email.email}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 20, 60, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderLight;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: `${colors.primary}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={24} style={{ color: colors.primary }} />
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: '600',
                      color: colors.textSecondary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '5px'
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '700',
                      color: colors.primary,
                      wordBreak: 'break-all'
                    }}
                  >
                    {email.email}
                  </p>
                </div>
              </div>
            ))}

            {/* ADDRESS CARD */}
            <div
              className="contact-item"
              style={{
                display: 'flex',
                gap: '20px',
                padding: '25px',
                backgroundColor: colors.bgWhite,
                borderRadius: '16px',
                border: `2px solid ${colors.borderLight}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 20, 60, 0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderLight;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: `${colors.primary}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin size={24} style={{ color: colors.primary }} />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '5px'
                  }}
                >
                  Address
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: '700',
                    color: colors.textPrimary,
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

            {/* WHATSAPP CTA */}
            <Button
              variant="whatsapp"
              onClick={() =>
                (window.location.href = `https://wa.me/${whatsappPhone}?text=Hi%20SAINI%20Offset%2C%20I%20need%20printing%20services`)
              }
              fullWidth
            >
              💬 Chat on WhatsApp
            </Button>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="contact-right">
            <h3
              style={{
                fontSize: isMobile ? '20px' : '28px',
                fontWeight: '700',
                marginBottom: '40px',
                color: colors.textPrimary,
                letterSpacing: '-0.5px'
              }}
            >
              Send us a Message
            </h3>

            <ContactForm />
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div
          style={{
            marginTop: isMobile ? '60px' : '100px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '30px',
            padding: '40px',
            backgroundColor: colors.bgWhite,
            borderRadius: '16px',
            border: `2px solid ${colors.borderLight}`
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '800',
                color: colors.primary,
                margin: '0 0 10px 0'
              }}
            >
              24/7
            </p>
            <p
              style={{
                fontSize: '15px',
                color: colors.textSecondary,
                margin: 0,
                fontWeight: '600'
              }}
            >
              Available for Inquiries
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '800',
                color: colors.primary,
                margin: '0 0 10px 0'
              }}
            >
              Quick Response
            </p>
            <p
              style={{
                fontSize: '15px',
                color: colors.textSecondary,
                margin: 0,
                fontWeight: '600'
              }}
            >
              Within 24 Hours
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '800',
                color: colors.primary,
                margin: '0 0 10px 0'
              }}
            >
              Multiple Channels
            </p>
            <p
              style={{
                fontSize: '15px',
                color: colors.textSecondary,
                margin: 0,
                fontWeight: '600'
              }}
            >
              Phone, Email & WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
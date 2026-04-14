import React from 'react';
import { CheckCircle } from 'lucide-react';
import { colors } from '../../assets/colors';
import { CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import Button from '../common/Button';
import bf from '../../../public/backgr.jpg';

export default function About() {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < BREAKPOINTS.tablet
  );

  React.useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const primaryPhone = CONTACT_INFO.phones[0].number;
  const whatsappPhone = primaryPhone.replace(/\D/g, '');

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: '📅' },
    { label: 'Skilled Team Members', value: '50+', icon: '👥' },
    { label: 'Happy Customers', value: '5000+', icon: '😊' },
    { label: 'Monthly Orders', value: '10000+', icon: '📦' }
  ];

  const whyChooseUs = [
    {
      title: 'Quality Excellence',
      description: 'We are committed to delivering the highest quality printing solutions. Every project is handled with precision and care.',
      icon: '⭐'
    },
    {
      title: 'Team Expertise',
      description: 'Our experienced team brings rich knowledge and dedication to every project. We work 24/7 to ensure timely delivery.',
      icon: '🎯'
    },
    {
      title: 'Local Service',
      description: 'Serving Jammu and Bari Brahmana with professional printing services. Local presence, global quality standards.',
      icon: '🏢'
    },
    {
      title: 'Customer First',
      description: 'We treat customers as family members. Your satisfaction is our 100% goal and we give our all for your smile.',
      icon: '💝'
    },
    {
      title: 'Competitive Pricing',
      description: 'Best prices without compromising quality. We offer stable and competitive rates for all our services.',
      icon: '💰'
    },
    {
      title: 'Fast Turnaround',
      description: 'Quick delivery without quality compromise. We understand your deadlines and deliver on time, every time.',
      icon: '⚡'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Latest printing technology and techniques',
      color: '#E74C3C'
    },
    {
      title: 'Reliability',
      description: 'Consistent quality and on-time delivery',
      color: '#3498DB'
    },
    {
      title: 'Integrity',
      description: 'Honest pricing and transparent communication',
      color: '#2ECC71'
    },
    {
      title: 'Excellence',
      description: 'Superior quality in every print',
      color: '#F39C12'
    }
  ];

  return (
    <div style={{ width: '100%' }}>
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

        .about-content {
          animation: slideInLeft 0.8s ease forwards;
          opacity: 0;
        }

        .about-images {
          animation: slideInRight 0.8s ease forwards;
          opacity: 0;
        }

        .stat-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }

        .why-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .why-card:nth-child(1) { animation-delay: 0.1s; }
        .why-card:nth-child(2) { animation-delay: 0.2s; }
        .why-card:nth-child(3) { animation-delay: 0.3s; }
        .why-card:nth-child(4) { animation-delay: 0.4s; }
        .why-card:nth-child(5) { animation-delay: 0.5s; }
        .why-card:nth-child(6) { animation-delay: 0.6s; }

        .value-box {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .value-box:nth-child(1) { animation-delay: 0.1s; }
        .value-box:nth-child(2) { animation-delay: 0.2s; }
        .value-box:nth-child(3) { animation-delay: 0.3s; }
        .value-box:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        style={{
          backgroundImage: `url(${bf})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          padding: isMobile ? '60px 20px' : '100px 40px',
          minHeight: isMobile ? 'auto' : '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* OVERLAY - Makes text readable over image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // White overlay with 85% opacity
            backdropFilter: 'blur(2px)', // Slight blur for better readability
            zIndex: 1
          }}
        />

        {/* DECORATIVE CIRCLES */}
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
            <div className="about-content">
              {/* BREADCRUMB */}
              <div style={{ marginBottom: '25px' }}>
                <span style={{ color: colors.primary, fontWeight: '600', fontSize: '14px' }}>
                  Home / About
                </span>
              </div>

              {/* MAIN HEADING */}
              <h1
                style={{
                  fontSize: isMobile ? '36px' : '56px',
                  fontWeight: '800',
                  marginBottom: '20px',
                  lineHeight: '1.15',
                  letterSpacing: '-1.2px',
                  color: colors.textPrimary
                }}
              >
                About <span style={{ color: colors.primary }}>SAINI</span>
              </h1>

              {/* ACCENT */}
              <div
                style={{
                  height: '4px',
                  width: '80px',
                  background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
                  margin: '25px 0',
                  borderRadius: '2px'
                }}
              />

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: isMobile ? '15px' : '17px',
                  color: colors.textSecondary,
                  lineHeight: '1.8',
                  marginBottom: '30px'
                }}
              >
                Pioneering quality, customization, and sustainability since establishment. SAINI Offset Printing Press empowers businesses to print better with professional printing solutions across multiple mediums and formats.
              </p>

              {/* KEY POINTS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={24} style={{ color: colors.primary, flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: colors.textPrimary }}>
                      Experience in Printing
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.textSecondary }}>
                      15+ years of professional printing expertise
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={24} style={{ color: colors.primary, flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: colors.textPrimary }}>
                      Commitment to Quality
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.textSecondary }}>
                      Every print meets our high-quality standards
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={24} style={{ color: colors.primary, flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: colors.textPrimary }}>
                      Local Service
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: colors.textSecondary }}>
                      Serving Jammu & Bari Brahmana with pride
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = `tel:${primaryPhone}`)}
                >
                  Call Us
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = `https://wa.me/${whatsappPhone}`)}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGES */}
            <div
              className="about-images"
              style={{
                position: 'relative',
                height: isMobile ? '400px' : '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* MAIN IMAGE */}
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
                  src="/images/logo.png"
                  alt="SAINI About"
                  style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                    opacity: 0.3
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
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(220, 20, 60, 0.3)',
                  textAlign: 'center',
                  padding: '15px'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '5px' }}>🏆</div>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    fontWeight: '700',
                    margin: 0
                  }}
                >
                  Quality <br /> First
                </p>
              </div>

              {/* FLOATING CARD 2 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '-20px' : '-30px',
                  left: isMobile ? '-20px' : '-40px',
                  width: isMobile ? '120px' : '150px',
                  height: isMobile ? '120px' : '150px',
                  backgroundColor: colors.bgWhite,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: `2px solid ${colors.borderLight}`,
                  textAlign: 'center',
                  padding: '15px'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '5px' }}>💪</div>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    fontWeight: '700',
                    margin: 0
                  }}
                >
                  Always <br /> Reliable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          background: `linear-gradient(180deg, #FFFFFF 0%, ${colors.bgLight} 100%)`,
          padding: isMobile ? '60px 20px' : '100px 40px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: isMobile ? '50px' : '80px',
              color: colors.textPrimary,
              letterSpacing: '-1px'
            }}
          >
            By The Numbers
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? '20px' : '30px'
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  backgroundColor: colors.bgWhite,
                  padding: isMobile ? '30px 20px' : '40px 30px',
                  borderRadius: '16px',
                  border: `2px solid ${colors.borderLight}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 20, 60, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderLight;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p style={{ fontSize: '40px', margin: '0 0 10px 0' }}>{stat.icon}</p>
                <p
                  style={{
                    fontSize: isMobile ? '28px' : '36px',
                    fontWeight: '800',
                    color: colors.primary,
                    margin: '0 0 10px 0'
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    margin: 0,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        style={{
          background: `linear-gradient(180deg, ${colors.bgLight} 0%, #FFFFFF 100%)`,
          padding: isMobile ? '60px 20px' : '100px 40px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
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
              Why Choose Us
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
              What Makes SAINI Different
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
              We're committed to delivering exceptional printing solutions with unmatched quality and service
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '20px' : '30px'
            }}
          >
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="why-card"
                style={{
                  backgroundColor: colors.bgWhite,
                  padding: isMobile ? '30px 20px' : '40px 30px',
                  borderRadius: '16px',
                  border: `2px solid ${colors.borderLight}`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 20, 60, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderLight;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* TOP ACCENT */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${colors.primary}, transparent)`
                  }}
                />

                <p style={{ fontSize: '40px', margin: '0 0 15px 0' }}>{item.icon}</p>
                <h3
                  style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: colors.textPrimary,
                    margin: '0 0 12px 0'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    margin: 0,
                    lineHeight: '1.6'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section
        style={{
          background: `linear-gradient(135deg, #FFFFFF 0%, ${colors.bgLight} 100%)`,
          padding: isMobile ? '60px 20px' : '100px 40px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: isMobile ? '50px' : '80px',
              color: colors.textPrimary,
              letterSpacing: '-1px'
            }}
          >
            Our Core Values
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? '15px' : '25px'
            }}
          >
            {values.map((value, idx) => (
              <div
                key={idx}
                className="value-box"
                style={{
                  padding: isMobile ? '25px 20px' : '35px 25px',
                  borderRadius: '16px',
                  border: `2px solid ${value.color}30`,
                  backgroundColor: `${value.color}10`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = value.color;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${value.color}30`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: value.color,
                    margin: '0 0 10px 0'
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: colors.textSecondary,
                    margin: 0
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}dd 100%)`,
          padding: isMobile ? '50px 20px' : '80px 40px',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              fontSize: isMobile ? '28px' : '42px',
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}
          >
            Ready to Work With Us?
          </h2>

          <p
            style={{
              fontSize: isMobile ? '15px' : '18px',
              marginBottom: '40px',
              lineHeight: '1.8',
              opacity: 0.9
            }}
          >
            Let's discuss your printing needs and find the perfect solution for your business
          </p>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="primary"
              onClick={() => (window.location.href = `tel:${primaryPhone}`)}
            >
              📞 Call Us Now
            </Button>
            <Button
              variant="secondary"
              onClick={() => (window.location.href = `https://wa.me/${whatsappPhone}`)}
            >
              💬 Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
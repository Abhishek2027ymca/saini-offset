import { useState } from 'react';
import React from 'react';
import { Menu, X } from 'lucide-react';
import { colors } from '../../assets/colors';
import { COMPANY_INFO, CONTACT_INFO, BREAKPOINTS } from '../../assets/constants';
import Button from '../common/Button';

export default function Navigation({ onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINTS.tablet);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['Home', 'Services', 'Portfolio', 'Contact'];
  const primaryPhone = CONTACT_INFO.phones[0].number;

  const handleNavClick = (item) => {
    onScrollToSection(item.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: colors.bgWhite,
        borderBottom: `2px solid ${colors.borderLight}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        width: '100%',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div style={{ padding: isMobile ? '0 20px' : '0 40px' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: isMobile ? '65px' : '80px',
            gap: '40px'
          }}
        >
          {/* LOGO SECTION */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              minWidth: 'fit-content'
            }}
            onClick={() => onScrollToSection('home')}
          >
            <img
              src="/images/logo.png"
              alt="SAINI Logo"
              style={{
                height: isMobile ? '40px' : '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div
              style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '800',
                color: colors.primary,
                letterSpacing: '-0.5px'
              }}
            >
              SAINI
            </div>
          </div>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flex: 1 }}>
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '15px',
                    color: colors.textPrimary,
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    paddingBottom: '4px',
                    borderBottom: '2px solid transparent',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.primary;
                    e.target.style.borderBottom = `2px solid ${colors.primary}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.textPrimary;
                    e.target.style.borderBottom = '2px solid transparent';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* CALL BUTTON - DESKTOP */}
          {!isMobile && (
            <Button
              variant="primary"
              onClick={() => (window.location.href = `tel:${primaryPhone}`)}
            >
               Call
            </Button>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: colors.textPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                transition: 'transform 0.3s'
              }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && isMobile && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingBottom: '20px',
              borderTop: `2px solid ${colors.borderLight}`,
              marginTop: '15px',
              animation: 'slideDown 0.3s ease'
            }}
          >
            <style>{`
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: colors.textPrimary,
                  fontWeight: '600',
                  textAlign: 'left',
                  padding: '12px 0',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                onMouseLeave={(e) => (e.target.style.color = colors.textPrimary)}
              >
                {item}
              </button>
            ))}
            <Button
              variant="primary"
              fullWidth
              onClick={() => (window.location.href = `tel:${primaryPhone}`)}
            >
              📞 Call Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
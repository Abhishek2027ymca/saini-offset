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
        borderBottom: `1px solid ${colors.borderLight}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        width: '100%'
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
            height: '70px'
          }}
        >
          <div
            style={{
              fontSize: '22px',
              fontWeight: '800',
              color: colors.primary,
              cursor: 'pointer'
            }}
            onClick={() => onScrollToSection('home')}
          >
            SAINI
          </div>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
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
                onClick={() => (window.location.href = `tel:${primaryPhone}`)}
              >
                Call
              </Button>
            </div>
          )}

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
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {mobileMenuOpen && isMobile && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              paddingBottom: '20px',
              borderTop: `1px solid ${colors.borderLight}`,
              marginTop: '15px'
            }}
          >
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
                  padding: '10px 0'
                }}
              >
                {item}
              </button>
            ))}
            <Button
              variant="primary"
              fullWidth
              onClick={() => (window.location.href = `tel:${primaryPhone}`)}
            >
              Call Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
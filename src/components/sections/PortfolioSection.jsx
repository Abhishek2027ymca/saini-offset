import React from 'react';
import { colors } from '../../assets/colors';
import { PORTFOLIO_ITEMS, BREAKPOINTS } from '../../assets/constants';

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < BREAKPOINTS.mobile);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < 1024
  );
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile);
      setIsTablet(
        window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < 1024
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  // Get unique categories
  const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .portfolio-item {
          animation: scaleIn 0.5s ease forwards;
          opacity: 0;
        }

        .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
        .portfolio-item:nth-child(2) { animation-delay: 0.2s; }
        .portfolio-item:nth-child(3) { animation-delay: 0.3s; }
        .portfolio-item:nth-child(4) { animation-delay: 0.4s; }
        .portfolio-item:nth-child(5) { animation-delay: 0.5s; }
        .portfolio-item:nth-child(6) { animation-delay: 0.6s; }
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
            Our Work
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
            Our Work Gallery
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
            Explore our collection of high-quality printing projects across various categories
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '15px',
            marginBottom: isMobile ? '40px' : '60px'
          }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: isMobile ? '10px 16px' : '12px 24px',
                border: `2px solid ${selectedCategory === category ? colors.primary : colors.borderLight}`,
                borderRadius: '25px',
                backgroundColor: selectedCategory === category ? colors.primary : 'transparent',
                color: selectedCategory === category ? 'white' : colors.textPrimary,
                fontWeight: '600',
                fontSize: isMobile ? '14px' : '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.borderColor = colors.primary;
                  e.target.style.color = colors.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.borderColor = colors.borderLight;
                  e.target.style.color = colors.textPrimary;
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? '15px' : '25px',
            marginBottom: '50px'
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-item"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* MAIN CARD */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  border: `2px solid ${colors.borderLight}`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredItem === item.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0)',
                  boxShadow: hoveredItem === item.id 
                    ? '0 25px 50px rgba(220, 20, 60, 0.2)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* BACKGROUND IMAGE (if exists) */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}

                {/* PLACEHOLDER OVERLAY - Shows when image is missing */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: colors.bgWhite,
                    display: item.image ? 'none' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '15px',
                    padding: '20px',
                    background: `linear-gradient(135deg, ${colors.primary}10 0%, transparent 100%)`
                  }}
                >
                  <div style={{ fontSize: isMobile ? '40px' : '56px' }}>🖼️</div>
                  <div style={{ textAlign: 'center' }}>
                    <h3
                      style={{
                        fontSize: isMobile ? '16px' : '18px',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        color: colors.textPrimary,
                        letterSpacing: '-0.3px'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: colors.primary,
                        fontWeight: '600',
                        margin: 0,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* DARK OVERLAY ON HOVER */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    opacity: hoveredItem === item.id ? 1 : 0,
                    transition: 'opacity 0.4s',
                    zIndex: 10
                  }}
                />

                {/* TEXT OVERLAY - Shows on image hover */}
                {item.image && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '25px',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                      color: 'white',
                      transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(10px)',
                      opacity: hoveredItem === item.id ? 1 : 0,
                      transition: 'all 0.4s',
                      zIndex: 20
                    }}
                  >
                    <h3
                      style={{
                        fontSize: isMobile ? '16px' : '18px',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        color: 'white'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: colors.primary,
                        fontWeight: '600',
                        margin: 0,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                )}

                {/* HOVER ARROW */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    opacity: hoveredItem === item.id ? 1 : 0,
                    transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0)',
                    transition: 'all 0.4s',
                    zIndex: 30
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredItems.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: colors.textSecondary
            }}
          >
            <p style={{ fontSize: '18px', margin: 0 }}>No items in this category yet</p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div
          style={{
            backgroundColor: colors.bgWhite,
            padding: isMobile ? '30px 20px' : '50px 40px',
            borderRadius: '16px',
            textAlign: 'center',
            border: `2px dashed ${colors.borderLight}`,
            background: `linear-gradient(135deg, ${colors.primary}5 0%, transparent 100%)`
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '15px' : '17px',
              color: colors.textPrimary,
              margin: '0 0 15px 0',
              fontWeight: '600'
            }}
          >
            📸 More Portfolio Items Coming Soon
          </p>

          <p
            style={{
              fontSize: isMobile ? '13px' : '15px',
              color: colors.textSecondary,
              margin: 0,
              lineHeight: '1.6'
            }}
          >
            We're continuously adding new samples to showcase our latest work. 
            <br />
            <span style={{ color: colors.primary, fontWeight: '600' }}>Contact us</span> to see our complete portfolio!
          </p>
        </div>
      </div>
    </section>
  );
}
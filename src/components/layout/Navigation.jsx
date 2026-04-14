import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { colors } from "../../assets/colors";
import { CONTACT_INFO, BREAKPOINTS } from "../../assets/constants";
import Button from "../common/Button";

export default function Navigation() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < BREAKPOINTS.tablet,
  );

  const [showDropdown, setShowDropdown] = useState(null); // 'services' or 'about'
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Hover delay handlers
  const handleMouseEnter = (dropdownName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(null);
    }, 200); // adjust delay here
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  const servicesDropdown = [
    {
      title: "Offset Printing",
      icon: "📄",
      items: ["Visiting Cards", "Brochures", "Catalogs", "Bill Books"],
    },
    {
      title: "Screen Printing",
      icon: "🏷️",
      items: ["Stickers", "Labels", "Packaging"],
    },
    {
      title: "Digital Printing",
      icon: "🖨️",
      items: ["Posters", "Flyers", "Certificates", "ID Cards"],
    },
    {
      title: "Stationery",
      icon: "📋",
      items: ["Notebooks", "Files & Folders", "Receipt Books"],
    },
  ];

  const aboutDropdown = [
    {
      title: "Our Story",
      icon: "📖",
      description: "Learn about SAINI's journey and mission",
    },
    {
      title: "Our Team",
      icon: "👥",
      description: "Meet our experienced team members",
    },
    {
      title: "Core Values",
      icon: "⭐",
      description: "Innovation, Quality, Integrity, Excellence",
    },
    {
      title: "Why Choose Us",
      icon: "🏆",
      description: "See what makes us different",
    },
  ];

  const primaryPhone = CONTACT_INFO.phones[0].number;

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        borderBottom: `2px solid ${colors.borderLight}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        width: "100%",
        backdropFilter: "blur(10px)",
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

        .dropdown-menu {
          animation: slideDown 0.3s ease;
        }
      `}</style>

      <div style={{ padding: isMobile ? "0 20px" : "0 40px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: isMobile ? "65px" : "80px",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: isMobile ? "40px" : "50px" }}
            />
            <div
              style={{
                fontSize: isMobile ? "18px" : "22px",
                fontWeight: "800",
                color: colors.primary,
              }}
            >
              SAINI
            </div>
          </div>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              {navItems.map((item) => {
                // SERVICES DROPDOWN
                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      style={{ position: "relative" }}
                      onMouseEnter={() => handleMouseEnter("services")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => navigate("/services")}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = colors.textPrimary;
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "15px",
                          fontWeight: "600",
                          color: colors.textPrimary,
                          transition: "color 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        Services
                        <ChevronDown
                          size={16}
                          style={{
                            transform:
                              showDropdown === "services"
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </button>

                      {/* SERVICES DROPDOWN */}
                      {showDropdown === "services" && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={() => handleMouseEnter("services")}
                          onMouseLeave={handleMouseLeave}
                          style={{
                            position: "absolute",
                            top: "45px",
                            left: 0,
                            background: colors.bgWhite,
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow:
                              "0 10px 30px rgba(220, 20, 60, 0.15)",
                            minWidth: "280px",
                            zIndex: 200,
                            border: `2px solid ${colors.borderLight}`,
                          }}
                        >
                          {servicesDropdown.map((section) => (
                            <div
                              key={section.title}
                              style={{
                                marginBottom: "15px",
                                paddingBottom: "15px",
                                borderBottom: `1px solid ${colors.borderLight}`,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                padding: "10px",
                                borderRadius: "8px",
                              }}
                              onClick={() => navigate("/services")}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  colors.bgLight;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "700",
                                  color: colors.primary,
                                  marginBottom: "8px",
                                  margin: "0 0 8px 0",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                <span style={{ fontSize: "16px" }}>
                                  {section.icon}
                                </span>
                                {section.title}
                              </p>

                              {section.items.map((sub) => (
                                <p
                                  key={sub}
                                  style={{
                                    margin: "5px 0",
                                    fontSize: "13px",
                                    color: colors.textSecondary,
                                    marginLeft: "24px",
                                  }}
                                >
                                  • {sub}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // ABOUT DROPDOWN
                if (item.name === "About") {
                  return (
                    <div
                      key={item.name}
                      style={{ position: "relative" }}
                      onMouseEnter={() => handleMouseEnter("about")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => navigate("/about")}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = colors.textPrimary;
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "15px",
                          fontWeight: "600",
                          color: colors.textPrimary,
                          transition: "color 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        About
                        <ChevronDown
                          size={16}
                          style={{
                            transform:
                              showDropdown === "about"
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </button>

                      {/* ABOUT DROPDOWN */}
                      {showDropdown === "about" && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={() => handleMouseEnter("about")}
                          onMouseLeave={handleMouseLeave}
                          style={{
                            position: "absolute",
                            top: "45px",
                            left: 0,
                            background: colors.bgWhite,
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow:
                              "0 10px 30px rgba(220, 20, 60, 0.15)",
                            minWidth: "300px",
                            zIndex: 200,
                            border: `2px solid ${colors.borderLight}`,
                          }}
                        >
                          {aboutDropdown.map((section) => (
                            <div
                              key={section.title}
                              style={{
                                marginBottom: "12px",
                                cursor: "pointer",
                                transition: "all 0.3s",
                                padding: "12px",
                                borderRadius: "8px",
                              }}
                              onClick={() => navigate("/about")}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  colors.bgLight;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "700",
                                  color: colors.primary,
                                  marginBottom: "5px",
                                  margin: "0 0 5px 0",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  fontSize: "14px",
                                }}
                              >
                                <span style={{ fontSize: "18px" }}>
                                  {section.icon}
                                </span>
                                {section.title}
                              </p>

                              <p
                                style={{
                                  margin: "0",
                                  fontSize: "12px",
                                  color: colors.textSecondary,
                                  marginLeft: "26px",
                                }}
                              >
                                {section.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // REGULAR MENU ITEMS
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = colors.textPrimary;
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: colors.textPrimary,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* CALL BUTTON */}
          {!isMobile && (
            <Button
              variant="primary"
              onClick={() => (window.location.href = `tel:${primaryPhone}`)}
            >
              📞 Call
            </Button>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: colors.textPrimary,
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
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "20px 0",
              borderTop: `2px solid ${colors.borderLight}`,
              marginTop: "15px",
            }}
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: colors.textPrimary,
                    width: "100%",
                  }}
                >
                  {item.name}
                </button>

                {/* MOBILE SERVICES DROPDOWN */}
                {item.name === "Services" && (
                  <div
                    style={{
                      marginTop: "10px",
                      marginLeft: "15px",
                      borderLeft: `2px solid ${colors.primary}`,
                      paddingLeft: "15px",
                    }}
                  >
                    {servicesDropdown.map((section) => (
                      <div key={section.title} style={{ marginBottom: "10px" }}>
                        <p
                          style={{
                            fontWeight: "700",
                            color: colors.primary,
                            fontSize: "13px",
                            margin: "0 0 5px 0",
                          }}
                        >
                          {section.icon} {section.title}
                        </p>
                        {section.items.map((sub) => (
                          <p
                            key={sub}
                            style={{
                              margin: "3px 0",
                              fontSize: "12px",
                              color: colors.textSecondary,
                            }}
                          >
                            • {sub}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* MOBILE ABOUT DROPDOWN */}
                {item.name === "About" && (
                  <div
                    style={{
                      marginTop: "10px",
                      marginLeft: "15px",
                      borderLeft: `2px solid ${colors.primary}`,
                      paddingLeft: "15px",
                    }}
                  >
                    {aboutDropdown.map((section) => (
                      <div key={section.title} style={{ marginBottom: "10px" }}>
                        <p
                          style={{
                            fontWeight: "700",
                            color: colors.primary,
                            fontSize: "13px",
                            margin: "0 0 3px 0",
                          }}
                        >
                          {section.icon} {section.title}
                        </p>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "12px",
                            color: colors.textSecondary,
                          }}
                        >
                          {section.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
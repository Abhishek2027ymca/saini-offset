// import ContactForm from '../components/forms/ContactForm';
// import Button from '../components/common/Button';
// // import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
// import { colors } from '../assets/colors';
// import { COMPANY_INFO, CONTACT_INFO } from '../assets/constants';
// import { Phone, Mail, MapPin } from 'lucide-react';

// export default function Home() {
//   return (
//     <>
//       {/* HEADER */}
//       <header
//         style={{
//           backgroundColor: colors.bgWhite,
//           padding: '20px',
//           borderBottom: `1px solid ${colors.borderLight}`,
//           position: 'sticky',
//           top: 0,
//           zIndex: 100
//         }}
//       >  
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h1 style={{ fontSize: '24px', color: colors.primary, margin: 0 }}>
//             SAINI Offset
//           </h1>
//         </div>
//       </header>

//       {/* MAIN CONTENT */}
//       <main
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '40px 20px',
//           minHeight: 'calc(100vh - 200px)',
//           backgroundColor: colors.bgLight
//         }}
//       >
//         {/* HERO SECTION */}
//         <section
//           style={{
//             backgroundColor: colors.bgWhite,
//             padding: '60px 40px',
//             borderRadius: '12px',
//             marginBottom: '40px',
//             textAlign: 'center'
//           }}
//         >
//           <h1
//             style={{
//               fontSize: '42px',
//               color: colors.textPrimary,
//               marginBottom: '15px'
//             }}
//           >
//             {COMPANY_INFO.name}
//           </h1>
//           <p
//             style={{
//               fontSize: '24px',
//               color: colors.primary,
//               fontWeight: '500',
//               marginBottom: '20px'
//             }}
//           >
//             {COMPANY_INFO.tagline}
//           </p>
//           <p
//             style={{
//               fontSize: '16px',
//               color: colors.textSecondary,
//               lineHeight: '1.6',
//               maxWidth: '600px',
//               margin: '0 auto 30px'
//             }}
//           >
//             {COMPANY_INFO.description}
//           </p>

//           {/* BUTTONS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '15px',
//               justifyContent: 'center',
//               flexWrap: 'wrap'
//             }}
//           >
//             <Button
//               variant="primary"
//               onClick={() => window.location.href = `tel:${CONTACT_INFO.phones[0].number}`}
//             >
//               📞 Call Now
//             </Button>
//             <Button
//               variant="whatsapp"
//               onClick={() => alert('WhatsApp button working!')}
//             >
//               💬 WhatsApp
//             </Button>
//             <Button
//               variant="secondary"
//               onClick={() => alert('Get Quote button working!')}
//             >
//               ✉️ Get Quote
//             </Button>
//           </div>
//         </section>

//         {/* CONTACT FORM SECTION */}
//         <section
//           style={{
//             backgroundColor: colors.bgWhite,
//             padding: '40px',
//             borderRadius: '12px',
//             maxWidth: '500px',
//             margin: '0 auto 40px auto'
//           }}
//         >
//           <h2
//             style={{
//               color: colors.textPrimary,
//               marginBottom: '30px',
//               fontSize: '28px',
//               textAlign: 'center'
//             }}
//           >
//             Contact Us
//           </h2>
//           <ContactForm />
//         </section>

//         {/* CONTACT INFO SECTION */}
//         <section
//           style={{
//             display: 'grid',
//             gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
//             gap: '20px',
//             marginBottom: '40px'
//           }}
//         >
//           {/* PHONE CARD */}
//           <div
//             style={{
//               backgroundColor: colors.bgWhite,
//               padding: '30px',
//               borderRadius: '12px',
//               border: `1px solid ${colors.borderLight}`
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '20px'
//               }}
//             >
//               <Phone size={24} style={{ color: colors.primary }} />
//               <h3 style={{ margin: 0, color: colors.textPrimary }}>Phone</h3>
//             </div>
//             {CONTACT_INFO.phones.map((phone) => (
//               <a
//                 key={phone.type}
//                 href={`tel:${phone.number}`}
//                 style={{
//                   display: 'block',
//                   color: colors.primary,
//                   textDecoration: 'none',
//                   marginBottom: '10px',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}
//               >
//                 {phone.display} ({phone.type})
//               </a>
//             ))}
//           </div>

//           {/* EMAIL CARD */}
//           <div
//             style={{
//               backgroundColor: colors.bgWhite,
//               padding: '30px',
//               borderRadius: '12px',
//               border: `1px solid ${colors.borderLight}`
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '20px'
//               }}
//             >
//               <Mail size={24} style={{ color: colors.primary }} />
//               <h3 style={{ margin: 0, color: colors.textPrimary }}>Email</h3>
//             </div>
//             {CONTACT_INFO.emails.map((email) => (
//               <a
//                 key={email.type}
//                 href={`mailto:${email.email}`}
//                 style={{
//                   display: 'block',
//                   color: colors.primary,
//                   textDecoration: 'none',
//                   marginBottom: '10px',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}
//               >
//                 {email.email}
//               </a>
//             ))}
//           </div>

//           {/* ADDRESS CARD */}
//           <div
//             style={{
//               backgroundColor: colors.bgWhite,
//               padding: '30px',
//               borderRadius: '12px',
//               border: `1px solid ${colors.borderLight}`,
//               gridColumn: window.innerWidth > 768 ? '1 / -1' : 'auto'
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '20px'
//               }}
//             >
//               <MapPin size={24} style={{ color: colors.primary }} />
//               <h3 style={{ margin: 0, color: colors.textPrimary }}>Address</h3>
//             </div>
//             <p
//               style={{
//                 color: colors.textSecondary,
//                 lineHeight: '1.8',
//                 margin: 0
//               }}
//             >
//               {CONTACT_INFO.address.line1}
//               <br />
//               {CONTACT_INFO.address.line2}
//               <br />
//               {CONTACT_INFO.address.line3}
//             </p>
//           </div>
//         </section>

//         {/* SUCCESS BOX */}
//         <div
//           style={{
//             backgroundColor: colors.primary,
//             color: 'white',
//             padding: '20px',
//             borderRadius: '12px',
//             textAlign: 'center',
//             marginBottom: '40px'
//           }}
//         >
//           <p style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>
//             ✅ All components are working!
//           </p>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer
//         style={{
//           backgroundColor: colors.footer,
//           color: 'white',
//           padding: '30px 20px',
//           textAlign: 'center'
//         }}
//       >
//         <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>
//           {COMPANY_INFO.name}
//         </p>
//         <p style={{ margin: 0, fontSize: '14px', color: '#BBBBBB' }}>
//           © {COMPANY_INFO.year} All rights reserved
//         </p>
//       </footer>

//       {/* FLOATING WHATSAPP */}
//       {/* <FloatingWhatsApp /> */}
//     </>
//   );
// }





// import { useState } from 'react';
// import Navigation from '../components/layout/Navigation';
// import ServicesSection from '../components/sections/ServicesSection';
// import { colors } from '../assets/colors';
// import { COMPANY_INFO } from '../assets/constants';

// export default function Home() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <Navigation onScrollToSection={scrollToSection} />
      
//       <main>
//         <section id="home" style={{
//           backgroundColor: colors.bgWhite,
//           padding: '100px 20px',
//           textAlign: 'center'
//         }}>
//           <div style={{ maxWidth: '900px', margin: '0 auto' }}>
//             <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px' }}>
//               {COMPANY_INFO.name}
//             </h1>
//             <p style={{ fontSize: '24px', color: colors.primary, fontWeight: '600' }}>
//               {COMPANY_INFO.tagline}
//             </p>
//           </div>
//         </section>

//         <ServicesSection />
//       </main>

//       <footer style={{
//         backgroundColor: colors.footer,
//         color: 'white',
//         padding: '30px 20px',
//         textAlign: 'center'
//       }}>
//         <p style={{ margin: 0 }}>© 2024 SAINI Offset</p>
//       </footer>
//     </>
//   );
// }

import { useState } from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
// import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}
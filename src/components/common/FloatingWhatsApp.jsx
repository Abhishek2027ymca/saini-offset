// import { MessageCircle } from 'lucide-react';
// import { colors } from '../../assets/colors';
// import { CONTACT_INFO } from '../../assets/constants';

// export default function FloatingWhatsApp() {
//   const whatsappUrl = `https://wa.me/${CONTACT_INFO.phones[0].number.replace(/\D/g, '')}?text=Hi%20SAINI%20Offset%2C%20I%20need%20printing%20services`;

//   return (
    
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         position: 'fixed',
//         bottom: '30px',
//         right: '30px',
//         width: '60px',
//         height: '60px',
//         backgroundColor: colors.whatsapp,
//         borderRadius: '50%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//         transition: 'all 0.3s',
//         zIndex: 50
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'scale(1.1)';
//         e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'scale(1)';
//         e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
//       }}
//     >
//       <MessageCircle size={30} color="white" />
//     </a>
//   );
// }
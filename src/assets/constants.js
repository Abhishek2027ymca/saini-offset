export const CONTACT_INFO = {
  person: 'Ram Paul',
  phones: [
    { type: 'mobile1', number: '+919419311049', display: '+91 9419311049' },
    { type: 'mobile2', number: '+917780905175', display: '+91 7780905175' },
    { type: 'office', number: '+919423293170', display: '01923-293170' }
  ],
  emails: [
    { type: 'primary', email: 'rptraders48@gmail.com' },
    { type: 'secondary', email: 'rpsaini1@yahoo.com' }
  ],
  address: {
    line1: 'Dogra Shopping Complex',
    line2: 'Industrial Chowk',
    line3: 'Bari Brahmana, Jammu'
  }
};

export const COMPANY_INFO = {
  name: 'SAINI Offset Printing Press',
  tagline: 'A Home of Quality Printing',
  description: 'Professional printing solutions for businesses, shops, and individuals in Bari Brahmana, Jammu. Quality offset, screen, and digital printing with stationery supplies.',
  year: new Date().getFullYear()
};

export const SERVICES = [
  {
    id: 1,
    title: 'Offset Printing',
    description: 'Professional bulk printing for business cards, brochures, catalogs, and more',
    icon: '📄',
    items: ['Business Cards', 'Letterheads', 'Brochures', 'Catalogs', 'Bill Books']
  },
  {
    id: 2,
    title: 'Screen Printing',
    description: 'High-quality printing for stickers, labels, and promotional items',
    icon: '🏷️',
    items: ['Stickers', 'Labels', 'Packaging', 'Promotional Items']
  },
  {
    id: 3,
    title: 'Digital Printing',
    description: 'Fast printing for small quantities with excellent quality',
    icon: '🖨️',
    items: ['Posters', 'Flyers', 'Certificates', 'ID Cards']
  },
  {
    id: 4,
    title: 'Stationery Supply',
    description: 'Complete office stationery and printed materials',
    icon: '📋',
    items: ['Office Stationery', 'Notebooks', 'Files & Folders', 'Receipt Books']
  }
];

export const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Business Cards', category: 'Offset Printing' },
  { id: 2, title: 'Brochures', category: 'Offset Printing' },
  { id: 3, title: 'Labels & Stickers', category: 'Screen Printing' },
  { id: 4, title: 'Posters', category: 'Digital Printing' },
  { id: 5, title: 'Packaging Prints', category: 'Screen Printing' },
  { id: 6, title: 'Certificates', category: 'Digital Printing' }
];

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1200
};
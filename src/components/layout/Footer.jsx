import { colors } from '../../assets/colors';
import { COMPANY_INFO } from '../../assets/constants';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.footer,
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
        marginTop: '0',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '800' }}>
          {COMPANY_INFO.name}
        </p>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#BBBBBB' }}>
          {COMPANY_INFO.tagline}
        </p>
        <p style={{ margin: 0, fontSize: '13px', color: '#999999' }}>
          © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
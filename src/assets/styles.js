import { colors } from './colors';

export const commonStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  
  section: {
    padding: '80px 20px'
  },
  
  heading: {
    h1: {
      fontSize: '48px',
      fontWeight: '600',
      marginBottom: '20px',
      color: colors.textPrimary
    },
    h2: {
      fontSize: '36px',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '60px',
      color: colors.textPrimary
    },
    h3: {
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '15px',
      color: colors.textPrimary
    }
  },
  
  button: {
    base: {
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      padding: '15px 30px',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    primary: {
      backgroundColor: colors.primary,
      color: 'white'
    },
    secondary: {
      backgroundColor: colors.bgLightGray,
      color: colors.textPrimary,
      border: `2px solid ${colors.primary}`
    }
  },
  
  input: {
    base: {
      width: '100%',
      padding: '12px',
      border: `1px solid ${colors.borderLight}`,
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s'
    }
  },
  
  card: {
    backgroundColor: colors.bgWhite,
    padding: '40px',
    borderRadius: '12px',
    border: `1px solid ${colors.borderLight}`,
    transition: 'all 0.3s'
  }
};
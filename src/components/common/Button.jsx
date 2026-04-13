import { colors } from '../../assets/colors';
import { commonStyles } from '../../assets/styles';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  fullWidth = false
}) {
  const isWhatsApp = variant === 'whatsapp';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  const getBackgroundColor = () => {
    if (isWhatsApp) return colors.whatsapp;
    if (isPrimary) return colors.primary;
    return colors.bgLightGray;
  };

  const getHoverColor = () => {
    if (isWhatsApp) return colors.whatsappHover;
    if (isPrimary) return colors.primaryHover;
    return colors.primary;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...commonStyles.button.base,
        ...(isSecondary && { border: `2px solid ${colors.primary}` }),
        backgroundColor: getBackgroundColor(),
        color: (isPrimary || isWhatsApp) ? 'white' : colors.textPrimary,
        width: fullWidth ? '100%' : 'auto'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = getHoverColor();
        if (isSecondary) e.target.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = getBackgroundColor();
        if (isSecondary) e.target.style.color = colors.textPrimary;
      }}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}
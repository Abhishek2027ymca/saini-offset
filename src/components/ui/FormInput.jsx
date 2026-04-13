import { colors } from '../../assets/colors';
import { commonStyles } from '../../assets/styles';

export default function FormInput({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = false,
  placeholder = '',
  rows = null
}) {
  const Component = rows ? 'textarea' : 'input';

  return (
    <div>
      <label
        style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '8px',
          color: colors.textPrimary
        }}
      >
        {label}
      </label>
      <Component
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        style={{
          ...commonStyles.input.base,
          resize: rows ? 'vertical' : 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = colors.primary}
        onBlur={(e) => e.target.style.borderColor = colors.borderLight}
      />
    </div>
  );
}
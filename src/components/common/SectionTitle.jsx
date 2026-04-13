import { colors } from '../../assets/colors';
import { commonStyles } from '../../assets/styles';

export default function SectionTitle({ children }) {
  return (
    <h2 style={commonStyles.heading.h2}>
      {children}
    </h2>
  );
}
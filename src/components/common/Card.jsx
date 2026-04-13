import { colors } from '../../assets/colors';
import { commonStyles } from '../../assets/styles';

export default function Card({ children, hoverable = false }) {
  const cardRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (hoverable && cardRef.current) {
      cardRef.current.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      cardRef.current.style.transform = 'translateY(-4px)';
    }
  };

  const handleMouseLeave = () => {
    if (hoverable && cardRef.current) {
      cardRef.current.style.boxShadow = 'none';
      cardRef.current.style.transform = 'translateY(0)';
    }
  };

  return (
    <div
      ref={cardRef}
      style={commonStyles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

import React from 'react';
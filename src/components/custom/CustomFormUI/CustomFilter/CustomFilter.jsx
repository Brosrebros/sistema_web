import React, { useState } from 'react';
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterGroupOptions,
} from './CustomFilter.styles';
import CustomLabel from '../CustomLabel/CustomLabel';
import arrowUp from '../../../../assets/img/icons/arrow-up.svg';
import arrowDown from '../../../../assets/img/icons/arrow-down.svg';

function CustomFilter({
  title,
  options = [],
  inputType = 'radio',
  name,
  onChange,
}) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleToggleVisibility = () => {
    if (isExpanded) {
      setVisibleCount(6); // Restaurar al estado inicial.
    } else {
      setVisibleCount(options.length); // Mostrar todos los elementos.
    }
    setIsExpanded(prev => !prev); // Alternar estado.
  };

  return (
    <FilterGroupContainer>
      <FilterGroupTitle>{title}</FilterGroupTitle>
      <FilterGroupOptions>
        {options.slice(0, visibleCount).map(option => (
          <CustomLabel key={option.value || option.label}>
            <input
              type={inputType}
              name={name}
              value={option.value}
              onChange={handleChange}
            />
            {option.label}
          </CustomLabel>
        ))}
      </FilterGroupOptions>
      {options.length > 6 && (
        <p
          style={{
            color: '#424242',
            fontSize: '1rem',
            fontWeight: 'normal',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '8px',
          }}
          onClick={handleToggleVisibility}
        >
          {isExpanded ? (
            <img
              src={arrowUp}
              alt="arrow-up"
              style={{ width: '20px', height: '20px' }}
            />
          ) : (
            <img
              src={arrowDown}
              alt="arrow-down"
              style={{ width: '20px', height: '20px' }}
            />
          )}
          {isExpanded ? 'Ver menos' : 'Ver todo'}
        </p>
      )}
    </FilterGroupContainer>
  );
}

export default CustomFilter;

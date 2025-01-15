import React, { useState } from 'react';
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterGroupOptions,
} from './CustomFilter.styles';
import CustomLabel from '../CustomLabel/CustomLabel';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

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
            color: 'black',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '8px',
          }}
          onClick={handleToggleVisibility}
        >
          {isExpanded ? 'Ver menos' : 'Ver todo'}
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      )}
    </FilterGroupContainer>
  );
}

export default CustomFilter;

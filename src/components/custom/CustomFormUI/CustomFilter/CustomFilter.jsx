import React, { useState } from 'react';
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterGroupOptions,
} from './CustomFilter.styles';
import CustomLabel from '../CustomLabel/CustomLabel';

function CustomFilter({ title, options, inputType, name, onChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = e => {
    setSelectedOption(e.target.value);
    onChange(e); // Llama a la función onChange pasada como prop
  };

  return (
    <FilterGroupContainer>
      <FilterGroupTitle>{title}</FilterGroupTitle>
      <FilterGroupOptions>
        {options.map(option => (
          <CustomLabel key={option.value}>
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
    </FilterGroupContainer>
  );
}

export default CustomFilter;

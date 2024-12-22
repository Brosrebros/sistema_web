import React from 'react';
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterGroupOptions,
} from './CustomFilter.styles';
import CustomLabel from '../CustomLabel/CustomLabel';

function CustomFilter({ title, options, inputType, name }) {
  return (
    <FilterGroupContainer>
      <FilterGroupTitle>{title}</FilterGroupTitle>
      <FilterGroupOptions>
        {options.map(option => (
          <CustomLabel key={option.value}>
            <input type={inputType} name={name} value={option.value} />
            {option.label}
          </CustomLabel>
        ))}
      </FilterGroupOptions>
    </FilterGroupContainer>
  );
}

export default CustomFilter;

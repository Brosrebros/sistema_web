import React, { useState } from 'react';
import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterGroupOptions,
} from './CustomFilter.styles';
import CustomLabel from '../CustomLabel/CustomLabel';
import { IoIosArrowDown } from 'react-icons/io';

function CustomFilter({ title, options = [], inputType = 'radio', name, onChange }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
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
      {options.length > visibleCount && (
        <p
          style={{ color: 'black', fontSize: '1rem', cursor: 'pointer' }}
          onClick={handleShowMore}
        >
          {options.length > visibleCount ? 'Ver más' : 'Ver menos'}{' '}
          <IoIosArrowDown />
        </p>
      )}
    </FilterGroupContainer>
  );
}

export default CustomFilter;
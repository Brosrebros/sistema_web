import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  CustomSelectContainer,
  CustomSelectStyled,
  CustomOption,
  CustomDropdown,
  CustomSelectWrapper,
  CustomHiddenInput,
} from './CustomSelect.styles';
import { IoIosArrowDown } from 'react-icons/io';

const CustomSelect = ({
  options,
  placeholder,
  name,
  value,
  onChange,
  background,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  const handleOptionSelect = selectedValue => {
    setSelectedValue(selectedValue);
    onChange({ target: { name, value: selectedValue } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel =
    options.find(option => option.value === selectedValue)?.label ||
    placeholder;

  return (
    <CustomSelectContainer background={background}>
      {children}

      <CustomSelectStyled ref={selectRef}>
        <CustomSelectWrapper onClick={toggleDropdown} background={background}>
          <span>{selectedLabel}</span>
          <IoIosArrowDown />
        </CustomSelectWrapper>

        {isOpen && (
          <CustomDropdown>
            <p>{placeholder}</p>
            {options.map(option => (
              <CustomOption
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
              >
                <span>{option.label}</span>
              </CustomOption>
            ))}
          </CustomDropdown>
        )}

        <CustomHiddenInput type="hidden" name={name} value={selectedValue} />
      </CustomSelectStyled>
    </CustomSelectContainer>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  background: PropTypes.string,
  children: PropTypes.node,
};

CustomSelect.defaultProps = {
  placeholder: 'Select an option',
  value: '',
  background: 'white',
  children: null,
};

export default CustomSelect;

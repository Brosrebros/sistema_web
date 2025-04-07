import React, { useState, useEffect, useRef } from 'react';
import {
  CustomSelectContainer,
  CustomSelectStyled,
  CustomOption,
  CustomDropdown,
  CustomSelectWrapper,
  CustomHiddenInput,
  DropdownContainer,
} from './CustomSelect.styles';
import arrowVector from "assets/img/icons/arrow-down.svg"

const CustomSelect = ({
  options,
  placeholder,
  name,
  value,
  onChange,
  background,
  children,
  size,
  id
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
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        !event.target.closest('.dropdown-container')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel =
    selectedValue === ''
      ? placeholder
      : options.find(option => option.value === selectedValue)?.label;

  return (
    <CustomSelectContainer background={background} size={size} id={id}>
      {children}

      <CustomSelectStyled ref={selectRef}>
        <CustomSelectWrapper onClick={toggleDropdown} background={background}>
          <span>{selectedLabel}</span>
          <img src={arrowVector} alt="arrow" />
        </CustomSelectWrapper>
        <CustomHiddenInput type="hidden" name={name} value={selectedValue} />
      </CustomSelectStyled>
      {isOpen && (
        <DropdownContainer className="dropdown-container">
          <CustomDropdown>
            <label>{placeholder}</label>
            {options.map(option => (
              <CustomOption
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
              >
                <span background={background}>{option.label}</span>
              </CustomOption>
            ))}
          </CustomDropdown>
        </DropdownContainer>
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelect;

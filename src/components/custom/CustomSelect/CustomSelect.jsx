import React, { useState, useEffect, useRef } from 'react';
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
  size,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    value || options[0]?.value || ''
  );
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
        !event.target.closest('.custom-dropdown') // Evita cerrar si el clic es en el dropdown
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
    options.find(option => option.value === selectedValue)?.label ||
    placeholder;

  return (
    <CustomSelectContainer background={background} size={size}>
      {children}

      <CustomSelectStyled ref={selectRef}>
        <CustomSelectWrapper onClick={toggleDropdown} background={background}>
          <span>{selectedLabel}</span>
          <IoIosArrowDown background={background} />
        </CustomSelectWrapper>
        <CustomHiddenInput type="hidden" name={name} value={selectedValue} />
      </CustomSelectStyled>
      {isOpen && (
        <CustomDropdown className="custom-dropdown">
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
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelect;

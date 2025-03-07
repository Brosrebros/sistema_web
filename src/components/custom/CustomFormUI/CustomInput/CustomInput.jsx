import React, { useState } from 'react';
import { CustomInputContainer, Input } from './CustomInputstyles';
import eyeIcon from '../../../../assets/img/icons/eye.svg';
import visaIcon from '../../../../assets/img/icons/Payment Icons.svg';
import masterIcon from '../../../../assets/img/icons/Payment Icons-1.svg';
function CustomInput({
  placeholder,
  icon,
  type = 'text',
  card,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <CustomInputContainer>
      {type === 'password-hidden' ? null : (
        <>
          {icon && <img src={icon} alt="icon" />}
          <Input
            placeholder={placeholder}
            type={inputType}
            value={value}
            onChange={onChange}
            size={icon}
          />
        </>
      )}
      {type === 'password-hidden' ? (
        <Input placeholder={placeholder} type="password" />
      ) : (
        type === 'password' && (
          <img
            src={eyeIcon}
            alt="toggle password visibility"
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={handleShowPassword}
          />
        )
      )}
      {card ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginLeft: 'auto',
            position: 'absolute',
            right: '12px',
          }}
        >
          <img
            src={visaIcon}
            alt="visa"
            style={{ width: '20px', height: '20px' }}
          />
          <img
            src={masterIcon}
            alt="visa"
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      ) : null}
    </CustomInputContainer>
  );
}

export default CustomInput;

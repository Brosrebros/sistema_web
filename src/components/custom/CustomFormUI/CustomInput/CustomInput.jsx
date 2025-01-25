import React, { useState } from 'react';
import { CustomInputContainer, Input } from './CustomInputstyles';
import eyeIcon from '../../../../assets/img/icons/eye.svg';

function CustomInput({ placeholder, icon, type = 'text' }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <CustomInputContainer>
      {icon && <img src={icon} alt="icon" />}
      {type === 'password-hidden' ? null : (
        <Input placeholder={placeholder} type={inputType} />
      )}

      {type === 'password-hidden' ? (
        <Input placeholder={placeholder} type="password" />
      ) : (
        (type === type) === 'password' && (
          <img
            src={eyeIcon}
            alt="toggle password visibility"
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={handleShowPassword}
          />
        )
      )}
    </CustomInputContainer>
  );
}

export default CustomInput;

import React from 'react';
import {
  CustomSupportBannerStyled,
  CustomSupportBannerTitle,
} from './CustomSupportBanner.styles';
import PageLogo from '../../../assets/img/icons/logodelapagina_blanco.svg';
import CustomSelect from '../CustomSelect/CustomSelect';

function CustomSupportBanner() {

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const handleSelectChange = event => {
    console.log('Selected value:', event.target.value);
  };
  return (
    <CustomSupportBannerStyled>
      <CustomSupportBannerTitle>
        <img src={PageLogo} alt="logo" />
        <h2>Soporte</h2>
        <CustomSelect
          options={options}
          name="support-options"
          placeholder="Choose an option"
          onChange={handleSelectChange}
        />
      </CustomSupportBannerTitle>
    </CustomSupportBannerStyled>
  );
}

export default CustomSupportBanner;

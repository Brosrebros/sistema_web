import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomSupportBanner from 'components/custom/CustomSupportBanner/CustomSupportBanner';

const SupportLayout = () => {
  return (
    <div>
      <CustomSupportBanner />
      <Outlet />
    </div>
  );
};

export default SupportLayout;

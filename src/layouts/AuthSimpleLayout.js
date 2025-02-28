import React from 'react';
import Section from 'components/common/Section';
import { Outlet } from 'react-router-dom';

const AuthSimpleLayout = () => {
  return (
    <Section className="py-0">
      <Outlet />
    </Section>
  );
};

export default AuthSimpleLayout;

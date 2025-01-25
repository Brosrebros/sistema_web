import React from 'react';
import {
  StandaloneLayoutStyled,
  StandaloneContainer,
  StandaloneNavigate,
} from './StandaloneLayout.styles';
import Footer from 'components/footer/Footer';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import arrowIcon from '../../../assets/img/icons/arrow-left.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';

function StandaloneLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar type="auth" />
      <StandaloneLayoutStyled>
        <StandaloneContainer>
          <StandaloneNavigate>
            <SecondaryCustomButton
              onClick={() => {
                navigate(`/`);
              }}
            >
              <img src={arrowIcon} alt="arrow" />
            </SecondaryCustomButton>
          </StandaloneNavigate>
          <Outlet />
        </StandaloneContainer>
        <Footer type="secondary" />
      </StandaloneLayoutStyled>
    </>
  );
}

export default StandaloneLayout;

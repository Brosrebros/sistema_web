import React from 'react';
import {
  StandaloneLayoutStyled,
  StandaloneContainer,
  StandaloneNavigate,
} from './StandaloneLayout.styles';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import arrowIcon from '../../../assets/img/icons/arrow-left.svg';
import { Outlet, useNavigate } from 'react-router-dom';

function StandaloneLayout() {
  const navigate = useNavigate();

  return (
    <>
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
      </StandaloneLayoutStyled>
    </>
  );
}

export default StandaloneLayout;

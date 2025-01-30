import React, { useState } from 'react';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import styled from 'styled-components';
import checkIcon from '../assets/img/icons/ph_seal-check-fill.svg';
import clockIcon from '../assets/img/icons/clock.svg';
import CustomBadge from 'components/custom/CustomBadge/CustomBadge';
import heartIcon from '../assets/img/icons/heart.svg';
import heartBoldIcon from '../assets/img/icons/heart-bold.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import smsIcon from '../assets/img/icons/sms.svg';
import moreIcon from '../assets/img/icons/more.svg';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

const SellerProfileContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  & > div:first-child {
    grid-column: span 2;
  }
`;

const ProfileDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

  & > div:first-child {
    width: 100%;
    height: 80px;
    background-color: #dbdbdb;
  }
`

const MainDataContainer = styled.div`
  width: 100%;
  max-height: 129px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #ffffff;

  & > div:first-child {
    display: grid;
    grid-template-columns: 140px auto;
    gap: 20px;

    & > img:first-child {
      width: 140px;
      height: 140px;
      position: relative;
      bottom: 37px;
      background-color: #dbdbdb;
      border-radius: 140px;
      border: 5px solid #ffffff;
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12px;

      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        font-weight: 700;
        font-size: 1.44rem;
        color: black;
        margin: 0px;

        img {
          height: 17px;
          width: 17px;
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        p {
          font-weight: normal;
          font-size: 1rem;
          color: #424242;
          margin: 0px;

          b {
            font-weight: bold;
          }
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;

          p {
            font-weight: normal;
            font-size: 1rem;
            color: #424242;
            margin: 0px;

            b {
              font-weight: bold;
            }
          }

          img {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: auto;
  }
`;

const HeartButton = styled.button`
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 40px;
  border: none;
  outline: none;
  color: #940000;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

const SellerProfilepage = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  return (
    <CustomPageLayout>
      <SellerProfileContainer>
        <ProfileDataContainer>
          <div></div>
          <MainDataContainer>
            <div>
              <img src="#" />
              <div>
                <h3>
                  Inmobiliaria Los Robles <img src={checkIcon} />
                </h3>
                <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
                <div>
                  <p>
                    <b>12</b> anuncios
                  </p>
                  <span>
                    <p>
                      Anuncia <b>desde 2024</b>
                    </p>
                    <img src={clockIcon} />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <HeartButton onClick={handleFavourite}>
                {isFavourite ? (
                  <img src={heartIcon} alt="heart" />
                ) : (
                  <img src={heartBoldIcon} alt="heart" />
                )}
              </HeartButton>
              <PrimaryCustomButton>
                <img src={smsIcon} alt="sms" />
                Contactar
              </PrimaryCustomButton>
              <SecondaryCustomButton>
                <img src={moreIcon} alt="more" />
              </SecondaryCustomButton>
            </div>
          </MainDataContainer>
        </ProfileDataContainer>
      </SellerProfileContainer>
    </CustomPageLayout>
  );
};

export default SellerProfilepage;

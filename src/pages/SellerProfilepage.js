import React, { useState } from 'react';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import styled from 'styled-components';
import checkIcon from '../assets/img/icons/ph_seal-check-fill.svg';
import clockIcon from '../assets/img/icons/clock.svg';
import CustomBadge from 'components/custom/CustomBadge/CustomBadge';
import likeIcon from '../assets/img/icons/like.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import callIcon from '../assets/img/icons/call.svg';
import moreIcon from '../assets/img/icons/more.svg';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import placeholderIcon from 'assets/img/Main-Icon.jpg';
import star from 'assets/img/icons/star.svg';
import starOutline from 'assets/img/icons/star-outline.svg';
import medalIcon from 'assets/img/icons/medal.svg';
import userIcon from 'assets/img/icons/User-45.svg';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import pinIcon from 'assets/img/icons/location.svg';
import { useModal } from 'modalContext';
import addIcon from 'assets/img/icons/archive-add.svg';
import PropertySlider from 'components/property/PropertySlider';
import { usePropertyContext } from 'providers/PropertyProvider';
import { useMenu } from 'menuContext';
import { useNavigate } from 'react-router-dom';
import arrowLeft from 'assets/img/icons/arrow-left.svg';
import Footer from 'components/footer/Footer';
import CustomFooter from 'components/custom/CustomFooter/CustomFooter';

const SellerProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    #mobile {
      display: flex;
    }

    #desktop {
      display: none;
    }

    gap: 20px;

    & > div:last-child {
      background-color:rgb(255, 255, 255);
      margin-top: -20px;
      padding: 20px;
    }
  }
`;

const SectionOne = styled.div`
  display: grid;
  grid-template-columns: 2.04fr 1fr;
  gap: 24px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const SectionTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1200px) {
    gap: 20px;
    grid-template-columns: 1fr;
    padding: 0px 20px;
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
    height: 213px;
    background-color: #dbdbdb;

    @media (max-width: 1200px) {
      height: 123px;
      border-radius: 12px;
    }
  }

  @media (max-width: 1200px) {
    padding: 20px 20px 0px 20px;
  }
`;

const MainDataContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 24px;

  & > div:first-child {
    display: grid;
    grid-template-columns: 166px auto;

    & > img:first-child {
      width: 166px;
      height: 166px;
      position: relative;
      bottom: calc(79px + 24px);
      background-color: #dbdbdb;
      border-radius: 140px;
      border: 5px solid #ffffff;

      @media (max-width: 1200px) {
        position: absolute;
        height: 140px;
        width: 140px;
        top: -62px;
        left: calc(50% - 70px);
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 24px;
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

        @media (max-width: 1200px) {
          font-size: 1.12rem;
        }
      }

      & > div:nth-child(2) {
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

          @media (max-width: 1200px) {
            font-size: 0.81rem;
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

            @media (max-width: 1200px) {
              font-size: 0.81rem;
            }

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

      @media (max-width: 1200px) {
        padding: 0px;
        align-items: center;
        margin-top: 90px;

        & > div:nth-child(2) {
          order: 3;
        }
      }
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      @media (max-width: 1200px) {
        display: none;
      }
    }

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      position: relative;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    & > button:first-child {
      color: #940000;
    }

    @media (max-width: 1200px) {
      width: 100%;

      & > button:nth-child(3) {
        width: 100%;
      }
    }
  }

  & > div:last-child {
    @media (max-width: 1200px) {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0px;
  }
`;

const CustomButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border-radius: 12px;
  position: relative;
  margin-bottom: 4px;
  height: 48px;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 70%;

  &:hover {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#f2f2f2'};
  }

  &:active {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#e4e4e4'};
  }

  ${({ activeSection }) =>
    activeSection &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Asegura que la línea esté justo debajo */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #940000;
      border-radius: 10px;
    }
  `}

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const Presentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 16px;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  & > div:last-child {
    width: 100%;
    height: 403px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;

    div {
      background-color: #c3c3c3;
      border-radius: 12px;
    }

    & > div:nth-child(1) {
      grid-area: 1 / 1 / 4 / 4;

      @media (max-width: 1200px) {
        grid-area: 1 / 1 / 4 / 4;
      }
    }

    & > div:nth-child(2) {
      grid-area: 1 / 4 / 3 / 6;

      @media (max-width: 1200px) {
        grid-area: 4 / 1 / 6 / 3;
      }
    }

    & > div:nth-child(3) {
      grid-area: 3 / 4 / 4 / 5;

      @media (max-width: 1200px) {
        grid-area: 4 / 3 / 5 / 4;
      }
    }

    & > div:nth-child(4) {
      grid-area: 3 / 5 / 4 / 6;

      @media (max-width: 1200px) {
        grid-area: 5 / 3 / 6 / 4;
      }
    }

    @media (max-width: 1200px) {
      height: 355px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
    }
  }

  @media (max-width: 1200px) {
    padding: 0px 20px;
    gap: 20px;
  }
`;

const Certifications = styled.div`
  width: 100%;
  max-height: 582px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 16px;
    color: black;
    margin: 0px;

    b {
      color: #717171;
    }

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 12px;

    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f2f2f2;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c3c3c3;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(204, 204, 204);
    }

    &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
      background: transparent;
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  & > div:last-child > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0px 20px;
    gap: 20px;
  }
`;

const Certificate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > img {
    width: 174px;
    height: 179px;
    background-color: #ffffff;
    border-radius: 12px;

    @media (max-width: 1200px) {
      width: 141px;
      height: 137px;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 116%;
      color: black;
      margin: 0px;
      height: 36px;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
        height: 31px;
      }
    }

    p {
      height: 55px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;
      display: flex;
      align-items: center;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
        align-items: flex-start;
      }
    }

    & > button:last-child {
      width: 100%;
    }

    @media (max-width: 1200px) {
      justify-content: flex-start;
      gap: 16px;
    }
  }

  @media (max-width: 1200px) {
    padding: 12px;
    gap: 20px;

    & > button:last-child {
      grid-column: span 2;
    }
  }
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 16px;
    color: black;
    margin: 0px;

    b {
      color: #717171;
    }

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
      height: 11px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;

      b {
        font-weight: 900;
        font-size: 1rem;
        line-height: 137%;
        color: #424242;

        @media (max-width: 1200px) {
          font-size: 0.81rem;
        }
      }

      @media (max-width: 1200px) {
        font-size: 0.81rem;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 20px;
    gap: 20px;
    background-color: #f2f2f2;
  }
`;

const Reviews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 16px;
    color: black;
    margin: 0px;

    b {
      color: #717171;
    }

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 32px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
    }

    & > div:first-child {
      & > div:first-child {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;

        @media (max-width: 1200px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 20px;
          grid-row-gap: 0px;

          & > div:first-child {
            grid-area: 1 / 1 / 4 / 2;
          }

          & > div:nth-child(2) {
            grid-area: 1 / 2 / 2 / 4;
          }

          & > div:nth-child(3) {
            grid-area: 2 / 2 / 3 / 4;
          }

          & > div:nth-child(4) {
            grid-area: 3 / 2 / 4 / 4;
          }

          & > div:nth-child(5) {
            grid-area: 4 / 2 / 5 / 4;
          }

          & > div:nth-child(6) {
            grid-area: 5 / 2 / 6 / 4;
          }
        }
      }

      & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 22px;

        h4 {
          font-weight: 700;
          font-size: 1.19rem;
          line-height: 116%;
          color: black;
          margin: 0px;

          @media (max-width: 1200px) {
            font-size: 0.94rem;
          }
        }

        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 400;
          font-size: 1rem;
          line-height: 137%;
          color: #424242;
          margin: 0px;
          margin-bottom: 10px;

          @media (max-width: 1200px) {
            margin-bottom: 0px;
            font-size: 0.81rem;
          }
        }

        @media (max-width: 1200px) {
          & > button:last-child {
            width: 100%;
          }
        }
      }
    }

    & > div:last-child {
      justify-content: flex-start;

      & > div:first-child {
        display: flex;
        margin-left: auto;

        & > div:first-child {
          height: 41px;
        }
      }

      @media (max-width: 1200px) {
        & > div:nth-child(1) {
          display: none;
        }
      }
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1200px) {
    padding: 0px 20px;
    gap: 20px;
  }
`;

const ScrollContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  padding-right: 12px;
  max-height: 837px;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(204, 204, 204);
  }

  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    @media (max-width: 1200px) {
      flex-direction: row;
    }
  }

  @media (max-width: 1200px) {
    overflow-x: auto;
    max-width: calc(100vw - 40px);
  }
`;

const RatingResume = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  span {
    display: block;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 114%;
    color: black;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 11px;

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 11px;

      @media (max-width: 1200px) {
        gap: 6px;
      }
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;
      height: 11px;

      @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        font-size: 0.81rem;
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const RatingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr 0.1fr;
  align-items: center;
  gap: 8px;

  b {
    font-weight: 900;
    font-size: 1rem;
    line-height: 137%;
    color: black;
  }

  h5 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: black;
    margin: 0px;

    b {
      font-weight: 900;
      font-size: 1rem;
      line-height: 137%;
      color: black;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  div {
    width: 100%;
    height: 7px;
    background-color: rgba(148, 0, 0, 0.2);
    border-radius: 24px;

    span {
      display: block;
      height: 7px;
      background-color: #940000;
      border-radius: 24px;
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: auto auto 1fr 0.7fr;
  }
`;

const ReviewCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
      display: grid;
      grid-template-columns: 45px auto;
      grid-template-rows: repeat(2, 1fr);
      justify-content: flex-start;
      grid-column-gap: 12px;
      align-items: center;

      & > img {
        width: 45px;
        height: 45px;
        grid-area: 1 / 1 / 3 / 2;
      }

      & > h4 {
        font-weight: 700;
        font-size: 1.19rem;
        line-height: 116%;
        color: black;
        margin: 0px;
        grid-area: 1 / 2 / 2 / 3;

        @media (max-width: 1200px) {
          font-size: 0.94rem;
          height: 11px;
          display: flex;
          align-items: center;
        }
      }

      & > p {
        font-weight: 400;
        font-size: 0.81rem;
        line-height: 154%;
        color: #717171;
        grid-area: 2 / 2 / 3 / 3;

        @media (max-width: 1200px) {
          font-size: 0.62rem;
          height: 7px;
          display: flex;
          align-items: center;
        }
      }
    }

    & > span:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 11px;

      font-weight: 700;
      font-size: 1.44rem;
      line-height: 122%;
      color: #424242;

      @media (max-width: 1200px) {
        font-size: 1.12rem;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  & > button:last-child {
    color: #940000;
  }

  @media (max-width: 1200px) {
    padding: 16px;
    gap: 20px;
    min-width: 262px;
  }
`;

const ResponseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;

  & > div:first-child {
    display: grid;
    grid-template-columns: 45px auto;
    grid-template-rows: repeat(2, 1fr);
    justify-content: flex-start;
    grid-column-gap: 12px;
    align-items: flex-start;

    & > img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      grid-area: 1 / 1 / 3 / 2;
    }

    & > h4 {
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 116%;
      color: black;
      margin: 0px;
      grid-area: 1 / 2 / 2 / 3;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    & > p {
      font-weight: 400;
      font-size: 0.81rem;
      line-height: 154%;
      color: #717171;
      margin: 0px;
      grid-area: 2 / 2 / 3 / 3;

      @media (max-width: 1200px) {
        font-size: 0.62rem;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 154%;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  @media (max-width: 1200px) {
    gap: 16px;
    padding: 16px;
  }
`;

const Selected = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 16px;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      line-height: 13px;
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    padding: 24px;
    border-radius: 12px;

    & > div:first-child {
      width: 100%;

      @media (max-width: 1200px) {
        order: 2;
      }
    }

    & > div:last-child {
      width: 100%;
      height: 100%;
      max-width: 546px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 16px;

      & > img {
        background-color: #c3c3c3;
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }

      & > img:first-child {
        grid-area: 1 / 1 / 3 / 3;

        @media (max-width: 1200px) {
          grid-area: 1 / 1 / 3 / 3;
        }
      }

      & > img:nth-child(2) {
        grid-area: 1 / 3 / 2 / 4;

        @media (max-width: 1200px) {
          grid-area: 3 / 1 / 4 / 2;
        }
      }

      & > img:nth-child(3) {
        grid-area: 2 / 3 / 3 / 4;

        @media (max-width: 1200px) {
          grid-area: 3 / 2 / 4 / 3;
        }
      }

      @media (max-width: 1200px) {
        max-width: 100%;
        height: 323px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 20px;
      padding: 0px;
      background-color: #ffffff;
    }
  }

  @media (max-width: 1200px) {
    padding: 0px 20px 20px 20px;
    gap: 20px;
    border-bottom: 1px solid #c3c3c3;
    border-radius: 0px;
  }
`;

const CatalogDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: 0.82rem;
    font-weight: normal;
    color: #424242;
    line-height: 7px;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1200px) {
      & > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const AdvertiseDataContainer = styled(CatalogDataContainer)`
  gap: 8px;

  span {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 11px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      line-height: 9px !important;
    }
  }

  h3 {
    font-size: 1.4375em;
    font-weight: bold;
    color: black;
    line-height: 15px;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
      line-height: 13px;
    }
  }

  @media (max-width: 1200px) {
    gap: 12px;
  }
`;

const DataDescription = styled(CatalogDataContainer)`
  gap: 16px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;

    h3 {
      font-size: 1.1875em;
      font-weight: bold;
      color: black;
      line-height: 12px;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
        line-height: 133%;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      img {
        width: 20px;
        height: 20px;
      }

      font-size: 1em;
      font-weight: normal;
      color: #717171;
      line-height: 11px;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
  }

  p {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 107%;
    max-width: 68ch;
    margin: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      -webkit-line-clamp: 4;
    }
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > button:first-child {
    color: #940000;
  }
`;

const StandaloneNavigate = styled.div`
  width: 100vw;
  display: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;
  margin-top: -24px;
  background-color: #ffffff;

  button {
    border: 0px;

    @media (max-width: 1200px) {
      position: absolute;
      left: 4px;
    }
  }

  h3 {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    padding: 0px;
    height: 56px;
    position: relative;
    justify-content: center;

    h3 {
      display: block;
      font-weight: 700;
      font-size: 0.94rem;
      line-height: 122%;
      text-align: center;
      color: black;
      margin: 0px;
    }
  }
`;

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  transition: all 0.15s linear;
  margin: 0 auto;

  @media (max-width: 1200px) {
    background-color: #ffffff;
    gap: 0px;
  }

  & > footer:nth-child(3) {
    margin-top: -100px;

    @media (max-width: 1200px) {
      background-color: #ffffff;
      margin-top: 0px;
    }
  }
`;

const idiomaOptions = [
  { value: 'Español', label: 'Español' },
  { value: 'Ingles', label: 'Ingles' },
  { value: 'Chino', label: 'Chino' },
];

const SellerProfilepage = () => {
  const { openModal, closeModal } = useModal();
  const { isMenuOpen } = useMenu();
  const { propertyState } = usePropertyContext();
  const [activeSection, setActiveSection] = useState('profile');

  const navigate = useNavigate();

  const [filterForm, setFilterForm] = useState({
    tipoPropiedad: '',
  });

  const handleCustomChange = e => {
    const { name, value } = e.target;
    setFilterForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleActiveSection = section => {
    setActiveSection(section);
  };

  return (
    <CustomContainer>
      <StandaloneNavigate>
        <SecondaryCustomButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={arrowLeft} alt="arrow" />
        </SecondaryCustomButton>
        <h3>Perfil del vendedor</h3>
      </StandaloneNavigate>
      <SellerProfileContainer>
        <ProfileDataContainer>
          <div></div>
          <MainDataContainer>
            <div>
              <img src={placeholderIcon} />
              <div>
                <h3>
                  Sanchez Real Estate <img src={checkIcon} />
                </h3>
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
                <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
              </div>
              <div>
                <CustomButton
                  onClick={() => handleActiveSection('profile')}
                  activeSection={activeSection === 'profile'}
                >
                  Perfil
                </CustomButton>
                <CustomButton
                  onClick={() => handleActiveSection('advertise')}
                  activeSection={activeSection === 'advertise'}
                >
                  Anuncios
                </CustomButton>
              </div>
            </div>
            <div>
              <SecondaryCustomButton
                onClick={() => {
                  openModal('loginModal');
                }}
                id="desktop"
              >
                <img src={likeIcon} alt="like" />
                Recomendar
              </SecondaryCustomButton>
              <SecondaryCustomButton
                onClick={() => {
                  openModal('loginModal');
                }}
                id="mobile"
              >
                <img src={likeIcon} alt="like" />
              </SecondaryCustomButton>
              <PrimaryCustomButton
                onClick={() => {
                  openModal('contactModal');
                }}
              >
                <img src={callIcon} alt="call" />
                Contactar
              </PrimaryCustomButton>
              <SecondaryCustomButton>
                <img src={moreIcon} alt="more" />
              </SecondaryCustomButton>
            </div>
            <div id="mobile">
              <CustomButton
                onClick={() => handleActiveSection('profile')}
                activeSection={activeSection === 'profile'}
              >
                Perfil
              </CustomButton>
              <CustomButton
                onClick={() => handleActiveSection('advertise')}
                activeSection={activeSection === 'advertise'}
              >
                Anuncios
              </CustomButton>
            </div>
          </MainDataContainer>
        </ProfileDataContainer>
        {activeSection === 'profile' ? (
          <>
            <SectionOne>
              <Presentation>
                <h3>Presentación</h3>
                <p>
                  Sanchez Real Estate es una empresa inmobiliaria comprometida
                  con brindar soluciones integrales en el sector de bienes
                  raíces. Nos especializamos en la compra, venta y alquiler de
                  propiedades residenciales y comerciales, adecuamos las ofertas
                  inmobiliarias para tu mejor percepción, realizamos estrategias
                  de inversión inmobiliarias.
                </p>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Presentation>
              <Certifications>
                <h3>
                  Certificaciones <b>(2)</b>
                </h3>
                <div>
                  <div>
                    <Certificate>
                      <img src="" />
                      <div>
                        <h4>Verificación del anunciante</h4>
                        <p>
                          Informe realizado por terceros para la verificación de
                          identidad del anunciante
                        </p>
                        <PrimaryCustomButton id="desktop">
                          Previsualizar
                        </PrimaryCustomButton>
                      </div>
                      <PrimaryCustomButton id="mobile">
                        Previsualizar
                      </PrimaryCustomButton>
                    </Certificate>
                    <p>
                      La verificación confirma que la identidad del vendedor
                      coincide con la información anunciada. Este proceso es
                      realizado por terceros, asegurando mayor confianza y
                      transparencia.
                    </p>
                    <Certificate>
                      <img src="" />
                      <div>
                        <h4>Verificación del anunciante</h4>
                        <p>
                          Informe realizado por terceros para la verificación de
                          identidad del anunciante
                        </p>
                        <PrimaryCustomButton id="desktop">
                          Previsualizar
                        </PrimaryCustomButton>
                      </div>
                      <PrimaryCustomButton id="mobile">
                        Previsualizar
                      </PrimaryCustomButton>
                    </Certificate>
                  </div>
                </div>
              </Certifications>
            </SectionOne>
            <SectionTwo>
              <DataContainer>
                <h3>Información corporativa</h3>
                <div>
                  <p>
                    Nombre empresarial
                    <b>Soluciones Inmobiliarias Robles dorados S.A.C.</b>
                  </p>
                  <p>
                    Registro único del contribuyente (RUC)<b>2039374447</b>
                  </p>
                  <p>
                    Tipo de empresa<b>Inmobiliaria</b>
                  </p>
                  <p>
                    País / Región<b>Perú, Lima</b>
                  </p>
                  <p>
                    Año de fundación<b>2009</b>
                  </p>
                </div>
              </DataContainer>

              <DataContainer>
                <h3>Estadística y valoración</h3>
                <div>
                  <p>
                    Anuncios totales<b>25</b>
                  </p>
                  <p>
                    Anuncios activos<b>12</b>
                  </p>
                  <p>
                    Reseñas<b>4/5 (20)</b>
                  </p>
                  <p>
                    Recomendaciones<b>52</b>
                  </p>
                  <p>
                    Tiempo en la plataforma<b>1 año</b>
                  </p>
                </div>
              </DataContainer>
            </SectionTwo>
            <Reviews>
              <h3>
                Reseñas <b>(20)</b>
              </h3>
              <div>
                <div>
                  <div>
                    <RatingResume>
                      <span>4.5</span>
                      <div>
                        <div>
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                          <img src={starOutline} />
                        </div>
                        <p>20 reseñas</p>
                      </div>
                    </RatingResume>
                    <RatingContainer>
                      <h5>5</h5>
                      <img src={star} />
                      <div>
                        <span style={{ width: '80%' }} />
                      </div>
                      <h5>
                        80% <b>(16)</b>
                      </h5>
                    </RatingContainer>
                    <RatingContainer>
                      <h5>4</h5>
                      <img src={star} />
                      <div>
                        <span style={{ width: '20%' }} />
                      </div>
                      <h5>
                        20% <b>(4)</b>
                      </h5>
                    </RatingContainer>
                    <RatingContainer>
                      <h5>3</h5>
                      <img src={star} />
                      <div>
                        <span style={{ width: '0%' }} />
                      </div>
                      <h5>0%</h5>
                    </RatingContainer>
                    <RatingContainer>
                      <h5>2</h5>
                      <img src={star} />
                      <div>
                        <span style={{ width: '0%' }} />
                      </div>
                      <h5>0%</h5>
                    </RatingContainer>
                    <RatingContainer>
                      <h5>1</h5>
                      <img src={star} />
                      <div>
                        <span style={{ width: '0%' }} />
                      </div>
                      <h5>0%</h5>
                    </RatingContainer>
                  </div>
                  <div>
                    <h4>Cuentanos tu experiencia</h4>
                    <p>
                      Tu voz importa. Expresar tu experiencia no solo te da la
                      libertad de compartir tu opinión, sino que también ayuda a
                      construir una comunidad informada. Cada reseña es una guía
                      para otros y una oportunidad para mejorar juntos.
                    </p>
                    <PrimaryCustomButton>
                      ¡Comparte tu experiencia!
                    </PrimaryCustomButton>
                  </div>
                </div>
                <div>
                  <CustomSelect
                    id="orden"
                    name="orden"
                    aria-label="Orden"
                    value={filterForm.idiomaOptions}
                    onChange={handleCustomChange}
                    placeholder="Ordenar por"
                    options={idiomaOptions}
                    background="form"
                  />
                  <ScrollContainer>
                    <div>
                      <ReviewCard>
                        <div>
                          <div>
                            <img src={userIcon} />
                            <h4>Bross J. Sanchez</h4>
                            <p>15 de enero de 2025</p>
                          </div>

                          <span>
                            <img src={star} />
                            5/5
                          </span>
                        </div>

                        <p>
                          Tuve una experiencia muy positiva trabajando con este
                          vendedor durante la búsqueda de mi casa. La
                          comunicación fue constante y profesional a través de
                          la plataforma, respondiendo siempre dentro de las 24
                          horas...
                        </p>

                        <ResponseCard>
                          <div>
                            <img src={placeholderIcon} />
                            <h4>
                              Sanchez Real Estate <img src={checkIcon} />
                            </h4>
                            <p>15 de enero de 2025</p>
                          </div>
                          <p>¡Muchas gracias!</p>
                        </ResponseCard>

                        <SecondaryCustomButton
                          onClick={() => {
                            openModal('loginModal');
                          }}
                        >
                          <img src={medalIcon} />
                          Marcar como útil
                        </SecondaryCustomButton>
                      </ReviewCard>
                      <ReviewCard>
                        <div>
                          <div>
                            <img src={userIcon} />
                            <h4>Bross J. Sanchez</h4>
                            <p>15 de enero de 2025</p>
                          </div>

                          <span>
                            <img src={star} />
                            5/5
                          </span>
                        </div>

                        <p>
                          Tuve una experiencia muy positiva trabajando con este
                          vendedor durante la búsqueda de mi casa. La
                          comunicación fue constante y profesional a través de
                          la plataforma, respondiendo siempre dentro de las 24
                          horas...
                        </p>

                        <SecondaryCustomButton
                          onClick={() => {
                            openModal('loginModal');
                          }}
                        >
                          <img src={medalIcon} />
                          Marcar como útil
                        </SecondaryCustomButton>
                      </ReviewCard>
                      <ReviewCard>
                        <div>
                          <div>
                            <img src={userIcon} />
                            <h4>Bross J. Sanchez</h4>
                            <p>15 de enero de 2025</p>
                          </div>

                          <span>
                            <img src={star} />
                            5/5
                          </span>
                        </div>

                        <p>
                          Tuve una experiencia muy positiva trabajando con este
                          vendedor durante la búsqueda de mi casa. La
                          comunicación fue constante y profesional a través de
                          la plataforma, respondiendo siempre dentro de las 24
                          horas...
                        </p>

                        <SecondaryCustomButton
                          onClick={() => {
                            openModal('loginModal');
                          }}
                        >
                          <img src={medalIcon} />
                          Marcar como útil
                        </SecondaryCustomButton>
                      </ReviewCard>
                    </div>
                  </ScrollContainer>
                </div>
              </div>
            </Reviews>
          </>
        ) : (
          <>
            <Selected>
              <h3>Anuncio seleccionado</h3>
              <div>
                <CatalogDataContainer>
                  <TagContainer>
                    <div>
                      <CustomBadge color="red">Venta</CustomBadge>
                      Casa
                    </div>

                    <div>
                      <CustomBadge color="white">200 m2</CustomBadge>
                      <CustomBadge color="white">5 Habitaciones</CustomBadge>
                      <CustomBadge color="white">3 Baños</CustomBadge>
                    </div>
                  </TagContainer>

                  <DataDescription>
                    <div>
                      <h3>
                        Fantástica casa residencial de 200 m2 en Calleria,
                        barrio seguro
                      </h3>
                      <div>
                        <img src={pinIcon} alt="pin" />
                        Jr. Salaverry N°475, Calleria, Ucayali, Perú
                      </div>
                    </div>

                    <p>
                      ¡Tu hogar ideal te espera! Hermosa casa de 2 pisos ubicada
                      en una zona tranquila y segura. Con un diseño moderno y
                      amplios espacios, esta propiedad cuenta con todo lo que
                      necesitas para vivir cómodamente.
                    </p>
                  </DataDescription>

                  <AdvertiseDataContainer>
                    <span>Precio</span>
                    <h3>S/. 3000</h3>
                  </AdvertiseDataContainer>
                  <OptionsContainer>
                    <SecondaryCustomButton
                      onClick={() => openModal('loginModal')}
                    >
                      <img
                        src={addIcon}
                        alt="heart"
                        style={{ height: '20px', width: '20px' }}
                      />
                      Guardar
                    </SecondaryCustomButton>
                    <PrimaryCustomButton
                      onClick={() =>
                        navigate(`/inmuebles/676a364f3592cc2e8247f214`)
                      }
                    >
                      Ver más detalles
                    </PrimaryCustomButton>
                  </OptionsContainer>
                </CatalogDataContainer>
                <div>
                  <img />
                  <img />
                  <img />
                </div>
              </div>
            </Selected>
            <PropertySlider
              slidesToShow={isMenuOpen ? 5.2 : 5.8}
              data={propertyState.properties}
              title="Descubre las propiedades recomendadas"
            />
          </>
        )}
      </SellerProfileContainer>
      <CustomFooter />
      <Footer />
    </CustomContainer>
  );
};

export default SellerProfilepage;

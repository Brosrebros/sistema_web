import styled from 'styled-components';

export const ContactModalContainer = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 40px 40px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  #mobile {
    display: none;
  }

  & > img:nth-child(2) {
    width: 140px;
    height: 140px;
    border-radius: 140px;

    @media (max-width: 1200px) {
      width: 60px;
      height: 60px;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    & > h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      height: 16px;

      font-weight: 700;
      font-size: 1.44rem;
      line-height: 122%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        line-height: 13px;
        font-size: 1.12rem;
      }
    }

    @media (max-width: 1200px) {
      align-items: flex-start;
      gap: 12px;
    }
  }

  @media (max-width: 1200px) {
    width: 100vw;
    border-radius: 0px;
    display: grid;
    justify-content: flex-start;
    justify-items: flex-start;
    align-items: flex-start;
    grid-template-columns: 60px auto;
    padding: 20px;
    gap: 20px;

    #desktop {
      display: none;
    }

    #mobile {
      display: flex;
    }

    & > img:nth-child(2) {
      grid-area: 1 / 1 / 2 / 2;
    }

    & > div:nth-child(3) {
      grid-area: 1 / 2 / 2 / 5;
    }

    & > div:nth-child(4) {
      grid-area: 2 / 1 / 3 / 5;
      width: 100%;
      max-width: calc(100vw - 40px);

      & > button {
        width: 100%;
      }
    }

    & > div:nth-child(5) {
      grid-column: span 2;
    }
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & > h5 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;

      b {
        font-weight: 700;
        line-height: 137%;
        color: #424242;
      }

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
  }

  @media (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 8px;

  & > button:first-child {
    color: #940000;
  }
`;

export const SideDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

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

    & > div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;

      @media (max-width: 1200px) {
        flex-direction: column;
        gap: 12px;

        & > div {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    max-width: calc(100vw - 40px);
    padding: 20px;
    gap: 20px;

    #row {
      flex-direction: row;
    }
  }
`;

export const CloseButton = styled.button`
  width: 52px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  border: none;
  outline: none;
  margin-right: auto;
  transition: all 0.1s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e4e4e4;
  }
`;

export const CustomButton = styled.div`
  width: auto;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.1s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Roboto';
  color: #424242;
  line-height: 100%;
  border: 1px solid #c3c3c3;

  & > span {
    display: block;
    font-size: 1em;
    font-weight: normal;
    font-family: 'Roboto';
    color: #424242;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Handler = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 8px;
  background-color: #ffffff;
  transform: translateY(1px);
  border-radius: 12px 12px 0px 0px;

  & > div {
    width: 60px;
    height: 4px;
    background-color: #c3c3c3;
    border-radius: 100px;
  }
`;

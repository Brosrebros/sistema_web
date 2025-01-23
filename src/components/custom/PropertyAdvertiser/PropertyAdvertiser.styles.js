import styled from 'styled-components';
import { PrimaryCustomButtonStyled } from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton.styles';

export const PropertyAdvertiserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
  }
`;

export const AdvertiserDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const AdvertiserOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    img {
      height: 70px;
      width: 70px;
      background-color: #c6c6c6;
      border-radius: 100px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12px;

      h4 {
        font-weight: 700;
        font-size: 1.44rem;
        color: black;
        margin: 0px;
        line-height: 15px;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const WtspButton = styled(PrimaryCustomButtonStyled)`
  background-color: #25d366;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;

  h5 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 12px;
  }

  p,
  span {
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin: 0px;
  }
`;

export const ButtonOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 12px;

    input {
      height: 41px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid #c6c6c6;
      outline: none;
      font-family: 'Aptos';

      &::placeholder {
        color: #424242;
        font-weight: normal;
        font-family: 'Aptos';
      }
    }
  }
`;

export const Option = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: ${({ isSelected }) => (isSelected ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#424242')};
  line-height: 100%;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ProblemContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;
`;

export const SecondaryOption = styled(Option)`
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  color: #424242;
`;

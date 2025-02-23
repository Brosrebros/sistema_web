import styled from 'styled-components';

export const PropertyAdvertiserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
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
  gap: 18px;
`;

export const AdvertiserOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    img {
      height: 75px;
      width: 75px;
      background-color: #c6c6c6;
      border-radius: 100px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12px;

      h3 {
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

  & > button:nth-child(2) {
    color: #940000;
    border: 1px solid ${({ fav }) => (fav ? '#940000' : '#c3c3c3')};
  }
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

  & > div:first-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 12px;
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
  background-color: ${({ isSelected }) => (isSelected ? '#940000' : '#ffffff')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#940000' : '#C3C3C3')};

  /* Fuente */
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#424242')};
  line-height: 100%;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#A10000' : '#F9F9F9'};
  }

  &:active {
    background-color: ${({ isSelected }) =>
      isSelected ? '#850000' : '#ECECEC'};
  }
`;

export const ProblemContainer = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 12px;
`;

export const SecondaryOption = styled(Option)`
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  color: #424242;
`;

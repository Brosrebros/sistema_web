import styled from 'styled-components';

export const TutorialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 120px;
  background-color: #ffffff;
  border-radius: 12px;

  & > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    h3 {
      font-weight: 700;
      font-size: 1.44rem;
      color: black;
      margin: 0px;
      line-height: 70%;
      font-family: 'Aptos';
    }

    p {
      max-width: 86ch;
      font-weight: normal;
      font-size: 1rem;
      color: #424242;
      margin: 0px;
      line-height: 110%;
      font-family: 'Aptos';
    }
  }

  & > div:last-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    justify-content: space-between;
    gap: 60px;
    padding: 24px 0px;

    & > div:first-child {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: flex-start;
      gap: 12px;
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 40px;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;

        h4 {
          font-weight: 700;
          font-size: 1.19rem;
          color: black;
          line-height: 70%;
          margin: 0px;
          font-family: 'Aptos';
        }

        p {
          max-width: 66ch;
          font-weight: normal;
          font-size: 1rem;
          color: #424242;
          margin: 0px;
          line-height: 110%;
          font-family: 'Aptos';
        }
      }
    }
  }
`;

export const TutorialBanner = styled.div`
  width: 100%;
  height: 281px;
  background-color: #d6d6d6;
  border-radius: 12px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const OptionsDotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.button`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.active ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 12px 16px;

  font-family: 'Aptos';
  font-weight: bold;
  font-size: 1rem;
  color: ${props => (props.active ? '#ffffff' : '#424242')};
  margin: 0px;
  line-height: 65%;
  text-align: center;

  &:hover {
    background-color: ${props => (props.active ? '#A10000' : '#F9F9F9')};
  }

  &:active {
    background-color: ${props => (props.active ? '#850000' : '#ECECEC')};
  }
`;

export const OptionDot = styled(Option)`
  justify-content: center;
  width: 41px;
  height: 41px;
  border-radius: 100px;
  font-size: 1.4375em;
`;

export const SpanBar = styled.span`
  display: block;
  height: 12px;
  width: 1px;
  background-color: ${props => (props.active ? '#940000' : '#f2f2f2')};
`;

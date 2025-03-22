import styled from 'styled-components';

export const TutorialContainer = styled.div`
  width: 100%;
  height: 602px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
    gap: 16px;

    h3 {
      font-weight: 700;
      font-size: 1.44rem;
      color: black;
      margin: 0px;
      line-height: 70%;
      font-family: 'Roboto';

      @media (max-width: 1200px) {
        font-size: 1.12rem;
        line-height: 120%;
      }
    }

    p {
      max-width: 86ch;
      font-weight: normal;
      font-size: 1rem;
      color: #424242;
      margin: 0px;
      line-height: 110%;
      font-family: 'Roboto';

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      gap: 20px;
    }
  }

  & > div:last-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3.35fr;
    justify-content: space-between;
    gap: 60px;
    padding-top: 24px;

    & > div:first-child {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr auto;
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
        gap: 14px;

        h4 {
          font-weight: 700;
          font-size: 1.19rem;
          color: black;
          line-height: 70%;
          margin: 0px;
          font-family: 'Roboto';

          @media (max-width: 1200px) {
            font-size: 0.94rem;
            line-height: 120%;
          }
        }

        p {
          max-width: 61ch;
          font-weight: normal;
          font-size: 1rem;
          color: #424242;
          margin: 0px;
          line-height: 110%;
          font-family: 'Roboto';

          @media (max-width: 1200px) {
            font-size: 0.81rem;
          }
        }

        @media (max-width: 1200px) {
          gap: 16px;
        }
      }
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 40px;
      padding-top: 0px;
    }
  }

  @media (max-width: 1200px) {
    height: auto;
    padding: 40px 20px;
    gap: 32px;
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
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.active ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 12px 16px;
  cursor: none;

  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.active ? '#ffffff' : '#424242')};
  margin: 0px;
  line-height: 65%;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

export const OptionDot = styled(Option)`
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  font-size: 1em;
`;

export const SpanBar = styled.span`
  display: block;
  height: 12px;
  width: 1px;
  background-color: ${props => (props.active ? '#940000' : '#f2f2f2')};
`;

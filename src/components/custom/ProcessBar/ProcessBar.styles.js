import styled from 'styled-components';

export const ProcessBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 0px 64px 24px 64px;

  & > div:first-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  & > div:last-child {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-radius: 12px;
    overflow: hidden;
    height: 9px;
  }
`;

export const ProgressBarStepStyled = styled.span`
  width: 100%;
  display: block;
  background-color: ${({ isActive }) => (isActive ? '#940000' : '#F2E4E4')};
`;

export const StepTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: ${({ type }) => (type === "todo" ? '#ffffff' : type === "do" ? '#940000' : "#ffffff")};
    border: 1px solid ${({ type }) => (type === "todo" ? '#c3c3c3' : type === "do" ? '#940000' : "#940000")};

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 122%;
    text-align: center;
    color: ${({ type }) => (type === "todo" ? '#c3c3c3' : type === "do" ? '#ffffff' : "#940000")};
  }

  span {
    display: block;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 122%;
    text-align: center;
    color: ${({ type }) => (type === "todo" ? '#c3c3c3' : type === "do" ? 'black' : "black")};
  }
`;

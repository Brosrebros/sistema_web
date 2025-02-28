import styled from 'styled-components';

export const StandaloneLayoutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: ${({ type }) => (type === 'process' ? '0px' : '24px')};
`;

export const StandaloneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 0px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const StandaloneNavigate = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;

  button {
    border: 0px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 122%;
    color: #424242;
    margin: 0px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const DataCard = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  padding-top: 16px;
  padding-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 12px;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      color: black;
      margin: 0px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  p {
    transition: all 0.2s ease;
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    font-weight: 400;
    font-size: 1rem;
    line-height: 122%;
    color: #424242;
    margin: 0px;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const SideDataContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 120px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 100%;
  }
`;

export const TextBanner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #c3c3c3;
  border-radius: 12px;
  padding: 40px;
`;

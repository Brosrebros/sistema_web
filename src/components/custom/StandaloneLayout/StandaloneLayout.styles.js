import styled from 'styled-components';

export const StandaloneLayoutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
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

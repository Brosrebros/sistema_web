import styled from 'styled-components';

export const NewPassFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 1200px) {
    gap: 24px;
  }
`;

export const NewPassInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

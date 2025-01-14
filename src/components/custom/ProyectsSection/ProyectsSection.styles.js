import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const TextButtonContainer = styled.div`
  max-width: 536px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    h3 {
      max-width: 340px;
      font-size: 1.4375em;
      font-weight: bold;
      color: black;
      margin: 0px;
      line-height: 103%;
    }

    p {
      font-size: 1.1875em;
      font-weight: normal;
      color: #424242;
      line-height: 102%;
      margin: 0px;
    }
  }

  img {
    width: 17px;
    height: 17px;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const CustomButton = styled.button`
  /* Botón */
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${props => (props.isActive ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${props => (props.isActive ? 'white' : '#424242')};
  line-height: 70%;

  &:hover {
    filter: brightness(0.9);
  }
`;


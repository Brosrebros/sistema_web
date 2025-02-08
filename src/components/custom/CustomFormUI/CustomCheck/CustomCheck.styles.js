import styled from 'styled-components';

export const CustomCheckContainer = styled.div`
  width: 100%;
  max-height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c3c3c3;

  label {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;
  }

  input {
    background-color: #f2f2f2;
    border: 1px solid #c3c3c3;

    &:checked {
        background-color: #940000;
    }
  }
`;

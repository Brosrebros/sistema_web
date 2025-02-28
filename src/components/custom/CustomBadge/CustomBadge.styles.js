import styled from 'styled-components';

export const CustomBadgeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 8px 12px;
  border-radius: 80px;
  max-height: 25px;

  font-family: 'Aptos';
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 65%;
  color: ${({ color }) =>
    color === 'gray' || color === 'white' ? '#424242' : '#FFFFFF'};

  background-color: ${({ color }) =>
    color === 'turquoise'
      ? '#257573'
      : color === 'red'
      ? '#940000'
      : color === 'green'
      ? '#127C00'
      : color === 'gray'
      ? '#F2F2F2' : 
      color === 'light-green' ?
      "#03A71B"
      : '#FFFFFF'};
  border: ${({ color }) =>
    color === 'gray' || color === 'white' ? '1px solid #C3C3C3' : 'none'};
`;

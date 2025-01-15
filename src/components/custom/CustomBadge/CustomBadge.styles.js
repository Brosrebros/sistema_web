import styled from 'styled-components';

export const CustomBadgeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 80px;

  font-family: 'Aptos_display';
  font-weight: normal;
  font-size: 13px;
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
      ? '#F2F2F2'
      : '#FFFFFF'};
  border: ${({ color }) =>
    color === 'gray' || color === 'white' ? '1px solid #C6C6C6' : 'none'};
`;

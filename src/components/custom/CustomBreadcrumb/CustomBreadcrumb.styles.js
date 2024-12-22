import styled from 'styled-components';

export const CustomBreadcrumbStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: #940000;

  a {
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Aptos_display';
    text-decoration: none;
    color: #940000;
  }

  svg {
    color: #940000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

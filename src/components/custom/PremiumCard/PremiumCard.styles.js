import styled from 'styled-components';

export const PremiumCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 28px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    color: black;

    b {
      font-weight: 700;
      font-size: 2.25rem;
      color: black;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;

    h4 {
        
    }

    li {
      font-weight: 400;
      font-size: 1rem;
      color: #424242;
      padding: 6px 0px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  button {
    cursor: none;
  }
`;

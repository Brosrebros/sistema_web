import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import SellerForm from 'components/custom/SellerForm/SellerForm';
import SellerCard from 'components/custom/SellerCard/SellerCard';
import leftIcon from 'assets/img/icons/arrow-left.svg';
import { SecondaryCustomButtonStyled } from '../components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton.styles';
import rightIcon from 'assets/img/icons/arrow-right.svg';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
`;

const NumberSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
  border-radius: 16px;
  border: 1px solid #c3c3c3;

  button {
    border: none;
    line-height: 11px;
  }
`;

const SquareButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 100%;
  cursor: pointer;
  border: 1px solid #c3c3c3;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #ececec;
  }
`;

const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CircleButton = styled(SecondaryCustomButtonStyled)`
  background-color: ${({ variant }) =>
    variant === 'white' ? '#ffffff' : '#f2f2f2'};
  border: ${({ variant }) => (variant === 'white' ? 'none' : 'none')};
`;

const Sellerpage = () => {
  return (
    <CustomPageLayout>
      <SellerForm />

      <p
        style={{
          fontWeight: 'normal',
          color: '#424242',
          fontSize: '1.19em',
          lineHeight: '80%',
          margin: '0px',
        }}
      >
        <b>365</b>
        vendedores inmobiliarios encontrados
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <PaginationContainer>
          <NumberSelector>
            <SecondaryCustomButton variant="white">
              5 Articulos
            </SecondaryCustomButton>
            <SecondaryCustomButton variant="gray">10</SecondaryCustomButton>
            <SecondaryCustomButton variant="gray">15</SecondaryCustomButton>
          </NumberSelector>

          <PagesContainer>
            <SquareButton>
              <img src={leftIcon} alt="arrow-left" />
            </SquareButton>

            <NumberSelector>
              <CircleButton variant="white">1</CircleButton>
              <CircleButton variant="gray">2</CircleButton>
              <CircleButton variant="gray">3</CircleButton>
              <CircleButton variant="gray">4</CircleButton>
            </NumberSelector>

            <SquareButton>
              <img src={rightIcon} alt="arrow-right" />
            </SquareButton>
          </PagesContainer>
        </PaginationContainer>
      </div>
      {/* 
      <Pagination
        totalItems={100}
        itemsPerPageOptions={[5, 10, 20]}
        currentPage={10}
        canNextPage={10}
        canPreviousPage={10}
        paginationArray={10}
        activeValue={5}
        itemsPerPage={5}
        onPageChange={1}
        onItemsPerPageChange={1}
      /> */}
    </CustomPageLayout>
  );
};

export default Sellerpage;

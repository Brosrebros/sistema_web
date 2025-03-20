import React, { useState } from 'react';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import SellerForm from 'components/custom/SellerForm/SellerForm';
import SellerCard from 'components/custom/SellerCard/SellerCard';
import leftIcon from 'assets/img/icons/arrow-left.svg';
import { SecondaryCustomButtonStyled } from '../components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton.styles';
import rightIcon from 'assets/img/icons/arrow-right.svg';
import sortIcon from 'assets/img/icons/sort.svg';
import Pagination from 'components/custom/Pagination/Pagination';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import styled from 'styled-components';

const CustomText = styled.p`
  font-weight: normal;
  color: #424242;
  font-size: 1.19em;
  line-height: 80%;
  margin: 0px;
  display: ${({ id }) => (id === 'desktop' ? 'flex' : 'none')};

  @media (max-width: 1200px) {
    font-size: 0.81rem;
    display: ${({ id }) => (id === 'desktop' ? 'none' : 'flex')};
    max-width: 23ch;
  }
`;

const SellersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 1200px) {
    gap: 0px;

    & > div:last-child {
      margin-top: 0px;
    }
  }
`;

const TextContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`;

const Sellerpage = () => {
  const totalItems = 15;
  const itemsPerPageOptions = [5, 10, 20];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleOrdenChange = event => {
    setOrdenSeleccionado(event.target.value);
  };

  const ordenarPorOptions = [
    { value: 'Mayor a menor precio', label: 'Mayor a menor precio' },
    { value: 'Menor a mayor precio', label: 'Menor a mayor precio' },
  ];

  return (
    <CustomPageLayout>
      <SellerForm />

      <CustomText id="desktop">
        <b>365 </b>
        vendedores inmobiliarios encontrados
      </CustomText>

      <TextContainer>
        <CustomText id="mobile">
          365 vendedores inmobiliarios encontrados
        </CustomText>

        <CustomSelect
          name="orden"
          onChange={handleOrdenChange}
          placeholder="Ordenar por"
          options={ordenarPorOptions}
          background="form"
          id="desktop"
        >
          <img src={sortIcon} />
        </CustomSelect>
      </TextContainer>

      <SellersContainer>
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />

        <Pagination
          totalItems={totalItems}
          itemsPerPageOptions={itemsPerPageOptions}
          currentPage={currentPage}
          canNextPage={currentPage < totalPages}
          canPreviousPage={currentPage > 1}
          paginationArray={paginationArray}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </SellersContainer>
    </CustomPageLayout>
  );
};

export default Sellerpage;

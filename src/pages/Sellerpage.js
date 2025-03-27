import React, { useState } from 'react';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import SellerForm from 'components/custom/SellerForm/SellerForm';
import SellerCard from 'components/custom/SellerCard/SellerCard';
import sortIcon from 'assets/img/icons/sort.svg';
import Pagination from 'components/custom/Pagination/Pagination';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

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
    padding: 0px 20px;
  }
`;

const TabButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #c3c3c3;
  margin-top: -24px;
`;

const CustomButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border-radius: 12px;
  position: relative;
  margin-bottom: 4px;
  height: 48px;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 70%;

  &:hover {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#f2f2f2'};
  }

  &:active {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#e4e4e4'};
  }

  ${({ activeSection }) =>
    activeSection &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Asegura que la línea esté justo debajo */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #940000;
      border-radius: 10px;
    }
  `}

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const Sellerpage = () => {
  const totalItems = 15;
  const itemsPerPageOptions = [5, 10, 20];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [activeSection, setActiveSection] = useState(
    'vendedores inmobiliarios'
  );
  const navigate = useNavigate();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleOrdenChange = event => {
    setOrdenSeleccionado(event.target.value);
  };

  const handleActiveSection = section => {
    setActiveSection(section);
  };

  const ordenarPorOptions = [
    { value: 'Mayor a menor precio', label: 'Mayor a menor precio' },
    { value: 'Menor a mayor precio', label: 'Menor a mayor precio' },
  ];

  return (
    <>
      <TabButtonContainer id="mobile">
        <CustomButton
          onClick={() => {
            handleActiveSection('inmobiliaria');
            navigate(`/`);
          }}
          activeSection={activeSection === 'inmobiliaria'}
        >
          Inmobiliaria
        </CustomButton>
        <CustomButton
          onClick={() => handleActiveSection('vendedores inmobiliarios')}
          activeSection={activeSection === 'vendedores inmobiliarios'}
        >
          Vendedores inmobiliarios
        </CustomButton>
      </TabButtonContainer>
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

          {/* <CustomSelect
            name="orden"
            onChange={handleOrdenChange}
            placeholder="Ordenar por"
            options={ordenarPorOptions}
            background="form"
            id="desktop"
          >
            <img src={sortIcon} />
          </CustomSelect> */}

          <SecondaryCustomButton>
            <img src={sortIcon} />
          </SecondaryCustomButton>
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
    </>
  );
};

export default Sellerpage;

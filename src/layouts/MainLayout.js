import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';
import Menu from 'components/menu/Menu';
import Footer from 'components/footer/Footer';
import ProductProvider from 'providers/ProductProvider';
import CourseProvider from 'providers/CourseProvider';
import ModalAuth from 'components/authentication/modal/ModalAuth';
import PropertyProvider from 'providers/PropertyProvider';
import CustomFooter from 'components/custom/CustomFooter/CustomFooter';
import { useMenu } from 'menuContext';
import styled from 'styled-components';

const CustomPageContainer = styled.div`
  /* max-width: ${({ isMenuOpen }) => (isMenuOpen ? '81.5vw' : '91.5vw')}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  transition: all 0.2s ease;

  /*   
  @media (max-width: 1760px) {
    max-width: ${({ isMenuOpen }) => (isMenuOpen ? '80vw' : '90.9vw')};
  }

  @media (max-width: 1550px) {
    max-width: ${({ isMenuOpen }) => (isMenuOpen ? '77vw' : '90vw')};
  }

  @media (max-width: 1450px) {
    max-width: ${({ isMenuOpen }) => (isMenuOpen ? '75.5vw' : '89.5vw')};
  }

  @media (max-width: 1380px) {
    max-width: ${({ isMenuOpen }) => (isMenuOpen ? '74.5vw' : '89vw')};
  }

  @media (max-width: 1280px) {
    max-width: ${({ isMenuOpen }) => (isMenuOpen ? '73vw' : '88.5vw')};
  } */
`;

const MainLayout = () => {
  const { isMenuOpen } = useMenu();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <ProductProvider>
        <CourseProvider>
          <Navbar />
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: isMenuOpen ? '270px minmax(0, 1fr)' : '73px minmax(0, 1fr)',
              gap: '24px',
              padding: '24px',
              position: 'relative',
              transition:"all 0.2s ease"
            }}
          >
            <Menu />
            <CustomPageContainer isMenuOpen={isMenuOpen}>
              <PropertyProvider>
                <Outlet />
                <CustomFooter />
                <Footer />
              </PropertyProvider>
            </CustomPageContainer>
          </div>
        </CourseProvider>
      </ProductProvider>
      <ModalAuth />
    </main>
  );
};

export default MainLayout;

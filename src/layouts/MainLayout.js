import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';
import Menu from 'components/menu/Menu';
import Footer from 'components/footer/Footer';
import ProductProvider from 'providers/ProductProvider';
import CourseProvider from 'providers/CourseProvider';
import PropertyProvider from 'providers/PropertyProvider';
import CustomFooter from 'components/custom/CustomFooter/CustomFooter';
import { useMenu } from 'menuContext';
import styled from 'styled-components';

const CustomPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  transition: all 0.2s ease;
  margin: 24px 0px 0px 0px;
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
              padding: '0px 24px 0px 0px',
              position: 'relative',
              transition:"all 0.2s ease"
            }}
          >
            <Menu />
            <CustomPageContainer isMenuOpen={isMenuOpen}>
              <PropertyProvider>
                <Outlet />
                <CustomFooter />
                <Footer type="main"/>
              </PropertyProvider>
            </CustomPageContainer>
          </div>
        </CourseProvider>
      </ProductProvider>
    </main>
  );
};

export default MainLayout;

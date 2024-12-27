import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import NavbarTop from 'components/navbar/top/NavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import Footer from 'components/footer/Footer';
import ProductProvider from 'providers/ProductProvider';
import CourseProvider from 'providers/CourseProvider';
import ModalAuth from 'components/authentication/modal/ModalAuth';
import PropertyProvider from 'providers/PropertyProvider';
import { useAppContext } from 'providers/AppProvider';
import CustomFooter from 'components/custom/CustomFooter/CustomFooter';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  margin-left: auto;
  justify-content: center;
  transition: all 0.15s linear;
`;

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');

  const {
    config: { isFluid, navbarPosition },
  } = useAppContext();

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
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <NavbarVertical />
      )}
      <ProductProvider>
        <CourseProvider>
          <div
            className={classNames('content', { 'pb-0': isKanban })}
            style={{ paddingBottom: '21px', transition: 'all .2s ease' }}
          >
            <NavbarTop />
            {/*------ Main Routes ------*/}
            <MainContainer>
              <PropertyProvider>
                <Outlet />
              </PropertyProvider>
              <CustomFooter />
              {!isKanban && <Footer />}
            </MainContainer>
          </div>
        </CourseProvider>
      </ProductProvider>
      <ModalAuth />
    </div>
  );
};

export default MainLayout;

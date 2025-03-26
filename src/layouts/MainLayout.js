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
import LoginModal from 'components/modals/LoginModal/LoginModal';
import ShareModal from 'components/modals/ShareModal/ShareModal';
import ReportModal from 'components/modals/ReportModal/ReportModal';
import { SendModal } from 'components/modals/CustomModal/CustomModal';
import { SuccessModal } from 'components/modals/CustomModal/CustomModal';
import SettingsModal from 'components/modals/SettingsModal/SettingsModal';
import ContactModal from 'components/modals/ContactModal/ContactModal';
import SearchModal from 'components/modals/SearchModal/SearchModal';

const CustomPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  transition: all 0.2s ease;
  background-color: #f2f2f2;
  border-radius: 12px 0px 0px 0px;

  @media (max-width: 1200px) {
    width: 100%;
    border-radius: 0px;
    padding: 24px 0px 0px 0px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ isMenuOpen }) =>
    isMenuOpen ? '270px minmax(0, 1fr)' : '100px minmax(0, 1fr)'};
  position: relative;
  transition: all 0.2s ease;

  @media (max-width: 1200px) {
    display: flex;
    max-width: 100vw;
  }
`;

const MainLayout = ({ type, active }) => {
  const { isMenuOpen } = useMenu();
  const { hash, pathname } = useLocation();
  const [viewWidth, setViewWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <ProductProvider>
        <CourseProvider>
          {viewWidth < 1200 && active === 'soporte' ? null : <Navbar />}
          <StyledContainer isMenuOpen={isMenuOpen}>
            <Menu active={active} />
            <CustomPageContainer isMenuOpen={isMenuOpen}>
              <PropertyProvider>
                <Outlet />
                {type === 'main' ? (
                  <>
                    <CustomFooter />
                    <Footer type="main" />
                  </>
                ) : null}
              </PropertyProvider>
            </CustomPageContainer>
          </StyledContainer>
          <LoginModal />
          <ShareModal />
          <ReportModal />
          <SendModal />
          <SuccessModal />
          <SettingsModal />
          <ContactModal />
          <SearchModal />
        </CourseProvider>
      </ProductProvider>
    </main>
  );
};

export default MainLayout;

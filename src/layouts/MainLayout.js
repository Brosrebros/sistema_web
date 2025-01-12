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

const MainLayout = () => {
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
              display: 'flex',
              gap: '24px',
              justifyContent: 'flex-start',
              padding: '24px',
              position: 'relative',
            }}
          >
            <Menu />
            <div
              style={{
                width: '100%',
                maxWidth: '82vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <PropertyProvider>
                <Outlet />
                <CustomFooter />
                <Footer />
              </PropertyProvider>
            </div>
          </div>
        </CourseProvider>
      </ProductProvider>
      <ModalAuth />
    </main>
  );
};

export default MainLayout;

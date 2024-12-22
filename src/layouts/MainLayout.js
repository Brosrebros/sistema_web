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

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

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
            style={{ paddingBottom: '21px' }}
          >
            <NavbarTop />
            {/*------ Main Routes ------*/}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <PropertyProvider>
                <Outlet />
              </PropertyProvider>
              {!isKanban && <Footer />}
            </div>
          </div>
        </CourseProvider>
      </ProductProvider>
      <ModalAuth />
    </div>
  );
};

export default MainLayout;
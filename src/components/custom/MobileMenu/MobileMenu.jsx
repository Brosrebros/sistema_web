import React from 'react';
import { MobileMenuContainer, LinkContainer } from './MobileMenu.styles';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

import saleIcon from "assets/img/icons/add-circle.svg"
import mainIcon from "assets/img/icons/buliding.svg"
import newsIcon from "assets/img/icons/notification.svg"

import saleIconBold from "assets/img/icons/add-circle-bold.svg"
import mainIconBold from "assets/img/icons/buliding-bold.svg"
import newsIconBold from "assets/img/icons/notification-bold.svg"

function MobileMenu({ active }) {
  const navigate = useNavigate();

  return (
    <MobileMenuContainer>
      <div></div>
      <div>
        <LinkContainer onClick={() => navigate(`/${rootPaths.saleRoot}`)}>
          <div>
            <img src={active === "sale" ? saleIconBold : saleIcon} alt="circle" />
          </div>
          <p>Vender</p>
        </LinkContainer>
        <LinkContainer onClick={() => navigate(`/`)}>
          <div>
            <img src={active === "main" ? mainIconBold : mainIcon} alt="building" />
          </div>
          <p>Inmobiliaria</p>
        </LinkContainer>
        <LinkContainer onClick={() => navigate(`/${rootPaths.newsRoot}`)}>
          <div>
            <img src={active === "news" ? newsIconBold : newsIcon} alt="notifications" />
          </div>
          <p>Novedades</p>
        </LinkContainer>
      </div>
    </MobileMenuContainer>
  );
}

export default MobileMenu;

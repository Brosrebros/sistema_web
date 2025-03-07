import React, { forwardRef } from 'react';
import {
  NotificationsContainer,
  Notification,
  NotificationsWrapper,
} from './Notifications.styles';

import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

import clockIcon from 'assets/img/icons/clock.svg';

const Notifications = forwardRef((props, ref) => {
  return (
    <NotificationsContainer ref={ref}>
      <div>
        <h4>Notificaciones</h4>
      </div>
      <NotificationsWrapper>
        <div>
          <h5>Nuevas</h5>
          <Notification>
            <div>
              <span>Inmobiliaria</span>{' '}
              <span>
                Hace 1 hora <img src={clockIcon} alt="clock" />
              </span>
            </div>
            <div>
              <img src="" alt="" />
              <p>
                <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito de
                Comas. <b>S/. 1,200</b>
              </p>
            </div>
          </Notification>
          <Notification>
            <div>
              <span>Inmobiliaria</span>{' '}
              <span>
                Hace 1 hora <img src={clockIcon} alt="clock" />
              </span>
            </div>
            <div>
              <img src="" alt="" />
              <p>
                <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito de
                Comas. <b>S/. 1,200</b>
              </p>
            </div>
          </Notification>
          <h5>Leídas</h5>
          <Notification>
            <div>
              <span>Inmobiliaria</span>{' '}
              <span>
                Hace 1 hora <img src={clockIcon} alt="clock" />
              </span>
            </div>
            <div>
              <img src="" alt="" />
              <p>
                <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito de
                Comas. <b>S/. 1,200</b>
              </p>
            </div>
          </Notification>
          <Notification>
            <div>
              <span>Inmobiliaria</span>{' '}
              <span>
                Hace 1 hora <img src={clockIcon} alt="clock" />
              </span>
            </div>
            <div>
              <img src="" alt="" />
              <p>
                <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito de
                Comas. <b>S/. 1,200</b>
              </p>
            </div>
          </Notification>
        </div>
      </NotificationsWrapper>
      <div>
        <PrimaryCustomButton>Ver todas</PrimaryCustomButton>
        <SecondaryCustomButton>Marcar todas como leidas</SecondaryCustomButton>
      </div>
    </NotificationsContainer>
  );
});

export default Notifications;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button, Modal } from 'react-bootstrap';
import logo from 'assets/img/illustrations/logo-organizacion.png';
import { rootPaths } from 'routes/paths';
import CustomModalBody from 'components/custom/CustomModalBody/CustomModalBody';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

const ProfileDropdown = () => {
  // Manejo del estado para el modal
  const [show, setShow] = useState(false);
  const [show_, setShow_] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose_ = () => setShow_(false);
  const handleShow_ = () => setShow_(true);

  return (
    <>
      <Dropdown navbar={true} as="li">
        <Dropdown.Toggle
          bsPrefix="toggle"
          as={Link}
          to="#!"
          className="pe-0 ps-2 nav-link"
          style={{ minWidth: '122px' }}
        >
          <div>
            <PrimaryCustomButton
              type="submit"
              variant="danger"
              style={{ fontFamily: 'Aptos_display' }}
            >
              Iniciar sesión
            </PrimaryCustomButton>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-caret dropdown-menu-card dropdown-menu-end text-center">
          <div
            className="bg-white rounded-2 py-2 dark__bg-1000"
            style={{ paddingLeft: '10px', paddingRight: '10px' }}
          >
            <Dropdown.Item
              href="#!"
              style={{ fontSize: '15px', color: '#940000' }}
            >
              Sé nuestro socio accede a{' '}
              <b>
                todos los <br /> servicios de la organización Sánchez.
              </b>
            </Dropdown.Item>
            <Dropdown.Item href="#!" style={{ fontSize: '15px' }}>
              Accede a todas las características que <br /> tenemos para una
              experiencia <b>sin límites.</b>
            </Dropdown.Item>

            <Button
              type="submit"
              variant="danger"
              onClick={handleShow}
              style={{ fontFamily: 'Aptos_display', width: '100%' }}
            >
              Iniciar sesión
            </Button>

            <Dropdown.Divider />

            <Button
              type="submit"
              style={{
                fontFamily: 'Aptos_display',
                backgroundColor: '#F2F2F2',
                color: '#6d6d6d',
                marginRight: '10px',
                border: 'transparent',
                width: '100%',
              }}
            >
              Crear una cuenta
            </Button>

            <Dropdown.Item
              href={`/${rootPaths.supportRoot}`}
              style={{ fontSize: '15px' }}
            >
              Al registrarte, aceptas los{' '}
              <b>
                Términos y <br /> condiciones generales de uso
              </b>{' '}
              y la{' '}
              <b>
                Política de
                <br /> privacidad.
              </b>
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px',
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <CustomModalBody>
            <h4>Inicia sesión</h4>

            <p>
              Nos encanta tener de vuelta, <br />
              se <b>bienvenido nuevamente.</b>
            </p>
            <SecondaryCustomButton>Correo Electronico</SecondaryCustomButton>

            <PrimaryCustomButton
              onClick={() => {
                handleShow_();
                handleClose();
              }}
            >
              Siguiente
            </PrimaryCustomButton>
            <SecondaryCustomButton>
              Olvidaste tu contraseña
            </SecondaryCustomButton>

            <SecondaryCustomButton>
              ¿No tienes una cuenta? <b>Registrate aquí </b>
            </SecondaryCustomButton>
          </CustomModalBody>
        </Modal.Body>
      </Modal>

      <Modal show={show_} onHide={handleClose_} className="text-center">
        <Modal.Header closeButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px',
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <CustomModalBody>
            <h4>¡Registrate!</h4>
            <h5>
              Sé nuestro socio y accede a{' '}
              <b>todos los servicios de la organización Sanchez.</b>
            </h5>
            <p>
              Accede a todas las caracteristicas que tenemos para una
              experiencia sin limites.
            </p>
            <PrimaryCustomButton>Crear una cuenta</PrimaryCustomButton>
            <span>
              Al registrarte, aceptas los{' '}
              <b>Términos y condiciones generales de uso</b> y la{' '}
              <b>Política de privacidad.</b>
            </span>
            <SecondaryCustomButton>
              ¿Ya eres socio? <b>Inicia sesión aquí</b>
            </SecondaryCustomButton>
          </CustomModalBody>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileDropdown;

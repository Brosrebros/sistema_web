import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Title } from '../mainpage/Title';
import PropTypes from 'prop-types';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import locationIcon from 'assets/icons/endondelabuscas_gris.svg';
import tipoIcon from 'assets/icons/tipodepropiedad_gris.svg';
import presupuestoIcon from 'assets/icons/presupuesto_gris.svg';
import ordenIcon from 'assets/icons/simplenavbar-ordenarpor.svg';
import masfiltros_gris from 'assets/icons/masfiltros_gris.svg';
import { PiMagnifyingGlass } from 'react-icons/pi';
import mapaIcon from 'assets/img/icons/mapa_boton.svg';
// import operacionIcon from 'assets/icons/simplenavbar-clasedepropiedad.svg';
// import locationIcon from '../../assets/icons-svg/En donde la buscas - Barra de busqueda simple.svg';
// import tipoIcon from '../../assets/icons-svg/Tipo de propiedad - Barra de busqueda simple.svg';
// import presupuestoIcon from '../../assets/icons-svg/Presupuesto - Barra de busqueda simple.svg';
// import ordenIcon from '../../assets/icons-svg/Ordenar por - Barra de busqueda simple.svg';
// import operacionIcon from '../../assets/icons-svg/Clase de propiedad - Barra de busqueda simple.svg';

const propiedadOptions = [
  { value: 'Casa', label: 'Casa' },
  { value: 'Departamento', label: 'Departamento' },
  { value: 'Oficina', label: 'Oficina' },
  { value: 'Terreno', label: 'Terreno' },
  { value: 'Local comercial', label: 'Local comercial' },
  { value: 'Bodega', label: 'Bodega' },
  { value: 'Edificio', label: 'Edificio' },
  { value: 'Casa de campo', label: 'Casa de campo' },
  { value: 'Penthouse', label: 'Penthouse' },
  { value: 'Loft', label: 'Loft' },
  { value: 'Villa', label: 'Villa' },
  { value: 'Dúplex', label: 'Dúplex' },
  { value: 'Chalet', label: 'Chalet' },
];

const presupuestoOptions = [
  { value: '50000-100000', label: '50 000 hasta 100 000' },
  { value: '100000-150000', label: '100 000 hasta 150 000' },
  { value: '150000-200000', label: '150 000 hasta 200 000' },
  { value: '250000-300000', label: '250 000 hasta 300 000' },
];

const ordenarPorOptions = [
  { value: 'Mayor a menor precio', label: 'Mayor a menor precio' },
  { value: 'Menor a mayor precio', label: 'Menor a mayor precio' },
];

const PropertyForm = ({
  filterForm,
  setFilterForm,
  handleOnSubmit,
  msgBtn,
}) => {
  const [activeBtn, setActiveBtn] = useState(true);

  const [isChecked, setIsChecked] = useState(false);

  const handleCustomChange = e => {
    const { name, value } = e.target;
    setFilterForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (
      filterForm.tipoOperacion === '' &&
      filterForm.direccionCompleta === '' &&
      filterForm.tipoPropiedad === '' &&
      filterForm.presupuesto === '' &&
      filterForm.ordenarPor === ''
    ) {
      setActiveBtn(false);
    } else {
      setActiveBtn(false);
    }
  }, [filterForm]);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFilterForm({
  //     ...filterForm,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    handleOnSubmit();
  };

  return (
    <>
      <div>
        <Row className="g-2 mt-0 ">
          <Title classname="mt-0 titulo_primera_pagina">
            Encuentra tu propiedad ideal
          </Title>
          <Form
            style={{
              width: '100%',
              background: 'white',
              padding: '13px',
              borderRadius: '10px',
            }}
            onSubmit={handleSubmit} // Maneja el evento submit
          >
            <div className="row">
              <form
                className="form d-flex"
                style={{ gap: '8px', height: 'auto', alignItems: 'center' }}
              >
                {/* Toggle de Venta/Alquiler */}
                <div
                  className="toggle-switch"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '170px',
                    height: '36px',
                    backgroundColor: '#f2f2f2',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    userSelect: 'none',
                    padding: '0 4px',
                  }}
                  onClick={() => setIsChecked(!isChecked)} // Cambiar entre "Venta" y "Alquiler"
                >
                  {/* Barra deslizante */}
                  <span
                    style={{
                      position: 'absolute',
                      height: '80%',
                      width: '50%',
                      backgroundColor: '#940000',
                      borderRadius: '10px',
                      transform: isChecked
                        ? 'translateX(90%)'
                        : 'translateX(0)',
                      transition:
                        'transform 0.4s ease-in-out, background-color 0.3s ease',
                    }}
                  ></span>

                  {/* Opción Venta */}
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      textAlign: 'center',
                      fontSize: '14px',
                      fontFamily: 'Aptos_display',
                      color: !isChecked ? 'white' : '#424242',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Venta
                  </span>

                  {/* Opción Alquiler */}
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      textAlign: 'center',
                      fontSize: '14px',
                      fontFamily: 'Aptos_display',
                      color: isChecked ? 'white' : '#424242',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Alquiler
                  </span>
                </div>

                {/* Botón de Proyectos */}
                <div
                  className="toggle-switch"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '85px',
                    height: '36px',
                    backgroundColor: '#2F7474',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      textAlign: 'center',
                      fontSize: '14px',
                      fontFamily: 'Aptos_display',
                      color: 'white',
                      transition: 'color 0.3s ease',
                      padding: '0 10px',
                    }}
                  >
                    Proyectos
                  </span>
                </div>

                {/* Botón de ver mapa */}
                <div
                  className="toggle-switch"
                  style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '36px',
                    backgroundColor: '#f2f2f2',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    gap: '8px',
                    padding: '0px 10px',
                  }}
                >
                  <img src={mapaIcon} style={{ width: '1.2rem' }} />
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      textAlign: 'center',
                      fontSize: '14px',
                      fontFamily: 'Aptos_display',
                      color: '#424242',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Ver mapa
                  </span>
                </div>
              </form>
            </div>

            <Row className="justify-content-center mx-auto gy-2  mt-2">
              <Col lg={2} md={2} xs={12} className="px-2">
                <CustomSelect
                  id="tipoPropiedad"
                  name="tipoPropiedad"
                  aria-label="Tipo"
                  value={filterForm.tipoPropiedad}
                  onChange={handleCustomChange}
                  placeholder="Tipo de propiedad"
                  options={propiedadOptions}
                  background="form"
                >
                  <img src={tipoIcon} width={'16px'} />
                </CustomSelect>
              </Col>
              <Col lg={4} md={3} xs={12} className="px-2">
                <div
                  style={{
                    display: 'flex',
                    borderRadius: '10px',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    padding: '0 8px',
                    width: '100%',
                    height: '36px',
                    fontFamily: 'Aptos_Display',
                  }}
                >
                  <img src={locationIcon} width="16px" />
                  <Form.Control
                    type="text"
                    id="direccionCompleta"
                    name="direccionCompleta"
                    aria-describedby="Ubicación"
                    placeholder="¿En donde la buscas?"
                    value={filterForm.direccionCompleta}
                    onChange={handleCustomChange}
                    style={{
                      fontSize: '14px',
                      border: 'none',
                      height: '100%',
                      boxShadow: 'none',
                      fontFamily: 'Aptos_Display',
                      backgroundColor: '#F2F2F2',
                    }}
                  />
                </div>
              </Col>

              <Col lg={2} md={2} xs={12} className="px-2">
                <CustomSelect
                  id="presupuesto"
                  name="presupuesto"
                  aria-label="Presupuesto"
                  value={filterForm.presupuesto}
                  onChange={handleCustomChange}
                  placeholder="Presupuesto"
                  options={presupuestoOptions}
                  background="form"
                >
                  <img src={presupuestoIcon} width={'16px'} />
                </CustomSelect>
              </Col>

              <Col lg={2} md={2} xs={12} className="px-2">
                <CustomSelect
                  id="ordenarPor"
                  name="ordenarPor"
                  aria-label="Ordenar por"
                  value={filterForm.ordenarPor}
                  onChange={handleCustomChange}
                  placeholder="Ordenar por"
                  options={ordenarPorOptions}
                  background="form"
                >
                  <img src={ordenIcon} width={'16px'} />{' '}
                </CustomSelect>
              </Col>

              <Col lg={1} md={2} xs={12} className="px-2">
                <div
                  style={{
                    display: 'flex',
                    borderRadius: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F2F2F2',
                    width: '100%',
                    height: '36px',
                    padding: '0px 8px',
                    fontFamily: 'Aptos_Display',
                  }}
                >
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#F2F2F2',
                      fontFamily: 'Aptos_Display',
                      border: 'none',
                      borderRadius: '10px',
                      width: '100%',
                      height: '36px',
                      fontSize: '14px',
                      color: '#424242 !important',
                      outline: 'none',
                      opacity: '0.7',
                      gap: '0.5rem',
                    }}
                  >
                    {/* Icono de la izquierda */}

                    <img src={masfiltros_gris} width={'16px'} />
                    {/* Texto */}
                    <span
                      style={{
                        color: '#424242 !important',
                      }}
                    >
                      Más filtros
                    </span>
                  </button>
                </div>
              </Col>
              <Col
                lg={1}
                md={1}
                xs={12}
                className="px-2 d-flex justify-content-xs-center"
              >
                <Button
                  type="submit"
                  variant="danger"
                  onClick={handleSubmit}
                  disabled={activeBtn}
                  style={{
                    fontFamily: 'Aptos_display',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    width: '100%',
                  }}
                >
                  <PiMagnifyingGlass style={{ fontSize: '1.2rem' }} />
                  {msgBtn}
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
};

PropertyForm.propTypes = {
  filterForm: PropTypes.shape({
    tipoOperacion: PropTypes.string,
    direccionCompleta: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    presupuesto: PropTypes.string,
    ordenarPor: PropTypes.string,
  }),
  setFilterForm: PropTypes.func,
  handleOnSubmit: PropTypes.func,
  msgBtn: PropTypes.string,
};

export default PropertyForm;

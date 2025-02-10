import React, { useState } from 'react';
import {
  DataContainer,
  FormTab,
  TabButtonStyled,
  DoubleOptionContainer,
  MultipleSelectContainer,
  PropertyLocation,
  CounterContainer,
  AreaContainer,
  AntiquityContainer,
  PriceContainer,
  DescriptionContainer,
} from './StepOne.styles';

import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import CustomInputNumber from 'components/custom/CustomFormUI/CustomInputNumber/CustomInputNumber';
import CustomCounter from 'components/custom/CustomFormUI/CustomCounter/CustomCounter';
import CustomCheck from 'components/custom/CustomFormUI/CustomCheck/CustomCheck';

import pinIcon from 'assets/img/icons/location.svg';
import warningIcon from 'assets/img/icons/Info.svg';
import arrowIcon from 'assets/img/icons/arrow-down.svg';
import addIcon from 'assets/img/icons/add.svg';
import removeIcon from 'assets/img/icons/minus.svg';

function StepOne({ part }) {
  const [activeButton, setActiveButton] = useState('venta');
  const [altActiveButton, setAltActiveButton] = useState('exacta');

  const [features, setFeatures] = useState({
    dormitorios: 1,
    banos: 1,
    mediosBanos: 0,
    estacionamientos: 1,
  });

  const handleChange = e => {
    onChange(e);
  };

  const options = [
    { value: 'M2', label: 'M2' },
    { value: 'Ha', label: 'Ha' },
  ];

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

  return (
    <>
      {part === 'one' ? (
        <>
          <DataContainer>
            <h4>Tipo de operación</h4>

            <FormTab>
              <TabButtonStyled
                isActive={activeButton === 'venta'}
                onClick={e => {
                  e.preventDefault();
                  setActiveButton('venta');
                }}
              >
                Venta
              </TabButtonStyled>

              <TabButtonStyled
                isActive={activeButton === 'alquiler'}
                onClick={e => {
                  e.preventDefault();
                  setActiveButton('alquiler');
                }}
              >
                Alquiler
              </TabButtonStyled>
            </FormTab>
          </DataContainer>

          <DataContainer>
            <h4>Tipo de inmueble</h4>

            <DoubleOptionContainer>
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
            </DoubleOptionContainer>
          </DataContainer>
        </>
      ) : part === 'two' ? (
        <>
          <DataContainer>
            <h3>Ubicación inmueble</h3>

            <MultipleSelectContainer>
              <CustomInput
                placeholder={'¿En dónde lo buscas?'}
                icon={pinIcon}
              />
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
              <CustomSelect
                id="presupuesto"
                name="presupuesto"
                value="presupuesto"
                placeholder="Presupuesto"
                options={propiedadOptions}
                background="form"
              />
            </MultipleSelectContainer>
          </DataContainer>

          <DataContainer>
            <h4>Forma de ubicación</h4>

            <FormTab>
              <TabButtonStyled
                isActive={altActiveButton === 'exacta'}
                onClick={e => {
                  e.preventDefault();
                  setAltActiveButton('exacta');
                }}
              >
                Exacta
              </TabButtonStyled>

              <TabButtonStyled
                isActive={altActiveButton === 'aproximada'}
                onClick={e => {
                  e.preventDefault();
                  setAltActiveButton('aproximada');
                }}
              >
                Aproximada
              </TabButtonStyled>
            </FormTab>
          </DataContainer>

          <PropertyLocation>
            <span>
              <img src={pinIcon} alt="#" />
              Av. Las Magnolias Mz. B Lt.21, Lurigancho, Lima
            </span>
            <div></div>
            <span>
              <img src={warningIcon} alt="#" />
              Recuerda que, al elegir el formato de ubicación “Aproximada”, tu
              propiedad no será visible en el mapa de búsqueda.
            </span>
          </PropertyLocation>
        </>
      ) : (
        <>
          <DataContainer>
            <CounterContainer>
              <NumberFeatureContainer
                title="Dormitorios"
                value={features.dormitorios}
                onValueChange={value =>
                  handleFeatureChange('dormitorios', value)
                }
                onChange={handleChange}
              />
              <NumberFeatureContainer
                title="Baños"
                value={features.banos}
                onValueChange={value => handleFeatureChange('banos', value)}
                onChange={handleChange}
              />
              <NumberFeatureContainer
                title="Medios Baños"
                value={features.mediosBanos}
                onValueChange={value =>
                  handleFeatureChange('mediosBanos', value)
                }
                onChange={handleChange}
              />
              <NumberFeatureContainer
                title="Estacionamientos"
                value={features.estacionamientos}
                onValueChange={value =>
                  handleFeatureChange('estacionamientos', value)
                }
                onChange={handleChange}
              />
            </CounterContainer>
          </DataContainer>

          <DataContainer>
            <h4>Superficie del inmueble</h4>

            <AreaContainer>
              <CustomSelect
                id="metros cuadrados"
                name="metros cuadrados"
                value="metros cuadrados"
                placeholder="M²"
                options={options}
                background="form"
              >
                <img src={arrowIcon} alt="arrow" />
              </CustomSelect>
              <CustomInputNumber
                id="from"
                type="number"
                placeholder="Área total"
              />
              <CustomSelect
                id="metros cuadrados"
                name="metros cuadrados"
                value="metros cuadrados"
                placeholder="M²"
                options={options}
                background="form"
              >
                <img src={arrowIcon} alt="arrow" />
              </CustomSelect>
              <CustomInputNumber
                id="to"
                type="number"
                placeholder="Área construida"
              />
            </AreaContainer>
          </DataContainer>

          <DataContainer>
            <h4>Superficie del inmueble</h4>
            <AntiquityContainer>
              <div>
                <CustomCheck
                  type="radio"
                  label="A estrenar"
                  htmlFor="estreno"
                />
                <CustomCheck
                  type="radio"
                  label="Años de antiguedad"
                  htmlFor="antiguedad"
                />
                <CustomCheck
                  type="radio"
                  label="En construcción"
                  htmlFor="construccion"
                />
              </div>

              <CustomInputNumber id="from" type="number" placeholder="00" />
            </AntiquityContainer>
          </DataContainer>

          <DataContainer>
            <h4>Precio del inmueble</h4>
            <PriceContainer>
              <CustomInputNumber
                id="soles"
                type="number"
                placeholder="En soles"
              />
              <CustomInputNumber
                id="dolares"
                type="number"
                placeholder="En dólares"
              />
              <CustomInputNumber
                id="mantenimiento"
                type="number"
                placeholder="Mantenimiento (Opcional)"
              />
            </PriceContainer>
          </DataContainer>

          <DataContainer>
            <h4>Descripción el inmueble</h4>
            <DescriptionContainer>
              <CustomInput placeholder="Titulo del anuncio" />
              <textarea
                placeholder="Descripción del anuncio (Mínimo de 150 caracteres)"
                id="description"
                style={{ height: '210px' }}
              ></textarea>
            </DescriptionContainer>

            <span>
              <img src={warningIcon} alt="#" />
              Recuerda que, al elegir el formato de ubicación “Aproximada”, tu
              propiedad no será visible en el mapa de búsqueda.
            </span>
          </DataContainer>
        </>
      )}
    </>
  );
}

const NumberFeatureContainer = ({ title, value, onValueChange }) => {
  const increment = () => onValueChange(value + 1);
  const decrement = () => onValueChange(Math.max(0, value - 1));

  return (
    <div>
      <h4 style={{ fontSize: '1em', color: 'black', fontWeight: 'bold' }}>
        {title}
      </h4>
      <CustomCounter>
        <button onClick={decrement}>
          <img src={removeIcon} alt="remove" />
        </button>
        <span>{value}</span>
        <button onClick={increment}>
          <img src={addIcon} alt="add" />
        </button>
      </CustomCounter>
    </div>
  );
};

export default StepOne;

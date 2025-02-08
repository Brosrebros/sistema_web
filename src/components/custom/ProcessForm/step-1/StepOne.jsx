import React, { useState } from 'react';
import {
  DataContainer,
  FormTab,
  TabButtonStyled,
  DoubleOptionContainer,
  MultipleSelectContainer,
  PropertyLocation
} from './StepOne.styles';

import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';

import pinIcon from 'assets/img/icons/location.svg';
import warningIcon from 'assets/img/icons/Info.svg';

function StepOne({ part }) {
  const [activeButton, setActiveButton] = useState('venta');
  const [altActiveButton, setAltActiveButton] = useState('exacta');

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
      ) : (
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
      )}
    </>
  );
}

export default StepOne;

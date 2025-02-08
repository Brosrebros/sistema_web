import React, { useState } from 'react';
import {
  DataContainer,
  CounterContainer,
  AreaContainer,
  AntiquityContainer,
  PriceContainer,
  DescriptionContainer,
} from './StepTwo.styles';

import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import CustomInputNumber from 'components/custom/CustomFormUI/CustomInputNumber/CustomInputNumber';
import CustomCounter from 'components/custom/CustomFormUI/CustomCounter/CustomCounter';
import CustomCheck from 'components/custom/CustomFormUI/CustomCheck/CustomCheck';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';

import arrowIcon from 'assets/img/icons/arrow-down.svg';
import addIcon from 'assets/img/icons/add.svg';
import removeIcon from 'assets/img/icons/minus.svg';
import warningIcon from 'assets/img/icons/Info.svg';

function StepTwo() {
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

  return (
    <>
      <DataContainer>
        <CounterContainer>
          <NumberFeatureContainer
            title="Dormitorios"
            value={features.dormitorios}
            onValueChange={value => handleFeatureChange('dormitorios', value)}
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
            onValueChange={value => handleFeatureChange('mediosBanos', value)}
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
          <CustomInputNumber id="from" type="number" placeholder="Área total" />
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
            <CustomCheck type="radio" label="A estrenar" htmlFor="estreno" />
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
          <CustomInputNumber id="soles" type="number" placeholder="En soles" />
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
        <h4>Precio del inmueble</h4>
        <PriceContainer>
          <CustomInputNumber id="soles" type="number" placeholder="En soles" />
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
  );
}

const NumberFeatureContainer = ({ title, value, onValueChange, onChange }) => {
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

export default StepTwo;

import { React, useState } from 'react';
import {
  PropertyFormContainer,
  FormButtonsContainer,
  FormMainContainer,
  FormOptionsContainer,
  FormTab,
  TabButtonStyled,
} from './PropertyForm.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomInputText from '../CustomFormUI/CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import mapaIcon from '../../../assets/img/icons/map.svg';
import filterIcon from '../../../assets/img/icons/filter.svg';
import lupaIcon from '../../../assets/img/icons/search-normal.svg';
import lupaIconWhite from '../../../assets/img/icons/search-white.svg';
import tipoIcon from '../../../assets/icons/tipodepropiedad_gris.svg';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

function PropertyForm() {
  const [activeButton, setActiveButton] = useState('venta');
  const navigate = useNavigate();

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

  return (
    <PropertyFormContainer>
      <FormButtonsContainer>
        <FormMainContainer>
          <FormTab>
            <TabButtonStyled
              isActive={activeButton === 'venta'}
              onClick={() => setActiveButton('venta')}
            >
              Venta
            </TabButtonStyled>

            <TabButtonStyled
              isActive={activeButton === 'alquiler'}
              onClick={() => setActiveButton('alquiler')}
            >
              Alquiler
            </TabButtonStyled>
          </FormTab>
          <PrimaryCustomButton>Proyectos</PrimaryCustomButton>
        </FormMainContainer>
        <SecondaryCustomButton variant={'white'}>
          <img src={mapaIcon} />
          Ver mapa
        </SecondaryCustomButton>
      </FormButtonsContainer>
      <FormOptionsContainer>
        <CustomInputText placeholder={'¿En dónde lo buscas?'} icon={lupaIcon} />
        <CustomSelect
          id="tipoPropiedad"
          name="tipoPropiedad"
          aria-label="Tipo"
          value="tipoPropiedad"
          placeholder="Tipo de propiedad"
          options={propiedadOptions}
          background="form"
        >
          <img src={tipoIcon} width={'16px'} />
        </CustomSelect>
        <CustomSelect
          id="tipoPropiedad"
          name="tipoPropiedad"
          aria-label="Tipo"
          value="tipoPropiedad"
          placeholder="Tipo de propiedad"
          options={presupuestoOptions}
          background="form"
        >
          <img src={tipoIcon} width={'16px'} />
        </CustomSelect>
        <CustomSelect
          id="tipoPropiedad"
          name="tipoPropiedad"
          aria-label="Tipo"
          value="tipoPropiedad"
          placeholder="Tipo de propiedad"
          options={ordenarPorOptions}
          background="form"
        >
          <img src={tipoIcon} alt="type" />
        </CustomSelect>
        <SecondaryCustomButton variant={'white'}>
          <img src={filterIcon} alt="filter" />
          Mas filtros
        </SecondaryCustomButton>
        <PrimaryCustomButton
          onClick={() => {
            navigate(`/${rootPaths.catalogRoot}`);
          }}
        >
          <img src={lupaIconWhite} alt="lupa" />
          Buscar
        </PrimaryCustomButton>
      </FormOptionsContainer>
    </PropertyFormContainer>
  );
}

export default PropertyForm;

import { React, useState } from 'react';
import {
  PropertyFormContainer,
  FormOptionsContainer,
  FormTab,
  TabButtonStyled,
} from './PropertyForm.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomInput from '../CustomFormUI/CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import mapaIcon from '../../../assets/img/icons/map.svg';
import filterIcon from '../../../assets/img/icons/filter.svg';
import lupaIconWhite from '../../../assets/img/icons/search-white.svg';
import tipoIcon from '../../../assets/img/icons/signpost.svg';
import pinIcon from '../../../assets/img/icons/location.svg';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'modalContext';

function PropertyForm({ page }) {
  const { openModal } = useModal();
  const [activeButton, setActiveButton] = useState('venta');
  const [searchValue, setSearchValue] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [orderBy, setOrderBy] = useState('');
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

  return (
    <PropertyFormContainer>
      <FormOptionsContainer>
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
        <PrimaryCustomButton
          onClick={() => navigate(`/${rootPaths.proyectsRoot}`)}
        >
          Proyectos
        </PrimaryCustomButton>
        <CustomInput
          placeholder={'¿En dónde lo buscas?'}
          icon={pinIcon}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <CustomSelect
          id="tipoPropiedad"
          name="tipoPropiedad"
          value={propertyType}
          onChange={e => setPropertyType(e.target.value)}
          placeholder="Tipo de propiedad"
          options={[...propiedadOptions]}
          background="form"
        >
          <img src={tipoIcon} width={'16px'} />
        </CustomSelect>
        <SecondaryCustomButton variant={'white'}>
          <img src={mapaIcon} />
          Ver mapa
        </SecondaryCustomButton>
        {page === 'main' ? (
          <SecondaryCustomButton variant={'white'}>
            <img src={filterIcon} alt="filter" />
            Mas filtros
          </SecondaryCustomButton>
        ) : null}
        <PrimaryCustomButton
          onClick={e => {
            e.preventDefault();
            openModal('searchModal');
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

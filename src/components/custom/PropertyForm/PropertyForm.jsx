import { React, useState } from 'react';
import {
  PropertyFormContainer,
  FormOptionsContainer,
  FormTab,
  TabButtonStyled,
  TabContainer,
} from './PropertyForm.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomInput from '../CustomFormUI/CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import mapaIcon from 'assets/img/icons/map.svg';
import filterIcon from 'assets/img/icons/filter.svg';
import lupaIconWhite from 'assets/img/icons/search-white.svg';
import tipoIcon from 'assets/img/icons/signpost.svg';
import pinIcon from 'assets/img/icons/location.svg';
import sortIcon from 'assets/img/icons/sort.svg';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'modalContext';
import { useSearch } from 'searchContext';

function PropertyForm({ page }) {
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

  const ordenarPorOptions = [
    { value: 'Precio ascendente', label: 'Precio ↑' },
    { value: 'Precio descendente', label: 'Precio ↓' },
    { value: 'Superficie ascendente', label: 'Superficie ↑' },
    { value: 'Superficie descendente', label: 'Superficie ↓' },
    { value: 'Fecha ascendente', label: 'Fecha ↑' },
    { value: 'Fecha descendente', label: 'Fecha ↓' },
    { value: 'Antigüedad ascendente', label: 'Antigüedad ↑' },
    { value: 'Antigüedad descendente', label: 'Antigüedad ↓' },
  ];

  const { openModal } = useModal();
  const [activeButton, setActiveButton] = useState('venta');
  const [activeStep, setActiveStep] = useState(1);
  const { searchValue, setSearchValue, propertyType, setPropertyType } =
    useSearch();
  const navigate = useNavigate();

  const handleSearchClick = e => {
    e.preventDefault();

    // Lógica para determinar el paso activo en el modal
    if (searchValue && !propertyType) {
      // Hay valor en CustomInput pero no en CustomSelect
      setActiveStep(2); // Paso 2 activo
    } else if (!searchValue && propertyType) {
      // Hay valor en CustomSelect pero no en CustomInput
      setActiveStep(1); // Paso 1 activo
    } else if (!searchValue && !propertyType) {
      // No hay valor en ninguno, todos los pasos activos
      setActiveStep(1);
    } else {
      // Hay valor en ambos, ir directo al paso 3
      setActiveStep(3);
    }

    openModal('searchModal');
  };

  return (
    <PropertyFormContainer page={page}>
      <FormOptionsContainer page={page} id="desktop">
        <FormTab id="desktop-catalog">
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
          id="desktop-catalog"
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
          name="tipoPropiedad"
          value={propertyType}
          onChange={e => setPropertyType(e.target.value)}
          placeholder="Tipo de propiedad"
          options={propiedadOptions}
          background="form"
          id="desktop-catalog"
        >
          <img src={tipoIcon} width={'16px'} />
        </CustomSelect>
        {page === 'main' ? (
          <SecondaryCustomButton variant={'white'}>
            <img src={filterIcon} alt="filter" />
            Mas filtros
          </SecondaryCustomButton>
        ) : null}
        <SecondaryCustomButton variant={'white'} id="desktop">
          <img src={mapaIcon} />
          Ver mapa
        </SecondaryCustomButton>
        {page === 'catalog' ? (
          <>
            <CustomSelect
              name="orden"
              value={propertyType}
              onChange={e => setPropertyType(e.target.value)}
              placeholder="Ordenar por"
              options={ordenarPorOptions}
              background="form"
              id="desktop"
            >
              <img src={sortIcon} width={'16px'} />
            </CustomSelect>
            <SecondaryCustomButton variant={'white'} id="mobile">
              <img src={mapaIcon} />
            </SecondaryCustomButton>

            <SecondaryCustomButton variant={'white'} id="mobile">
              <img src={filterIcon} />
            </SecondaryCustomButton>
          </>
        ) : null}
        <PrimaryCustomButton onClick={handleSearchClick}>
          <img src={lupaIconWhite} alt="lupa" />
          Buscar
        </PrimaryCustomButton>
      </FormOptionsContainer>

      <FormOptionsContainer page={page} id="mobile-grid">
        <CustomInput
          placeholder={'¿En dónde lo buscas?'}
          icon={pinIcon}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />

        <PrimaryCustomButton onClick={handleSearchClick}>
          <img src={lupaIconWhite} alt="lupa" />
        </PrimaryCustomButton>

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
          id="desktop-catalog"
        >
          Proyectos
        </PrimaryCustomButton>

        <CustomSelect
          name="tipoPropiedad"
          value={propertyType}
          onChange={e => setPropertyType(e.target.value)}
          placeholder="Tipo de propiedad"
          options={propiedadOptions}
          background="form"
          id="desktop-catalog"
        >
          <img src={tipoIcon} width={'16px'} />
        </CustomSelect>
      </FormOptionsContainer>
    </PropertyFormContainer>
  );
}

export default PropertyForm;

import PropertyForm from 'components/property/PropertyForm';
import Properties from 'components/property/Properties';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 1rem;
  max-width: 1640px;
  font-family: 'Aptos_display';
  transition: all 0.15s linear;

  @media (min-width: 1940px) {
    max-width: 2000px;
  }

  @media (max-width: 1746px) {
    max-width: 84vw;
  }

  @media (max-width: 1400px) {
    max-width: 70vw;
  }
  @media (max-width: 1300px) {
    max-width: 80vw;
  }
`;

const Catalogpage = () => {
  const [searchParams] = useSearchParams();
  const initialState = Object.fromEntries([...searchParams]);
  const [filterForm, setFilterForm] = useState({
    tipoOperacion: initialState.tipoOperacion ? initialState.tipoOperacion : '',
    direccionCompleta: initialState.direccionCompleta
      ? initialState.direccionCompleta
      : '',
    tipoPropiedad: initialState.tipoPropiedad ? initialState.tipoPropiedad : '',
    presupuesto: initialState.presupuesto ? initialState.presupuesto : '',
    ordenarPor: initialState.ordenarPor ? initialState.ordenarPor : '',
    superficie: '',
    banos: '',
    estacionamientos: '',
    anunciante: '',
    antiguedad: '',
    publicacion: '',
    ambiente: [],
    exteriores: [],
    servicios: [],
  });

  const { propertyState, filterBasic, unFilter } = usePropertyContext();
  const [title, setTitle] = useState('');
  const propertyList = propertyState.filtering
    ? propertyState.filteredProperties
    : propertyState.properties;

  const orderFilters = () => {
    let cont = 0;
    let res = 'Propiedades';
    for (let filterItem in filterForm) {
      if (filterForm[filterItem].length > 0) {
        cont++;
        if (cont === 1) {
          res += ' en ' + filterForm[filterItem];
        } else {
          res += ', en ' + filterForm[filterItem];
        }
      }
    }
    setTitle(res);
  };

  useEffect(() => {
    filterBasic(filterForm);
  }, [propertyState.properties]);

  useEffect(() => {
    filterBasic(filterForm);
    orderFilters();
  }, [filterForm]);

  return (
    <MainContent>
      <PropertyForm
        filterForm={filterForm}
        setFilterForm={setFilterForm}
        handleOnSubmit={() => {
          setFilterForm({
            ...filterForm,
            tipoOperacion: '',
            direccionCompleta: '',
            tipoPropiedad: '',
            presupuesto: '',
            ordenarPor: '',
          });
          unFilter();
        }}
        msgBtn="Limpiar"
      />

      <Properties
        filterForm={filterForm}
        setFilterForm={setFilterForm}
        properties={propertyList}
        title={title}
      />
    </MainContent>
  );
};

{
  /* <div>
Propiedades
{filterForm.tipoOperacion ? ` en ${filterForm.tipoOperacion}` : ''}{' '}
{filterForm.direccionCompleta
  ? `, en ${filterForm.direccionCompleta}`
  : ''}{' '}
{filterForm.tipoPropiedad ? `, desde ${filterForm.tipoPropiedad}` : ''}{' '}
{filterForm.presupuesto ? `${filterForm.presupuesto}` : ''}{' '}
</div> */
}

export default Catalogpage;

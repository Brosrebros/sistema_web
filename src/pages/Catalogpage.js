import PropertyForm from 'components/property/PropertyForm';
import Properties from 'components/property/Properties';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import { Stack } from 'react-bootstrap';

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
    <Stack gap={3}>
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
    </Stack>
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

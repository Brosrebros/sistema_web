import Properties from 'components/property/Properties';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import PropertyForm from 'components/custom/PropertyForm/PropertyForm';

const Catalogpage = ({ type }) => {
  const [searchParams] = useSearchParams();
  const initialState = Object.fromEntries([...searchParams]);

  const [filterForm, setFilterForm] = useState({
    tipoOperacion: initialState.tipoOperacion || '',
    direccionCompleta: initialState.direccionCompleta || '',
    tipoPropiedad: initialState.tipoPropiedad || '',
    presupuesto: initialState.presupuesto || '',
    ordenarPor: initialState.ordenarPor || '',
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

  console.log(type)

  const { propertyState, filterBasic } = usePropertyContext();
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
        res +=
          cont === 1
            ? ` en ${filterForm[filterItem]}`
            : `, en ${filterForm[filterItem]}`;
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
    <CustomPageLayout>
      <PropertyForm
        filterForm={filterForm}
        setFilterForm={setFilterForm}
        page="catalog"
      />
      <Properties
        filterForm={filterForm}
        setFilterForm={setFilterForm}
        properties={propertyList}
        title={title}
        type={type}
      />
    </CustomPageLayout>
  );
};

export default Catalogpage;

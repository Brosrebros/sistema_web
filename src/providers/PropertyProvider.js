import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import propertyReducer from 'reducers/propertyReducer';
import axios from 'axios';

export const PropertyContext = createContext({ properties: [] });

const PropertyProvider = ({ children }) => {
  const initialState = {
    properties: [],
    filteredProperties: null,
    property: null,
    loading: false,
    filtering: false,
    error: null,
    filters: [
      {
        label: 'Superficie',
        options: [
          {
            label: 'Techada',
            icon: 'brush',
            type: 'radio',
            value: 'Techada',
            name: 'superficie',
          },
          {
            label: 'Total',
            icon: 'brush',
            type: 'radio',
            value: 'Total',
            name: 'superficie',
          },
        ],
      },
      {
        label: 'Baños',
        options: [
          {
            label: '1+',
            icon: 'brush',
            type: 'radio',
            value: '1+ baños',
            name: 'banos',
          },
          {
            label: '2+',
            icon: 'brush',
            type: 'radio',
            value: '2+ baños',
            name: 'banos',
          },
          {
            label: '3+',
            icon: 'brush',
            type: 'radio',
            value: '3+ baños',
            name: 'banos',
          },
          {
            label: '4+',
            icon: 'brush',
            type: 'radio',
            value: '4+ baños',
            name: 'banos',
          },
          {
            label: '5+',
            icon: 'brush',
            type: 'radio',
            value: '5+ baños',
            name: 'banos',
          },
        ],
      },
      {
        label: 'Estacionamientos',
        options: [
          {
            label: '0',
            icon: 'brush',
            type: 'radio',
            value: '0 estacionamientos',
            name: 'estacionamientos',
          },
          {
            label: '1+',
            icon: 'brush',
            type: 'radio',
            value: '1+ estacionamientos',
            name: 'estacionamientos',
          },
          {
            label: '2+',
            icon: 'brush',
            type: 'radio',
            value: '2+ estacionamientos',
            name: 'estacionamientos',
          },
          {
            label: '3+',
            icon: 'brush',
            type: 'radio',
            value: '3+ estacionamientos',
            name: 'estacionamientos',
          },
          {
            label: '4+',
            icon: 'brush',
            type: 'radio',
            value: '4+ estacionamientos',
            name: 'estacionamientos',
          },
        ],
      },
      {
        label: 'Tipo de anunciante',
        options: [
          {
            label: 'Todos',
            icon: 'brush',
            type: 'radio',
            value: 'Todos',
            name: 'anunciante',
          },
          {
            label: 'Inmobiliaria22',
            icon: 'brush',
            type: 'radio',
            value: 'Inmobiliaria',
            name: 'anunciante',
          },
          {
            label: 'Dueño directo',
            icon: 'brush',
            type: 'radio',
            value: 'Dueño directo',
            name: 'anunciante',
          },
        ],
      },
      {
        label: 'Antiguedad',
        options: [
          {
            label: 'En construcción',
            icon: 'brush',
            type: 'radio',
            value: 'En construcción',
            name: 'antiguedad',
          },
          {
            label: 'A estrenar',
            icon: 'brush',
            type: 'radio',
            value: 'A estrenar',
            name: 'antiguedad',
          },
          {
            label: 'Hasta 5 años',
            icon: 'brush',
            type: 'radio',
            value: 'Hasta 5 años',
            name: 'antiguedad',
          },
          {
            label: 'Más de 5 años',
            icon: 'brush',
            type: 'radio',
            value: 'Más de 5 años',
            name: 'antiguedad',
          },
        ],
      },
      {
        label: 'Fecha de publicación',
        options: [
          {
            label: 'Esta semana',
            icon: 'brush',
            type: 'radio',
            value: 'esta semana',
            name: 'publicacion',
          },
          {
            label: 'Este mes',
            icon: 'brush',
            type: 'radio',
            value: 'este mes',
            name: 'publicacion',
          },
          {
            label: 'Últimos 3 meses',
            icon: 'brush',
            type: 'radio',
            value: 'ultimos 3 meses',
            name: 'publicacion',
          },
          {
            label: 'Últimos 6 meses',
            icon: 'brush',
            type: 'radio',
            value: 'ultimos 6 meses',
            name: 'publicacion',
          },
        ],
      },
      // Checkbox
      {
        label: 'Ambientes',
        options: [
          // {
          //   label: 'Bodega',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'Bodega',
          //   name: 'ambiente',
          // },
          // {
          //   label: 'Área de cafetería',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'area de cafeteria',
          //   name: 'ambiente',
          // },
          // {
          //   label: 'Patio',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'patio',
          //   name: 'ambiente',
          // },
          // {
          //   label: 'Área común',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'area comun',
          //   name: 'ambiente',
          // },
          // {
          //   label: 'Baño propio',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'bano propio',
          //   name: 'ambiente',
          // },
          // {
          //   label: 'Cuarto de juegos',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'cuarto de juegos',
          //   name: 'ambiente',
          // },
        ],
      },
      {
        label: 'Exteriores',
        options: [
          // {
          //   label: 'Área BBQ',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'area bbq',
          //   name: 'exteriores',
          // },
          // {
          //   label: 'Balcón',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'balcon',
          //   name: 'exteriores',
          // },
          // {
          //   label: 'Cancha',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'cancha',
          //   name: 'exteriores',
          // },
          // {
          //   label: 'Jardín privado',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'jardin privado',
          //   name: 'exteriores',
          // },
          // {
          //   label: 'Laguna',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'laguna',
          //   name: 'exteriores',
          // },
          // {
          //   label: 'Piscina al aire libre',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'piscina al aire libre',
          //   name: 'exteriores',
          // },
        ],
      },
      {
        label: 'Servicios',
        options: [
          // {
          //   label: 'Área de lavanderia',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'area de lavanderia',
          //   name: 'servicios',
          // },
          // {
          //   label: 'Control de acceso',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'control de acceso',
          //   name: 'servicios',
          // },
          // {
          //   label: 'Áreas verdes',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'areas verdes',
          //   name: 'servicios',
          // },
          // {
          //   label: 'Parrilla',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'parrilla',
          //   name: 'servicios',
          // },
          // {
          //   label: 'Aire acondicionado',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'aire acondicionado',
          //   name: 'servicios',
          // },
          // {
          //   label: 'Calefacción',
          //   icon: 'brush',
          //   type: 'checkbox',
          //   value: 'calefaccion',
          //   name: 'servicios',
          // },
        ],
      },
    ],
  };

  const [propertyState, dispatch] = useReducer(propertyReducer, initialState);

  // GET all properties
  const fetchProperties = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
      dispatch({ type: 'FIND_ALL', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Error al cargar el usuario' });
    }
  };

  // GET property by id
  const findPropertyById = idfilter => {
    try {
      let response = [];
      dispatch({ type: 'SET_LOADING', payload: true });
      if (
        (propertyState.properties.length > 0 &&
          (propertyState.property === null ||
            propertyState.property === undefined)) ||
        (propertyState.properties.length > 0 &&
          propertyState.property.id !== idfilter)
      ) {
        response = propertyState.properties.filter(({ id }) => id === idfilter);
        dispatch({ type: 'FIND_BY_ID', payload: response[0] });
      }
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Error al buscar el usuario' });
    }
  };

  const unFilter = () => {
    try {
      dispatch({ type: 'UNFILTER', payload: null });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Error al buscar el usuario' });
    }
  };

  const filterBasic = formData => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      let payload = propertyState.properties;

      payload =
        formData.tipoOperacion.length > 0
          ? payload.filter(
              item => item.tipoOperacion === formData.tipoOperacion
            )
          : payload;

      payload =
        formData.direccionCompleta.length > 0
          ? payload.filter(
              item =>
                `${item.ubicacion.calleNumero} ${item.ubicacion.provincia} ${item.ubicacion.departamento}`
                  .toLowerCase()
                  .indexOf(formData.direccionCompleta.toLowerCase()) !== -1
            )
          : payload;

      payload =
        formData.tipoPropiedad.length > 0
          ? payload.filter(
              item => item.tipoPropiedad === formData.tipoPropiedad
            )
          : payload;

      payload =
        formData.banos.length > 0
          ? payload.filter(item => item.caracteristicas.banos >= formData.banos)
          : payload;

      payload =
        formData.estacionamientos.length > 0
          ? payload.filter(
              item =>
                item.caracteristicas.estacionamientos >=
                formData.estacionamientos
            )
          : payload;

      payload =
        formData.ambiente.length > 0
          ? payload.filter(item =>
              formData.ambiente.every(element =>
                item.aspectosAdicionales.areasComunes.includes(element)
              )
            )
          : payload;

      payload =
        formData.exteriores.length > 0
          ? payload.filter(item =>
              formData.exteriores.every(element =>
                item.aspectosAdicionales.exteriores.includes(element)
              )
            )
          : payload;

      payload =
        formData.servicios.length > 0
          ? payload.filter(item =>
              formData.servicios.every(element =>
                item.aspectosAdicionales.servicios.includes(element)
              )
            )
          : payload;
      dispatch({ type: 'FILTERING', payload: payload });
    } catch (error) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Error al cargar los usuarios',
      });
    }
  };

  const getCheckboxFilters = (char, namecheck = char) => {
    const set = new Set();
    const payload = [];
    propertyState.properties.forEach(property => {
      property.aspectosAdicionales[char].forEach(item => set.add(item));
    });

    set.forEach(item =>
      payload.push({
        label: item,
        icon: 'brush',
        type: 'checkbox',
        value: item,
        name: namecheck,
      })
    );

    return [...payload];
  };

  const setFilters = () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const payload = [...propertyState.filters];
      payload[6] = {
        label: 'Ambientes',
        options: getCheckboxFilters('areasComunes', 'ambiente'),
      };
      payload[7] = {
        label: 'Exteriores',
        options: getCheckboxFilters('exteriores'),
      };
      payload[8] = {
        label: 'Servicios',
        options: getCheckboxFilters('servicios'),
      };
      dispatch({ type: 'SET_FILTERS', payload: payload });
    } catch (error) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Error al cargar los usuarios',
      });
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    setFilters();
    console.log(propertyState.property);
  }, [propertyState.properties]);

  return (
    <PropertyContext.Provider
      value={{
        propertyState,
        fetchProperties,
        findPropertyById,
        filterBasic,
        unFilter,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

PropertyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePropertyContext = () => useContext(PropertyContext);

export default PropertyProvider;

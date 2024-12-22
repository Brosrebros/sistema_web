import axios from 'axios';
import { useEffect, useState } from 'react';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const useFrontpage = () => {
  const [state, setState] = useState(initialState);

  const fetchData = async () => {
    setState(initialState);
    try {
      const response = await axios.get(
        `https://ms-generic-client-prd-hycqhqdzgahya8cb.canadacentral-01.azurewebsites.net/api/portada`
      );
      setState({ data: response.data, loading: false, error: null });
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: err.message || 'Error inesperado',
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state];
};

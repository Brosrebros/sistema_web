import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppProvider from 'providers/AppProvider';
import { router } from 'routes';
import 'helpers/initFA';

const LoadingScreen = ({ show }) => (
  <div className={`loading-overlay ${show ? '' : 'hidden'}`}>
    <div className="spinner"></div>
  </div>
);

// Agregar validación de PropTypes
LoadingScreen.propTypes = {
  show: PropTypes.bool.isRequired, // `show` debe ser un booleano y es requerido
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Oculta la pantalla de carga después de 2 segundos
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
};

const container = document.getElementById('main');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

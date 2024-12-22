import React from 'react';
// import { version } from 'config';
import logo from 'assets/img/illustrations/logo-organizacion.png';

const Footer = () => (
<footer
  style={{
    borderRadius: '0.6rem',
    backgroundColor: '#940000',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem', // Espaciado interno
  }}
>
  <div
    className="py-2 text-center"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem', // Espaciado entre elementos
    }}
  >
    <div style={{ flex: '0 0 auto' }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '130px',
          filter: 'brightness(0) saturate(100%) invert(100%)',
        }}
      />
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.1rem', // Espaciado entre los textos
        alignItems: 'center',
      }}
    >
      <p className="footer_titulo_primera_pagina">organizacionsanchez.com</p>
      <p className="footer_titulo_primera_pagina">Términos y condiciones de uso</p>
      <p className="footer_titulo_primera_pagina">Términos y condiciones de contratación</p>
      <p className="footer_titulo_primera_pagina">Política de privacidad</p>
    </div>
  </div>
</footer>

);


export default Footer;

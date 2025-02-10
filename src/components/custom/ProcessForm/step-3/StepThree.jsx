import React from 'react';
import { DataContainer, ItemsContainer } from './StepThree.styles';
import CustomCheck from 'components/custom/CustomFormUI/CustomCheck/CustomCheck';

function StepThree() {
  const data = [
    {
      category: 'Características generales',
      items: [
        'Aire acondicionado',
        'Amoblado',
        'Ascensor',
        'Balcón',
        'Calefacción',
        'Cisterna',
        'Closets empotrados',
        'Depósito/Almacén',
        'Duplex/Triplex',
        'Estacionamiento privado',
        'Garaje techado',
        'Iluminación natural',
        'Jardín privado',
        'Parrilla (BBQ)',
        'Piscina',
        'Portón eléctrico',
        'Rejas de seguridad',
        'Seguridad 24/7',
        'Sistema de alarma',
        'Techos altos',
        'Piso de porcelanato',
        'Puertas de madera',
        'Terraza',
        'Vista al mar',
      ],
    },
    {
      category: 'Servicios',
      items: [
        'Agua potable',
        'Áreas comunes (Edificio)',
        'Áreas verdes',
        'Cable',
        'Desagüe',
        'Electricidad',
        'Gas natural',
        'Internet de alta velocidad',
        'Línea telefónica',
        'Mantenimiento incluido',
        'Portería/Recepción',
        'Servicio de limpieza',
        'Sistema de video vigilancia',
        'Sistema contra incendios',
        'Suministro de gas',
        'Tanque elevado',
        'Tratamiento de agua',
        'Zona de lavandería',
        'Generador eléctrico',
        'Energía solar',
        'Seguridad 24/7',
      ],
    },
    {
      category: 'Ambientes',
      items: [
        'Almacén/Depósito',
        'Baño de visitas',
        'Baño principal',
        'Cocina abierta',
        'Cocina cerrada',
        'Comedor diario',
        'Cuarto de servicio',
        'Despensa',
        'Estudio/Oficina',
        'Gimnasio',
        'Jacuzzi',
        'Lavandería',
        'Sala de estar',
        'Sala de juegos',
        'Sala principal',
        'Salón familiar',
        'Sauna',
        'Sala de cine en casa',
        'Terraza techada',
        'Vestidor/Walk-in closet',
        'Habitación de visitas',
      ],
    },
    {
      category: 'Alrededores',
      items: [
        'Áreas recreativas',
        'Banco cercano',
        'Cerca de avenidas',
        'Cerca de colegios',
        'Cerca de hospitales',
        'Cerca de parques',
        'Cerca de transporte público',
        'Cerca de centro comercial',
        'Ciclovías',
        'Gimnasio cercano',
        'Mercado o supermercado',
        'Parques infantiles',
        'Playa cercana',
        'Playa o parque central',
        'Restaurantes o cafés',
        'Zona industrial',
        'Zona comercial',
        'Zona residencial tranquila',
        'Estación de policía cercana',
        'Autopista cercana',
        'Universidad cercana',
      ],
    },
  ];

  return data.map(section => (
    <DataContainer key={section.category}>
      <h4>{section.category}</h4>
      <ItemsContainer>
        {section.items.map(item => (
          <li key={item}>
            <CustomCheck label={item} htmlFor={item} type="checkbox" />
          </li>
        ))}
      </ItemsContainer>
    </DataContainer>
  ));
}

export default StepThree;
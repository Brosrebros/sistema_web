import React, { useState, useEffect } from 'react';
import {
  PropertyDataContainer,
  PropertyMainData,
  IconDataContainer,
  TagPriceContainer,
  DescriptionContainer,
  Separator,
  FeaturesContainer,
  CustomButton,
  MapTitleContainer,
  ProyectCard,
  SliderContainer,
} from './PropertyData.styles';

import PropertyDetailLocation from 'components/property/propertydetail/PropertyDetailLocation';
import CustomBadge from '../CustomBadge/CustomBadge';
import CustomSliderButton from '../CustomButtons/CustomSliderButton/CustomSliderButton';
import calculatorIcon from 'assets/img/icons/calculator.svg';

import pinIcon from 'assets/img/icons/location.svg';
import areaIcon from 'assets/img/icons/lucide_chart-area.svg';
import banoIcon from 'assets/img/icons/iconoir_bathroom.svg';
import garageIcon from 'assets/img/icons/hugeicons_car-parking-02.svg';
import bedIcon from 'assets/img/icons/lucide_bed.svg';
import dateIcon from 'assets/img/icons/lets-icons_calendar-light.svg';
import arrowDown from 'assets/img/icons/arrow-down.svg';
import houseIcon from 'assets/img/icons/system-uicons_home-door.svg';
import moneyIcon from 'assets/img/icons/hugeicons_payment-02.svg';

import taskIcon from 'assets/img/icons/task.svg';
import serviceIcon from 'assets/img/icons/electricity.svg';
import ambientIcon from 'assets/img/icons/coffee.svg';
import buildsIcon from 'assets/img/icons/building-4.svg';

import taskIconWhite from 'assets/img/icons/task-white.svg';
import serviceIconWhite from 'assets/img/icons/electricity-white.svg';
import ambientIconWhite from 'assets/img/icons/coffee-white.svg';
import buildsIconWhite from 'assets/img/icons/building-white.svg';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function PropertyData({ property, type }) {
  const [isActive, setIsActive] = useState('caracteristicas');
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

  const handleActiveButton = button => {
    setIsActive(button);
  };

  const sliderSettings = {
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    infinite: false,
  };

  useEffect(() => {
    const lat = property?.ubicacion?.latitud
      ? parseFloat(
          property.ubicacion.latitud.toString().trim().replace(',', '.')
        )
      : 0;
    const long = property?.ubicacion?.longitud
      ? parseFloat(
          property.ubicacion.longitud.toString().trim().replace(',', '.')
        )
      : 0;

    console.log(`Latitud: ${lat}, Longitud: ${long}`);
  }, [property]);

  useEffect(() => {
    const lat = property?.ubicacion?.latitud
      ? parseFloat(
          property.ubicacion.latitud.toString().trim().replace(',', '.')
        )
      : 0;
    const long = property?.ubicacion?.longitud
      ? parseFloat(
          property.ubicacion.longitud.toString().trim().replace(',', '.')
        )
      : 0;

    setCoordinates({ lat, long });
  }, [property]);

  return (
    <PropertyDataContainer>
      <div>
        <PropertyMainData>
          <h3>
            Fantástica casa residencial de 200 m2 en Calleria, barrio seguro
          </h3>

          <div>
            <IconDataContainer>
              <img src={areaIcon} alt="area" />
              <span>
                <b>200</b> m2
              </span>
            </IconDataContainer>
            {type === 'proyect' ? (
              <>
                <IconDataContainer>
                  <img src={houseIcon} alt="baño" />
                  <span>
                    <b>252</b> Unidades
                  </span>
                </IconDataContainer>
                <IconDataContainer>
                  <img src={moneyIcon} alt="garage" />
                  <span>
                    <b>60</b> Cuotas
                  </span>
                </IconDataContainer>
              </>
            ) : (
              <>
                <IconDataContainer>
                  <img src={banoIcon} alt="baño" />
                  <span>
                    <b>2</b> Baños
                  </span>
                </IconDataContainer>
                <IconDataContainer>
                  <img src={garageIcon} alt="garage" />
                  <span>
                    <b>1</b> Cochera
                  </span>
                </IconDataContainer>
                <IconDataContainer>
                  <img src={bedIcon} alt="bed" />
                  <span>
                    <b>1</b> Dormitorio
                  </span>
                </IconDataContainer>
                <IconDataContainer>
                  <img src={dateIcon} alt="date" />
                  <span>
                    <b>10</b> Años
                  </span>
                </IconDataContainer>
              </>
            )}
          </div>
        </PropertyMainData>

        <TagPriceContainer>
          <div>
            {type === 'proyect' ? (
              <CustomBadge color="turquoise">Proyecto</CustomBadge>
            ) : (
              <CustomBadge color="red">Venta</CustomBadge>
            )}
            <span>Casa</span>

            {type === 'proyect' ? (
              <CustomBadge color="gray">Financiamiento directo</CustomBadge>
            ) : null}
          </div>

          <span>Precio</span>

          <h3>S/. 918,000</h3>
        </TagPriceContainer>
      </div>

      <div>
        {type === 'proyect' ? (
          <SliderContainer>
            <CustomSliderButton {...sliderSettings}>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
              <ProyectCard>
                <img src="" alt="" />
                <span>Terreno</span>
                <div>
                  <CustomBadge color="gray">300 m2</CustomBadge>
                  <CustomBadge color="gray">Residencial</CustomBadge>
                </div>
                <div>
                  <span>Precio</span>
                  <h3>S/. 20,000</h3>
                </div>
                <PrimaryCustomButton>
                  <img src={calculatorIcon} alt="calculator" />
                  Cotizar
                </PrimaryCustomButton>
              </ProyectCard>
            </CustomSliderButton>
          </SliderContainer>
        ) : null}
        <DescriptionContainer>
          <h4>Descripción</h4>
          <p>
            Linda casa de 200m2 ubicada dentro de un pasaje en el distrito de
            Calleria. En el pasaje encontramos 8 viviendas. La casa tiene
            ingreso directo a través de unas escaleras, lo que hace ideal para
            parejas o familia joven. La sala y comedor con excelente
            iluminación, cocina con reposteros altos y bajo y espacio para
            comedor de diario. Cuatro amplios dormitorios con acabados de lujo y
            un diseño minimalista con tendencias contemporáneas estilizadas a la
            época...
          </p>

          <div>
            Leer descripción completa
            <img src={arrowDown} alt="arrow" />
          </div>
        </DescriptionContainer>
        <Separator />
        <FeaturesContainer>
          <h4>Conoce más sobre este inmueble</h4>
          <div>
            <CustomButton
              onClick={() => handleActiveButton('caracteristicas')}
              isActive={isActive === 'caracteristicas'}
            >
              <img src={taskIcon} alt="task" />
              Caracteristicas generales
            </CustomButton>
            <CustomButton
              onClick={() => handleActiveButton('servicios')}
              isActive={isActive === 'servicios'}
            >
              <img src={serviceIcon} alt="service" />
              Servicios
            </CustomButton>
            <CustomButton
              onClick={() => handleActiveButton('ambientes')}
              isActive={isActive === 'ambientes'}
            >
              <img src={ambientIcon} alt="ambient" />
              Ambientes
            </CustomButton>
            <CustomButton
              onClick={() => handleActiveButton('alrededores')}
              isActive={isActive === 'alrededores'}
            >
              <img src={buildsIcon} alt="builds" />
              Alrededores
            </CustomButton>
          </div>
          <div>
            <ul>
              <li>Chimenea</li>
              <li>Jardín(es)</li>
              <li>Piscina</li>
              <li>Terraza</li>
              <li>Cuartos de servicio</li>
              <li>Seguridad</li>
            </ul>
            <ul>
              <li>Cerca a colegios</li>
              <li>Número de pisos : 0</li>
              <li>Closet</li>
              <li>Walk in closet</li>
            </ul>
          </div>
        </FeaturesContainer>
        <Separator />
        <MapTitleContainer>
          <h4>Mapa de ubicación</h4>
          <span>
            <img src={pinIcon} alt="pin" />
            <p>Jr. Salaverry N°475, Calleria, Ucayali, Perú</p>
          </span>
          <PropertyDetailLocation
            markers={{
              lat: coordinates.lat,
              long: coordinates.long,
              name: property?.ubicacion?.provincia || 'Ubicación no disponible',
              street: property?.ubicacion?.calleNumero || 'Sin calle',
              location: property?.ubicacion?.departamento || 'Sin departamento',
            }}
            type={type}
          />
        </MapTitleContainer>
      </div>
    </PropertyDataContainer>
  );
}

export default PropertyData;

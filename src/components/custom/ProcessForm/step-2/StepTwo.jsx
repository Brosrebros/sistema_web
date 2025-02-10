import React from 'react';
import {
  DataContainer,
  PictureContainer,
  LinkContainer,
} from './StepTwo.styles';

import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

import exportIcon from 'assets/img/icons/export-2.svg';
import warningIcon from 'assets/img/icons/Info.svg';

function StepTwo() {
  return (
    <>
      <DataContainer>
        <div>
          <h4>Añade fotos</h4>
          <p>
            Carga entre 5 y 50 fotos. Una vez cargadas, arrastra y suéltalas
            para cambiarlas de orden
          </p>
        </div>
        <PictureContainer>
          <div>
            <img src={exportIcon} alt="#" />
            <span>Arrastra o agrega las fotos de tu inmueble</span>
          </div>
          <span>
            <img src={warningIcon} alt="#" />
            Recuerda que, se admiten archivos en formato JPG, JPEG y PNG desde
            500 px por 500 px hasta 6000 px por 6000 px.
          </span>
        </PictureContainer>
      </DataContainer>
      <DataContainer>
        <div>
          <h4>Añade videos</h4>
          <p>Carga hasta 10 videos de Youtube</p>
        </div>
        <LinkContainer>
          <CustomInput placeholder="Ingresa el link del video" />
          <PrimaryCustomButton>Cargar video</PrimaryCustomButton>
        </LinkContainer>
      </DataContainer>
    </>
  );
}

export default StepTwo;

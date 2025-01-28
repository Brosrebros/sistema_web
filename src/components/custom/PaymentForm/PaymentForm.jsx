import React from 'react';
import {
  PaymentFormContainer,
  InputLabelContainer,
  SaveInfoContainer,
  TextButtonContainer,
} from './PaymentForm.styles';
import CustomInput from '../CustomFormUI/CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

const paisesOptions = [
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Brasil', label: 'Brasil' },
  { value: 'Canadá', label: 'Canadá' },
  { value: 'Chile', label: 'Chile' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'España', label: 'España' },
  { value: 'Estados Unidos', label: 'Estados Unidos' },
  { value: 'Francia', label: 'Francia' },
  { value: 'Italia', label: 'Italia' },
  { value: 'Japón', label: 'Japón' },
  { value: 'México', label: 'México' },
  { value: 'Perú', label: 'Perú' },
  { value: 'Reino Unido', label: 'Reino Unido' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Venezuela', label: 'Venezuela' },
];

function PaymentForm() {
  return (
    <PaymentFormContainer>
      <h3>Método de pago</h3>
      <InputLabelContainer>
        <h4>Información de la tarjeta</h4>
        <CustomInput placeholder={'1234 1234 1234 1234'} card={true} />
        <CustomInput placeholder={'MM/AA'} />
        <CustomInput placeholder={'CVC'} />
      </InputLabelContainer>
      <InputLabelContainer>
        <h4>Nombre del titular de la tarjeta</h4>
        <CustomInput placeholder={'Nombres'} />
        <CustomInput placeholder={'Apellidos'} />
      </InputLabelContainer>
      <InputLabelContainer>
        <h4>País o región</h4>
        <CustomSelect
          id="pais"
          name="pais"
          value="pais"
          placeholder="Pais o región"
          options={paisesOptions}
          background="form"
        ></CustomSelect>
      </InputLabelContainer>
      <InputLabelContainer>
        <h4>Información de contacto</h4>
        <CustomInput placeholder={'¿En dónde lo buscas?'} />
      </InputLabelContainer>
      <SaveInfoContainer>
        <input type="checkbox" />
        <p>
          <b>Guardar mi información mediante un proceso de compra seguro</b>
          <p>Paga con mayor rapidez en la organización Sanchez</p>
        </p>
      </SaveInfoContainer>
      <div>
        <input type="checkbox" />
        <p>
          <b>Estoy comprando en calidad de empresa</b>
        </p>
      </div>
      <TextButtonContainer>
        <p>
          Todos los pagos de los servicios de pago son definitivos y no
          reembolsables ni intercambiables, salvo que lo exija la legislación
          aplicable. El uso indebido de organización Sanchez Premium, como
          fraude, spam, etc., dará lugar a la baja de su cuenta del programa, la
          suspensión de la organización Sanchez u otra acción que la
          organización Sanchez considere apropiada.
        </p>
        <PrimaryCustomButton>Actualizarse</PrimaryCustomButton>
        <p>
          Si confirmas tu suscripción, permitirás que la organización Sanchez
          efectúe cargos de futuros pagos conforme a las condiciones
          estipuladas. Siempre puedes cancelar tu suscripción.
        </p>
      </TextButtonContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;

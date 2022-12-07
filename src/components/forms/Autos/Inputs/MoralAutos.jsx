import { useEffect } from "react";
import styled from "styled-components";
import InputText from "../../InputText";
import ErrorInput from "../../ErrorInput";

function MoralAutos(props) {
  useEffect(() => {
    props.validationONMoral();
  }, [props.state]);

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <FormMoralAutos>
      <div>
        <InputText
          type="text"
          placeholder="Razón Social *"
          name="razonSocial"
          value={props.state.razonSocial}
          onChange={props.handleChange}
          validation={props.validationRazon}
          errorFX={props.error.errorFX__razonSocial}
        />
        <ErrorInput
          errorFX={props.error.errorFX__razonSocial}
          errorNull={props.error.errorNull__razonSocial}
          textNull="Ingresa la razón social"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="RFC *"
          name="rfc"
          value={props.state.rfc}
          onChange={props.handleChange}
          validation={props.validationRFC}
          errorFX={props.error.errorFX__rfc}
        />
        <ErrorInput
          errorFX={props.error.errorFX__rfc}
          errorNull={props.error.errorNull__rfc}
          errorTest={props.error.errorTest__rfc}
          textError="El RFC no es valido"
          textNull="Ingresa el RFC"
        />
      </div>
      <div>
        <InputText
          type="email"
          placeholder="Correo Electrónico *"
          name="correo"
          value={props.state.correo}
          onChange={props.handleChange}
          validation={props.validationCorreo}
          errorFX={props.error.errorFX__correo}
        />
        <ErrorInput
          errorFX={props.error.errorFX__correo}
          errorNull={props.error.errorNull__correo}
          errorTest={props.error.errorTest__correo}
          textError="El correo electrónico no es valido"
          textNull="Ingresa un correo electrónico"
        />
      </div>
      <div>
        <InputText
          type="number"
          placeholder="Teléfono *"
          name="tel"
          value={props.state.tel}
          onChange={props.handleChange}
          validation={props.validationTel}
          errorFX={props.error.errorFX__tel}
        />
        <ErrorInput
          errorFX={props.error.errorFX__tel}
          errorNull={props.error.errorNull__tel}
          errorTest={props.error.errorTest__tel}
          textError="El número telefónico es muy corto"
          textNull="Ingresa el número telefónico"
        />
      </div>
    </FormMoralAutos>
  );
}

const FormMoralAutos = styled.form`
  display: grid;
  width: 70%;
  margin: 0 auto;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    width: 80%;
  }
`;

export default MoralAutos;

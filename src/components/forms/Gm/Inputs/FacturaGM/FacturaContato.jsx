import styled from "styled-components";
import InputText from "../../../InputText";
import ErrorInput from "../../../ErrorInput";

function FacturaContato(props) {
  return (
    <ContainerContactoFactura>
      <div>
        <InputText
          type="text"
          placeholder="RFC *"
          name="rfcFactura"
          value={props.state.rfcFactura}
          onChange={props.handleChange}
          validation={props.validationRFCFactura}
          errorFX={props.error.errorFX__rfcFactura}
        />
        <ErrorInput
          errorFX={props.error.errorFX__rfcFactura}
          errorNull={props.error.errorNull__rfcFactura}
          errorTest={props.error.errorTest__rfcFactura}
          textError="El RFC no es valido"
          textNull="Ingresa el RFC"
        />
      </div>
      <div>
        <InputText
          type="email"
          placeholder="Correo Electrónico *"
          name="correoFactura"
          value={props.state.correoFactura}
          onChange={props.handleChange}
          validation={props.validationCorreoFactura}
          errorFX={props.error.errorFX__correoFactura}
        />
        <ErrorInput
          errorFX={props.error.errorFX__correoFactura}
          errorNull={props.error.errorNull__correoFactura}
          errorTest={props.error.errorTest__correoFactura}
          textError="El correo electrónico no es valido"
          textNull="Ingresa un correo electrónico"
        />
      </div>
      <div>
        <InputText
          type="tel"
          placeholder="Teléfono *"
          name="telFactura"
          value={props.state.telFactura}
          onChange={props.handleChange}
          validation={props.validationTelFactura}
          errorFX={props.error.errorFX__telFactura}
        />
        <ErrorInput
          errorFX={props.error.errorFX__telFactura}
          errorNull={props.error.errorNull__telFactura}
          errorTest={props.error.errorTest__telFactura}
          textError="El número telefónico no es válido"
          textNull="Ingresa el número telefónico"
        />
      </div>
    </ContainerContactoFactura>
  );
}

const ContainerContactoFactura = styled.section`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default FacturaContato;

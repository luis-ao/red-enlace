import styled from "styled-components";
import InputText from "../../../InputText";
import InputSelect from "../../../InputSelect";
import ErrorInput from "../../../ErrorInput";
import ErrorInputInit from "../../../ErrorInputInit";

function DireccionAutos(props) {
  return (
    <FormAuto>
      <div>
        <InputText
          type="text"
          placeholder="Calle *"
          name="calle"
          value={props.state.calle}
          onChange={props.onChange}
          validation={props.validationCalle}
          errorFX={props.error.errorFX__calle}
        />
        <ErrorInput
          errorFX={props.error.errorFX__calle}
          errorNull={props.error.errorNull__calle}
          textNull="Ingresa la calle"
        />
        <InputText
          type="text"
          placeholder="Colonia *"
          name="colonia"
          value={props.state.colonia}
          onChange={props.onChange}
          validation={props.validationColonia}
          errorFX={props.error.errorFX__colonia}
        />
        <ErrorInput
          errorFX={props.error.errorFX__colonia}
          errorNull={props.error.errorNull__colonia}
          textNull="Ingresa la colonia"
        />
        <InputText
          type="text"
          placeholder="Estado/Provincia *"
          name="estado"
          value={props.state.estado}
          onChange={props.onChange}
          validation={props.validationEstado}
          errorFX={props.error.errorFX__estado}
        />
        <ErrorInput
          errorFX={props.error.errorFX__estado}
          errorNull={props.error.errorNull__estado}
          textNull="Ingresa el estado o provincia"
        />
      </div>
      <div>
        <InputText
          type="number"
          placeholder="Número Exterior *"
          name="numExt"
          value={props.state.numExt}
          onChange={props.onChange}
          validation={props.validationNumExt}
          errorFX={props.error.errorFX__numExt}
        />
        <ErrorInput
          errorFX={props.error.errorFX__numExt}
          errorNull={props.error.errorNull__numExt}
          textNull="Ingresa el número exterior"
        />
        <InputText
          type="text"
          placeholder="Alcaldía *"
          name="alcaldia"
          value={props.state.alcaldia}
          onChange={props.onChange}
          validation={props.validationAlcaldia}
          errorFX={props.error.errorFX__alcaldia}
        />
        <ErrorInput
          errorFX={props.error.errorFX__alcaldia}
          errorNull={props.error.errorNull__alcaldia}
          textNull="Ingresa la alcaldía*"
        />
        <InputText
          type="tel"
          placeholder="Teléfono *"
          name="telFactura"
          value={props.state.telFactura}
          onChange={props.onChange}
          validation={props.validationTel}
          errorFX={props.error.errorFX__tel}
        />
        <ErrorInput
          errorFX={props.error.errorFX__tel}
          errorNull={props.error.errorNull__tel}
          errorTest={props.error.errorTest__tel}
          textError="El teléfono no es válido"
          textNull="Ingresa un número sin espacios"
        />
      </div>
      <div>
        <InputText
          type="number"
          placeholder="Número Interior *"
          name="numInt"
          value={props.state.numInt}
          onChange={props.onChange}
          validation={props.validationNumInt}
          errorFX={props.error.errorFX__numInt}
        />
        <ErrorInput
          errorFX={props.error.errorFX__numInt}
          errorNull={props.error.errorNull__numInt}
          textNull="Ingresa el número interior"
        />
        <InputText
          type="number"
          placeholder="CP *"
          name="cp"
          value={props.state.cp}
          onChange={props.onChange}
          validation={props.validationCP}
          errorFX={props.error.errorFX__cp}
        />
        <ErrorInput
          errorFX={props.error.errorFX__cp}
          errorNull={props.error.errorNull__cp}
          errorTest={props.error.errorTest__cp}
          textError="código postal no válido"
          textNull="Ingresa el código postal"
        />
      </div>
    </FormAuto>
  );
}
const FormAuto = styled.form`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default DireccionAutos;

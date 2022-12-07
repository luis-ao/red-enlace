import styled from "styled-components";
import InputText from "../../../InputText";
import ErrorInput from "../../../ErrorInput";

function FacturaDireccion(props) {
  return (
    <>
      <RowFactura top={true}>
        <div>
          <InputText
            type="text"
            placeholder="Calle *"
            name="calle"
            value={props.state.calle}
            onChange={props.handleChange}
            validation={props.validationCalle}
            errorFX={props.error.errorFX__calle}
          />
          <ErrorInput
            errorFX={props.error.errorFX__calle}
            errorNull={props.error.errorNull__calle}
            textNull="Ingresa la calle"
          />
        </div>
        <div>
          <InputText
            type="number"
            placeholder="Número Exterior *"
            name="noExterior"
            value={props.state.noExterior}
            onChange={props.handleChange}
            validation={props.validationNumExt}
            errorFX={props.error.errorFX__noExterior}
          />
          <ErrorInput
            errorFX={props.error.errorFX__noExterior}
            errorNull={props.error.errorNull__noExterior}
            textNull="Ingresa el número exterior"
          />
        </div>
        <div>
          <InputText
            type="number"
            placeholder="Número Interior *"
            name="noInterior"
            value={props.state.noInterior}
            onChange={props.handleChange}
            validation={props.validationNumInt}
            errorFX={props.error.errorFX__noInterior}
          />
          <ErrorInput
            errorFX={props.error.errorFX__noInterior}
            errorNull={props.error.errorNull__noInterior}
            textNull="Ingresa el número interior"
          />
        </div>
      </RowFactura>
      <RowFactura>
        <div>
          <InputText
            type="number"
            placeholder="CP *"
            name="cp"
            value={props.state.cp}
            onChange={props.handleChange}
            validation={props.validationCP}
            errorFX={props.error.errorFX__cp}
          />
          <ErrorInput
            errorFX={props.error.errorFX__cp}
            errorNull={props.error.errorNull__cp}
            errorTest={props.error.errorTest__cp}
            textError="el código postal no es válido"
            textNull="Ingresa el código postal"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Alcaldía *"
            name="alcaldia"
            value={props.state.alcaldia}
            onChange={props.handleChange}
            validation={props.validationAlcaldia}
            errorFX={props.error.errorFX__alcaldia}
          />
          <ErrorInput
            errorFX={props.error.errorFX__alcaldia}
            errorNull={props.error.errorNull__alcaldia}
            textNull="Ingresa la alcadía"
          />
        </div>
        <div>
          <InputText
            type="colonia"
            placeholder="Colonia *"
            name="colonia"
            value={props.state.colonia}
            onChange={props.handleChange}
            validation={props.validationColonia}
            errorFX={props.error.errorFX__colonia}
          />
          <ErrorInput
            errorFX={props.error.errorFX__colonia}
            errorNull={props.error.errorNull__colonia}
            textNull="Ingresa la colonia"
          />
        </div>
      </RowFactura>
      <RowFactura>
        <div>
          <InputText
            type="text"
            placeholder="Estado/Provincia *"
            name="estado"
            value={props.state.estado}
            onChange={props.handleChange}
            validation={props.validationEstado}
            errorFX={props.error.errorFX__estado}
          />
          <ErrorInput
            errorFX={props.error.errorFX__estado}
            errorNull={props.error.errorNull__estado}
            textNull="Ingresa el estado"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Número de póliza *"
            name="numPoliza"
            value={props.state.numPoliza}
            onChange={props.handleChange}
            validation={props.validationNumPoliza}
            errorFX={props.error.errorFX__numPoliza}
          />
          <ErrorInput
            errorFX={props.error.errorFX__numPoliza}
            errorNull={props.error.errorNull__numPoliza}
            textNull="Ingresa el num. de póliza"
          />
        </div>
        <div>
          <InputText
            type="compania"
            placeholder="¿Con qué compañía la tienes? *"
            name="compania"
            value={props.state.compania}
            onChange={props.handleChange}
            validation={props.validationCompania}
            errorFX={props.error.errorFX__compania}
          />
          <ErrorInput
            errorFX={props.error.errorFX__compania}
            errorNull={props.error.errorNull__compania}
            textNull="Ingresa la compañia"
          />
        </div>
      </RowFactura>
    </>
  );
}

const RowFactura = styled.section`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;

  ${({top}) => top ? "margin-top: 3rem;" : ""}

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }
`;

export default FacturaDireccion;

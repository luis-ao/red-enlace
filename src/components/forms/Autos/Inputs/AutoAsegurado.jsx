import { useEffect } from "react";
import styled from "styled-components";
import InputText from "../../InputText";
import ErrorInput from "../../ErrorInput";
import InputTextarea from "../../InputTextarea";

function AutoAsegurado(props) {
  useEffect(() => {
    props.activeStep();
  }, []);

  useEffect(() => {
    props.validationONStep2();
  }, [props.state]);

  return (
    <>
      <FormAuto>
        <div>
          <InputText
            type="text"
            placeholder="Conductor Habitual *"
            name="conductor"
            value={props.state.conductor}
            onChange={props.onChange}
            validation={props.validationConductor}
            errorFX={props.error.errorFX__conductor}
          />
          <ErrorInput
            errorFX={props.error.errorFX__conductor}
            errorNull={props.error.errorNull__conductor}
            textNull="Ingresa el nombre del conductor"
          />
          <InputText
            type="number"
            placeholder="Num. de póliza *"
            name="poliza"
            value={props.state.poliza}
            onChange={props.onChange}
            validation={props.validationPoliza}
            errorFX={props.error.errorFX__poliza}
          />
          <ErrorInput
            errorFX={props.error.errorFX__poliza}
            errorNull={props.error.errorNull__poliza}
            textNull="Ingresa el num. de serie"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Marca *"
            name="marca"
            value={props.state.marca}
            onChange={props.onChange}
            validation={props.validationMarca}
            errorFX={props.error.errorFX__marca}
          />
          <ErrorInput
            errorFX={props.error.errorFX__marca}
            errorNull={props.error.errorNull__marca}
            textNull="Ingresa la marca"
          />
          <InputText
            type="number"
            placeholder="Num. de serie *"
            name="serie"
            value={props.state.serie}
            onChange={props.onChange}
            validation={props.validationSerie}
            errorFX={props.error.errorFX__serie}
          />
          <ErrorInput
            errorFX={props.error.errorFX__serie}
            errorNull={props.error.errorNull__serie}
            textNull="Ingresa el num. de serie"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Modelo *"
            name="modelo"
            value={props.state.modelo}
            onChange={props.onChange}
            validation={props.validationModelo}
            errorFX={props.error.errorFX__modelo}
          />
          <ErrorInput
            errorFX={props.error.errorFX__modelo}
            errorNull={props.error.errorNull__modelo}
            textNull="Ingresa el modelo"
          />
          <InputText
            type="text"
            placeholder="Placas *"
            name="placas"
            value={props.state.placas}
            onChange={props.onChange}
            validation={props.validationPlacas}
            errorFX={props.error.errorFX__placas}
          />
          <ErrorInput
            errorFX={props.error.errorFX__placas}
            errorNull={props.error.errorNull__placas}
            textNull="Ingresa las placas"
          />
        </div>
      </FormAuto>
      <FormAutoDesc>
        <div>
          <InputTextarea
            name="descripcion"
            value={props.state.descripcion}
            onChange={props.onChange}
            validation={props.validationDescripcion}
            errorFX={props.error.errorFX__descripcion}
            placeholder="Descripcion breve del auto *"
            height={"10rem"}
          />
          <ErrorInput
            errorFX={props.error.errorFX__descripcion}
            errorNull={props.error.errorNull__descripcion}
            textNull="Ingresa una descripcion breve del auto"
          />
        </div>
      </FormAutoDesc>
    </>
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

const FormAutoDesc = styled.form`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 66% 30%;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default AutoAsegurado;

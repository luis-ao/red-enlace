import { useEffect } from "react";
import styled from "styled-components";
import DireccionAutos from "./PagoAutos/DireccionAutos";
import AgentePagoInputs from "../../AgentePagoInputs";
import InputDate from "../../InputDate";
import ErrorInputInit from "../../ErrorInputInit";

function PagoAutos(props) {
  useEffect(() => {
    props.activeStep();
  }, []);

  useEffect(() => {
    props.validationONStep4();
  }, [props.state]);

  

  return (
    <section>
      <VigenciaAutos>
        <div>
          <InputDate
            label="Inicio de Vigencia *"
            name="inicioVigencia"
            onChange={props.handleChange}
            value={props.state.inicioVigencia}
            validation={props.validationInicioVigencia}
            errorFX={props.error.errorFX__inicioVigencia}
            changeInit={props.changeInitInicioVigencia}
            init={props.error.initInicioVigencia}
          />
          <ErrorInputInit
            errorFX={props.error.errorFX__inicioVigencia}
            errorNull={props.error.errorNull__inicioVigencia}
            textNull="Ingresa el inicio de la vigencia"
            init={props.error.initInicioVigencia}
          />
        </div>
        <div>
          <InputDate
            label="Fin de Vigencia *"
            name="finVigencia"
            onChange={props.handleChange}
            value={props.state.finVigencia}
            validation={props.validationFinVigencia}
            errorFX={props.error.errorFX__finVigencia}
            changeInit={props.changeInitFinVigencia}
            init={props.error.initFinVigencia}
          />
          <ErrorInputInit
            errorFX={props.error.errorFX__finVigencia}
            errorNull={props.error.errorNull__finVigencia}
            textNull="Ingresa el fin de la vigencia"
            init={props.error.initFinVigencia}
          />
        </div>
      </VigenciaAutos>
      <DireccionAutos
        onChange={props.handleChange}
        state={props.state}
        error={props.error}
        validationCalle={props.validationCalle}
        validationNumExt={props.validationNumExt}
        validationNumInt={props.validationNumInt}
        validationColonia={props.validationColonia}
        validationAlcaldia={props.validationAlcaldia}
        validationCP={props.validationCP}
        validationEstado={props.validationEstado}
        validationTel={props.validationTel}
      />
      <AgentePagoInputs
        onChange={props.handleChange}
        valuePago={props.state.formaDePago}
        validationPago={props.validationFormaDePago}
        errorFX__pago={props.error.errorFX__formaDePago}
        errorNull__pago={props.error.errorNull__formaDePago}
        initPago={props.error.initFormaDePago}
        changeInitPago={props.changeInitFormaDePago}
        valueAgente={props.state.codigoAgente}
      />
    </section>
  );
}
const VigenciaAutos = styled.div`
  display: grid;
  grid-template-columns: 47% 47%;
  justify-content: space-between;
  gap: 0 2rem;
  margin-bottom: 8rem;
  align-items: flex-end;
  margin: 0 auto;
  width: 80%;
  margin-top: 6rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default PagoAutos;

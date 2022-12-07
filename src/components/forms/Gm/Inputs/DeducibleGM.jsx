import { useEffect } from "react";
import InputRadio from "../../InputRadio";

function DeducibleGM(props) {
  useEffect(() => {
    props.validationONStep4();
  }, [props.state]);

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <>
      <div id="formStep4" className="deducibleStep4">
        Deducible:{" "}
        <p className="deducibleStep4__number">${props.state.deducible}</p>
      </div>
      <form className="containerFormStep4">
        <div className="titleStep4">
          <h5>Porcentaje</h5>
          <h5>Costo Anual</h5>
        </div>
        <div className="grid3Colum">
          <h6> 100% </h6>
          <h6> $ </h6>
          <InputRadio
            label="Contratar"
            id="100"
            name="porcentajeDeducible"
            value="100"
            checked={props.state.porcentajeDeducible}
            onChange={props.handleChange}
          />
        </div>
        <div className="grid3Colum">
          <h6> 80% </h6>
          <h6> $ </h6>
          <InputRadio
            label="Contratar"
            name="porcentajeDeducible"
            value="80"
            id="80"
            checked={props.state.porcentajeDeducible}
            onChange={props.handleChange}
          />
        </div>
        <div className="grid3Colum">
          <h6> 50% </h6>
          <h6> $ </h6>
          <InputRadio
            label="Contratar"
            name="porcentajeDeducible"
            value="50"
            id="50"
            checked={props.state.porcentajeDeducible}
            onChange={props.handleChange}
          />
        </div>
        <div className="grid3Colum">
          <h6> 30% </h6>
          <h6> $ </h6>
          <InputRadio
            label="Contratar"
            name="porcentajeDeducible"
            value="30"
            id="30"
            checked={props.state.porcentajeDeducible}
            onChange={props.handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default DeducibleGM;

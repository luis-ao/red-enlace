import { useEffect } from "react";
import InputDate from "../../InputDate";
import InputMoney from "../../InputMoney";
import ErrorInput from "../../ErrorInput";
import ErrorInputInit from "../../ErrorInputInit";
import "../../../../styles/forms/Gm/Step3GM.css";

function Poliza(props) {
  useEffect(() => {
    props.validationONStep3();
  }, [props.state]);

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <form id="formStep3GM" className="formStep3GM">
      <div className="step3GM__money">
        <div className="step3GM__moneyInput">
          <label className="step3GM__moneyInput_label">
            ¿Qué deducible tienes actualmente? *
            <br />
            <span>Si no lo conoces, puedes consultarlo en tu carátula</span>
          </label>
          <InputMoney
            name="deducible"
            onChange={props.handleChange}
            value={props.state.deducible}
            validation={props.validationDeducible}
            errorFX={props.error.errorFX__deducible}
          />
        </div>
        <ErrorInput
          errorFX={props.error.errorFX__deducible}
          errorNull={props.error.errorNull__deducible}
          errorTest={props.error.errorTest__deducible}
          textStart={true}
          textError="el valor debe ser mayor a $1 y menor a $100,000"
          textNull="Ingresa el deducible de tu póliza actual"
        />
      </div>

      <div className="step3GM__date">
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
      </div>
    </form>
  );
}

export default Poliza;

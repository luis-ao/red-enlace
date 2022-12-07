import "../../../styles/forms/StepIndicatorGM.css";
import NumberStepIndicator from "../NumberStepIndicator";

function StepIndicatorAutos({ state }) {
  return (
    <section className="stepIndicatorAutos">
      <NumberStepIndicator
        number="1"
        line={true}
        text="Datos del asegurador"
        active={state.step1}
        complete={state.completeStep1}
      />
      <NumberStepIndicator
        number="2"
        line={true}
        text="Auto asegurado"
        active={state.step2}
        complete={state.completeStep2}
      />
      <NumberStepIndicator
        number="3"
        line={true}
        text="Cotización"
        active={state.step3}
        complete={state.completeStep3}
      />
      <NumberStepIndicator
        number="4"
        line={false}
        text="Factura/Pago"
        active={state.step4}
        complete={state.completeStep4}
      />
    </section>
  );
}

export default StepIndicatorAutos;

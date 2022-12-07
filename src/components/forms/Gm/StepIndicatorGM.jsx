import "../../../styles/forms/StepIndicatorGM.css";
import NumberStepIndicator from "../NumberStepIndicator";

function StepIndicatorGM({ state }) {
  return (
    <section className="stepIndicatorGM">
      <NumberStepIndicator
        number="1"
        line={true}
        text="Asegurado titular"
        active={state.step1}
        complete={state.completeStep1}
      />
      <NumberStepIndicator
        number="2"
        line={true}
        text="Asegurados adicionales"
        active={state.step2}
        complete={state.completeStep2}
      />
      <NumberStepIndicator
        number="3"
        line={true}
        text="Tu póliza actual"
        active={state.step3}
        complete={state.completeStep3}
      />
      <NumberStepIndicator
        number="4"
        line={true}
        text="Deducible"
        active={state.step4}
        complete={state.completeStep4}
      />
      <NumberStepIndicator
        number="5"
        line={true}
        text="Coberturas adicionales"
        active={state.step5}
        complete={state.completeStep5}
      />
      <NumberStepIndicator
        number="6"
        line={true}
        text="Cotización"
        active={state.step6}
        complete={state.completeStep6}
      />
      <NumberStepIndicator
        number="7"
        line={false}
        text="Factura/Pago"
        active={state.step7}
        complete={state.completeStep7}
      />
    </section>
  );
}

export default StepIndicatorGM;

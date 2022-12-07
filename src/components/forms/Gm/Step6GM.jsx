import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import CotizacionGM from "./Inputs/Cotizacion/CotizacionGM";

class Step6GM extends Component {


  nextStep6 = () => {
    this.props.nextStep();
    this.props.sendStep6();
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />

        <InstructionForm instruction="Esta es tu cotización" />
        <CotizacionGM
          state={this.props.state}
          activeStep={this.props.activeStep}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={true}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep6}
        />
      </section>
    );
  }
}

export default Step6GM;

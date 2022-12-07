import React, { Component } from "react";
import StepIndicatorAutos from "./StepIndicatorAutos";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import AlertForm from "../AlertForm";
import CotizacionAutos from "../Autos/Inputs/CotizacionAutos";

class Step3Autos extends Component {

  render() {
    return (
      <section>
        <StepIndicatorAutos state={this.props.state} />

        <InstructionForm instruction="Esta es tu cotización" />

        <CotizacionAutos
          state={this.props.state}
          error={this.state}
          activeStep={this.props.activeStep}
          validationONStep1={this.validationONStep1}
          handleChange={this.props.handleChange}
        />

        <NextPrevStep
          icon={true}
          text="Continuar"
          off={true}
          prevStep={this.props.prevStep}
          nextStep={this.props.nextStep}
        />
      </section>
    );
  }
}

export default Step3Autos;

import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import DeducibleGM from "./Inputs/DeducibleGM";
import AlertForm from "../AlertForm";
import "../../../styles/forms/Gm/Step4GM.css";

class Step4GM extends Component {
  state = {
    offStep4: false,
    showAlertStep4: false,
  };

  validationONStep4 = () => {
    if (this.props.state.porcentajeDeducible === "") {
      this.setState({ offStep4: false });
    } else {
      this.setState({ offStep4: true });
    }
  };

  closedAlertStep4 = () => {
    this.setState({
      showAlertStep4: false,
    });
  };

  nextStep4 = () => {
    if (this.state.offStep4 === false) {
      this.setState({
        showAlertStep4: true,
      });
    } else {
      this.props.nextStep();
      this.props.sendStep4();
    }
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />

        <InstructionForm instruction="En caso de siniestro, ¿que cantidad de tu deducible te gustaría que te devolvamos?" />
        <DeducibleGM
          state={this.props.state}
          activeStep={this.props.activeStep}
          handleChange={this.props.handleChange}
          validationONStep4={this.validationONStep4}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={this.state.offStep4}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep4}
        />
        <AlertForm
          showAlert={this.state.showAlertStep4}
          closedAlert={this.closedAlertStep4}
          linkId="formStep4"
          text="Por favor elige el porcentaje de deducible antes de continuar"
        />
      </section>
    );
  }
}

export default Step4GM;

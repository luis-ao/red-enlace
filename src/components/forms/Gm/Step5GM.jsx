import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import CoberturasGM from "./Inputs/CoberturasGM";
import CoberturaGMBeneficiados from "./Inputs/CoberturaGMBeneficiados";
import "../../../styles/forms/Gm/Step5GM.css";

class Step5GM extends Component {
  nextStep5 = () => {
    this.props.nextStep();
    this.props.sendStep5();
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />

        <InstructionForm instruction="Personaliza tu protección y la de tus asegurados Si no deseas agregar coberturas adicionales, da click en Continuar" />
        <CoberturasGM
          state={this.props.state}
          activeStep={this.props.activeStep}
          handleChange={this.props.handleChange}
          handleCheckCobertura={this.props.handleCheckCobertura}
          handleCheckCobAT={this.props.handleCheckCobAT}
          handleCheckCobA1={this.props.handleCheckCobA1}
          handleCheckCobA2={this.props.handleCheckCobA2}
          handleCheckCobA3={this.props.handleCheckCobA3}
          handleCheckCobA4={this.props.handleCheckCobA4}
          handleCheckCobA5={this.props.handleCheckCobA5}
        />
        <CoberturaGMBeneficiados
          state={this.props.state}
          handleChange={this.props.handleChange}
          closeModalTitular={this.props.closeModalTitular}
          closeModalAdd1={this.props.closeModalAdd1}
          closeModalAdd2={this.props.closeModalAdd2}
          closeModalAdd3={this.props.closeModalAdd3}
          closeModalAdd4={this.props.closeModalAdd4}
          closeModalAdd5={this.props.closeModalAdd5}
          acceptModalTitular={this.props.acceptModalTitular}
          acceptModalAdd1={this.props.acceptModalAdd1}
          acceptModalAdd2={this.props.acceptModalAdd2}
          acceptModalAdd3={this.props.acceptModalAdd3}
          acceptModalAdd4={this.props.acceptModalAdd4}
          acceptModalAdd5={this.props.acceptModalAdd5}
          acc_add0__ben1={this.props.acc_add0__ben1}
          acc_add0__ben2={this.props.acc_add0__ben2}
          acc_add0__ben3={this.props.acc_add0__ben3}
          acc_add0__ben4={this.props.acc_add0__ben4}
          acc_add0__ben5={this.props.acc_add0__ben5}
          acc_add1__ben1={this.props.acc_add1__ben1}
          acc_add1__ben2={this.props.acc_add1__ben2}
          acc_add1__ben3={this.props.acc_add1__ben3}
          acc_add1__ben4={this.props.acc_add1__ben4}
          acc_add1__ben5={this.props.acc_add1__ben5}
          acc_add2__ben1={this.props.acc_add2__ben1}
          acc_add2__ben2={this.props.acc_add2__ben2}
          acc_add2__ben3={this.props.acc_add2__ben3}
          acc_add2__ben4={this.props.acc_add2__ben4}
          acc_add2__ben5={this.props.acc_add2__ben5}
          acc_add3__ben1={this.props.acc_add3__ben1}
          acc_add3__ben2={this.props.acc_add3__ben2}
          acc_add3__ben3={this.props.acc_add3__ben3}
          acc_add3__ben4={this.props.acc_add3__ben4}
          acc_add3__ben5={this.props.acc_add3__ben5}
          acc_add4__ben1={this.props.acc_add4__ben1}
          acc_add4__ben2={this.props.acc_add4__ben2}
          acc_add4__ben3={this.props.acc_add4__ben3}
          acc_add4__ben4={this.props.acc_add4__ben4}
          acc_add4__ben5={this.props.acc_add4__ben5}
          acc_add5__ben1={this.props.acc_add5__ben1}
          acc_add5__ben2={this.props.acc_add5__ben2}
          acc_add5__ben3={this.props.acc_add5__ben3}
          acc_add5__ben4={this.props.acc_add5__ben4}
          acc_add5__ben5={this.props.acc_add5__ben5}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={true}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep5}
        />
      </section>
    );
  }
}

export default Step5GM;

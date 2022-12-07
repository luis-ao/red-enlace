import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import PolizaGM from "./Inputs/PolizaGM";
import AlertForm from "../AlertForm";

class Step3GM extends Component {
  state = {
    errorFX__deducible: false,
    errorNull__deducible: false,
    errorTest__deducible: false,

    initInicioVigencia: true,
    errorFX__inicioVigencia: false,
    errorNull__inicioVigencia: false,

    initFinVigencia: true,
    errorFX__finVigencia: false,
    errorNull__finVigencia: false,

    offStep3: false,
    showAlertStep3: false,
  };

  validationONStep3 = () => {
    if (
      this.props.state.deducible !== "" &&
      this.props.state.inicioVigencia !== "" &&
      this.props.state.finVigencia !== ""
    ) {
      if (this.state.errorTest__deducible !== true) {
        this.setState({
          offStep3: true,
        });
      }
    } else {
      this.setState({
        offStep3: false,
      });
    }
  };
  closedAlertStep3 = () => {
    this.setState({
      showAlertStep3: false,
    });
  };

  validationDeducible = () => {
    const deducibleGm = this.props.state.deducible;

    const deducible = deducibleGm.replace(/,/g, "");
    if (deducible === "") {
      this.setState({
        errorFX__deducible: true,
        errorNull__deducible: true,
        errorTest__deducible: false,
      });
    } else {
      this.setState({
        errorNull__deducible: false,
      });

      if (deducible >= 1 && deducible <= 100000) {
        this.setState({
          errorFX__deducible: false,
          errorTest__deducible: false,
        });
      } else {
        this.setState({ errorFX__deducible: true, errorTest__deducible: true });
      }
    }
  };

  validationInicioVigencia = () => {
    if (this.props.state.inicioVigencia !== "") {
      this.setState({
        errorFX__inicioVigencia: false,
        errorNull__inicioVigencia: false,
      });
      return;
    } else {
      this.setState({
        errorFX__inicioVigencia: true,
        errorNull__inicioVigencia: true,
      });
    }
  };
  changeInitInicioVigencia = () => {
    this.setState({
      initInicioVigencia: false,
    });
  };
  validationInicioVigenciaNext = () => {
    if (this.props.state.inicioVigencia === "") {
      this.setState({
        initInicioVigencia: false,
      });
    } else {
      return;
    }
  };

  validationFinVigencia = () => {
    if (this.props.state.finVigencia !== "") {
      this.setState({
        errorFX__finVigencia: false,
        errorNull__finVigencia: false,
      });
      return;
    } else {
      this.setState({
        errorFX__finVigencia: true,
        errorNull__finVigencia: true,
      });
    }
  };
  changeInitFinVigencia = () => {
    this.setState({
      initFinVigencia: false,
    });
  };
  validationFinVigenciaNext = () => {
    if (this.props.state.finVigencia === "") {
      this.setState({
        initFinVigencia: false,
      });
    } else {
      return;
    }
  };

  nextStep3 = () => {
    if (this.state.offStep3 === false) {
      this.validationDeducible();
      this.validationFinVigenciaNext();
      this.validationInicioVigenciaNext();
      this.setState({
        showAlertStep3: true,
      });
    } else {
      if (this.state.errorTest__deducible !== true) {
        this.props.nextStep();
        this.props.sendStep3();
      } else {
        this.setState({
          showAlertStep3: true,
        });
        this.validationDeducible();
        this.validationFinVigenciaNext();
        this.validationInicioVigenciaNext();
      }
    }
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />

        <InstructionForm instruction="Cuéntanos un poco más sobre tu póliza actual" />
        <PolizaGM
          state={this.props.state}
          error={this.state}
          handleChange={this.props.handleChange}
          activeStep={this.props.activeStep}
          validationONStep3={this.validationONStep3}
          validationDeducible={this.validationDeducible}
          validationInicioVigencia={this.validationInicioVigencia}
          changeInitInicioVigencia={this.changeInitInicioVigencia}
          validationFinVigencia={this.validationFinVigencia}
          changeInitFinVigencia={this.changeInitFinVigencia}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={this.state.offStep3}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep3}
        />
        <AlertForm
          showAlert={this.state.showAlertStep3}
          closedAlert={this.closedAlertStep3}
          linkId="formStep3GM"
          text="Por favor asegúrate de llenar todos los campos correctamente antes de continuar"
        />
      </section>
    );
  }
}

export default Step3GM;

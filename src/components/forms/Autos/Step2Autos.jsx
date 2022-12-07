import React, { Component } from "react";
import StepIndicatorAutos from "./StepIndicatorAutos";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import AlertForm from "../AlertForm";
import AutoAsegurado from "./Inputs/AutoAsegurado";

class Step2Autos extends Component {
  state = {
    errorFX__conductor: false,
    errorFX__marca: false,
    errorFX__modelo: false,
    errorFX__poliza: false,
    errorFX__serie: false,
    errorFX__placas: false,
    errorFX__descripcion: false,

    errorNull__conductor: false,
    errorNull__marca: false,
    errorNull__modelo: false,
    errorNull__poliza: false,
    errorNull__serie: false,
    errorNull__placas: false,
    errorNull__descripcion: false,

    offStep2: false,
    showAlertStep2: false,
  };

  closedAlertStep2 = () => {
    this.setState({
      showAlertStep2: false,
    });
  };

  /*_____________________
  
      VALIDATIONS
  ______________________*/
  validationConductor = () => {
    if (this.props.state.conductor !== "") {
      this.setState({ errorNull__conductor: false, errorFX__conductor: false });
    } else {
      this.setState({ errorNull__conductor: true, errorFX__conductor: true });
    }
  };
  validationMarca = () => {
    if (this.props.state.marca !== "") {
      this.setState({ errorNull__marca: false, errorFX__marca: false });
    } else {
      this.setState({ errorNull__marca: true, errorFX__marca: true });
    }
  };
  validationModelo = () => {
    if (this.props.state.modelo !== "") {
      this.setState({ errorNull__modelo: false, errorFX__modelo: false });
    } else {
      this.setState({ errorNull__modelo: true, errorFX__modelo: true });
    }
  };
  validationPoliza = () => {
    if (this.props.state.poliza !== "") {
      this.setState({ errorNull__poliza: false, errorFX__poliza: false });
    } else {
      this.setState({ errorNull__poliza: true, errorFX__poliza: true });
    }
  };
  validationSerie = () => {
    if (this.props.state.serie !== "") {
      this.setState({ errorNull__serie: false, errorFX__serie: false });
    } else {
      this.setState({ errorNull__serie: true, errorFX__serie: true });
    }
  };
  validationPlacas = () => {
    if (this.props.state.placas !== "") {
      this.setState({ errorNull__placas: false, errorFX__placas: false });
    } else {
      this.setState({ errorNull__placas: true, errorFX__placas: true });
    }
  };
  validationDescripcion = () => {
    if (this.props.state.descripcion !== "") {
      this.setState({
        errorNull__descripcion: false,
        errorFX__descripcion: false,
      });
    } else {
      this.setState({
        errorNull__descripcion: true,
        errorFX__descripcion: true,
      });
    }
  };

  /*_____________________
  
      ON STEP
  ______________________*/
  validationONStep2 = () => {
    if (
      this.props.state.conductor !== "" &&
      this.props.state.marca !== "" &&
      this.props.state.modelo !== "" &&
      this.props.state.poliza !== "" &&
      this.props.state.serie !== "" &&
      this.props.state.placas !== "" &&
      this.props.state.descripcion !== ""
    ) {
      this.setState({
        offStep2: true,
      });
    } else {
      this.setState({
        offStep2: false,
      });
    }
  };

  nextStep2 = () => {
    if (this.state.offStep2 === true) {
      this.props.nextStep();
      this.props.sendStep2();
    } else {
      this.setState({
        showAlertStep2: true,
      });
      this.validationConductor();
      this.validationMarca();
      this.validationModelo();
      this.validationPoliza();
      this.validationSerie();
      this.validationPlacas();
      this.validationDescripcion();
    }
  };

  render() {
    return (
      <section id="step2Autos">
        <StepIndicatorAutos state={this.props.state} />

        <InstructionForm instruction="Llena la información sobre tu auto" />

        <AutoAsegurado
          state={this.props.state}
          error={this.state}
          activeStep={this.props.activeStep}
          validationONStep2={this.validationONStep2}
          onChange={this.props.handleChange}
          validationConductor={this.validationConductor}
          validationMarca={this.validationMarca}
          validationModelo={this.validationModelo}
          validationPoliza={this.validationPoliza}
          validationSerie={this.validationSerie}
          validationPlacas={this.validationPlacas}
          validationDescripcion={this.validationDescripcion}
        />

        <NextPrevStep
          icon={true}
          text="Continuar"
          off={this.state.offStep2}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep2}
        />
        <AlertForm
          showAlert={this.state.showAlertStep2}
          closedAlert={this.closedAlertStep2}
          linkId="step2Autos"
          text="Por favor llena correctamente todos los campos requeridos"
        />
      </section>
    );
  }
}

export default Step2Autos;

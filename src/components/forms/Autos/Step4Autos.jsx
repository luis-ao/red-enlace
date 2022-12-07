import React, { Component } from "react";
import StepIndicatorAutos from "./StepIndicatorAutos";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import AlertForm from "../AlertForm";
import PagoAutos from "../Autos/Inputs/PagoAutos";
import "../../../styles/forms/Gm/Step4GM.css";

class Step4Autos extends Component {
  state = {
    errorFX__inicioVigencia: false,
    errorFX__finVigencia: false,
    errorFX__calle: false,
    errorFX__numExt: false,
    errorFX__numInt: false,
    errorFX__colonia: false,
    errorFX__alcaldia: false,
    errorFX__cp: false,
    errorFX__estado: false,
    errorFX__tel: false,
    errorFX__formaDePago: false,

    errorNull__inicioVigencia: false,
    errorNull__finVigencia: false,
    errorNull__calle: false,
    errorNull__numExt: false,
    errorNull__numInt: false,
    errorNull__colonia: false,
    errorNull__alcaldia: false,
    errorNull__cp: false,
    errorNull__estado: false,
    errorNull__tel: false,
    errorNull__formaDePago: false,

    errorTest__cp: false,
    errorTest__tel: false,

    initInicioVigencia: true,
    initFinVigencia: true,
    initFormaDePago: true,

    offStep4: false,
    showAlertStep4: false,
  };

  closedAlertStep4 = () => {
    this.setState({
      showAlertStep4: false,
    });
  };

  validationONStep4 = () => {
    if (
      this.props.state.inicioVigencia !== "" &&
      this.props.state.finVigencia !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.numExt !== "" &&
      this.props.state.numInt !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.telFactura !== "" &&
      this.props.state.formaDePago !== ""
    ) {
      this.setState({
        offStep4: true,
      });
    } else {
      this.setState({
        offStep4: false,
      });
    }
  };

  /*_____________________
  
      VALIDATIONS
  ______________________*/
  validationInicioVigencia = () => {
    if (this.props.state.inicioVigencia !== "") {
      this.setState({
        errorFX__inicioVigencia: false,
        errorNull__inicioVigencia: false,
      });
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
  validationCalle = () => {
    if (this.props.state.calle !== "") {
      this.setState({
        errorFX__calle: false,
        errorNull__calle: false,
      });
    } else {
      this.setState({
        errorFX__calle: true,
        errorNull__calle: true,
      });
    }
  };
  validationNumExt = () => {
    if (this.props.state.numExt !== "") {
      this.setState({
        errorFX__numExt: false,
        errorNull__numExt: false,
      });
    } else {
      this.setState({
        errorFX__numExt: true,
        errorNull__numExt: true,
      });
    }
  };
  validationNumInt = () => {
    if (this.props.state.numInt !== "") {
      this.setState({
        errorFX__numInt: false,
        errorNull__numInt: false,
      });
    } else {
      this.setState({
        errorFX__numInt: true,
        errorNull__numInt: true,
      });
    }
  };
  validationColonia = () => {
    if (this.props.state.colonia !== "") {
      this.setState({
        errorFX__colonia: false,
        errorNull__colonia: false,
      });
    } else {
      this.setState({
        errorFX__colonia: true,
        errorNull__colonia: true,
      });
    }
  };
  validationAlcaldia = () => {
    if (this.props.state.alcaldia !== "") {
      this.setState({
        errorFX__alcaldia: false,
        errorNull__alcaldia: false,
      });
    } else {
      this.setState({
        errorFX__alcaldia: true,
        errorNull__alcaldia: true,
      });
    }
  };
  validationEstado = () => {
    if (this.props.state.estado !== "") {
      this.setState({
        errorFX__estado: false,
        errorNull__estado: false,
      });
    } else {
      this.setState({
        errorFX__estado: true,
        errorNull__estado: true,
      });
    }
  };
  validationCP = () => {
    if (this.props.state.cp !== "") {
      if (!/^\d{5}(?:[-\s]\d{4})?$/.test(this.props.state.cp)) {
        this.setState({
          errorFX__cp: true,
          errorTest__cp: true,
          errorNull__cp: false,
        });
      } else {
        this.setState({
          errorFX__cp: false,
          errorTest__cp: false,
          errorNull__cp: false,
        });
      }
    } else {
      this.setState({
        errorFX__cp: true,
        errorNull__cp: true,
        errorTest__cp: false,
      });
    }
  };
  validationTel = () => {
    if (this.props.state.telFactura !== "") {
      if (!/^\d{7,14}$/.test(this.props.state.telFactura)) {
        this.setState({
          errorFX__tel: true,
          errorTest__tel: true,
          errorNull__tel: false,
        });
      } else {
        this.setState({
          errorFX__tel: false,
          errorTest__tel: false,
          errorNull__tel: false,
        });
      }
    } else {
      this.setState({
        errorFX__tel: true,
        errorNull__tel: true,
        errorTest__tel: false,
      });
    }
  };
  validationFormaDePago = () => {
    if (this.props.state.formaDePago !== "") {
      this.setState({
        errorFX__formaDePago: false,
        errorNull__formaDePago: false,
      });
    } else {
      this.setState({
        errorFX__formaDePago: true,
        errorNull__formaDePago: true,
      });
    }
  };
  changeInitFormaDePago = () => {
    this.setState({
      initFormaDePago: false,
    });
  };

  /*_____________________
  
      NEXT STEP
  ______________________*/
  nextStep4 = () => {
    if (this.state.offStep4 === true) {
      if (
        this.state.errorFX__cp !== true &&
        this.state.errorFX__tel !== true
      ) {
        this.props.sendStep4();
      } else {
        this.setState({
          showAlertStep4: true,
        });
        this.validationCP();
        this.validationTel();
      }
    } else {
      this.setState({
        showAlertStep4: true,
      });
      this.changeInitInicioVigencia();
      this.validationInicioVigencia();
      this.changeInitFinVigencia();
      this.validationFinVigencia();
      this.validationCalle();
      this.validationNumInt();
      this.validationNumExt();
      this.validationColonia();
      this.validationAlcaldia();
      this.validationEstado();
      this.validationCP();
      this.validationTel();
      this.validationFormaDePago();
      this.changeInitFormaDePago();
    }
  };

  render() {
    return (
      <section>
        <StepIndicatorAutos state={this.props.state} />

        <div id="step4Autos"></div>
        <InstructionForm instruction="Completa tu información" />
        <PagoAutos
          state={this.props.state}
          error={this.state}
          activeStep={this.props.activeStep}
          validationONStep4={this.validationONStep4}
          handleChange={this.props.handleChange}
          validationInicioVigencia={this.validationInicioVigencia}
          changeInitInicioVigencia={this.changeInitInicioVigencia}
          validationFinVigencia={this.validationFinVigencia}
          changeInitFinVigencia={this.changeInitFinVigencia}
          validationCalle={this.validationCalle}
          validationNumExt={this.validationNumExt}
          validationNumInt={this.validationNumInt}
          validationColonia={this.validationColonia}
          validationAlcaldia={this.validationAlcaldia}
          validationCP={this.validationCP}
          validationEstado={this.validationEstado}
          validationTel={this.validationTel}
          validationFormaDePago={this.validationFormaDePago}
          changeInitFormaDePago={this.changeInitFormaDePago}
        />

        <NextPrevStep
          icon={true}
          text="Contratar"
          off={this.state.offStep4}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep4}
        />
        <AlertForm
          showAlert={this.state.showAlertStep4}
          closedAlert={this.closedAlertStep4}
          linkId="step4Autos"
          text="Por favor elige el porcentaje de deducible antes de continuar"
        />
      </section>
    );
  }
}

export default Step4Autos;

import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import Step1Autos from "./Step1Autos";
import Step2Autos from "./Step2Autos";
import Step3Autos from "./Step3Autos";
import Step4Autos from "./Step4Autos";

class MainAutos extends Component {
  state = {
    step: 1,

    step1: true,
    step2: false,
    step3: false,
    step4: false,

    completeStep1: false,
    completeStep2: false,
    completeStep3: false,
    completeStep4: false,

    fisica_o_moral: "fisica",
    nombre: "",
    paterno: "",
    materno: "",
    edad: "",
    genero: "",
    rfc: "",
    correo: "",
    tel: "",
    razonSocial: "",

    conductor: "",
    marca: "",
    modelo: "",
    poliza: "",
    serie: "",
    placas: "",
    descripcion: "",

    inicioVigencia: "",
    finVigencia: "",
    calle: "",
    numExt: "",
    numInt: "",
    alcaldia: "",
    colonia: "",
    cp: "",
    estado: "",
    telFactura: "",
    formaDePago: "",
    codigoAgente: "",
  };

  /*__________________________
  
         STEP 
  ____________________________*/
  prevStep = () => {
    scroll.scrollToTop();
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  nextStep = () => {
    scroll.scrollToTop();
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  activeStep = () => {
    const { step } = this.state;
    if (step === 1) {
      this.setState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        completeStep1: false,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
      });
      return;
    } else if (step === 2) {
      this.setState({
        step1: false,
        step2: true,
        step3: false,
        step4: false,
        completeStep1: true,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
      });
      return;
    } else if (step === 3) {
      this.setState({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: false,
        completeStep4: false,
      });
    } else if (step === 4) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: false,
      });
    } else {
      return;
    }
  };

  /*__________________________
  
         ONCHANGE 
  ____________________________*/
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCheckChangeImg = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };
  handleCheckCobertura = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };


  /*__________________________
  
         SEND DATA
  ____________________________*/
  sendStep1 = () => {
    console.log("enviar 1");
  };
  sendStep2 = () => {
    console.log("enviar 2");
  };
  sendStep3 = () => {
    console.log("enviar 3");
  };
  sendStep4 = () => {
    console.log("enviar 4");
  };


  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Step1Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            sendStep1={this.sendStep1}
          />
        );
      case 2:
        return (
          <Step2Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep2={this.sendStep2}
          />
        );
      case 3:
        return (
          <Step3Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep3={this.sendStep3}
          />
        );
      case 4:
        return (
          <Step4Autos
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep4={this.sendStep4}
          />
        );
      default:
        return (
          <section>
            <p>Error</p>
          </section>
        );
    }
  }
}

export default MainAutos;

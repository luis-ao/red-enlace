import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import Step1GM from "./Step1GM";
import Step2GM from "./Step2GM";
import Step3GM from "./Step3GM";
import Step4GM from "./Step4GM";
import Step5GM from "./Step5GM";
import Step6GM from "./Step6GM";
import Step7GM from "./Step7GM";

class MainGM extends Component {
  state = {
    step: 1,

    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,

    completeStep1: false,
    completeStep2: false,
    completeStep3: false,
    completeStep4: false,
    completeStep5: false,
    completeStep6: false,
    completeStep7: false,

    nombre: "",
    paterno: "",
    materno: "",
    edad: "",
    genero: "",
    rfc: "",
    correo: "",
    tel: "",

    add1: false,
    add2: false,
    add3: false,
    add4: false,
    add5: false,

    add1__nombre: "",
    add2__nombre: "",
    add3__nombre: "",
    add4__nombre: "",
    add5__nombre: "",
    add1__paterno: "",
    add2__paterno: "",
    add3__paterno: "",
    add4__paterno: "",
    add5__paterno: "",
    add1__materno: "",
    add2__materno: "",
    add3__materno: "",
    add4__materno: "",
    add5__materno: "",
    add1__edad: "",
    add2__edad: "",
    add3__edad: "",
    add4__edad: "",
    add5__edad: "",
    add1__genero: "",
    add2__genero: "",
    add3__genero: "",
    add4__genero: "",
    add5__genero: "",

    deducible: "",
    inicioVigencia: "",
    finVigencia: "",

    porcentajeDeducible: "",

    coberturaNueva: "",
    titular__cobA: false,
    titular__cobB: false,
    titular__cobC: false,
    add1__cobA: false,
    add1__cobB: false,
    add1__cobC: false,
    add2__cobA: false,
    add2__cobB: false,
    add2__cobC: false,
    add3__cobA: false,
    add3__cobB: false,
    add3__cobC: false,
    add4__cobA: false,
    add4__cobB: false,
    add4__cobC: false,
    add5__cobA: false,
    add5__cobB: false,
    add5__cobC: false,

    modalTitular: false,
    modalAdd1: false,
    modalAdd2: false,
    modalAdd3: false,
    modalAdd4: false,
    modalAdd5: false,
    add0__ben1: false,
    add0__ben2: false,
    add0__ben3: false,
    add0__ben4: false,
    add0__ben5: false,
    add1__ben1: false,
    add1__ben2: false,
    add1__ben3: false,
    add1__ben4: false,
    add1__ben5: false,
    add2__ben1: false,
    add2__ben2: false,
    add2__ben3: false,
    add2__ben4: false,
    add2__ben5: false,
    add3__ben1: false,
    add3__ben2: false,
    add3__ben3: false,
    add3__ben4: false,
    add3__ben5: false,
    add4__ben1: false,
    add4__ben2: false,
    add4__ben3: false,
    add4__ben4: false,
    add4__ben5: false,
    add5__ben1: false,
    add5__ben2: false,
    add5__ben3: false,
    add5__ben4: false,
    add5__ben5: false,

    add0__ben1_nombre: "",
    add0__ben2_nombre: "",
    add0__ben3_nombre: "",
    add0__ben4_nombre: "",
    add0__ben5_nombre: "",
    add0__ben1_materno: "",
    add0__ben2_materno: "",
    add0__ben3_materno: "",
    add0__ben4_materno: "",
    add0__ben5_materno: "",
    add0__ben1_paterno: "",
    add0__ben2_paterno: "",
    add0__ben3_paterno: "",
    add0__ben4_paterno: "",
    add0__ben5_paterno: "",
    add0__ben1_porcentaje: "",
    add0__ben2_porcentaje: "",
    add0__ben3_porcentaje: "",
    add0__ben4_porcentaje: "",
    add0__ben5_porcentaje: "",
    add0__ben1_parentesco: "",
    add0__ben2_parentesco: "",
    add0__ben3_parentesco: "",
    add0__ben4_parentesco: "",
    add0__ben5_parentesco: "",
    add0__ben1_edad: "",
    add0__ben2_edad: "",
    add0__ben3_edad: "",
    add0__ben4_edad: "",
    add0__ben5_edad: "",
    add0__ben1_titular: "",
    add0__ben2_titular: "",
    add0__ben3_titular: "",
    add0__ben4_titular: "",
    add0__ben5_titular: "",

    add1__ben1_nombre: "",
    add1__ben2_nombre: "",
    add1__ben3_nombre: "",
    add1__ben4_nombre: "",
    add1__ben5_nombre: "",
    add1__ben1_materno: "",
    add1__ben2_materno: "",
    add1__ben3_materno: "",
    add1__ben4_materno: "",
    add1__ben5_materno: "",
    add1__ben1_paterno: "",
    add1__ben2_paterno: "",
    add1__ben3_paterno: "",
    add1__ben4_paterno: "",
    add1__ben5_paterno: "",
    add1__ben1_porcentaje: "",
    add1__ben2_porcentaje: "",
    add1__ben3_porcentaje: "",
    add1__ben4_porcentaje: "",
    add1__ben5_porcentaje: "",
    add1__ben1_parentesco: "",
    add1__ben2_parentesco: "",
    add1__ben3_parentesco: "",
    add1__ben4_parentesco: "",
    add1__ben5_parentesco: "",
    add1__ben1_edad: "",
    add1__ben2_edad: "",
    add1__ben3_edad: "",
    add1__ben4_edad: "",
    add1__ben5_edad: "",
    add1__ben1_titular: "",
    add1__ben2_titular: "",
    add1__ben3_titular: "",
    add1__ben4_titular: "",
    add1__ben5_titular: "",

    add2__ben1_nombre: "",
    add2__ben2_nombre: "",
    add2__ben3_nombre: "",
    add2__ben4_nombre: "",
    add2__ben5_nombre: "",
    add2__ben1_materno: "",
    add2__ben2_materno: "",
    add2__ben3_materno: "",
    add2__ben4_materno: "",
    add2__ben5_materno: "",
    add2__ben1_paterno: "",
    add2__ben2_paterno: "",
    add2__ben3_paterno: "",
    add2__ben4_paterno: "",
    add2__ben5_paterno: "",
    add2__ben1_porcentaje: "",
    add2__ben2_porcentaje: "",
    add2__ben3_porcentaje: "",
    add2__ben4_porcentaje: "",
    add2__ben5_porcentaje: "",
    add2__ben1_parentesco: "",
    add2__ben2_parentesco: "",
    add2__ben3_parentesco: "",
    add2__ben4_parentesco: "",
    add2__ben5_parentesco: "",
    add2__ben1_edad: "",
    add2__ben2_edad: "",
    add2__ben3_edad: "",
    add2__ben4_edad: "",
    add2__ben5_edad: "",
    add2__ben1_titular: "",
    add2__ben2_titular: "",
    add2__ben3_titular: "",
    add2__ben4_titular: "",
    add2__ben5_titular: "",

    add3__ben1_nombre: "",
    add3__ben2_nombre: "",
    add3__ben3_nombre: "",
    add3__ben4_nombre: "",
    add3__ben5_nombre: "",
    add3__ben1_materno: "",
    add3__ben2_materno: "",
    add3__ben3_materno: "",
    add3__ben4_materno: "",
    add3__ben5_materno: "",
    add3__ben1_paterno: "",
    add3__ben2_paterno: "",
    add3__ben3_paterno: "",
    add3__ben4_paterno: "",
    add3__ben5_paterno: "",
    add3__ben1_porcentaje: "",
    add3__ben2_porcentaje: "",
    add3__ben3_porcentaje: "",
    add3__ben4_porcentaje: "",
    add3__ben5_porcentaje: "",
    add3__ben1_parentesco: "",
    add3__ben2_parentesco: "",
    add3__ben3_parentesco: "",
    add3__ben4_parentesco: "",
    add3__ben5_parentesco: "",
    add3__ben1_edad: "",
    add3__ben2_edad: "",
    add3__ben3_edad: "",
    add3__ben4_edad: "",
    add3__ben5_edad: "",
    add3__ben1_titular: "",
    add3__ben2_titular: "",
    add3__ben3_titular: "",
    add3__ben4_titular: "",
    add3__ben5_titular: "",

    add4__ben1_nombre: "",
    add4__ben2_nombre: "",
    add4__ben3_nombre: "",
    add4__ben4_nombre: "",
    add4__ben5_nombre: "",
    add4__ben1_materno: "",
    add4__ben2_materno: "",
    add4__ben3_materno: "",
    add4__ben4_materno: "",
    add4__ben5_materno: "",
    add4__ben1_paterno: "",
    add4__ben2_paterno: "",
    add4__ben3_paterno: "",
    add4__ben4_paterno: "",
    add4__ben5_paterno: "",
    add4__ben1_porcentaje: "",
    add4__ben2_porcentaje: "",
    add4__ben3_porcentaje: "",
    add4__ben4_porcentaje: "",
    add4__ben5_porcentaje: "",
    add4__ben1_parentesco: "",
    add4__ben2_parentesco: "",
    add4__ben3_parentesco: "",
    add4__ben4_parentesco: "",
    add4__ben5_parentesco: "",
    add4__ben1_edad: "",
    add4__ben2_edad: "",
    add4__ben3_edad: "",
    add4__ben4_edad: "",
    add4__ben5_edad: "",
    add4__ben1_titular: "",
    add4__ben2_titular: "",
    add4__ben3_titular: "",
    add4__ben4_titular: "",
    add4__ben5_titular: "",

    add5__ben1_nombre: "",
    add5__ben2_nombre: "",
    add5__ben3_nombre: "",
    add5__ben4_nombre: "",
    add5__ben5_nombre: "",
    add5__ben1_materno: "",
    add5__ben2_materno: "",
    add5__ben3_materno: "",
    add5__ben4_materno: "",
    add5__ben5_materno: "",
    add5__ben1_paterno: "",
    add5__ben2_paterno: "",
    add5__ben3_paterno: "",
    add5__ben4_paterno: "",
    add5__ben5_paterno: "",
    add5__ben1_porcentaje: "",
    add5__ben2_porcentaje: "",
    add5__ben3_porcentaje: "",
    add5__ben4_porcentaje: "",
    add5__ben5_porcentaje: "",
    add5__ben1_parentesco: "",
    add5__ben2_parentesco: "",
    add5__ben3_parentesco: "",
    add5__ben4_parentesco: "",
    add5__ben5_parentesco: "",
    add5__ben1_edad: "",
    add5__ben2_edad: "",
    add5__ben3_edad: "",
    add5__ben4_edad: "",
    add5__ben5_edad: "",
    add5__ben1_titular: "",
    add5__ben2_titular: "",
    add5__ben3_titular: "",
    add5__ben4_titular: "",
    add5__ben5_titular: "",

    factura_si_no: "si",
    fisica_o_moral: "fisica",
    nombrePF: "",
    paternoPF: "",
    maternoPF: "",
    razonSocial: "",
    rfcFactura: "",
    correoFactura: "",
    telFactura: "",
    calle: "",
    noExterior: "",
    noInterior: "",
    cp: "",
    alcaldia: "",
    colonia: "",
    estado: "",
    numPoliza: "",
    compania: "",
    metodoDePago: "",
    formaDePago: "",
    codigoAgente: "",
    ine: undefined,
    poliza: undefined,
    terminosGM: false,
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
        step5: false,
        step6: false,
        step7: false,
        completeStep1: false,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 2) {
      this.setState({
        step1: false,
        step2: true,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: false,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 3) {
      this.setState({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: false,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 4) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        step5: false,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: false,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 5) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: true,
        step6: false,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: false,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 6) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: true,
        step7: false,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: true,
        completeStep6: false,
        completeStep7: false,
      });
      return;
    } else if (step === 7) {
      this.setState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: true,
        completeStep1: true,
        completeStep2: true,
        completeStep3: true,
        completeStep4: true,
        completeStep5: true,
        completeStep6: true,
        completeStep7: false,
      });
      return;
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
  handleCheckTerminos = (e) => {
    this.setState({
      terminosGM: e.target.checked,
    });
  };
  handleCheckCobAT = (e) => {
    this.setState({
      titular__cobA: e.target.checked,
      modalTitular: e.target.checked,
    });
  };
  handleCheckCobA1 = (e) => {
    this.setState({
      add1__cobA: e.target.checked,
      modalAdd1: e.target.checked,
    });
  };
  handleCheckCobA2 = (e) => {
    this.setState({
      add2__cobA: e.target.checked,
      modalAdd2: e.target.checked,
    });
  };
  handleCheckCobA3 = (e) => {
    this.setState({
      add3__cobA: e.target.checked,
      modalAdd3: e.target.checked,
    });
  };
  handleCheckCobA4 = (e) => {
    this.setState({
      add4__cobA: e.target.checked,
      modalAdd4: e.target.checked,
    });
  };
  handleCheckCobA5 = (e) => {
    this.setState({
      add5__cobA: e.target.checked,
      modalAdd5: e.target.checked,
    });
  };

  /*_____________________
  
      ADICIONALES
  ______________________*/
  add1True = () => {
    this.setState({ add1: true });
  };
  add2True = () => {
    this.setState({ add2: true });
  };
  add3True = () => {
    this.setState({ add3: true });
  };
  add4True = () => {
    this.setState({ add4: true });
  };
  add5True = () => {
    this.setState({ add5: true });
  };
  add1False = () => {
    this.setState({ add1: false });
  };
  add2False = () => {
    this.setState({ add2: false });
  };
  add3False = () => {
    this.setState({ add3: false });
  };
  add4False = () => {
    this.setState({ add4: false });
  };
  add5False = () => {
    this.setState({ add5: false });
  };
  clearAdd1 = () => {
    this.setState({
      add1__nombre: "",
      add1__paterno: "",
      add1__materno: "",
      add1__edad: "",
      add1__genero: "",
    });
  };
  clearAdd2 = () => {
    this.setState({
      add2__nombre: "",
      add2__paterno: "",
      add2__materno: "",
      add2__edad: "",
      add2__genero: "",
    });
  };
  clearAdd3 = () => {
    this.setState({
      add3__nombre: "",
      add3__paterno: "",
      add3__materno: "",
      add3__edad: "",
      add3__genero: "",
    });
  };
  clearAdd4 = () => {
    this.setState({
      add4__nombre: "",
      add4__paterno: "",
      add4__materno: "",
      add4__edad: "",
      add4__genero: "",
    });
  };
  clearAdd5 = () => {
    this.setState({
      add5__nombre: "",
      add5__paterno: "",
      add5__materno: "",
      add5__edad: "",
      add5__genero: "",
    });
  };

  /*_____________________
  
      BENEFICIADOS
  ______________________*/
  closeModalTitular = () => {
    this.setState({
      modalTitular: false,
      titular__cobA: false,
      add0__ben1: false,
      add0__ben2: false,
      add0__ben3: false,
      add0__ben4: false,
      add0__ben5: false,

      add0__ben1_nombre: "",
      add0__ben2_nombre: "",
      add0__ben3_nombre: "",
      add0__ben4_nombre: "",
      add0__ben5_nombre: "",
      add0__ben1_materno: "",
      add0__ben2_materno: "",
      add0__ben3_materno: "",
      add0__ben4_materno: "",
      add0__ben5_materno: "",
      add0__ben1_paterno: "",
      add0__ben2_paterno: "",
      add0__ben3_paterno: "",
      add0__ben4_paterno: "",
      add0__ben5_paterno: "",
      add0__ben1_porcentaje: "",
      add0__ben2_porcentaje: "",
      add0__ben3_porcentaje: "",
      add0__ben4_porcentaje: "",
      add0__ben5_porcentaje: "",
      add0__ben1_parentesco: "",
      add0__ben2_parentesco: "",
      add0__ben3_parentesco: "",
      add0__ben4_parentesco: "",
      add0__ben5_parentesco: "",
      add0__ben1_edad: "",
      add0__ben2_edad: "",
      add0__ben3_edad: "",
      add0__ben4_edad: "",
      add0__ben5_edad: "",
      add0__ben1_titular: "",
      add0__ben2_titular: "",
      add0__ben3_titular: "",
      add0__ben4_titular: "",
      add0__ben5_titular: "",
    });
  };
  closeModalAdd1 = () => {
    this.setState({
      add1__cobA: false,
      modalAdd1: false,
      add1__ben1: false,
      add1__ben2: false,
      add1__ben3: false,
      add1__ben4: false,
      add1__ben5: false,

      add1__ben1_nombre: "",
      add1__ben2_nombre: "",
      add1__ben3_nombre: "",
      add1__ben4_nombre: "",
      add1__ben5_nombre: "",
      add1__ben1_materno: "",
      add1__ben2_materno: "",
      add1__ben3_materno: "",
      add1__ben4_materno: "",
      add1__ben5_materno: "",
      add1__ben1_paterno: "",
      add1__ben2_paterno: "",
      add1__ben3_paterno: "",
      add1__ben4_paterno: "",
      add1__ben5_paterno: "",
      add1__ben1_porcentaje: "",
      add1__ben2_porcentaje: "",
      add1__ben3_porcentaje: "",
      add1__ben4_porcentaje: "",
      add1__ben5_porcentaje: "",
      add1__ben1_parentesco: "",
      add1__ben2_parentesco: "",
      add1__ben3_parentesco: "",
      add1__ben4_parentesco: "",
      add1__ben5_parentesco: "",
      add1__ben1_edad: "",
      add1__ben2_edad: "",
      add1__ben3_edad: "",
      add1__ben4_edad: "",
      add1__ben5_edad: "",
      add1__ben1_titular: "",
      add1__ben2_titular: "",
      add1__ben3_titular: "",
      add1__ben4_titular: "",
      add1__ben5_titular: "",
    });
  };
  closeModalAdd2 = () => {
    this.setState({
      add2__cobA: false,
      modalAdd2: false,
      add2__ben1: false,
      add2__ben2: false,
      add2__ben3: false,
      add2__ben4: false,
      add2__ben5: false,

      add2__ben1_nombre: "",
      add2__ben2_nombre: "",
      add2__ben3_nombre: "",
      add2__ben4_nombre: "",
      add2__ben5_nombre: "",
      add2__ben1_materno: "",
      add2__ben2_materno: "",
      add2__ben3_materno: "",
      add2__ben4_materno: "",
      add2__ben5_materno: "",
      add2__ben1_paterno: "",
      add2__ben2_paterno: "",
      add2__ben3_paterno: "",
      add2__ben4_paterno: "",
      add2__ben5_paterno: "",
      add2__ben1_porcentaje: "",
      add2__ben2_porcentaje: "",
      add2__ben3_porcentaje: "",
      add2__ben4_porcentaje: "",
      add2__ben5_porcentaje: "",
      add2__ben1_parentesco: "",
      add2__ben2_parentesco: "",
      add2__ben3_parentesco: "",
      add2__ben4_parentesco: "",
      add2__ben5_parentesco: "",
      add2__ben1_edad: "",
      add2__ben2_edad: "",
      add2__ben3_edad: "",
      add2__ben4_edad: "",
      add2__ben5_edad: "",
      add2__ben1_titular: "",
      add2__ben2_titular: "",
      add2__ben3_titular: "",
      add2__ben4_titular: "",
      add2__ben5_titular: "",
    });
  };
  closeModalAdd3 = () => {
    this.setState({
      add3__cobA: false,
      modalAdd3: false,
      add3__ben1: false,
      add3__ben2: false,
      add3__ben3: false,
      add3__ben4: false,
      add3__ben5: false,

      add3__ben1_nombre: "",
      add3__ben2_nombre: "",
      add3__ben3_nombre: "",
      add3__ben4_nombre: "",
      add3__ben5_nombre: "",
      add3__ben1_materno: "",
      add3__ben2_materno: "",
      add3__ben3_materno: "",
      add3__ben4_materno: "",
      add3__ben5_materno: "",
      add3__ben1_paterno: "",
      add3__ben2_paterno: "",
      add3__ben3_paterno: "",
      add3__ben4_paterno: "",
      add3__ben5_paterno: "",
      add3__ben1_porcentaje: "",
      add3__ben2_porcentaje: "",
      add3__ben3_porcentaje: "",
      add3__ben4_porcentaje: "",
      add3__ben5_porcentaje: "",
      add3__ben1_parentesco: "",
      add3__ben2_parentesco: "",
      add3__ben3_parentesco: "",
      add3__ben4_parentesco: "",
      add3__ben5_parentesco: "",
      add3__ben1_edad: "",
      add3__ben2_edad: "",
      add3__ben3_edad: "",
      add3__ben4_edad: "",
      add3__ben5_edad: "",
      add3__ben1_titular: "",
      add3__ben2_titular: "",
      add3__ben3_titular: "",
      add3__ben4_titular: "",
      add3__ben5_titular: "",
    });
  };
  closeModalAdd4 = () => {
    this.setState({
      add4__cobA: false,
      modalAdd4: false,
      add4__ben1: false,
      add4__ben2: false,
      add4__ben3: false,
      add4__ben4: false,
      add4__ben5: false,

      add4__ben1_nombre: "",
      add4__ben2_nombre: "",
      add4__ben3_nombre: "",
      add4__ben4_nombre: "",
      add4__ben5_nombre: "",
      add4__ben1_materno: "",
      add4__ben2_materno: "",
      add4__ben3_materno: "",
      add4__ben4_materno: "",
      add4__ben5_materno: "",
      add4__ben1_paterno: "",
      add4__ben2_paterno: "",
      add4__ben3_paterno: "",
      add4__ben4_paterno: "",
      add4__ben5_paterno: "",
      add4__ben1_porcentaje: "",
      add4__ben2_porcentaje: "",
      add4__ben3_porcentaje: "",
      add4__ben4_porcentaje: "",
      add4__ben5_porcentaje: "",
      add4__ben1_parentesco: "",
      add4__ben2_parentesco: "",
      add4__ben3_parentesco: "",
      add4__ben4_parentesco: "",
      add4__ben5_parentesco: "",
      add4__ben1_edad: "",
      add4__ben2_edad: "",
      add4__ben3_edad: "",
      add4__ben4_edad: "",
      add4__ben5_edad: "",
      add4__ben1_titular: "",
      add4__ben2_titular: "",
      add4__ben3_titular: "",
      add4__ben4_titular: "",
      add4__ben5_titular: "",
    });
  };
  closeModalAdd5 = () => {
    this.setState({
      add5__cobA: false,
      modalAdd5: false,
      add5__ben1: false,
      add5__ben2: false,
      add5__ben3: false,
      add5__ben4: false,
      add5__ben5: false,

      add5__ben1_nombre: "",
      add5__ben2_nombre: "",
      add5__ben3_nombre: "",
      add5__ben4_nombre: "",
      add5__ben5_nombre: "",
      add5__ben1_materno: "",
      add5__ben2_materno: "",
      add5__ben3_materno: "",
      add5__ben4_materno: "",
      add5__ben5_materno: "",
      add5__ben1_paterno: "",
      add5__ben2_paterno: "",
      add5__ben3_paterno: "",
      add5__ben4_paterno: "",
      add5__ben5_paterno: "",
      add5__ben1_porcentaje: "",
      add5__ben2_porcentaje: "",
      add5__ben3_porcentaje: "",
      add5__ben4_porcentaje: "",
      add5__ben5_porcentaje: "",
      add5__ben1_parentesco: "",
      add5__ben2_parentesco: "",
      add5__ben3_parentesco: "",
      add5__ben4_parentesco: "",
      add5__ben5_parentesco: "",
      add5__ben1_edad: "",
      add5__ben2_edad: "",
      add5__ben3_edad: "",
      add5__ben4_edad: "",
      add5__ben5_edad: "",
      add5__ben1_titular: "",
      add5__ben2_titular: "",
      add5__ben3_titular: "",
      add5__ben4_titular: "",
      add5__ben5_titular: "",
    });
  };

  acceptModalTitular = () => {
    this.setState({
      modalTitular: false,
    });
  };
  acceptModalAdd1 = () => {
    this.setState({
      modalAdd1: false,
    });
  };
  acceptModalAdd2 = () => {
    this.setState({
      modalAdd2: false,
    });
  };
  acceptModalAdd3 = () => {
    this.setState({
      modalAdd3: false,
    });
  };
  acceptModalAdd4 = () => {
    this.setState({
      modalAdd4: false,
    });
  };
  acceptModalAdd5 = () => {
    this.setState({
      modalAdd5: false,
    });
  };

  acc_add0__ben1 = () => {
    if (this.state.add0__ben1 === false) {
      this.setState({ add0__ben1: true });
    } else {
      this.setState({
        add0__ben1: false,
        add0__ben1_nombre: "",
        add0__ben1_paterno: "",
        add0__ben1_materno: "",
        add0__ben1_porcentaje: "",
        add0__ben1_parentesco: "",
        add0__ben1_edad: "",
        add0__ben1_titular: "",
      });
    }
  };
  acc_add0__ben2 = () => {
    if (this.state.add0__ben2 === false) {
      this.setState({ add0__ben2: true });
    } else {
      this.setState({
        add0__ben2: false,
        add0__ben2_nombre: "",
        add0__ben2_paterno: "",
        add0__ben2_materno: "",
        add0__ben2_porcentaje: "",
        add0__ben2_parentesco: "",
        add0__ben2_edad: "",
        add0__ben2_titular: "",
      });
    }
  };
  acc_add0__ben3 = () => {
    if (this.state.add0__ben3 === false) {
      this.setState({ add0__ben3: true });
    } else {
      this.setState({
        add0__ben3: false,
        add0__ben3_nombre: "",
        add0__ben3_paterno: "",
        add0__ben3_materno: "",
        add0__ben3_porcentaje: "",
        add0__ben3_parentesco: "",
        add0__ben3_edad: "",
        add0__ben3_titular: "",
      });
    }
  };
  acc_add0__ben4 = () => {
    if (this.state.add0__ben4 === false) {
      this.setState({ add0__ben4: true });
    } else {
      this.setState({
        add0__ben4: false,
        add0__ben4_nombre: "",
        add0__ben4_paterno: "",
        add0__ben4_materno: "",
        add0__ben4_porcentaje: "",
        add0__ben4_parentesco: "",
        add0__ben4_edad: "",
        add0__ben4_titular: "",
      });
    }
  };
  acc_add0__ben5 = () => {
    if (this.state.add0__ben5 === false) {
      this.setState({ add0__ben5: true });
    } else {
      this.setState({
        add0__ben5: false,
        add0__ben5_nombre: "",
        add0__ben5_paterno: "",
        add0__ben5_materno: "",
        add0__ben5_porcentaje: "",
        add0__ben5_parentesco: "",
        add0__ben5_edad: "",
        add0__ben5_titular: "",
      });
    }
  };
  acc_add1__ben1 = () => {
    if (this.state.add1__ben1 === false) {
      this.setState({ add1__ben1: true });
    } else {
      this.setState({
        add1__ben1: false,
        add1__ben1_nombre: "",
        add1__ben1_paterno: "",
        add1__ben1_materno: "",
        add1__ben1_porcentaje: "",
        add1__ben1_parentesco: "",
        add1__ben1_edad: "",
        add1__ben1_titular: "",
      });
    }
  };
  acc_add1__ben2 = () => {
    if (this.state.add1__ben2 === false) {
      this.setState({ add1__ben2: true });
    } else {
      this.setState({
        add1__ben2: false,
        add1__ben2_nombre: "",
        add1__ben2_paterno: "",
        add1__ben2_materno: "",
        add1__ben2_porcentaje: "",
        add1__ben2_parentesco: "",
        add1__ben2_edad: "",
        add1__ben2_titular: "",
      });
    }
  };
  acc_add1__ben3 = () => {
    if (this.state.add1__ben3 === false) {
      this.setState({ add1__ben3: true });
    } else {
      this.setState({
        add1__ben3: false,
        add1__ben3_nombre: "",
        add1__ben3_paterno: "",
        add1__ben3_materno: "",
        add1__ben3_porcentaje: "",
        add1__ben3_parentesco: "",
        add1__ben3_edad: "",
        add1__ben3_titular: "",
      });
    }
  };
  acc_add1__ben4 = () => {
    if (this.state.add1__ben4 === false) {
      this.setState({ add1__ben4: true });
    } else {
      this.setState({
        add1__ben4: false,
        add1__ben4_nombre: "",
        add1__ben4_paterno: "",
        add1__ben4_materno: "",
        add1__ben4_porcentaje: "",
        add1__ben4_parentesco: "",
        add1__ben4_edad: "",
        add1__ben4_titular: "",
      });
    }
  };
  acc_add1__ben5 = () => {
    if (this.state.add1__ben5 === false) {
      this.setState({ add1__ben5: true });
    } else {
      this.setState({
        add1__ben5: false,
        add1__ben5_nombre: "",
        add1__ben5_paterno: "",
        add1__ben5_materno: "",
        add1__ben5_porcentaje: "",
        add1__ben5_parentesco: "",
        add1__ben5_edad: "",
        add1__ben5_titular: "",
      });
    }
  };
  acc_add2__ben1 = () => {
    if (this.state.add2__ben1 === false) {
      this.setState({ add2__ben1: true });
    } else {
      this.setState({
        add2__ben1: false,
        add2__ben1_nombre: "",
        add2__ben1_paterno: "",
        add2__ben1_materno: "",
        add2__ben1_porcentaje: "",
        add2__ben1_parentesco: "",
        add2__ben1_edad: "",
        add2__ben1_titular: "",
      });
    }
  };
  acc_add2__ben2 = () => {
    if (this.state.add2__ben2 === false) {
      this.setState({ add2__ben2: true });
    } else {
      this.setState({
        add2__ben2: false,
        add2__ben2_nombre: "",
        add2__ben2_paterno: "",
        add2__ben2_materno: "",
        add2__ben2_porcentaje: "",
        add2__ben2_parentesco: "",
        add2__ben2_edad: "",
        add2__ben2_titular: "",
      });
    }
  };
  acc_add2__ben3 = () => {
    if (this.state.add2__ben3 === false) {
      this.setState({ add2__ben3: true });
    } else {
      this.setState({
        add2__ben3: false,
        add2__ben3_nombre: "",
        add2__ben3_paterno: "",
        add2__ben3_materno: "",
        add2__ben3_porcentaje: "",
        add2__ben3_parentesco: "",
        add2__ben3_edad: "",
        add2__ben3_titular: "",
      });
    }
  };
  acc_add2__ben4 = () => {
    if (this.state.add2__ben4 === false) {
      this.setState({ add2__ben4: true });
    } else {
      this.setState({
        add2__ben4: false,
        add2__ben4_nombre: "",
        add2__ben4_paterno: "",
        add2__ben4_materno: "",
        add2__ben4_porcentaje: "",
        add2__ben4_parentesco: "",
        add2__ben4_edad: "",
        add2__ben4_titular: "",
      });
    }
  };
  acc_add2__ben5 = () => {
    if (this.state.add2__ben5 === false) {
      this.setState({ add2__ben5: true });
    } else {
      this.setState({
        add2__ben5: false,
        add2__ben5_nombre: "",
        add2__ben5_paterno: "",
        add2__ben5_materno: "",
        add2__ben5_porcentaje: "",
        add2__ben5_parentesco: "",
        add2__ben5_edad: "",
        add2__ben5_titular: "",
      });
    }
  };
  acc_add3__ben1 = () => {
    if (this.state.add3__ben1 === false) {
      this.setState({ add3__ben1: true });
    } else {
      this.setState({
        add3__ben1: false,
        add3__ben1_nombre: "",
        add3__ben1_paterno: "",
        add3__ben1_materno: "",
        add3__ben1_porcentaje: "",
        add3__ben1_parentesco: "",
        add3__ben1_edad: "",
        add3__ben1_titular: "",
      });
    }
  };
  acc_add3__ben2 = () => {
    if (this.state.add3__ben2 === false) {
      this.setState({ add3__ben2: true });
    } else {
      this.setState({
        add3__ben2: false,
        add3__ben2_nombre: "",
        add3__ben2_paterno: "",
        add3__ben2_materno: "",
        add3__ben2_porcentaje: "",
        add3__ben2_parentesco: "",
        add3__ben2_edad: "",
        add3__ben2_titular: "",
      });
    }
  };
  acc_add3__ben3 = () => {
    if (this.state.add3__ben3 === false) {
      this.setState({ add3__ben3: true });
    } else {
      this.setState({
        add3__ben3: false,
        add3__ben3_nombre: "",
        add3__ben3_paterno: "",
        add3__ben3_materno: "",
        add3__ben3_porcentaje: "",
        add3__ben3_parentesco: "",
        add3__ben3_edad: "",
        add3__ben3_titular: "",
      });
    }
  };
  acc_add3__ben4 = () => {
    if (this.state.add3__ben4 === false) {
      this.setState({ add3__ben4: true });
    } else {
      this.setState({
        add3__ben4: false,
        add3__ben4_nombre: "",
        add3__ben4_paterno: "",
        add3__ben4_materno: "",
        add3__ben4_porcentaje: "",
        add3__ben4_parentesco: "",
        add3__ben4_edad: "",
        add3__ben4_titular: "",
      });
    }
  };
  acc_add3__ben5 = () => {
    if (this.state.add3__ben5 === false) {
      this.setState({ add3__ben5: true });
    } else {
      this.setState({
        add3__ben5: false,
        add3__ben5_nombre: "",
        add3__ben5_paterno: "",
        add3__ben5_materno: "",
        add3__ben5_porcentaje: "",
        add3__ben5_parentesco: "",
        add3__ben5_edad: "",
        add3__ben5_titular: "",
      });
    }
  };
  acc_add4__ben1 = () => {
    if (this.state.add4__ben1 === false) {
      this.setState({ add4__ben1: true });
    } else {
      this.setState({
        add4__ben1: false,
        add4__ben1_nombre: "",
        add4__ben1_paterno: "",
        add4__ben1_materno: "",
        add4__ben1_porcentaje: "",
        add4__ben1_parentesco: "",
        add4__ben1_edad: "",
        add4__ben1_titular: "",
      });
    }
  };
  acc_add4__ben2 = () => {
    if (this.state.add4__ben2 === false) {
      this.setState({ add4__ben2: true });
    } else {
      this.setState({
        add4__ben2: false,
        add4__ben2_nombre: "",
        add4__ben2_paterno: "",
        add4__ben2_materno: "",
        add4__ben2_porcentaje: "",
        add4__ben2_parentesco: "",
        add4__ben2_edad: "",
        add4__ben2_titular: "",
      });
    }
  };
  acc_add4__ben3 = () => {
    if (this.state.add4__ben3 === false) {
      this.setState({ add4__ben3: true });
    } else {
      this.setState({
        add4__ben3: false,
        add4__ben3_nombre: "",
        add4__ben3_paterno: "",
        add4__ben3_materno: "",
        add4__ben3_porcentaje: "",
        add4__ben3_parentesco: "",
        add4__ben3_edad: "",
        add4__ben3_titular: "",
      });
    }
  };
  acc_add4__ben4 = () => {
    if (this.state.add4__ben4 === false) {
      this.setState({ add4__ben4: true });
    } else {
      this.setState({
        add4__ben4: false,
        add4__ben4_nombre: "",
        add4__ben4_paterno: "",
        add4__ben4_materno: "",
        add4__ben4_porcentaje: "",
        add4__ben4_parentesco: "",
        add4__ben4_edad: "",
        add4__ben4_titular: "",
      });
    }
  };
  acc_add4__ben5 = () => {
    if (this.state.add4__ben5 === false) {
      this.setState({ add4__ben5: true });
    } else {
      this.setState({
        add4__ben5: false,
        add4__ben5_nombre: "",
        add4__ben5_paterno: "",
        add4__ben5_materno: "",
        add4__ben5_porcentaje: "",
        add4__ben5_parentesco: "",
        add4__ben5_edad: "",
        add4__ben5_titular: "",
      });
    }
  };
  acc_add5__ben1 = () => {
    if (this.state.add5__ben1 === false) {
      this.setState({ add5__ben1: true });
    } else {
      this.setState({
        add5__ben1: false,
        add5__ben1_nombre: "",
        add5__ben1_paterno: "",
        add5__ben1_materno: "",
        add5__ben1_porcentaje: "",
        add5__ben1_parentesco: "",
        add5__ben1_edad: "",
        add5__ben1_titular: "",
      });
    }
  };
  acc_add5__ben2 = () => {
    if (this.state.add5__ben2 === false) {
      this.setState({ add5__ben2: true });
    } else {
      this.setState({
        add5__ben2: false,
        add5__ben2_nombre: "",
        add5__ben2_paterno: "",
        add5__ben2_materno: "",
        add5__ben2_porcentaje: "",
        add5__ben2_parentesco: "",
        add5__ben2_edad: "",
        add5__ben2_titular: "",
      });
    }
  };
  acc_add5__ben3 = () => {
    if (this.state.add5__ben3 === false) {
      this.setState({ add5__ben3: true });
    } else {
      this.setState({
        add5__ben3: false,
        add5__ben3_nombre: "",
        add5__ben3_paterno: "",
        add5__ben3_materno: "",
        add5__ben3_porcentaje: "",
        add5__ben3_parentesco: "",
        add5__ben3_edad: "",
        add5__ben3_titular: "",
      });
    }
  };
  acc_add5__ben4 = () => {
    if (this.state.add5__ben4 === false) {
      this.setState({ add5__ben4: true });
    } else {
      this.setState({
        add5__ben4: false,
        add5__ben4_nombre: "",
        add5__ben4_paterno: "",
        add5__ben4_materno: "",
        add5__ben4_porcentaje: "",
        add5__ben4_parentesco: "",
        add5__ben4_edad: "",
        add5__ben4_titular: "",
      });
    }
  };
  acc_add5__ben5 = () => {
    if (this.state.add5__ben5 === false) {
      this.setState({ add5__ben5: true });
    } else {
      this.setState({
        add5__ben5: false,
        add5__ben5_nombre: "",
        add5__ben5_paterno: "",
        add5__ben5_materno: "",
        add5__ben5_porcentaje: "",
        add5__ben5_parentesco: "",
        add5__ben5_edad: "",
        add5__ben5_titular: "",
      });
    }
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
  sendStep5 = () => {
    console.log("enviar 5");
  };
  sendStep6 = () => {
    console.log("enviar 6");
  };
  sendStep7 = () => {
    console.log("enviar 7");
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Step1GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            sendStep1={this.sendStep1}
          />
        );
      case 2:
        return (
          <Step2GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep2={this.sendStep2}
            add1True={this.add1True}
            add2True={this.add2True}
            add3True={this.add3True}
            add4True={this.add4True}
            add5True={this.add5True}
            add1False={this.add1False}
            add2False={this.add2False}
            add3False={this.add3False}
            add4False={this.add4False}
            add5False={this.add5False}
            clearAdd1={this.clearAdd1}
            clearAdd2={this.clearAdd2}
            clearAdd3={this.clearAdd3}
            clearAdd4={this.clearAdd4}
            clearAdd5={this.clearAdd5}
          />
        );
      case 3:
        return (
          <Step3GM
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
          <Step4GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep4={this.sendStep4}
          />
        );
      case 5:
        return (
          <Step5GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep5={this.sendStep5}
            handleCheckCobertura={this.handleCheckCobertura}
            handleCheckCobAT={this.handleCheckCobAT}
            handleCheckCobA1={this.handleCheckCobA1}
            handleCheckCobA2={this.handleCheckCobA2}
            handleCheckCobA3={this.handleCheckCobA3}
            handleCheckCobA4={this.handleCheckCobA4}
            handleCheckCobA5={this.handleCheckCobA5}
            closeModalTitular={this.closeModalTitular}
            closeModalAdd1={this.closeModalAdd1}
            closeModalAdd2={this.closeModalAdd2}
            closeModalAdd3={this.closeModalAdd3}
            closeModalAdd4={this.closeModalAdd4}
            closeModalAdd5={this.closeModalAdd5}
            acceptModalTitular={this.acceptModalTitular}
            acceptModalAdd1={this.acceptModalAdd1}
            acceptModalAdd2={this.acceptModalAdd2}
            acceptModalAdd3={this.acceptModalAdd3}
            acceptModalAdd4={this.acceptModalAdd4}
            acceptModalAdd5={this.acceptModalAdd5}
            acc_add0__ben1={this.acc_add0__ben1}
            acc_add0__ben2={this.acc_add0__ben2}
            acc_add0__ben3={this.acc_add0__ben3}
            acc_add0__ben4={this.acc_add0__ben4}
            acc_add0__ben5={this.acc_add0__ben5}
            acc_add1__ben1={this.acc_add1__ben1}
            acc_add1__ben2={this.acc_add1__ben2}
            acc_add1__ben3={this.acc_add1__ben3}
            acc_add1__ben4={this.acc_add1__ben4}
            acc_add1__ben5={this.acc_add1__ben5}
            acc_add2__ben1={this.acc_add2__ben1}
            acc_add2__ben2={this.acc_add2__ben2}
            acc_add2__ben3={this.acc_add2__ben3}
            acc_add2__ben4={this.acc_add2__ben4}
            acc_add2__ben5={this.acc_add2__ben5}
            acc_add3__ben1={this.acc_add3__ben1}
            acc_add3__ben2={this.acc_add3__ben2}
            acc_add3__ben3={this.acc_add3__ben3}
            acc_add3__ben4={this.acc_add3__ben4}
            acc_add3__ben5={this.acc_add3__ben5}
            acc_add4__ben1={this.acc_add4__ben1}
            acc_add4__ben2={this.acc_add4__ben2}
            acc_add4__ben3={this.acc_add4__ben3}
            acc_add4__ben4={this.acc_add4__ben4}
            acc_add4__ben5={this.acc_add4__ben5}
            acc_add5__ben1={this.acc_add5__ben1}
            acc_add5__ben2={this.acc_add5__ben2}
            acc_add5__ben3={this.acc_add5__ben3}
            acc_add5__ben4={this.acc_add5__ben4}
            acc_add5__ben5={this.acc_add5__ben5}
          />
        );
      case 6:
        return (
          <Step6GM
            state={this.state}
            activeStep={this.activeStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendStep6={this.sendStep6}
          />
        );
      case 7:
        return (
          <Step7GM
            state={this.state}
            activeStep={this.activeStep}
            handleChange={this.handleChange}
            handleCheckTerminos={this.handleCheckTerminos}
            sendStep7={this.sendStep7}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleCheckChangeImg={this.handleCheckChangeImg}
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

export default MainGM;

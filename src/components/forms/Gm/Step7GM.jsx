import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import FacturaGM from "./Inputs/FacturaGM";
import AlertForm from "../AlertForm";

class Step7GM extends Component {
  state = {
    errorFX__nombre: false,
    errorFX__paterno: false,
    errorFX__materno: false,
    errorFX__rfc: false,
    errorFX__correo: false,
    errorFX__tel: false,
    errorFX__Razon: false,
    errorFX__nombrePF: false,
    errorFX__paternoPF: false,
    errorFX__maternoPF: false,
    errorFX__rfcFactura: false,
    errorFX__correoFactura: false,
    errorFX__telFactura: false,
    errorFX__calle: false,
    errorFX__noExterior: false,
    errorFX__noInterior: false,
    errorFX__cp: false,
    errorFX__alcaldia: false,
    errorFX__colonia: false,
    errorFX__estado: false,
    errorFX__numPoliza: false,
    errorFX__compania: false,
    errorFX__formaDePago: false,
    errorFX__metodoDePago: false,
    errorFX__ine: false,
    errorFX__poliza: false,
    errorFX__terminosGM: false,

    errorTest__nombre: false,
    errorTest__paterno: false,
    errorTest__materno: false,
    errorTest__rfc: false,
    errorTest__correo: false,
    errorTest__tel: false,
    errorTest__nombrePF: false,
    errorTest__paternoPF: false,
    errorTest__maternoPF: false,
    errorTest__rfcFactura: false,
    errorTest__correoFactura: false,
    errorTest__telFactura: false,
    errorTest__cp: false,

    errorNull__nombre: false,
    errorNull__paterno: false,
    errorNull__materno: false,
    errorNull__rfc: false,
    errorNull__correo: false,
    errorNull__tel: false,
    errorNull__Razon: false,
    errorNull__nombrePF: false,
    errorNull__paternoPF: false,
    errorNull__maternoPF: false,
    errorNull__rfcFactura: false,
    errorNull__correoFactura: false,
    errorNull__telFactura: false,
    errorNull__calle: false,
    errorNull__noExterior: false,
    errorNull__noInterior: false,
    errorNull__cp: false,
    errorNull__alcaldia: false,
    errorNull__colonia: false,
    errorNull__estado: false,
    errorNull__numPoliza: false,
    errorNull__compania: false,
    errorNull__formaDePago: false,
    errorNull__metodoDePago: false,
    errorNull__ine: false,
    errorNull__poliza: false,
    errorNull__terminosGM: false,

    initFormaDePago: true,
    initMetodoDePago: true,
    initIne: true,
    initPoliza: true,
    initTerminosGM: true,

    offStep7: false,
    showAlertStep7: false,
  };

  closedAlertStep7 = () => {
    this.setState({
      showAlertStep7: false,
    });
  };

  /*__________________

      VALIDATION 
  _____________________________*/
  validationNombre = () => {
    if (this.props.state.nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.nombre)) {
        this.setState({
          errorFX__nombre: true,
          errorTest__nombre: true,
          errorNull__nombre: false,
        });
      } else {
        this.setState({
          errorFX__nombre: false,
          errorTest__nombre: false,
          errorNull__nombre: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre: true,
        errorNull__nombre: true,
        errorTest__nombre: false,
      });
    }
  };
  validationPaterno = () => {
    if (this.props.state.paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.paterno)) {
        this.setState({
          errorFX__paterno: true,
          errorTest__paterno: true,
          errorNull__paterno: false,
        });
      } else {
        this.setState({
          errorFX__paterno: false,
          errorTest__paterno: false,
          errorNull__paterno: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno: true,
        errorNull__paterno: true,
        errorTest__paterno: false,
      });
    }
  };
  validationMaterno = () => {
    if (this.props.state.materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.materno)) {
        this.setState({
          errorFX__materno: true,
          errorTest__materno: true,
          errorNull__materno: false,
        });
      } else {
        this.setState({
          errorFX__materno: false,
          errorTest__materno: false,
          errorNull__materno: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno: true,
        errorNull__materno: true,
        errorTest__materno: false,
      });
    }
  };
  validationRFC = () => {
    if (this.props.state.rfc !== "") {
      if (
        !/^([a-zñA-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z]|[0-9]){2}([aA]|[0-9]){1})?$/.test(
          this.props.state.rfc
        )
      ) {
        this.setState({
          errorFX__rfc: true,
          errorTest__rfc: true,
          errorNull__rfc: false,
        });
      } else {
        this.setState({
          errorFX__rfc: false,
          errorTest__rfc: false,
          errorNull__rfc: false,
        });
      }
    } else {
      this.setState({
        errorFX__rfc: true,
        errorNull__rfc: true,
        errorTest__rfc: false,
      });
    }
  };
  validationCorreo = () => {
    if (this.props.state.correo !== "") {
      if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          this.props.state.correo
        )
      ) {
        this.setState({
          errorFX__correo: true,
          errorTest__correo: true,
          errorNull__correo: false,
        });
      } else {
        this.setState({
          errorFX__correo: false,
          errorTest__correo: false,
          errorNull__correo: false,
        });
      }
    } else {
      this.setState({
        errorFX__correo: true,
        errorNull__correo: true,
        errorTest__correo: false,
      });
    }
  };
  validationTel = () => {
    if (this.props.state.tel !== "") {
      if (!/^\d{7,14}$/.test(this.props.state.tel)) {
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
  validationRazon = () => {
    if (this.props.state.razonSocial === "") {
      this.setState({
        errorFX__Razon: true,
        errorNull__Razon: true,
      });
    } else {
      this.setState({
        errorFX__Razon: false,
        errorNull__Razon: false,
      });
    }
  };
  validationNombrePF = () => {
    if (this.props.state.nombrePF !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.nombrePF)) {
        this.setState({
          errorFX__nombrePF: true,
          errorTest__nombrePF: true,
          errorNull__nombrePF: false,
        });
      } else {
        this.setState({
          errorFX__nombrePF: false,
          errorTest__nombrePF: false,
          errorNull__nombrePF: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombrePF: true,
        errorNull__nombrePF: true,
        errorTest__nombrePF: false,
      });
    }
  };
  validationPaternoPF = () => {
    if (this.props.state.paternoPF !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.paternoPF)) {
        this.setState({
          errorFX__paternoPF: true,
          errorTest__paternoPF: true,
          errorNull__paternoPF: false,
        });
      } else {
        this.setState({
          errorFX__paternoPF: false,
          errorTest__paternoPF: false,
          errorNull__paternoPF: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoPF: true,
        errorNull__paternoPF: true,
        errorTest__paternoPF: false,
      });
    }
  };
  validationMaternoPF = () => {
    if (this.props.state.maternoPF !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.maternoPF)) {
        this.setState({
          errorFX__maternoPF: true,
          errorTest__maternoPF: true,
          errorNull__maternoPF: false,
        });
      } else {
        this.setState({
          errorFX__maternoPF: false,
          errorTest__maternoPF: false,
          errorNull__maternoPF: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoPF: true,
        errorNull__maternoPF: true,
        errorTest__maternoPF: false,
      });
    }
  };
  validationRFCFactura = () => {
    if (this.props.state.rfcFactura !== "") {
      if (
        !/^([a-zñA-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z]|[0-9]){2}([aA]|[0-9]){1})?$/.test(
          this.props.state.rfcFactura
        )
      ) {
        this.setState({
          errorFX__rfcFactura: true,
          errorTest__rfcFactura: true,
          errorNull__rfcFactura: false,
        });
      } else {
        this.setState({
          errorFX__rfcFactura: false,
          errorTest__rfcFactura: false,
          errorNull__rfcFactura: false,
        });
      }
    } else {
      this.setState({
        errorFX__rfcFactura: true,
        errorNull__rfcFactura: true,
        errorTest__rfcFactura: false,
      });
    }
  };
  validationCorreoFactura = () => {
    if (this.props.state.correoFactura !== "") {
      if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          this.props.state.correoFactura
        )
      ) {
        this.setState({
          errorFX__correoFactura: true,
          errorTest__correoFactura: true,
          errorNull__correoFactura: false,
        });
      } else {
        this.setState({
          errorFX__correoFactura: false,
          errorTest__correoFactura: false,
          errorNull__correoFactura: false,
        });
      }
    } else {
      this.setState({
        errorFX__correoFactura: true,
        errorNull__correoFactura: true,
        errorTest__correoFactura: false,
      });
    }
    console.log("me ejecute");
  };
  validationTelFactura = () => {
    if (this.props.state.telFactura !== "") {
      if (!/^\d{7,14}$/.test(this.props.state.telFactura)) {
        this.setState({
          errorFX__telFactura: true,
          errorTest__telFactura: true,
          errorNull__telFactura: false,
        });
      } else {
        this.setState({
          errorFX__telFactura: false,
          errorTest__telFactura: false,
          errorNull__telFactura: false,
        });
      }
    } else {
      this.setState({
        errorFX__telFactura: true,
        errorNull__telFactura: true,
        errorTest__telFactura: false,
      });
    }
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
    if (this.props.state.noExterior !== "") {
      this.setState({
        errorFX__noExterior: false,
        errorNull__noExterior: false,
      });
    } else {
      this.setState({
        errorFX__noExterior: true,
        errorNull__noExterior: true,
      });
    }
  };
  validationNumInt = () => {
    if (this.props.state.noInterior !== "") {
      this.setState({
        errorFX__noInterior: false,
        errorNull__noInterior: false,
      });
    } else {
      this.setState({
        errorFX__noInterior: true,
        errorNull__noInterior: true,
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
  validationNumPoliza = () => {
    if (this.props.state.numPoliza !== "") {
      this.setState({
        errorFX__numPoliza: false,
        errorNull__numPoliza: false,
      });
    } else {
      this.setState({
        errorFX__numPoliza: true,
        errorNull__numPoliza: true,
      });
    }
  };
  validationCompania = () => {
    if (this.props.state.compania !== "") {
      this.setState({
        errorFX__compania: false,
        errorNull__compania: false,
      });
    } else {
      this.setState({
        errorFX__compania: true,
        errorNull__compania: true,
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
  validationMetodoDePago = () => {
    if (this.props.state.metodoDePago !== "") {
      this.setState({
        errorFX__metodoDePago: false,
        errorNull__metodoDePago: false,
      });
    } else {
      this.setState({
        errorFX__metodoDePago: true,
        errorNull__metodoDePago: true,
      });
    }
  };
  changeInitMetodoDePago = () => {
    this.setState({
      initMetodoDePago: false,
    });
  };
  validationIne = () => {
    this.props.state.ine
      ? this.setState({ errorFX__ine: false })
      : this.setState({ errorFX__ine: true });
    this.props.state.ine
      ? this.setState({ errorNull__ine: false })
      : this.setState({ errorNull__ine: true });
  };
  changeInitIne = () => {
    this.setState({
      initIne: false,
    });
  };
  validationPoliza = () => {
    this.props.state.poliza
      ? this.setState({ errorFX__poliza: false })
      : this.setState({ errorFX__poliza: true });
    this.props.state.poliza
      ? this.setState({ errorNull__poliza: false })
      : this.setState({ errorNull__poliza: true });
  };
  changeInitPoliza = () => {
    this.setState({
      initPoliza: false,
    });
  };
  validationTerminos = () => {
    this.props.state.terminosGM
      ? this.setState({ errorFX__terminosGM: false })
      : this.setState({ errorFX__terminosGM: true });
    this.props.state.terminosGM
      ? this.setState({ errorNull__terminosGM: false })
      : this.setState({ errorNull__terminosGM: true });
  };
  changeInitTerminosGM = () => {
    this.setState({
      initTerminosGM: false,
    });
  };

  /*__________________

      ON STEP 
  _____________________________*/
  titularPagoUnicoON = () => {
    if (
      this.props.state.nombre !== "" &&
      this.props.state.paterno !== "" &&
      this.props.state.materno !== "" &&
      this.props.state.rfc !== "" &&
      this.props.state.correo !== "" &&
      this.props.state.tel !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.metodoDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombre === false &&
        this.state.errorTest__paterno === false &&
        this.state.errorTest__materno === false &&
        this.state.errorTest__rfc === false &&
        this.state.errorTest__correo === false &&
        this.state.errorTest__tel === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  titularPagoMensualON = () => {
    if (
      this.props.state.nombre !== "" &&
      this.props.state.paterno !== "" &&
      this.props.state.materno !== "" &&
      this.props.state.rfc !== "" &&
      this.props.state.correo !== "" &&
      this.props.state.tel !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombre === false &&
        this.state.errorTest__paterno === false &&
        this.state.errorTest__materno === false &&
        this.state.errorTest__rfc === false &&
        this.state.errorTest__correo === false &&
        this.state.errorTest__tel === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  fisicaPagoUnicoON = () => {
    if (
      this.props.state.nombrePF !== "" &&
      this.props.state.paternoPF !== "" &&
      this.props.state.maternoPF !== "" &&
      this.props.state.rfcFactura !== "" &&
      this.props.state.correoFactura !== "" &&
      this.props.state.telFactura !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.metodoDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  fisicaPagoMensualON = () => {
    if (
      this.props.state.nombrePF !== "" &&
      this.props.state.paternoPF !== "" &&
      this.props.state.maternoPF !== "" &&
      this.props.state.rfcFactura !== "" &&
      this.props.state.correoFactura !== "" &&
      this.props.state.telFactura !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  moralPagoUnicoON = () => {
    if (
      this.props.state.razonSocial !== "" &&
      this.props.state.rfcFactura !== "" &&
      this.props.state.correoFactura !== "" &&
      this.props.state.telFactura !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.metodoDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  moralPagoMensualON = () => {
    if (
      this.props.state.razonSocial !== "" &&
      this.props.state.rfcFactura !== "" &&
      this.props.state.correoFactura !== "" &&
      this.props.state.telFactura !== "" &&
      this.props.state.calle !== "" &&
      this.props.state.noExterior !== "" &&
      this.props.state.noInterior !== "" &&
      this.props.state.cp !== "" &&
      this.props.state.alcaldia !== "" &&
      this.props.state.colonia !== "" &&
      this.props.state.estado !== "" &&
      this.props.state.numPoliza !== "" &&
      this.props.state.compania !== "" &&
      this.props.state.formaDePago !== "" &&
      this.props.state.poliza !== undefined &&
      this.props.state.ine !== undefined &&
      this.props.state.terminosGM !== false
    ) {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.setState({
          offStep7: true,
        });
      }
    } else {
      this.setState({
        offStep7: false,
      });
    }
  };
  validationONStep7 = () => {
    if (this.props.state.factura_si_no === "si") {
      if (this.props.state.formaDePago === "unico") {
        this.titularPagoUnicoON();
      } else {
        this.titularPagoMensualON();
      }
    } else {
      if (this.props.state.fisica_o_moral === "fisica") {
        if (this.props.state.formaDePago === "unico") {
          this.fisicaPagoUnicoON();
        } else {
          this.fisicaPagoMensualON();
        }
      } else {
        if (this.props.state.formaDePago === "unico") {
          this.moralPagoUnicoON();
        } else {
          this.moralPagoMensualON();
        }
      }
    }
  };

  /*__________________

      NEXT STEP 
  _____________________________*/
  activeValidations = () => {
    this.validationNombre();
    this.validationPaterno();
    this.validationMaterno();
    this.validationRFC();
    this.validationCorreo();
    this.validationTel();
    this.validationRFCFactura();
    this.validationCorreoFactura();
    this.validationTelFactura();
    this.validationNombrePF();
    this.validationPaternoPF();
    this.validationMaternoPF();
    this.validationRazon();
    this.validationCalle();
    this.validationNumExt();
    this.validationNumInt();
    this.validationCP();
    this.validationAlcaldia();
    this.validationColonia();
    this.validationCompania();
    this.validationEstado();
    this.validationNumPoliza();
    this.changeInitFormaDePago();
    this.changeInitMetodoDePago();
    this.changeInitIne();
    this.changeInitPoliza();
    this.changeInitTerminosGM();
  };
  titularPagoUnicoSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__nombre === false &&
        this.state.errorTest__paterno === false &&
        this.state.errorTest__materno === false &&
        this.state.errorTest__rfc === false &&
        this.state.errorTest__correo === false &&
        this.state.errorTest__tel === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  titularPagoMensualSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__nombre === false &&
        this.state.errorTest__paterno === false &&
        this.state.errorTest__materno === false &&
        this.state.errorTest__rfc === false &&
        this.state.errorTest__correo === false &&
        this.state.errorTest__tel === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  fisicaPagoUnicoSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  fisicaPagoMensualSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__nombrePF === false &&
        this.state.errorTest__paternoPF === false &&
        this.state.errorTest__maternoPF === false &&
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  moralPagoUnicoSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  moralPagoMensualSend = () => {
    if (this.state.offStep7 === false) {
      this.setState({
        showAlertStep7: true,
      });
      this.activeValidations();
    } else {
      if (
        this.state.errorTest__rfcFactura === false &&
        this.state.errorTest__correoFactura === false &&
        this.state.errorTest__telFactura === false &&
        this.state.errorTest__cp === false
      ) {
        this.props.sendStep7();
      } else {
        this.setState({
          showAlertStep7: true,
        });
        this.activeValidations();
      }
    }
  };
  nextStep7 = () => {
    if (this.props.state.factura_si_no === "si") {
      if (this.props.state.formaDePago === "unico") {
        this.titularPagoUnicoSend();
      } else {
        this.titularPagoMensualSend();
      }
    } else {
      if (this.props.state.fisica_o_moral === "fisica") {
        if (this.props.state.formaDePago === "unico") {
          this.fisicaPagoUnicoSend();
        } else {
          this.fisicaPagoMensualSend();
        }
      } else {
        if (this.props.state.formaDePago === "unico") {
          this.moralPagoUnicoSend();
        } else {
          this.moralPagoMensualSend();
        }
      }
    }
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />
        <div id="formStep7GM"></div>
        <InstructionForm instruction="¿La factura saldrá a nombre del asegurado titular?" />
        <FacturaGM
          state={this.props.state}
          error={this.state}
          handleChange={this.props.handleChange}
          handleCheckTerminos={this.props.handleCheckTerminos}
          handleCheckChangeImg={this.props.handleCheckChangeImg}
          activeStep={this.props.activeStep}
          validationONStep7={this.validationONStep7}
          validationFormaDePago={this.validationFormaDePago}
          validationMetodoDePago={this.validationMetodoDePago}
          validationNombre={this.validationNombre}
          validationPaterno={this.validationPaterno}
          validationMaterno={this.validationMaterno}
          validationCorreo={this.validationCorreo}
          validationRFC={this.validationRFC}
          validationTel={this.validationTel}
          validationRazon={this.validationRazon}
          validationNombrePF={this.validationNombrePF}
          validationPaternoPF={this.validationPaternoPF}
          validationMaternoPF={this.validationMaternoPF}
          validationCorreoFactura={this.validationCorreoFactura}
          validationRFCFactura={this.validationRFCFactura}
          validationTelFactura={this.validationTelFactura}
          validationCalle={this.validationCalle}
          validationNumExt={this.validationNumExt}
          validationNumInt={this.validationNumInt}
          validationCP={this.validationCP}
          validationAlcaldia={this.validationAlcaldia}
          validationColonia={this.validationColonia}
          validationEstado={this.validationEstado}
          validationNumPoliza={this.validationNumPoliza}
          validationCompania={this.validationCompania}
          changeInitMetodoDePago={this.changeInitMetodoDePago}
          changeInitFormaDePago={this.changeInitFormaDePago}
          validationIne={this.validationIne}
          validationPoliza={this.validationPoliza}
          changeInitIne={this.changeInitIne}
          changeInitPoliza={this.changeInitPoliza}
          validationTerminos={this.validationTerminos}
          changeInitTerminosGM={this.changeInitTerminosGM}
        />
        <NextPrevStep
          icon={true}
          text="Continuar"
          off={this.state.offStep7}
          prevStep={this.props.prevStep}
          nextStep={this.nextStep7}
        />
        <AlertForm
          showAlert={this.state.showAlertStep7}
          closedAlert={this.closedAlertStep7}
          linkId="formStep7GM"
          text="Por favor asegúrate de llenar todos los campos correctamente antes de continuar"
        />
      </section>
    );
  }
}

export default Step7GM;

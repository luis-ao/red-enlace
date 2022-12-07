import React, { Component } from "react";
import StepIndicatorGM from "./StepIndicatorGM";
import InstructionForm from "../InstructionForm";
import NextPrevStep from "../NextPrevStep";
import AdicionalesGM from "./Inputs/AdicionalesGM";
import AlertForm from "../AlertForm";

class Step2GM extends Component {
  state = {
    errorFX__nombreAdd1: false,
    errorFX__paternoAdd1: false,
    errorFX__maternoAdd1: false,
    errorFX__edadAdd1: false,
    errorFX__generoAdd1: false,
    errorTest__nombreAdd1: false,
    errorTest__paternoAdd1: false,
    errorTest__maternoAdd1: false,
    errorTest__edadAdd1: false,
    errorNull__nombreAdd1: false,
    errorNull__paternoAdd1: false,
    errorNull__maternoAdd1: false,
    errorNull__edadAdd1: false,
    errorNull__generoAdd1: false,
    init__generoAdd1: true,

    errorFX__nombreAdd2: false,
    errorFX__paternoAdd2: false,
    errorFX__maternoAdd2: false,
    errorFX__edadAdd2: false,
    errorFX__generoAdd2: false,
    errorTest__nombreAdd2: false,
    errorTest__paternoAdd2: false,
    errorTest__maternoAdd2: false,
    errorTest__edadAdd2: false,
    errorNull__nombreAdd2: false,
    errorNull__paternoAdd2: false,
    errorNull__maternoAdd2: false,
    errorNull__edadAdd2: false,
    errorNull__generoAdd2: false,
    init__generoAdd2: true,

    errorFX__nombreAdd3: false,
    errorFX__paternoAdd3: false,
    errorFX__maternoAdd3: false,
    errorFX__edadAdd3: false,
    errorFX__generoAdd3: false,
    errorTest__nombreAdd3: false,
    errorTest__paternoAdd3: false,
    errorTest__maternoAdd3: false,
    errorTest__edadAdd3: false,
    errorNull__nombreAdd3: false,
    errorNull__paternoAdd3: false,
    errorNull__maternoAdd3: false,
    errorNull__edadAdd3: false,
    errorNull__generoAdd3: false,
    init__generoAdd3: true,

    errorFX__nombreAdd4: false,
    errorFX__paternoAdd4: false,
    errorFX__maternoAdd4: false,
    errorFX__edadAdd4: false,
    errorFX__generoAdd4: false,
    errorTest__nombreAdd4: false,
    errorTest__paternoAdd4: false,
    errorTest__maternoAdd4: false,
    errorTest__edadAdd4: false,
    errorNull__nombreAdd4: false,
    errorNull__paternoAdd4: false,
    errorNull__maternoAdd4: false,
    errorNull__edadAdd4: false,
    errorNull__generoAdd4: false,
    init__generoAdd4: true,

    errorFX__nombreAdd5: false,
    errorFX__paternoAdd5: false,
    errorFX__maternoAdd5: false,
    errorFX__edadAdd5: false,
    errorFX__generoAdd5: false,
    errorTest__nombreAdd5: false,
    errorTest__paternoAdd5: false,
    errorTest__maternoAdd5: false,
    errorTest__edadAdd5: false,
    errorNull__nombreAdd5: false,
    errorNull__paternoAdd5: false,
    errorNull__maternoAdd5: false,
    errorNull__edadAdd5: false,
    errorNull__generoAdd5: false,
    init__generoAdd5: true,

    offStep2: true,
    showAlertStep2: false,
    showAlertAdd: false,
  };

  closedAlertStep2 = () => {
    this.setState({
      showAlertStep2: false,
    });
  };
  closedAlertAdd = () => {
    this.setState({
      showAlertAdd: false,
    });
  };
  /*_____________________
  
      ON STEP
  ______________________*/
  validationONStep2 = () => {
    if (
      this.props.state.add1 === false &&
      this.props.state.add2 === false &&
      this.props.state.add3 == false &&
      this.props.state.add4 === false &&
      this.props.state.add5 === false
    ) {
      this.setState({
        offStep2: true,
      });
    } else if (
      this.props.state.add1 === true &&
      this.props.state.add2 === false &&
      this.props.state.add3 === false &&
      this.props.state.add4 === false &&
      this.props.state.add5 === false
    ) {
      if (
        this.props.state.add1__nombre !== "" &&
        this.props.state.add1__paterno !== "" &&
        this.props.state.add1__materno !== "" &&
        this.props.state.add1__edad !== "" &&
        this.props.state.add1__genero !== ""
      ) {
        this.setState({
          offStep2: true,
        });
      } else {
        this.setState({
          offStep2: false,
        });
      }
    } else if (
      this.props.state.add1 === true &&
      this.props.state.add2 === true &&
      this.props.state.add3 === false &&
      this.props.state.add4 === false &&
      this.props.state.add5 === false
    ) {
      if (
        this.props.state.add1__nombre !== "" &&
        this.props.state.add1__paterno !== "" &&
        this.props.state.add1__materno !== "" &&
        this.props.state.add1__edad !== "" &&
        this.props.state.add1__genero !== "" &&
        this.props.state.add2__nombre !== "" &&
        this.props.state.add2__paterno !== "" &&
        this.props.state.add2__materno !== "" &&
        this.props.state.add2__edad !== "" &&
        this.props.state.add2__genero !== ""
      ) {
        this.setState({
          offStep2: true,
        });
      } else {
        this.setState({
          offStep2: false,
        });
      }
    } else if (
      this.props.state.add1 === true &&
      this.props.state.add2 === true &&
      this.props.state.add3 === true &&
      this.props.state.add4 === false &&
      this.props.state.add5 === false
    ) {
      if (
        this.props.state.add1__nombre !== "" &&
        this.props.state.add1__paterno !== "" &&
        this.props.state.add1__materno !== "" &&
        this.props.state.add1__edad !== "" &&
        this.props.state.add1__genero !== "" &&
        this.props.state.add2__nombre !== "" &&
        this.props.state.add2__paterno !== "" &&
        this.props.state.add2__materno !== "" &&
        this.props.state.add2__edad !== "" &&
        this.props.state.add2__genero !== "" &&
        this.props.state.add3__nombre !== "" &&
        this.props.state.add3__paterno !== "" &&
        this.props.state.add3__materno !== "" &&
        this.props.state.add3__edad !== "" &&
        this.props.state.add3__genero !== ""
      ) {
        this.setState({
          offStep2: true,
        });
      } else {
        this.setState({
          offStep2: false,
        });
      }
    } else if (
      this.props.state.add1 === true &&
      this.props.state.add2 === true &&
      this.props.state.add3 === true &&
      this.props.state.add4 === true &&
      this.props.state.add5 === false
    ) {
      if (
        this.props.state.add1__nombre !== "" &&
        this.props.state.add1__paterno !== "" &&
        this.props.state.add1__materno !== "" &&
        this.props.state.add1__edad !== "" &&
        this.props.state.add1__genero !== "" &&
        this.props.state.add2__nombre !== "" &&
        this.props.state.add2__paterno !== "" &&
        this.props.state.add2__materno !== "" &&
        this.props.state.add2__edad !== "" &&
        this.props.state.add2__genero !== "" &&
        this.props.state.add3__nombre !== "" &&
        this.props.state.add3__paterno !== "" &&
        this.props.state.add3__materno !== "" &&
        this.props.state.add3__edad !== "" &&
        this.props.state.add3__genero !== "" &&
        this.props.state.add4__nombre !== "" &&
        this.props.state.add4__paterno !== "" &&
        this.props.state.add4__materno !== "" &&
        this.props.state.add4__edad !== "" &&
        this.props.state.add4__genero !== ""
      ) {
        this.setState({
          offStep2: true,
        });
      } else {
        this.setState({
          offStep2: false,
        });
      }
    } else if (
      this.props.state.add1 === true &&
      this.props.state.add2 === true &&
      this.props.state.add3 === true &&
      this.props.state.add4 === true &&
      this.props.state.add5 === true
    ) {
      if (
        this.props.state.add1__nombre !== "" &&
        this.props.state.add1__paterno !== "" &&
        this.props.state.add1__materno !== "" &&
        this.props.state.add1__edad !== "" &&
        this.props.state.add1__genero !== "" &&
        this.props.state.add2__nombre !== "" &&
        this.props.state.add2__paterno !== "" &&
        this.props.state.add2__materno !== "" &&
        this.props.state.add2__edad !== "" &&
        this.props.state.add2__genero !== "" &&
        this.props.state.add3__nombre !== "" &&
        this.props.state.add3__paterno !== "" &&
        this.props.state.add3__materno !== "" &&
        this.props.state.add3__edad !== "" &&
        this.props.state.add3__genero !== "" &&
        this.props.state.add4__nombre !== "" &&
        this.props.state.add4__paterno !== "" &&
        this.props.state.add4__materno !== "" &&
        this.props.state.add4__edad !== "" &&
        this.props.state.add4__genero !== "" &&
        this.props.state.add5__nombre !== "" &&
        this.props.state.add5__paterno !== "" &&
        this.props.state.add5__materno !== "" &&
        this.props.state.add5__edad !== "" &&
        this.props.state.add5__genero !== ""
      ) {
        this.setState({
          offStep2: true,
        });
      } else {
        this.setState({
          offStep2: false,
        });
      }
    } else {
      this.setState({
        offStep2: false,
      });
    }
  };

  /*_____________________
  
      VALIDATIONS
  ______________________*/
  validationNombreAdd1 = () => {
    if (this.props.state.add1__nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add1__nombre)) {
        this.setState({
          errorFX__nombreAdd1: true,
          errorTest__nombreAdd1: true,
          errorNull__nombreAdd1: false,
        });
      } else {
        this.setState({
          errorFX__nombreAdd1: false,
          errorTest__nombreAdd1: false,
          errorNull__nombreAdd1: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombreAdd1: true,
        errorNull__nombreAdd1: true,
        errorTest__nombreAdd1: false,
      });
    }
  };
  validationPaternoAdd1 = () => {
    if (this.props.state.add1__paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add1__paterno)) {
        this.setState({
          errorFX__paternoAdd1: true,
          errorTest__paternoAdd1: true,
          errorNull__paternoAdd1: false,
        });
      } else {
        this.setState({
          errorFX__paternoAdd1: false,
          errorTest__paternoAdd1: false,
          errorNull__paternoAdd1: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoAdd1: true,
        errorNull__paternoAdd1: true,
        errorTest__paternoAdd1: false,
      });
    }
  };
  validationMaternoAdd1 = () => {
    if (this.props.state.add1__materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add1__materno)) {
        this.setState({
          errorFX__maternoAdd1: true,
          errorTest__maternoAdd1: true,
          errorNull__maternoAdd1: false,
        });
      } else {
        this.setState({
          errorFX__maternoAdd1: false,
          errorTest__maternoAdd1: false,
          errorNull__maternoAdd1: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoAdd1: true,
        errorNull__maternoAdd1: true,
        errorTest__maternoAdd1: false,
      });
    }
  };
  validationEdadAdd1 = () => {
    if (this.props.state.add1__edad !== "") {
      if (
        this.props.state.add1__edad >= 1 &&
        this.props.state.add1__edad <= 75
      ) {
        this.setState({
          errorFX__edadAdd1: false,
          errorTest__edadAdd1: false,
          errorNull__edadAdd1: false,
        });
      } else {
        this.setState({
          errorFX__edadAdd1: true,
          errorTest__edadAdd1: true,
          errorNull__edadAdd1: false,
        });
      }
    } else {
      this.setState({
        errorFX__edadAdd1: true,
        errorNull__edadAdd1: true,
        errorTest__edadAdd1: false,
      });
    }
  };
  validationGeneroAdd1 = () => {
    if (this.props.state.add1__genero === "") {
      this.setState({
        errorFX__generoAdd1: true,
        errorNull__generoAdd1: true,
      });
    } else {
      this.setState({
        errorFX__generoAdd1: false,
        errorNull__generoAdd1: false,
      });
    }
  };
  changeInitGeneroAdd1 = () => {
    this.setState({
      init__generoAdd1: false,
    });
  };
  validationNombreAdd2 = () => {
    if (this.props.state.add2__nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add2__nombre)) {
        this.setState({
          errorFX__nombreAdd2: true,
          errorTest__nombreAdd2: true,
          errorNull__nombreAdd2: false,
        });
      } else {
        this.setState({
          errorFX__nombreAdd2: false,
          errorTest__nombreAdd2: false,
          errorNull__nombreAdd2: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombreAdd2: true,
        errorNull__nombreAdd2: true,
        errorTest__nombreAdd2: false,
      });
    }
  };
  validationPaternoAdd2 = () => {
    if (this.props.state.add2__paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add2__paterno)) {
        this.setState({
          errorFX__paternoAdd2: true,
          errorTest__paternoAdd2: true,
          errorNull__paternoAdd2: false,
        });
      } else {
        this.setState({
          errorFX__paternoAdd2: false,
          errorTest__paternoAdd2: false,
          errorNull__paternoAdd2: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoAdd2: true,
        errorNull__paternoAdd2: true,
        errorTest__paternoAdd2: false,
      });
    }
  };
  validationMaternoAdd2 = () => {
    if (this.props.state.add2__materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add2__materno)) {
        this.setState({
          errorFX__maternoAdd2: true,
          errorTest__maternoAdd2: true,
          errorNull__maternoAdd2: false,
        });
      } else {
        this.setState({
          errorFX__maternoAdd2: false,
          errorTest__maternoAdd2: false,
          errorNull__maternoAdd2: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoAdd2: true,
        errorNull__maternoAdd2: true,
        errorTest__maternoAdd2: false,
      });
    }
  };
  validationEdadAdd2 = () => {
    if (this.props.state.add2__edad !== "") {
      if (
        this.props.state.add2__edad >= 1 &&
        this.props.state.add2__edad <= 75
      ) {
        this.setState({
          errorFX__edadAdd2: false,
          errorTest__edadAdd2: false,
          errorNull__edadAdd2: false,
        });
      } else {
        this.setState({
          errorFX__edadAdd2: true,
          errorTest__edadAdd2: true,
          errorNull__edadAdd2: false,
        });
      }
    } else {
      this.setState({
        errorFX__edadAdd2: true,
        errorNull__edadAdd2: true,
        errorTest__edadAdd2: false,
      });
    }
  };
  validationGeneroAdd2 = () => {
    if (this.props.state.add2__genero === "") {
      this.setState({
        errorFX__generoAdd2: true,
        errorNull__generoAdd2: true,
      });
    } else {
      this.setState({
        errorFX__generoAdd2: false,
        errorNull__generoAdd2: false,
      });
    }
  };
  changeInitGeneroAdd2 = () => {
    this.setState({
      init__generoAdd2: false,
    });
  };
  validationNombreAdd3 = () => {
    if (this.props.state.add3__nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add3__nombre)) {
        this.setState({
          errorFX__nombreAdd3: true,
          errorTest__nombreAdd3: true,
          errorNull__nombreAdd3: false,
        });
      } else {
        this.setState({
          errorFX__nombreAdd3: false,
          errorTest__nombreAdd3: false,
          errorNull__nombreAdd3: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombreAdd3: true,
        errorNull__nombreAdd3: true,
        errorTest__nombreAdd3: false,
      });
    }
  };
  validationPaternoAdd3 = () => {
    if (this.props.state.add3__paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add3__paterno)) {
        this.setState({
          errorFX__paternoAdd3: true,
          errorTest__paternoAdd3: true,
          errorNull__paternoAdd3: false,
        });
      } else {
        this.setState({
          errorFX__paternoAdd3: false,
          errorTest__paternoAdd3: false,
          errorNull__paternoAdd3: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoAdd3: true,
        errorNull__paternoAdd3: true,
        errorTest__paternoAdd3: false,
      });
    }
  };
  validationMaternoAdd3 = () => {
    if (this.props.state.add3__materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add3__materno)) {
        this.setState({
          errorFX__maternoAdd3: true,
          errorTest__maternoAdd3: true,
          errorNull__maternoAdd3: false,
        });
      } else {
        this.setState({
          errorFX__maternoAdd3: false,
          errorTest__maternoAdd3: false,
          errorNull__maternoAdd3: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoAdd3: true,
        errorNull__maternoAdd3: true,
        errorTest__maternoAdd3: false,
      });
    }
  };
  validationEdadAdd3 = () => {
    if (this.props.state.add3__edad !== "") {
      if (
        this.props.state.add3__edad >= 1 &&
        this.props.state.add3__edad <= 75
      ) {
        this.setState({
          errorFX__edadAdd3: false,
          errorTest__edadAdd3: false,
          errorNull__edadAdd3: false,
        });
      } else {
        this.setState({
          errorFX__edadAdd3: true,
          errorTest__edadAdd3: true,
          errorNull__edadAdd3: false,
        });
      }
    } else {
      this.setState({
        errorFX__edadAdd3: true,
        errorNull__edadAdd3: true,
        errorTest__edadAdd3: false,
      });
    }
  };
  validationGeneroAdd3 = () => {
    if (this.props.state.add3__genero === "") {
      this.setState({
        errorFX__generoAdd3: true,
        errorNull__generoAdd3: true,
      });
    } else {
      this.setState({
        errorFX__generoAdd3: false,
        errorNull__generoAdd3: false,
      });
    }
  };
  changeInitGeneroAdd3 = () => {
    this.setState({
      init__generoAdd3: false,
    });
  };
  validationNombreAdd4 = () => {
    if (this.props.state.add4__nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add4__nombre)) {
        this.setState({
          errorFX__nombreAdd4: true,
          errorTest__nombreAdd4: true,
          errorNull__nombreAdd4: false,
        });
      } else {
        this.setState({
          errorFX__nombreAdd4: false,
          errorTest__nombreAdd4: false,
          errorNull__nombreAdd4: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombreAdd4: true,
        errorNull__nombreAdd4: true,
        errorTest__nombreAdd4: false,
      });
    }
  };
  validationPaternoAdd4 = () => {
    if (this.props.state.add4__paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add4__paterno)) {
        this.setState({
          errorFX__paternoAdd4: true,
          errorTest__paternoAdd4: true,
          errorNull__paternoAdd4: false,
        });
      } else {
        this.setState({
          errorFX__paternoAdd4: false,
          errorTest__paternoAdd4: false,
          errorNull__paternoAdd4: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoAdd4: true,
        errorNull__paternoAdd4: true,
        errorTest__paternoAdd4: false,
      });
    }
  };
  validationMaternoAdd4 = () => {
    if (this.props.state.add4__materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add4__materno)) {
        this.setState({
          errorFX__maternoAdd4: true,
          errorTest__maternoAdd4: true,
          errorNull__maternoAdd4: false,
        });
      } else {
        this.setState({
          errorFX__maternoAdd4: false,
          errorTest__maternoAdd4: false,
          errorNull__maternoAdd4: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoAdd4: true,
        errorNull__maternoAdd4: true,
        errorTest__maternoAdd4: false,
      });
    }
  };
  validationEdadAdd4 = () => {
    if (this.props.state.add4__edad !== "") {
      if (
        this.props.state.add4__edad >= 1 &&
        this.props.state.add4__edad <= 75
      ) {
        this.setState({
          errorFX__edadAdd4: false,
          errorTest__edadAdd4: false,
          errorNull__edadAdd4: false,
        });
      } else {
        this.setState({
          errorFX__edadAdd4: true,
          errorTest__edadAdd4: true,
          errorNull__edadAdd4: false,
        });
      }
    } else {
      this.setState({
        errorFX__edadAdd4: true,
        errorNull__edadAdd4: true,
        errorTest__edadAdd4: false,
      });
    }
  };
  validationGeneroAdd4 = () => {
    if (this.props.state.add4__genero === "") {
      this.setState({
        errorFX__generoAdd4: true,
        errorNull__generoAdd4: true,
      });
    } else {
      this.setState({
        errorFX__generoAdd4: false,
        errorNull__generoAdd4: false,
      });
    }
  };
  changeInitGeneroAdd4 = () => {
    this.setState({
      init__generoAdd4: false,
    });
  };
  validationNombreAdd5 = () => {
    if (this.props.state.add5__nombre !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add5__nombre)) {
        this.setState({
          errorFX__nombreAdd5: true,
          errorTest__nombreAdd5: true,
          errorNull__nombreAdd5: false,
        });
      } else {
        this.setState({
          errorFX__nombreAdd5: false,
          errorTest__nombreAdd5: false,
          errorNull__nombreAdd5: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombreAdd5: true,
        errorNull__nombreAdd5: true,
        errorTest__nombreAdd5: false,
      });
    }
  };
  validationPaternoAdd5 = () => {
    if (this.props.state.add5__paterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add5__paterno)) {
        this.setState({
          errorFX__paternoAdd5: true,
          errorTest__paternoAdd5: true,
          errorNull__paternoAdd5: false,
        });
      } else {
        this.setState({
          errorFX__paternoAdd5: false,
          errorTest__paternoAdd5: false,
          errorNull__paternoAdd5: false,
        });
      }
    } else {
      this.setState({
        errorFX__paternoAdd5: true,
        errorNull__paternoAdd5: true,
        errorTest__paternoAdd5: false,
      });
    }
  };
  validationMaternoAdd5 = () => {
    if (this.props.state.add5__materno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(this.props.state.add5__materno)) {
        this.setState({
          errorFX__maternoAdd5: true,
          errorTest__maternoAdd5: true,
          errorNull__maternoAdd5: false,
        });
      } else {
        this.setState({
          errorFX__maternoAdd5: false,
          errorTest__maternoAdd5: false,
          errorNull__maternoAdd5: false,
        });
      }
    } else {
      this.setState({
        errorFX__maternoAdd5: true,
        errorNull__maternoAdd5: true,
        errorTest__maternoAdd5: false,
      });
    }
  };
  validationEdadAdd5 = () => {
    if (this.props.state.add5__edad !== "") {
      if (
        this.props.state.add5__edad >= 1 &&
        this.props.state.add5__edad <= 75
      ) {
        this.setState({
          errorFX__edadAdd5: false,
          errorTest__edadAdd5: false,
          errorNull__edadAdd5: false,
        });
      } else {
        this.setState({
          errorFX__edadAdd5: true,
          errorTest__edadAdd5: true,
          errorNull__edadAdd5: false,
        });
      }
    } else {
      this.setState({
        errorFX__edadAdd5: true,
        errorNull__edadAdd5: true,
        errorTest__edadAdd5: false,
      });
    }
  };
  validationGeneroAdd5 = () => {
    if (this.props.state.add5__genero === "") {
      this.setState({
        errorFX__generoAdd5: true,
        errorNull__generoAdd5: true,
      });
    } else {
      this.setState({
        errorFX__generoAdd5: false,
        errorNull__generoAdd5: false,
      });
    }
  };
  changeInitGeneroAdd5 = () => {
    this.setState({
      init__generoAdd5: false,
    });
  };

  activeValidationsAdd1 = () => {
    this.validationNombreAdd1();
    this.validationPaternoAdd1();
    this.validationMaternoAdd1();
    this.validationEdadAdd1();
    this.changeInitGeneroAdd1();
    this.props.add1True();
  };
  activeValidationsAdd2 = () => {
    this.validationNombreAdd2();
    this.validationPaternoAdd2();
    this.validationMaternoAdd2();
    this.validationEdadAdd2();
    this.changeInitGeneroAdd2();
    this.props.add2True();
  };
  activeValidationsAdd3 = () => {
    this.validationNombreAdd3();
    this.validationPaternoAdd3();
    this.validationMaternoAdd3();
    this.validationEdadAdd3();
    this.changeInitGeneroAdd3();
    this.props.add3True();
  };
  activeValidationsAdd4 = () => {
    this.validationNombreAdd4();
    this.validationPaternoAdd4();
    this.validationMaternoAdd4();
    this.validationEdadAdd4();
    this.changeInitGeneroAdd4();
    this.props.add4True();
  };
  activeValidationsAdd5 = () => {
    this.validationNombreAdd5();
    this.validationPaternoAdd5();
    this.validationMaternoAdd5();
    this.validationEdadAdd5();
    this.changeInitGeneroAdd5();
    this.props.add5True();
  };

  clearFx__Add1 = () => {
    this.setState({
      errorFX__nombreAdd1: false,
      errorFX__paternoAdd1: false,
      errorFX__maternoAdd1: false,
      errorFX__edadAdd1: false,
      init__generoAdd1: true,
    });
  };
  clearFx__Add2 = () => {
    this.setState({
      errorFX__nombreAdd2: false,
      errorFX__paternoAdd2: false,
      errorFX__maternoAdd2: false,
      errorFX__edadAdd2: false,
      init__generoAdd2: true,
    });
  };
  clearFx__Add3 = () => {
    this.setState({
      errorFX__nombreAdd3: false,
      errorFX__paternoAdd3: false,
      errorFX__maternoAdd3: false,
      errorFX__edadAdd3: false,
      init__generoAdd3: true,
    });
  };
  clearFx__Add4 = () => {
    this.setState({
      errorFX__nombreAdd4: false,
      errorFX__paternoAdd4: false,
      errorFX__maternoAdd4: false,
      errorFX__edadAdd4: false,
      init__generoAdd4: true,
    });
  };
  clearFx__Add5 = () => {
    this.setState({
      errorFX__nombreAdd5: false,
      errorFX__paternoAdd5: false,
      errorFX__maternoAdd5: false,
      errorFX__edadAdd5: false,
      init__generoAdd5: true,
    });
  };

  /*_____________________
  
      ADD BENEFICIADO 
  ______________________*/
  add1Accordion = () => {
    if (this.props.state.add1 === false) {
      this.props.add1True();
    } else {
      this.props.add1False();
      this.props.clearAdd1();
      this.clearFx__Add1();
    }
  };
  add2Accordion = () => {
    if (this.props.state.add2 === false) {
      if (this.props.state.add1 !== false) {
        this.props.add2True();
      } else {
        this.activeValidationsAdd1();
        this.props.add1True();
        this.setState({
          showAlertAdd: true,
        });
      }
    } else {
      this.props.add2False();
      this.props.clearAdd2();
      this.clearFx__Add2();
    }
  };
  add3Accordion = () => {
    if (this.props.state.add3 === false) {
      if (this.props.state.add1 !== false && this.props.state.add2 !== false) {
        this.props.add3True();
      } else {
        this.activeValidationsAdd1();
        this.props.add1True();
        this.activeValidationsAdd2();
        this.props.add2True();
        this.setState({
          showAlertAdd: true,
        });
      }
    } else {
      this.props.add3False();
      this.props.clearAdd3();
      this.clearFx__Add3();
    }
  };
  add4Accordion = () => {
    if (this.props.state.add4 === false) {
      if (
        this.props.state.add1 !== false &&
        this.props.state.add2 !== false &&
        this.props.state.add3 !== false
      ) {
        this.props.add4True();
      } else {
        this.activeValidationsAdd1();
        this.props.add1True();
        this.activeValidationsAdd2();
        this.props.add2True();
        this.activeValidationsAdd3();
        this.props.add3True();
        this.setState({
          showAlertAdd: true,
        });
      }
    } else {
      this.props.add4False();
      this.props.clearAdd4();
      this.clearFx__Add4();
    }
  };
  add5Accordion = () => {
    if (this.props.state.add5 === false) {
      if (
        this.props.state.add1 !== false &&
        this.props.state.add2 !== false &&
        this.props.state.add3 !== false &&
        this.props.state.add4 !== false
      ) {
        this.props.add5True();
      } else {
        this.activeValidationsAdd1();
        this.props.add1True();
        this.activeValidationsAdd2();
        this.props.add2True();
        this.activeValidationsAdd3();
        this.props.add3True();
        this.activeValidationsAdd4();
        this.props.add4True();
        this.setState({
          showAlertAdd: true,
        });
      }
    } else {
      this.props.add5False();
      this.props.clearAdd5();
      this.clearFx__Add5();
    }
  };

  /*_____________________
  
      NEXT STEP 
  ______________________*/
  valSend__Adds1 = () => {
    if (
      this.props.state.add1__nombre !== "" &&
      this.props.state.add1__paterno !== "" &&
      this.props.state.add1__materno !== "" &&
      this.props.state.add1__edad !== "" &&
      this.props.state.add1__genero !== ""
    ) {
      if (
        this.state.errorTest__nombreAdd1 !== true &&
        this.state.errorTest__paternoAdd1 !== true &&
        this.state.errorTest__maternoAdd1 !== true &&
        this.state.errorTest__edadAdd1 !== true
      ) {
        this.props.sendStep2();
        this.props.nextStep();
      } else {
        this.activeValidationsAdd1();
        this.setState({ showAlertStep2: true });
      }
    } else {
      this.activeValidationsAdd1();
      this.setState({ showAlertStep2: true });
    }
  };
  valSend__Adds2 = () => {
    if (
      this.props.state.add1__nombre !== "" &&
      this.props.state.add1__paterno !== "" &&
      this.props.state.add1__materno !== "" &&
      this.props.state.add1__edad !== "" &&
      this.props.state.add1__genero !== "" &&
      this.props.state.add2__nombre !== "" &&
      this.props.state.add2__paterno !== "" &&
      this.props.state.add2__materno !== "" &&
      this.props.state.add2__edad !== "" &&
      this.props.state.add2__genero !== ""
    ) {
      if (
        this.state.errorTest__nombreAdd1 !== true &&
        this.state.errorTest__paternoAdd1 !== true &&
        this.state.errorTest__maternoAdd1 !== true &&
        this.state.errorTest__edadAdd1 !== true &&
        this.state.errorTest__nombreAdd2 !== true &&
        this.state.errorTest__paternoAdd2 !== true &&
        this.state.errorTest__maternoAdd2 !== true &&
        this.state.errorTest__edadAdd2 !== true
      ) {
        this.props.sendStep2();
        this.props.nextStep();
      } else {
        this.activeValidationsAdd1();
        this.activeValidationsAdd2();
        this.setState({ showAlertStep2: true });
      }
    } else {
      this.activeValidationsAdd1();
      this.activeValidationsAdd2();
      this.setState({ showAlertStep2: true });
    }
  };
  valSend__Adds3 = () => {
    if (
      this.props.state.add1__nombre !== "" &&
      this.props.state.add1__paterno !== "" &&
      this.props.state.add1__materno !== "" &&
      this.props.state.add1__edad !== "" &&
      this.props.state.add1__genero !== "" &&
      this.props.state.add2__nombre !== "" &&
      this.props.state.add2__paterno !== "" &&
      this.props.state.add2__materno !== "" &&
      this.props.state.add2__edad !== "" &&
      this.props.state.add2__genero !== "" &&
      this.props.state.add3__nombre !== "" &&
      this.props.state.add3__paterno !== "" &&
      this.props.state.add3__materno !== "" &&
      this.props.state.add3__edad !== "" &&
      this.props.state.add3__genero !== ""
    ) {
      if (
        this.state.errorTest__nombreAdd1 !== true &&
        this.state.errorTest__paternoAdd1 !== true &&
        this.state.errorTest__maternoAdd1 !== true &&
        this.state.errorTest__edadAdd1 !== true &&
        this.state.errorTest__nombreAdd2 !== true &&
        this.state.errorTest__paternoAdd2 !== true &&
        this.state.errorTest__maternoAdd2 !== true &&
        this.state.errorTest__edadAdd2 !== true &&
        this.state.errorTest__nombreAdd3 !== true &&
        this.state.errorTest__paternoAdd3 !== true &&
        this.state.errorTest__maternoAdd3 !== true &&
        this.state.errorTest__edadAdd3 !== true
      ) {
        this.props.sendStep2();
        this.props.nextStep();
      } else {
        this.activeValidationsAdd1();
        this.activeValidationsAdd2();
        this.activeValidationsAdd3();
        this.setState({ showAlertStep2: true });
      }
    } else {
      this.activeValidationsAdd1();
      this.activeValidationsAdd2();
      this.activeValidationsAdd3();
      this.setState({ showAlertStep2: true });
    }
  };
  valSend__Adds4 = () => {
    if (
      this.props.state.add1__nombre !== "" &&
      this.props.state.add1__paterno !== "" &&
      this.props.state.add1__materno !== "" &&
      this.props.state.add1__edad !== "" &&
      this.props.state.add1__genero !== "" &&
      this.props.state.add2__nombre !== "" &&
      this.props.state.add2__paterno !== "" &&
      this.props.state.add2__materno !== "" &&
      this.props.state.add2__edad !== "" &&
      this.props.state.add2__genero !== "" &&
      this.props.state.add3__nombre !== "" &&
      this.props.state.add3__paterno !== "" &&
      this.props.state.add3__materno !== "" &&
      this.props.state.add3__edad !== "" &&
      this.props.state.add3__genero !== "" &&
      this.props.state.add4__nombre !== "" &&
      this.props.state.add4__paterno !== "" &&
      this.props.state.add4__materno !== "" &&
      this.props.state.add4__edad !== "" &&
      this.props.state.add4__genero !== ""
    ) {
      if (
        this.state.errorTest__nombreAdd1 !== true &&
        this.state.errorTest__paternoAdd1 !== true &&
        this.state.errorTest__maternoAdd1 !== true &&
        this.state.errorTest__edadAdd1 !== true &&
        this.state.errorTest__nombreAdd2 !== true &&
        this.state.errorTest__paternoAdd2 !== true &&
        this.state.errorTest__maternoAdd2 !== true &&
        this.state.errorTest__edadAdd2 !== true &&
        this.state.errorTest__nombreAdd3 !== true &&
        this.state.errorTest__paternoAdd3 !== true &&
        this.state.errorTest__maternoAdd3 !== true &&
        this.state.errorTest__edadAdd3 !== true &&
        this.state.errorTest__nombreAdd4 !== true &&
        this.state.errorTest__paternoAdd4 !== true &&
        this.state.errorTest__maternoAdd4 !== true &&
        this.state.errorTest__edadAdd4 !== true
      ) {
        this.props.sendStep2();
        this.props.nextStep();
      } else {
        this.activeValidationsAdd1();
        this.activeValidationsAdd2();
        this.activeValidationsAdd3();
        this.activeValidationsAdd4();
        this.setState({ showAlertStep2: true });
      }
    } else {
      this.activeValidationsAdd1();
      this.activeValidationsAdd2();
      this.activeValidationsAdd3();
      this.activeValidationsAdd4();
      this.setState({ showAlertStep2: true });
    }
  };
  valSend__Adds5 = () => {
    s;
    if (
      this.props.state.add1__nombre !== "" &&
      this.props.state.add1__paterno !== "" &&
      this.props.state.add1__materno !== "" &&
      this.props.state.add1__edad !== "" &&
      this.props.state.add1__genero !== "" &&
      this.props.state.add2__nombre !== "" &&
      this.props.state.add2__paterno !== "" &&
      this.props.state.add2__materno !== "" &&
      this.props.state.add2__edad !== "" &&
      this.props.state.add2__genero !== "" &&
      this.props.state.add3__nombre !== "" &&
      this.props.state.add3__paterno !== "" &&
      this.props.state.add3__materno !== "" &&
      this.props.state.add3__edad !== "" &&
      this.props.state.add3__genero !== "" &&
      this.props.state.add4__nombre !== "" &&
      this.props.state.add4__paterno !== "" &&
      this.props.state.add4__materno !== "" &&
      this.props.state.add4__edad !== "" &&
      this.props.state.add4__genero !== "" &&
      this.props.state.add5__nombre !== "" &&
      this.props.state.add5__paterno !== "" &&
      this.props.state.add5__materno !== "" &&
      this.props.state.add5__edad !== "" &&
      this.props.state.add5__genero !== ""
    ) {
      if (
        this.state.errorTest__nombreAdd1 !== true &&
        this.state.errorTest__paternoAdd1 !== true &&
        this.state.errorTest__maternoAdd1 !== true &&
        this.state.errorTest__edadAdd1 !== true &&
        this.state.errorTest__nombreAdd2 !== true &&
        this.state.errorTest__paternoAdd2 !== true &&
        this.state.errorTest__maternoAdd2 !== true &&
        this.state.errorTest__edadAdd2 !== true &&
        this.state.errorTest__nombreAdd3 !== true &&
        this.state.errorTest__paternoAdd3 !== true &&
        this.state.errorTest__maternoAdd3 !== true &&
        this.state.errorTest__edadAdd3 !== true &&
        this.state.errorTest__nombreAdd4 !== true &&
        this.state.errorTest__paternoAdd4 !== true &&
        this.state.errorTest__maternoAdd4 !== true &&
        this.state.errorTest__edadAdd4 !== true &&
        this.state.errorTest__nombreAdd5 !== true &&
        this.state.errorTest__paternoAdd5 !== true &&
        this.state.errorTest__maternoAdd5 !== true &&
        this.state.errorTest__edadAdd5 !== true
      ) {
        this.props.sendStep2();
        this.props.nextStep();
      } else {
        this.activeValidationsAdd1();
        this.activeValidationsAdd2();
        this.activeValidationsAdd3();
        this.activeValidationsAdd4();
        this.activeValidationsAdd5();
        this.setState({ showAlertStep2: true });
      }
    } else {
      this.activeValidationsAdd1();
      this.activeValidationsAdd2();
      this.activeValidationsAdd3();
      this.activeValidationsAdd4();
      this.activeValidationsAdd5();
      this.setState({ showAlertStep2: true });
    }
  };

  nextStep2 = () => {
    if (
      this.props.state.add1 === false &&
      this.props.state.add2 === false &&
      this.props.state.add3 === false &&
      this.props.state.add4 === false &&
      this.props.state.add5 === false
    ) {
      this.props.nextStep();
    } else {
      if (
        this.props.state.add1 === true &&
        this.props.state.add2 === false &&
        this.props.state.add3 === false &&
        this.props.state.add4 === false &&
        this.props.state.add5 === false
      ) {
        this.valSend__Adds1();
      } else if (
        this.props.state.add1 === true &&
        this.props.state.add2 === true &&
        this.props.state.add3 === false &&
        this.props.state.add4 === false &&
        this.props.state.add5 === false
      ) {
        this.valSend__Adds2();
      } else if (
        this.props.state.add1 === true &&
        this.props.state.add2 === true &&
        this.props.state.add3 === true &&
        this.props.state.add4 === false &&
        this.props.state.add5 === false
      ) {
        this.valSend__Adds3();
      } else if (
        this.props.state.add1 === true &&
        this.props.state.add2 === true &&
        this.props.state.add3 === true &&
        this.props.state.add4 === true &&
        this.props.state.add5 === false
      ) {
        this.valSend__Adds4();
      } else if (
        this.props.state.add1 === true &&
        this.props.state.add2 === true &&
        this.props.state.add3 === true &&
        this.props.state.add4 === true &&
        this.props.state.add5 === true
      ) {
        this.valSend__Adds5();
      } else {
        if (this.props.state.add5 === true) {
          this.activeValidationsAdd1();
          this.activeValidationsAdd2();
          this.activeValidationsAdd3();
          this.activeValidationsAdd4();
          this.activeValidationsAdd5();
          this.setState({
            showAlertAdd: true,
          });
        } else if (this.props.state.add4 === true) {
          this.activeValidationsAdd1();
          this.activeValidationsAdd2();
          this.activeValidationsAdd3();
          this.activeValidationsAdd4();
          this.setState({
            showAlertAdd: true,
          });
        } else if (this.props.state.add3 === true) {
          this.activeValidationsAdd1();
          this.activeValidationsAdd2();
          this.activeValidationsAdd3();
          this.setState({
            showAlertAdd: true,
          });
        } else if (this.props.state.add2 === true) {
          this.activeValidationsAdd1();
          this.activeValidationsAdd2();
          this.setState({
            showAlertAdd: true,
          });
        }
      }
    }
  };

  render() {
    return (
      <section>
        <StepIndicatorGM state={this.props.state} />

        <InstructionForm
          instruction="Agrega a tus asegurados adicionales.
          Si no cuentas con asegurados adicionales, da clic en continuar"
        />
        <section id="formStep2GM"></section>
        <AdicionalesGM
          state={this.props.state}
          error={this.state}
          handleChange={this.props.handleChange}
          activeStep={this.props.activeStep}
          validationONStep2={this.validationONStep2}
          add1Accordion={this.add1Accordion}
          add2Accordion={this.add2Accordion}
          add3Accordion={this.add3Accordion}
          add4Accordion={this.add4Accordion}
          add5Accordion={this.add5Accordion}
          validationNombreAdd1={this.validationNombreAdd1}
          validationPaternoAdd1={this.validationPaternoAdd1}
          validationMaternoAdd1={this.validationMaternoAdd1}
          validationEdadAdd1={this.validationEdadAdd1}
          validationGeneroAdd1={this.validationGeneroAdd1}
          changeInitGeneroAdd1={this.changeInitGeneroAdd1}
          validationNombreAdd2={this.validationNombreAdd2}
          validationPaternoAdd2={this.validationPaternoAdd2}
          validationMaternoAdd2={this.validationMaternoAdd2}
          validationEdadAdd2={this.validationEdadAdd2}
          validationGeneroAdd2={this.validationGeneroAdd2}
          changeInitGeneroAdd2={this.changeInitGeneroAdd2}
          validationNombreAdd3={this.validationNombreAdd3}
          validationPaternoAdd3={this.validationPaternoAdd3}
          validationMaternoAdd3={this.validationMaternoAdd3}
          validationEdadAdd3={this.validationEdadAdd3}
          validationGeneroAdd3={this.validationGeneroAdd3}
          changeInitGeneroAdd3={this.changeInitGeneroAdd3}
          validationNombreAdd4={this.validationNombreAdd4}
          validationPaternoAdd4={this.validationPaternoAdd4}
          validationMaternoAdd4={this.validationMaternoAdd4}
          validationEdadAdd4={this.validationEdadAdd4}
          validationGeneroAdd4={this.validationGeneroAdd4}
          changeInitGeneroAdd4={this.changeInitGeneroAdd4}
          validationNombreAdd5={this.validationNombreAdd5}
          validationPaternoAdd5={this.validationPaternoAdd5}
          validationMaternoAdd5={this.validationMaternoAdd5}
          validationEdadAdd5={this.validationEdadAdd5}
          validationGeneroAdd5={this.validationGeneroAdd5}
          changeInitGeneroAdd5={this.changeInitGeneroAdd5}
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
          linkId="formStep2GM"
          text="Por favor llena correctamente todos los campos requeridos"
        />
        <AlertForm
          showAlert={this.state.showAlertAdd}
          closedAlert={this.closedAlertAdd}
          linkId="formStep2GM"
          text="Por favor agrega a tus asegurados adicionales en orden del 1 al 5"
        />
      </section>
    );
  }
}

export default Step2GM;

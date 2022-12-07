import React, { Component } from "react";
import ModalBeneficiado from "./CoberturasGM/ModalBeneficiado";
import AlertForm from "../../AlertForm";

class CoberturaGMBeneficiados extends Component {
  state = {
    titularName:
      this.props.state.nombre +
      " " +
      this.props.state.paterno +
      " " +
      this.props.state.materno,
    add1Name:
      this.props.state.add1__nombre +
      " " +
      this.props.state.add1__paterno +
      " " +
      this.props.state.add1__materno,
    add2Name:
      this.props.state.add2__nombre +
      " " +
      this.props.state.add2__paterno +
      " " +
      this.props.state.add2__materno,
    add3Name:
      this.props.state.add3__nombre +
      " " +
      this.props.state.add3__paterno +
      " " +
      this.props.state.add3__materno,
    add4Name:
      this.props.state.add4__nombre +
      " " +
      this.props.state.add4__paterno +
      " " +
      this.props.state.add4__materno,
    add5Name:
      this.props.state.add5__nombre +
      " " +
      this.props.state.add5__paterno +
      " " +
      this.props.state.add5__materno,

    errorFX__nombre1: false,
    errorFX__nombre2: false,
    errorFX__nombre3: false,
    errorFX__nombre4: false,
    errorFX__nombre5: false,
    errorNull__nombre1: false,
    errorNull__nombre2: false,
    errorNull__nombre3: false,
    errorNull__nombre4: false,
    errorNull__nombre5: false,
    errorTest__nombre1: false,
    errorTest__nombre2: false,
    errorTest__nombre3: false,
    errorTest__nombre4: false,
    errorTest__nombre5: false,

    errorFX__paterno1: false,
    errorFX__paterno2: false,
    errorFX__paterno3: false,
    errorFX__paterno4: false,
    errorFX__paterno5: false,
    errorNull__paterno1: false,
    errorNull__paterno2: false,
    errorNull__paterno3: false,
    errorNull__paterno4: false,
    errorNull__paterno5: false,
    errorTest__paterno1: false,
    errorTest__paterno2: false,
    errorTest__paterno3: false,
    errorTest__paterno4: false,
    errorTest__paterno5: false,

    errorFX__materno1: false,
    errorFX__materno2: false,
    errorFX__materno3: false,
    errorFX__materno4: false,
    errorFX__materno5: false,
    errorNull__materno1: false,
    errorNull__materno2: false,
    errorNull__materno3: false,
    errorNull__materno4: false,
    errorNull__materno5: false,
    errorTest__materno1: false,
    errorTest__materno2: false,
    errorTest__materno3: false,
    errorTest__materno4: false,
    errorTest__materno5: false,

    errorFX__porcentaje1: false,
    errorFX__porcentaje2: false,
    errorFX__porcentaje3: false,
    errorFX__porcentaje4: false,
    errorFX__porcentaje5: false,
    errorNull__porcentaje1: false,
    errorNull__porcentaje2: false,
    errorNull__porcentaje3: false,
    errorNull__porcentaje4: false,
    errorNull__porcentaje5: false,
    errorTest__porcentaje1: false,
    errorTest__porcentaje2: false,
    errorTest__porcentaje3: false,
    errorTest__porcentaje4: false,
    errorTest__porcentaje5: false,

    init__parentesco1: true,
    init__parentesco2: true,
    init__parentesco3: true,
    init__parentesco4: true,
    init__parentesco5: true,
    errorFX__parentesco1: false,
    errorFX__parentesco2: false,
    errorFX__parentesco3: false,
    errorFX__parentesco4: false,
    errorFX__parentesco5: false,
    errorNull__parentesco1: false,
    errorNull__parentesco2: false,
    errorNull__parentesco3: false,
    errorNull__parentesco4: false,
    errorNull__parentesco5: false,

    init__edad1: true,
    init__edad2: true,
    init__edad3: true,
    init__edad4: true,
    init__edad5: true,
    errorFX__edad1: false,
    errorFX__edad2: false,
    errorFX__edad3: false,
    errorFX__edad4: false,
    errorFX__edad5: false,
    errorNull__edad1: false,
    errorNull__edad2: false,
    errorNull__edad3: false,
    errorNull__edad4: false,
    errorNull__edad5: false,

    errorFX__titular1: false,
    errorFX__titular2: false,
    errorFX__titular3: false,
    errorFX__titular4: false,
    errorFX__titular5: false,
    errorNull__titular1: false,
    errorNull__titular2: false,
    errorNull__titular3: false,
    errorNull__titular4: false,
    errorNull__titular5: false,
    errorTest__titular1: false,
    errorTest__titular2: false,
    errorTest__titular3: false,
    errorTest__titular4: false,
    errorTest__titular5: false,

    valAcc1__Add0: false,
    valAcc2__Add0: false,
    valAcc3__Add0: false,
    valAcc4__Add0: false,
    valAcc5__Add0: false,
    valAcc1__Add1: false,
    valAcc2__Add1: false,
    valAcc3__Add1: false,
    valAcc4__Add1: false,
    valAcc5__Add1: false,
    valAcc1__Add2: false,
    valAcc2__Add2: false,
    valAcc3__Add2: false,
    valAcc4__Add2: false,
    valAcc5__Add2: false,
    valAcc1__Add3: false,
    valAcc2__Add3: false,
    valAcc3__Add3: false,
    valAcc4__Add3: false,
    valAcc5__Add3: false,
    valAcc1__Add4: false,
    valAcc2__Add4: false,
    valAcc3__Add4: false,
    valAcc4__Add4: false,
    valAcc5__Add4: false,
    valAcc1__Add5: false,
    valAcc2__Add5: false,
    valAcc3__Add5: false,
    valAcc4__Add5: false,
    valAcc5__Add5: false,

    alertAcc: false,
    alertError: false,
    alertPorcentaje: false,
  };

  closedAlertAcc = () => {
    this.setState({
      alertAcc: false,
    });
  };
  closedAlertError = () => {
    this.setState({
      alertError: false,
    });
  };
  closedAlertPorcentaje = () => {
    this.setState({
      alertPorcentaje: false,
    });
  };

  /* _______________

      VALIDATIONS 
  ______________________*/
  valNombre1 = (stateName) => {
    if (stateName !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateName)) {
        this.setState({
          errorFX__nombre1: true,
          errorTest__nombre1: true,
          errorNull__nombre1: false,
        });
      } else {
        this.setState({
          errorFX__nombre1: false,
          errorTest__nombre1: false,
          errorNull__nombre1: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre1: true,
        errorTest__nombre1: false,
        errorNull__nombre1: true,
      });
    }
  };
  valNombre2 = (stateName) => {
    if (stateName !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateName)) {
        this.setState({
          errorFX__nombre2: true,
          errorTest__nombre2: true,
          errorNull__nombre2: false,
        });
      } else {
        this.setState({
          errorFX__nombre2: false,
          errorTest__nombre2: false,
          errorNull__nombre2: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre2: true,
        errorTest__nombre2: false,
        errorNull__nombre2: true,
      });
    }
  };
  valNombre3 = (stateName) => {
    if (stateName !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateName)) {
        this.setState({
          errorFX__nombre3: true,
          errorTest__nombre3: true,
          errorNull__nombre3: false,
        });
      } else {
        this.setState({
          errorFX__nombre3: false,
          errorTest__nombre3: false,
          errorNull__nombre3: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre3: true,
        errorTest__nombre3: false,
        errorNull__nombre3: true,
      });
    }
  };
  valNombre4 = (stateName) => {
    if (stateName !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateName)) {
        this.setState({
          errorFX__nombre4: true,
          errorTest__nombre4: true,
          errorNull__nombre4: false,
        });
      } else {
        this.setState({
          errorFX__nombre4: false,
          errorTest__nombre4: false,
          errorNull__nombre4: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre4: true,
        errorTest__nombre4: false,
        errorNull__nombre4: true,
      });
    }
  };
  valNombre5 = (stateName) => {
    if (stateName !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateName)) {
        this.setState({
          errorFX__nombre5: true,
          errorTest__nombre5: true,
          errorNull__nombre5: false,
        });
      } else {
        this.setState({
          errorFX__nombre5: false,
          errorTest__nombre5: false,
          errorNull__nombre5: false,
        });
      }
    } else {
      this.setState({
        errorFX__nombre5: true,
        errorTest__nombre5: false,
        errorNull__nombre5: true,
      });
    }
  };
  valNombre1_Add0 = () => {
    this.valNombre1(this.props.state.add0__ben1_nombre);
  };
  valNombre1_Add1 = () => {
    this.valNombre1(this.props.state.add1__ben1_nombre);
  };
  valNombre1_Add2 = () => {
    this.valNombre1(this.props.state.add2__ben1_nombre);
  };
  valNombre1_Add3 = () => {
    this.valNombre1(this.props.state.add3__ben1_nombre);
  };
  valNombre1_Add4 = () => {
    this.valNombre1(this.props.state.add4__ben1_nombre);
  };
  valNombre1_Add5 = () => {
    this.valNombre1(this.props.state.add5__ben1_nombre);
  };
  valNombre2_Add0 = () => {
    this.valNombre2(this.props.state.add0__ben2_nombre);
  };
  valNombre2_Add1 = () => {
    this.valNombre2(this.props.state.add1__ben2_nombre);
  };
  valNombre2_Add2 = () => {
    this.valNombre2(this.props.state.add2__ben2_nombre);
  };
  valNombre2_Add3 = () => {
    this.valNombre2(this.props.state.add3__ben2_nombre);
  };
  valNombre2_Add4 = () => {
    this.valNombre2(this.props.state.add4__ben2_nombre);
  };
  valNombre2_Add5 = () => {
    this.valNombre2(this.props.state.add5__ben2_nombre);
  };
  valNombre3_Add0 = () => {
    this.valNombre3(this.props.state.add0__ben3_nombre);
  };
  valNombre3_Add1 = () => {
    this.valNombre3(this.props.state.add1__ben3_nombre);
  };
  valNombre3_Add2 = () => {
    this.valNombre3(this.props.state.add2__ben3_nombre);
  };
  valNombre3_Add3 = () => {
    this.valNombre3(this.props.state.add3__ben3_nombre);
  };
  valNombre3_Add4 = () => {
    this.valNombre3(this.props.state.add4__ben3_nombre);
  };
  valNombre3_Add5 = () => {
    this.valNombre3(this.props.state.add5__ben3_nombre);
  };
  valNombre4_Add0 = () => {
    this.valNombre4(this.props.state.add0__ben4_nombre);
  };
  valNombre4_Add1 = () => {
    this.valNombre4(this.props.state.add1__ben4_nombre);
  };
  valNombre4_Add2 = () => {
    this.valNombre4(this.props.state.add2__ben4_nombre);
  };
  valNombre4_Add3 = () => {
    this.valNombre4(this.props.state.add3__ben4_nombre);
  };
  valNombre4_Add4 = () => {
    this.valNombre4(this.props.state.add4__ben4_nombre);
  };
  valNombre4_Add5 = () => {
    this.valNombre4(this.props.state.add5__ben4_nombre);
  };
  valNombre5_Add0 = () => {
    this.valNombre5(this.props.state.add0__ben5_nombre);
  };
  valNombre5_Add1 = () => {
    this.valNombre5(this.props.state.add1__ben5_nombre);
  };
  valNombre5_Add2 = () => {
    this.valNombre5(this.props.state.add2__ben5_nombre);
  };
  valNombre5_Add3 = () => {
    this.valNombre5(this.props.state.add3__ben5_nombre);
  };
  valNombre5_Add4 = () => {
    this.valNombre5(this.props.state.add4__ben5_nombre);
  };
  valNombre5_Add5 = () => {
    this.valNombre5(this.props.state.add5__ben5_nombre);
  };

  valPaterno1 = (statePaterno) => {
    if (statePaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(statePaterno)) {
        this.setState({
          errorFX__paterno1: true,
          errorTest__paterno1: true,
          errorNull__paterno1: false,
        });
      } else {
        this.setState({
          errorFX__paterno1: false,
          errorTest__paterno1: false,
          errorNull__paterno1: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno1: true,
        errorTest__paterno1: false,
        errorNull__paterno1: true,
      });
    }
  };
  valPaterno2 = (statePaterno) => {
    if (statePaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(statePaterno)) {
        this.setState({
          errorFX__paterno2: true,
          errorTest__paterno2: true,
          errorNull__paterno2: false,
        });
      } else {
        this.setState({
          errorFX__paterno2: false,
          errorTest__paterno2: false,
          errorNull__paterno2: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno2: true,
        errorTest__paterno2: false,
        errorNull__paterno2: true,
      });
    }
  };
  valPaterno3 = (statePaterno) => {
    if (statePaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(statePaterno)) {
        this.setState({
          errorFX__paterno3: true,
          errorTest__paterno3: true,
          errorNull__paterno3: false,
        });
      } else {
        this.setState({
          errorFX__paterno3: false,
          errorTest__paterno3: false,
          errorNull__paterno3: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno3: true,
        errorTest__paterno3: false,
        errorNull__paterno3: true,
      });
    }
  };
  valPaterno4 = (statePaterno) => {
    if (statePaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(statePaterno)) {
        this.setState({
          errorFX__paterno4: true,
          errorTest__paterno4: true,
          errorNull__paterno4: false,
        });
      } else {
        this.setState({
          errorFX__paterno4: false,
          errorTest__paterno4: false,
          errorNull__paterno4: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno4: true,
        errorTest__paterno4: false,
        errorNull__paterno4: true,
      });
    }
  };
  valPaterno5 = (statePaterno) => {
    if (statePaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(statePaterno)) {
        this.setState({
          errorFX__paterno5: true,
          errorTest__paterno5: true,
          errorNull__paterno5: false,
        });
      } else {
        this.setState({
          errorFX__paterno5: false,
          errorTest__paterno5: false,
          errorNull__paterno5: false,
        });
      }
    } else {
      this.setState({
        errorFX__paterno5: true,
        errorTest__paterno5: false,
        errorNull__paterno5: true,
      });
    }
  };
  valPaterno1_Add0 = () => {
    this.valPaterno1(this.props.state.add0__ben1_paterno);
  };
  valPaterno1_Add1 = () => {
    this.valPaterno1(this.props.state.add1__ben1_paterno);
  };
  valPaterno1_Add2 = () => {
    this.valPaterno1(this.props.state.add2__ben1_paterno);
  };
  valPaterno1_Add3 = () => {
    this.valPaterno1(this.props.state.add3__ben1_paterno);
  };
  valPaterno1_Add4 = () => {
    this.valPaterno1(this.props.state.add4__ben1_paterno);
  };
  valPaterno1_Add5 = () => {
    this.valPaterno1(this.props.state.add5__ben1_paterno);
  };
  valPaterno2_Add0 = () => {
    this.valPaterno2(this.props.state.add0__ben2_paterno);
  };
  valPaterno2_Add1 = () => {
    this.valPaterno2(this.props.state.add1__ben2_paterno);
  };
  valPaterno2_Add2 = () => {
    this.valPaterno2(this.props.state.add2__ben2_paterno);
  };
  valPaterno2_Add3 = () => {
    this.valPaterno2(this.props.state.add3__ben2_paterno);
  };
  valPaterno2_Add4 = () => {
    this.valPaterno2(this.props.state.add4__ben2_paterno);
  };
  valPaterno2_Add5 = () => {
    this.valPaterno2(this.props.state.add5__ben2_paterno);
  };
  valPaterno3_Add0 = () => {
    this.valPaterno3(this.props.state.add0__ben3_paterno);
  };
  valPaterno3_Add1 = () => {
    this.valPaterno3(this.props.state.add1__ben3_paterno);
  };
  valPaterno3_Add2 = () => {
    this.valPaterno3(this.props.state.add2__ben3_paterno);
  };
  valPaterno3_Add3 = () => {
    this.valPaterno3(this.props.state.add3__ben3_paterno);
  };
  valPaterno3_Add4 = () => {
    this.valPaterno3(this.props.state.add4__ben3_paterno);
  };
  valPaterno3_Add5 = () => {
    this.valPaterno3(this.props.state.add5__ben3_paterno);
  };
  valPaterno4_Add0 = () => {
    this.valPaterno4(this.props.state.add0__ben4_paterno);
  };
  valPaterno4_Add1 = () => {
    this.valPaterno4(this.props.state.add1__ben4_paterno);
  };
  valPaterno4_Add2 = () => {
    this.valPaterno4(this.props.state.add2__ben4_paterno);
  };
  valPaterno4_Add3 = () => {
    this.valPaterno4(this.props.state.add3__ben4_paterno);
  };
  valPaterno4_Add4 = () => {
    this.valPaterno4(this.props.state.add4__ben4_paterno);
  };
  valPaterno4_Add5 = () => {
    this.valPaterno4(this.props.state.add5__ben4_paterno);
  };
  valPaterno5_Add0 = () => {
    this.valPaterno5(this.props.state.add0__ben5_paterno);
  };
  valPaterno5_Add1 = () => {
    this.valPaterno5(this.props.state.add1__ben5_paterno);
  };
  valPaterno5_Add2 = () => {
    this.valPaterno5(this.props.state.add2__ben5_paterno);
  };
  valPaterno5_Add3 = () => {
    this.valPaterno5(this.props.state.add3__ben5_paterno);
  };
  valPaterno5_Add4 = () => {
    this.valPaterno5(this.props.state.add4__ben5_paterno);
  };
  valPaterno5_Add5 = () => {
    this.valPaterno5(this.props.state.add5__ben5_paterno);
  };

  valMaterno1 = (stateMaterno) => {
    if (stateMaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateMaterno)) {
        this.setState({
          errorFX__materno1: true,
          errorTest__materno1: true,
          errorNull__materno1: false,
        });
      } else {
        this.setState({
          errorFX__materno1: false,
          errorTest__materno1: false,
          errorNull__materno1: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno1: true,
        errorTest__materno1: false,
        errorNull__materno1: true,
      });
    }
  };
  valMaterno2 = (stateMaterno) => {
    if (stateMaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateMaterno)) {
        this.setState({
          errorFX__materno2: true,
          errorTest__materno2: true,
          errorNull__materno2: false,
        });
      } else {
        this.setState({
          errorFX__materno2: false,
          errorTest__materno2: false,
          errorNull__materno2: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno2: true,
        errorTest__materno2: false,
        errorNull__materno2: true,
      });
    }
  };
  valMaterno3 = (stateMaterno) => {
    if (stateMaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateMaterno)) {
        this.setState({
          errorFX__materno3: true,
          errorTest__materno3: true,
          errorNull__materno3: false,
        });
      } else {
        this.setState({
          errorFX__materno3: false,
          errorTest__materno3: false,
          errorNull__materno3: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno3: true,
        errorTest__materno3: false,
        errorNull__materno3: true,
      });
    }
  };
  valMaterno4 = (stateMaterno) => {
    if (stateMaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateMaterno)) {
        this.setState({
          errorFX__materno4: true,
          errorTest__materno4: true,
          errorNull__materno4: false,
        });
      } else {
        this.setState({
          errorFX__materno4: false,
          errorTest__materno4: false,
          errorNull__materno4: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno4: true,
        errorTest__materno4: false,
        errorNull__materno4: true,
      });
    }
  };
  valMaterno5 = (stateMaterno) => {
    if (stateMaterno !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateMaterno)) {
        this.setState({
          errorFX__materno5: true,
          errorTest__materno5: true,
          errorNull__materno5: false,
        });
      } else {
        this.setState({
          errorFX__materno5: false,
          errorTest__materno5: false,
          errorNull__materno5: false,
        });
      }
    } else {
      this.setState({
        errorFX__materno5: true,
        errorTest__materno5: false,
        errorNull__materno5: true,
      });
    }
  };
  valMaterno1_Add0 = () => {
    this.valMaterno1(this.props.state.add0__ben1_materno);
  };
  valMaterno1_Add1 = () => {
    this.valMaterno1(this.props.state.add1__ben1_materno);
  };
  valMaterno1_Add2 = () => {
    this.valMaterno1(this.props.state.add2__ben1_materno);
  };
  valMaterno1_Add3 = () => {
    this.valMaterno1(this.props.state.add3__ben1_materno);
  };
  valMaterno1_Add4 = () => {
    this.valMaterno1(this.props.state.add4__ben1_materno);
  };
  valMaterno1_Add5 = () => {
    this.valMaterno1(this.props.state.add5__ben1_materno);
  };
  valMaterno2_Add0 = () => {
    this.valMaterno2(this.props.state.add0__ben2_materno);
  };
  valMaterno2_Add1 = () => {
    this.valMaterno2(this.props.state.add1__ben2_materno);
  };
  valMaterno2_Add2 = () => {
    this.valMaterno2(this.props.state.add2__ben2_materno);
  };
  valMaterno2_Add3 = () => {
    this.valMaterno2(this.props.state.add3__ben2_materno);
  };
  valMaterno2_Add4 = () => {
    this.valMaterno2(this.props.state.add4__ben2_materno);
  };
  valMaterno2_Add5 = () => {
    this.valMaterno2(this.props.state.add5__ben2_materno);
  };
  valMaterno3_Add0 = () => {
    this.valMaterno3(this.props.state.add0__ben3_materno);
  };
  valMaterno3_Add1 = () => {
    this.valMaterno3(this.props.state.add1__ben3_materno);
  };
  valMaterno3_Add2 = () => {
    this.valMaterno3(this.props.state.add2__ben3_materno);
  };
  valMaterno3_Add3 = () => {
    this.valMaterno3(this.props.state.add3__ben3_materno);
  };
  valMaterno3_Add4 = () => {
    this.valMaterno3(this.props.state.add4__ben3_materno);
  };
  valMaterno3_Add5 = () => {
    this.valMaterno3(this.props.state.add5__ben3_materno);
  };
  valMaterno4_Add0 = () => {
    this.valMaterno4(this.props.state.add0__ben4_materno);
  };
  valMaterno4_Add1 = () => {
    this.valMaterno4(this.props.state.add1__ben4_materno);
  };
  valMaterno4_Add2 = () => {
    this.valMaterno4(this.props.state.add2__ben4_materno);
  };
  valMaterno4_Add3 = () => {
    this.valMaterno4(this.props.state.add3__ben4_materno);
  };
  valMaterno4_Add4 = () => {
    this.valMaterno4(this.props.state.add4__ben4_materno);
  };
  valMaterno4_Add5 = () => {
    this.valMaterno4(this.props.state.add5__ben4_materno);
  };
  valMaterno5_Add0 = () => {
    this.valMaterno5(this.props.state.add0__ben5_materno);
  };
  valMaterno5_Add1 = () => {
    this.valMaterno5(this.props.state.add1__ben5_materno);
  };
  valMaterno5_Add2 = () => {
    this.valMaterno5(this.props.state.add2__ben5_materno);
  };
  valMaterno5_Add3 = () => {
    this.valMaterno5(this.props.state.add3__ben5_materno);
  };
  valMaterno5_Add4 = () => {
    this.valMaterno5(this.props.state.add4__ben5_materno);
  };
  valMaterno5_Add5 = () => {
    this.valMaterno5(this.props.state.add5__ben5_materno);
  };

  valPorcentaje1 = (statePorcentaje) => {
    if (statePorcentaje !== "") {
      if (statePorcentaje >= 1 && statePorcentaje <= 100) {
        this.setState({
          errorFX__porcentaje1: false,
          errorTest__porcentaje1: false,
          errorNull__porcentaje1: false,
        });
      } else {
        this.setState({
          errorFX__porcentaje1: true,
          errorTest__porcentaje1: true,
          errorNull__porcentaje1: false,
        });
      }
    } else {
      this.setState({
        errorFX__porcentaje1: true,
        errorTest__porcentaje1: false,
        errorNull__porcentaje1: true,
      });
    }
  };
  valPorcentaje2 = (statePorcentaje) => {
    if (statePorcentaje !== "") {
      if (statePorcentaje >= 1 && statePorcentaje <= 100) {
        this.setState({
          errorFX__porcentaje2: false,
          errorTest__porcentaje2: false,
          errorNull__porcentaje2: false,
        });
      } else {
        this.setState({
          errorFX__porcentaje2: true,
          errorTest__porcentaje2: true,
          errorNull__porcentaje2: false,
        });
      }
    } else {
      this.setState({
        errorFX__porcentaje2: true,
        errorTest__porcentaje2: false,
        errorNull__porcentaje2: true,
      });
    }
  };
  valPorcentaje3 = (statePorcentaje) => {
    if (statePorcentaje !== "") {
      if (statePorcentaje >= 1 && statePorcentaje <= 100) {
        this.setState({
          errorFX__porcentaje3: false,
          errorTest__porcentaje3: false,
          errorNull__porcentaje3: false,
        });
      } else {
        this.setState({
          errorFX__porcentaje3: true,
          errorTest__porcentaje3: true,
          errorNull__porcentaje3: false,
        });
      }
    } else {
      this.setState({
        errorFX__porcentaje3: true,
        errorTest__porcentaje3: false,
        errorNull__porcentaje3: true,
      });
    }
  };
  valPorcentaje4 = (statePorcentaje) => {
    if (statePorcentaje !== "") {
      if (statePorcentaje >= 1 && statePorcentaje <= 100) {
        this.setState({
          errorFX__porcentaje4: false,
          errorTest__porcentaje4: false,
          errorNull__porcentaje4: false,
        });
      } else {
        this.setState({
          errorFX__porcentaje4: true,
          errorTest__porcentaje4: true,
          errorNull__porcentaje4: false,
        });
      }
    } else {
      this.setState({
        errorFX__porcentaje4: true,
        errorTest__porcentaje4: false,
        errorNull__porcentaje4: true,
      });
    }
  };
  valPorcentaje5 = (statePorcentaje) => {
    if (statePorcentaje !== "") {
      if (statePorcentaje >= 1 && statePorcentaje <= 100) {
        this.setState({
          errorFX__porcentaje5: false,
          errorTest__porcentaje5: false,
          errorNull__porcentaje5: false,
        });
      } else {
        this.setState({
          errorFX__porcentaje5: true,
          errorTest__porcentaje5: true,
          errorNull__porcentaje5: false,
        });
      }
    } else {
      this.setState({
        errorFX__porcentaje5: true,
        errorTest__porcentaje5: false,
        errorNull__porcentaje5: true,
      });
    }
  };
  valPorcentaje1_Add0 = () => {
    this.valPorcentaje1(this.props.state.add0__ben1_porcentaje);
  };
  valPorcentaje1_Add1 = () => {
    this.valPorcentaje1(this.props.state.add1__ben1_porcentaje);
  };
  valPorcentaje1_Add2 = () => {
    this.valPorcentaje1(this.props.state.add2__ben1_porcentaje);
  };
  valPorcentaje1_Add3 = () => {
    this.valPorcentaje1(this.props.state.add3__ben1_porcentaje);
  };
  valPorcentaje1_Add4 = () => {
    this.valPorcentaje1(this.props.state.add4__ben1_porcentaje);
  };
  valPorcentaje1_Add5 = () => {
    this.valPorcentaje1(this.props.state.add5__ben1_porcentaje);
  };
  valPorcentaje2_Add0 = () => {
    this.valPorcentaje2(this.props.state.add0__ben2_porcentaje);
  };
  valPorcentaje2_Add1 = () => {
    this.valPorcentaje2(this.props.state.add1__ben2_porcentaje);
  };
  valPorcentaje2_Add2 = () => {
    this.valPorcentaje2(this.props.state.add2__ben2_porcentaje);
  };
  valPorcentaje2_Add3 = () => {
    this.valPorcentaje2(this.props.state.add3__ben2_porcentaje);
  };
  valPorcentaje2_Add4 = () => {
    this.valPorcentaje2(this.props.state.add4__ben2_porcentaje);
  };
  valPorcentaje2_Add5 = () => {
    this.valPorcentaje2(this.props.state.add5__ben2_porcentaje);
  };
  valPorcentaje3_Add0 = () => {
    this.valPorcentaje3(this.props.state.add0__ben3_porcentaje);
  };
  valPorcentaje3_Add1 = () => {
    this.valPorcentaje3(this.props.state.add1__ben3_porcentaje);
  };
  valPorcentaje3_Add2 = () => {
    this.valPorcentaje3(this.props.state.add2__ben3_porcentaje);
  };
  valPorcentaje3_Add3 = () => {
    this.valPorcentaje3(this.props.state.add3__ben3_porcentaje);
  };
  valPorcentaje3_Add4 = () => {
    this.valPorcentaje3(this.props.state.add4__ben3_porcentaje);
  };
  valPorcentaje3_Add5 = () => {
    this.valPorcentaje3(this.props.state.add5__ben3_porcentaje);
  };
  valPorcentaje4_Add0 = () => {
    this.valPorcentaje4(this.props.state.add0__ben4_porcentaje);
  };
  valPorcentaje4_Add1 = () => {
    this.valPorcentaje4(this.props.state.add1__ben4_porcentaje);
  };
  valPorcentaje4_Add2 = () => {
    this.valPorcentaje4(this.props.state.add2__ben4_porcentaje);
  };
  valPorcentaje4_Add3 = () => {
    this.valPorcentaje4(this.props.state.add3__ben4_porcentaje);
  };
  valPorcentaje4_Add4 = () => {
    this.valPorcentaje4(this.props.state.add4__ben4_porcentaje);
  };
  valPorcentaje4_Add5 = () => {
    this.valPorcentaje4(this.props.state.add5__ben4_porcentaje);
  };
  valPorcentaje5_Add0 = () => {
    this.valPorcentaje5(this.props.state.add0__ben5_porcentaje);
  };
  valPorcentaje5_Add1 = () => {
    this.valPorcentaje5(this.props.state.add1__ben5_porcentaje);
  };
  valPorcentaje5_Add2 = () => {
    this.valPorcentaje5(this.props.state.add2__ben5_porcentaje);
  };
  valPorcentaje5_Add3 = () => {
    this.valPorcentaje5(this.props.state.add3__ben5_porcentaje);
  };
  valPorcentaje5_Add4 = () => {
    this.valPorcentaje5(this.props.state.add4__ben5_porcentaje);
  };
  valPorcentaje5_Add5 = () => {
    this.valPorcentaje5(this.props.state.add5__ben5_porcentaje);
  };

  valParentesco1 = (stateParentesco) => {
    if (stateParentesco !== "") {
      this.setState({
        errorFX__parentesco1: false,
        errorNull__parentesco1: false,
      });
    } else {
      this.setState({
        errorFX__parentesco1: true,
        errorNull__parentesco1: true,
      });
    }
  };
  valParentesco2 = (stateParentesco) => {
    if (stateParentesco !== "") {
      this.setState({
        errorFX__parentesco2: false,
        errorNull__parentesco2: false,
      });
    } else {
      this.setState({
        errorFX__parentesco2: true,
        errorNull__parentesco2: true,
      });
    }
  };
  valParentesco3 = (stateParentesco) => {
    if (stateParentesco !== "") {
      this.setState({
        errorFX__parentesco3: false,
        errorNull__parentesco3: false,
      });
    } else {
      this.setState({
        errorFX__parentesco3: true,
        errorNull__parentesco3: true,
      });
    }
  };
  valParentesco4 = (stateParentesco) => {
    if (stateParentesco !== "") {
      this.setState({
        errorFX__parentesco4: false,
        errorNull__parentesco4: false,
      });
    } else {
      this.setState({
        errorFX__parentesco4: true,
        errorNull__parentesco4: true,
      });
    }
  };
  valParentesco5 = (stateParentesco) => {
    if (stateParentesco !== "") {
      this.setState({
        errorFX__parentesco5: false,
        errorNull__parentesco5: false,
      });
    } else {
      this.setState({
        errorFX__parentesco5: true,
        errorNull__parentesco5: true,
      });
    }
  };
  valParentesco1_Add0 = () => {
    this.valParentesco1(this.props.state.add0__ben1_parentesco);
  };
  valParentesco1_Add1 = () => {
    this.valParentesco1(this.props.state.add1__ben1_parentesco);
  };
  valParentesco1_Add2 = () => {
    this.valParentesco1(this.props.state.add2__ben1_parentesco);
  };
  valParentesco1_Add3 = () => {
    this.valParentesco1(this.props.state.add3__ben1_parentesco);
  };
  valParentesco1_Add4 = () => {
    this.valParentesco1(this.props.state.add4__ben1_parentesco);
  };
  valParentesco1_Add5 = () => {
    this.valParentesco1(this.props.state.add5__ben1_parentesco);
  };
  valParentesco2_Add0 = () => {
    this.valParentesco2(this.props.state.add0__ben2_parentesco);
  };
  valParentesco2_Add1 = () => {
    this.valParentesco2(this.props.state.add1__ben2_parentesco);
  };
  valParentesco2_Add2 = () => {
    this.valParentesco2(this.props.state.add2__ben2_parentesco);
  };
  valParentesco2_Add3 = () => {
    this.valParentesco2(this.props.state.add3__ben2_parentesco);
  };
  valParentesco2_Add4 = () => {
    this.valParentesco2(this.props.state.add4__ben2_parentesco);
  };
  valParentesco2_Add5 = () => {
    this.valParentesco2(this.props.state.add5__ben2_parentesco);
  };
  valParentesco3_Add0 = () => {
    this.valParentesco3(this.props.state.add0__ben3_parentesco);
  };
  valParentesco3_Add1 = () => {
    this.valParentesco3(this.props.state.add1__ben3_parentesco);
  };
  valParentesco3_Add2 = () => {
    this.valParentesco3(this.props.state.add2__ben3_parentesco);
  };
  valParentesco3_Add3 = () => {
    this.valParentesco3(this.props.state.add3__ben3_parentesco);
  };
  valParentesco3_Add4 = () => {
    this.valParentesco3(this.props.state.add4__ben3_parentesco);
  };
  valParentesco3_Add5 = () => {
    this.valParentesco3(this.props.state.add5__ben3_parentesco);
  };
  valParentesco4_Add0 = () => {
    this.valParentesco4(this.props.state.add0__ben4_parentesco);
  };
  valParentesco4_Add1 = () => {
    this.valParentesco4(this.props.state.add1__ben4_parentesco);
  };
  valParentesco4_Add2 = () => {
    this.valParentesco4(this.props.state.add2__ben4_parentesco);
  };
  valParentesco4_Add3 = () => {
    this.valParentesco4(this.props.state.add3__ben4_parentesco);
  };
  valParentesco4_Add4 = () => {
    this.valParentesco4(this.props.state.add4__ben4_parentesco);
  };
  valParentesco4_Add5 = () => {
    this.valParentesco4(this.props.state.add5__ben4_parentesco);
  };
  valParentesco5_Add0 = () => {
    this.valParentesco5(this.props.state.add0__ben5_parentesco);
  };
  valParentesco5_Add1 = () => {
    this.valParentesco5(this.props.state.add1__ben5_parentesco);
  };
  valParentesco5_Add2 = () => {
    this.valParentesco5(this.props.state.add2__ben5_parentesco);
  };
  valParentesco5_Add3 = () => {
    this.valParentesco5(this.props.state.add3__ben5_parentesco);
  };
  valParentesco5_Add4 = () => {
    this.valParentesco5(this.props.state.add4__ben5_parentesco);
  };
  valParentesco5_Add5 = () => {
    this.valParentesco5(this.props.state.add5__ben5_parentesco);
  };

  changeInitParentesco1 = () => {
    this.setState({
      init__parentesco1: false,
    });
  };
  changeInitParentesco2 = () => {
    this.setState({
      init__parentesco2: false,
    });
  };
  changeInitParentesco3 = () => {
    this.setState({
      init__parentesco3: false,
    });
  };
  changeInitParentesco4 = () => {
    this.setState({
      init__parentesco4: false,
    });
  };
  changeInitParentesco5 = () => {
    this.setState({
      init__parentesco5: false,
    });
  };

  valEdad1 = (statusEdad) => {
    if (statusEdad !== "") {
      this.setState({
        errorFX__edad1: false,
        errorNull__edad1: false,
      });
    } else {
      this.setState({
        errorFX__edad1: true,
        errorNull__edad1: true,
      });
    }
  };
  valEdad2 = (statusEdad) => {
    if (statusEdad !== "") {
      this.setState({
        errorFX__edad2: false,
        errorNull__edad2: false,
      });
    } else {
      this.setState({
        errorFX__edad2: true,
        errorNull__edad2: true,
      });
    }
  };
  valEdad3 = (statusEdad) => {
    if (statusEdad !== "") {
      this.setState({
        errorFX__edad3: false,
        errorNull__edad3: false,
      });
    } else {
      this.setState({
        errorFX__edad3: true,
        errorNull__edad3: true,
      });
    }
  };
  valEdad4 = (statusEdad) => {
    if (statusEdad !== "") {
      this.setState({
        errorFX__edad4: false,
        errorNull__edad4: false,
      });
    } else {
      this.setState({
        errorFX__edad4: true,
        errorNull__edad4: true,
      });
    }
  };
  valEdad5 = (statusEdad) => {
    if (statusEdad !== "") {
      this.setState({
        errorFX__edad5: false,
        errorNull__edad5: false,
      });
    } else {
      this.setState({
        errorFX__edad5: true,
        errorNull__edad5: true,
      });
    }
  };
  valEdad1_Add0 = () => {
    this.valEdad1(this.props.state.add0__ben1_edad);
  };
  valEdad1_Add1 = () => {
    this.valEdad1(this.props.state.add1__ben1_edad);
  };
  valEdad1_Add2 = () => {
    this.valEdad1(this.props.state.add2__ben1_edad);
  };
  valEdad1_Add3 = () => {
    this.valEdad1(this.props.state.add3__ben1_edad);
  };
  valEdad1_Add4 = () => {
    this.valEdad1(this.props.state.add4__ben1_edad);
  };
  valEdad1_Add5 = () => {
    this.valEdad1(this.props.state.add5__ben1_edad);
  };
  valEdad2_Add0 = () => {
    this.valEdad2(this.props.state.add0__ben2_edad);
  };
  valEdad2_Add1 = () => {
    this.valEdad2(this.props.state.add1__ben2_edad);
  };
  valEdad2_Add2 = () => {
    this.valEdad2(this.props.state.add2__ben2_edad);
  };
  valEdad2_Add3 = () => {
    this.valEdad2(this.props.state.add3__ben2_edad);
  };
  valEdad2_Add4 = () => {
    this.valEdad2(this.props.state.add4__ben2_edad);
  };
  valEdad2_Add5 = () => {
    this.valEdad2(this.props.state.add5__ben2_edad);
  };
  valEdad3_Add0 = () => {
    this.valEdad3(this.props.state.add0__ben3_edad);
  };
  valEdad3_Add1 = () => {
    this.valEdad3(this.props.state.add1__ben3_edad);
  };
  valEdad3_Add2 = () => {
    this.valEdad3(this.props.state.add2__ben3_edad);
  };
  valEdad3_Add3 = () => {
    this.valEdad3(this.props.state.add3__ben3_edad);
  };
  valEdad3_Add4 = () => {
    this.valEdad3(this.props.state.add4__ben3_edad);
  };
  valEdad3_Add5 = () => {
    this.valEdad3(this.props.state.add5__ben3_edad);
  };
  valEdad4_Add0 = () => {
    this.valEdad4(this.props.state.add0__ben4_edad);
  };
  valEdad4_Add1 = () => {
    this.valEdad4(this.props.state.add1__ben4_edad);
  };
  valEdad4_Add2 = () => {
    this.valEdad4(this.props.state.add2__ben4_edad);
  };
  valEdad4_Add3 = () => {
    this.valEdad4(this.props.state.add3__ben4_edad);
  };
  valEdad4_Add4 = () => {
    this.valEdad4(this.props.state.add4__ben4_edad);
  };
  valEdad4_Add5 = () => {
    this.valEdad4(this.props.state.add5__ben4_edad);
  };
  valEdad5_Add0 = () => {
    this.valEdad5(this.props.state.add0__ben5_edad);
  };
  valEdad5_Add1 = () => {
    this.valEdad5(this.props.state.add1__ben5_edad);
  };
  valEdad5_Add2 = () => {
    this.valEdad5(this.props.state.add2__ben5_edad);
  };
  valEdad5_Add3 = () => {
    this.valEdad5(this.props.state.add3__ben5_edad);
  };
  valEdad5_Add4 = () => {
    this.valEdad5(this.props.state.add4__ben5_edad);
  };
  valEdad5_Add5 = () => {
    this.valEdad5(this.props.state.add5__ben5_edad);
  };

  changeInitEdad1 = () => {
    this.setState({
      init__edad1: false,
    });
  };
  changeInitEdad2 = () => {
    this.setState({
      init__edad2: false,
    });
  };
  changeInitEdad3 = () => {
    this.setState({
      init__edad3: false,
    });
  };
  changeInitEdad4 = () => {
    this.setState({
      init__edad4: false,
    });
  };
  changeInitEdad5 = () => {
    this.setState({
      init__edad5: false,
    });
  };

  valTitular1 = (stateTitular) => {
    if (stateTitular !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateTitular)) {
        this.setState({
          errorFX__titular1: true,
          errorTest__titular1: true,
          errorNull__titular1: false,
        });
      } else {
        this.setState({
          errorFX__titular1: false,
          errorTest__titular1: false,
          errorNull__titular1: false,
        });
      }
    } else {
      this.setState({
        errorFX__titular1: true,
        errorTest__titular1: false,
        errorNull__titular1: true,
      });
    }
  };
  valTitular2 = (stateTitular) => {
    if (stateTitular !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateTitular)) {
        this.setState({
          errorFX__titular2: true,
          errorTest__titular2: true,
          errorNull__titular2: false,
        });
      } else {
        this.setState({
          errorFX__titular2: false,
          errorTest__titular2: false,
          errorNull__titular2: false,
        });
      }
    } else {
      this.setState({
        errorFX__titular2: true,
        errorTest__titular2: false,
        errorNull__titular2: true,
      });
    }
  };
  valTitular3 = (stateTitular) => {
    if (stateTitular !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateTitular)) {
        this.setState({
          errorFX__titular3: true,
          errorTest__titular3: true,
          errorNull__titular3: false,
        });
      } else {
        this.setState({
          errorFX__titular3: false,
          errorTest__titular3: false,
          errorNull__titular3: false,
        });
      }
    } else {
      this.setState({
        errorFX__titular3: true,
        errorTest__titular3: false,
        errorNull__titular3: true,
      });
    }
  };
  valTitular4 = (stateTitular) => {
    if (stateTitular !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateTitular)) {
        this.setState({
          errorFX__titular4: true,
          errorTest__titular4: true,
          errorNull__titular4: false,
        });
      } else {
        this.setState({
          errorFX__titular4: false,
          errorTest__titular4: false,
          errorNull__titular4: false,
        });
      }
    } else {
      this.setState({
        errorFX__titular4: true,
        errorTest__titular4: false,
        errorNull__titular4: true,
      });
    }
  };
  valTitular5 = (stateTitular) => {
    if (stateTitular !== "") {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(stateTitular)) {
        this.setState({
          errorFX__titular5: true,
          errorTest__titular5: true,
          errorNull__titular5: false,
        });
      } else {
        this.setState({
          errorFX__titular5: false,
          errorTest__titular5: false,
          errorNull__titular5: false,
        });
      }
    } else {
      this.setState({
        errorFX__titular5: true,
        errorTest__titular5: false,
        errorNull__titular5: true,
      });
    }
  };
  valTitular1_Add0 = () => {
    this.valTitular1(this.props.state.add0__ben1_titular);
  };
  valTitular1_Add1 = () => {
    this.valTitular1(this.props.state.add1__ben1_titular);
  };
  valTitular1_Add2 = () => {
    this.valTitular1(this.props.state.add2__ben1_titular);
  };
  valTitular1_Add3 = () => {
    this.valTitular1(this.props.state.add3__ben1_titular);
  };
  valTitular1_Add4 = () => {
    this.valTitular1(this.props.state.add4__ben1_titular);
  };
  valTitular1_Add5 = () => {
    this.valTitular1(this.props.state.add5__ben1_titular);
  };
  valTitular2_Add0 = () => {
    this.valTitular2(this.props.state.add0__ben2_titular);
  };
  valTitular2_Add1 = () => {
    this.valTitular2(this.props.state.add1__ben2_titular);
  };
  valTitular2_Add2 = () => {
    this.valTitular2(this.props.state.add2__ben2_titular);
  };
  valTitular2_Add3 = () => {
    this.valTitular2(this.props.state.add3__ben2_titular);
  };
  valTitular2_Add4 = () => {
    this.valTitular2(this.props.state.add4__ben2_titular);
  };
  valTitular2_Add5 = () => {
    this.valTitular2(this.props.state.add5__ben2_titular);
  };
  valTitular3_Add0 = () => {
    this.valTitular3(this.props.state.add0__ben3_titular);
  };
  valTitular3_Add1 = () => {
    this.valTitular3(this.props.state.add1__ben3_titular);
  };
  valTitular3_Add2 = () => {
    this.valTitular3(this.props.state.add2__ben3_titular);
  };
  valTitular3_Add3 = () => {
    this.valTitular3(this.props.state.add3__ben3_titular);
  };
  valTitular3_Add4 = () => {
    this.valTitular3(this.props.state.add4__ben3_titular);
  };
  valTitular3_Add5 = () => {
    this.valTitular3(this.props.state.add5__ben3_titular);
  };
  valTitular4_Add0 = () => {
    this.valTitular4(this.props.state.add0__ben4_titular);
  };
  valTitular4_Add1 = () => {
    this.valTitular4(this.props.state.add1__ben4_titular);
  };
  valTitular4_Add2 = () => {
    this.valTitular4(this.props.state.add2__ben4_titular);
  };
  valTitular4_Add3 = () => {
    this.valTitular4(this.props.state.add3__ben4_titular);
  };
  valTitular4_Add4 = () => {
    this.valTitular4(this.props.state.add4__ben4_titular);
  };
  valTitular4_Add5 = () => {
    this.valTitular4(this.props.state.add5__ben4_titular);
  };
  valTitular5_Add0 = () => {
    this.valTitular5(this.props.state.add0__ben5_titular);
  };
  valTitular5_Add1 = () => {
    this.valTitular5(this.props.state.add1__ben5_titular);
  };
  valTitular5_Add2 = () => {
    this.valTitular5(this.props.state.add2__ben5_titular);
  };
  valTitular5_Add3 = () => {
    this.valTitular5(this.props.state.add3__ben5_titular);
  };
  valTitular5_Add4 = () => {
    this.valTitular5(this.props.state.add4__ben5_titular);
  };
  valTitular5_Add5 = () => {
    this.valTitular5(this.props.state.add5__ben5_titular);
  };

  activeValAcc1__Add0 = () => {
    this.valParentesco1_Add0();
    this.valEdad1_Add0();
    this.valNombre1_Add0();
    this.valPaterno1_Add0();
    this.valMaterno1_Add0();
    this.valPorcentaje1_Add0();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valTitular1_Add0();
    if (this.props.state.add0__ben1 === false) {
      this.props.acc_add0__ben1();
    }
  };
  activeValAcc1__Add1 = () => {
    this.valParentesco1_Add1();
    this.valEdad1_Add1();
    this.valNombre1_Add1();
    this.valPaterno1_Add1();
    this.valMaterno1_Add1();
    this.valPorcentaje1_Add1();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valParentesco1_Add1();
    this.valEdad1_Add1();
    this.valTitular1_Add1();
    if (this.props.state.add1__ben1 === false) {
      this.props.acc_add1__ben1();
    }
  };
  activeValAcc1__Add2 = () => {
    this.valParentesco1_Add2();
    this.valEdad1_Add2();
    this.valNombre1_Add2();
    this.valPaterno1_Add2();
    this.valMaterno1_Add2();
    this.valPorcentaje1_Add2();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valTitular1_Add2();
    if (this.props.state.add2__ben1 === false) {
      this.props.acc_add2__ben1();
    }
  };
  activeValAcc1__Add3 = () => {
    this.valParentesco1_Add3();
    this.valEdad1_Add3();
    this.valNombre1_Add3();
    this.valPaterno1_Add3();
    this.valMaterno1_Add3();
    this.valPorcentaje1_Add3();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valTitular1_Add3();
    if (this.props.state.add3__ben1 === false) {
      this.props.acc_add3__ben1();
    }
  };
  activeValAcc1__Add4 = () => {
    this.valParentesco1_Add4();
    this.valEdad1_Add4();
    this.valNombre1_Add4();
    this.valPaterno1_Add4();
    this.valMaterno1_Add4();
    this.valPorcentaje1_Add4();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valTitular1_Add4();
    if (this.props.state.add4__ben1 === false) {
      this.props.acc_add4__ben1();
    }
  };
  activeValAcc1__Add5 = () => {
    this.valParentesco1_Add5();
    this.valEdad1_Add5();
    this.valNombre1_Add5();
    this.valPaterno1_Add5();
    this.valMaterno1_Add5();
    this.valPorcentaje1_Add5();
    this.changeInitParentesco1();
    this.changeInitEdad1();
    this.valTitular1_Add5();
    if (this.props.state.add5__ben1 === false) {
      this.props.acc_add5__ben1();
    }
  };
  activeValAcc2__Add0 = () => {
    this.valParentesco2_Add0();
    this.valEdad2_Add0();
    this.valNombre2_Add0();
    this.valPaterno2_Add0();
    this.valMaterno2_Add0();
    this.valPorcentaje2_Add0();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add0();
    if (this.props.state.add0__ben2 === false) {
      this.props.acc_add0__ben2();
    }
  };
  activeValAcc2__Add1 = () => {
    this.valParentesco2_Add1();
    this.valEdad2_Add1();
    this.valNombre2_Add1();
    this.valPaterno2_Add1();
    this.valMaterno2_Add1();
    this.valPorcentaje2_Add1();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add1();
    if (this.props.state.add1__ben2 === false) {
      this.props.acc_add1__ben2();
    }
  };
  activeValAcc2__Add2 = () => {
    this.valParentesco2_Add2();
    this.valEdad2_Add2();
    this.valNombre2_Add2();
    this.valPaterno2_Add2();
    this.valMaterno2_Add2();
    this.valPorcentaje2_Add2();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add2();
    if (this.props.state.add2__ben2 === false) {
      this.props.acc_add2__ben2();
    }
  };
  activeValAcc2__Add3 = () => {
    this.valParentesco2_Add3();
    this.valEdad2_Add3();
    this.valNombre2_Add3();
    this.valPaterno2_Add3();
    this.valMaterno2_Add3();
    this.valPorcentaje2_Add3();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add3();
    if (this.props.state.add3__ben2 === false) {
      this.props.acc_add3__ben2();
    }
  };
  activeValAcc2__Add4 = () => {
    this.valParentesco2_Add4();
    this.valEdad2_Add4();
    this.valNombre2_Add4();
    this.valPaterno2_Add4();
    this.valMaterno2_Add4();
    this.valPorcentaje2_Add4();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add4();
    if (this.props.state.add4__ben2 === false) {
      this.props.acc_add4__ben2();
    }
  };
  activeValAcc2__Add5 = () => {
    this.valParentesco2_Add5();
    this.valEdad2_Add5();
    this.valNombre2_Add5();
    this.valPaterno2_Add5();
    this.valMaterno2_Add5();
    this.valPorcentaje2_Add5();
    this.changeInitParentesco2();
    this.changeInitEdad2();
    this.valTitular2_Add5();
    if (this.props.state.add5__ben2 === false) {
      this.props.acc_add5__ben2();
    }
  };
  activeValAcc3__Add0 = () => {
    this.valParentesco3_Add0();
    this.valEdad3_Add0();
    this.valNombre3_Add0();
    this.valPaterno3_Add0();
    this.valMaterno3_Add0();
    this.valPorcentaje3_Add0();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add0();
    if (this.props.state.add0__ben3 === false) {
      this.props.acc_add0__ben3();
    }
  };
  activeValAcc3__Add1 = () => {
    this.valParentesco3_Add1();
    this.valEdad3_Add1();
    this.valNombre3_Add1();
    this.valPaterno3_Add1();
    this.valMaterno3_Add1();
    this.valPorcentaje3_Add1();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add1();
    if (this.props.state.add1__ben3 === false) {
      this.props.acc_add1__ben3();
    }
  };
  activeValAcc3__Add2 = () => {
    this.valParentesco3_Add2();
    this.valEdad3_Add2();
    this.valNombre3_Add2();
    this.valPaterno3_Add2();
    this.valMaterno3_Add2();
    this.valPorcentaje3_Add2();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add2();
    if (this.props.state.add2__ben3 === false) {
      this.props.acc_add2__ben3();
    }
  };
  activeValAcc3__Add3 = () => {
    this.valParentesco3_Add3();
    this.valEdad3_Add3();
    this.valNombre3_Add3();
    this.valPaterno3_Add3();
    this.valMaterno3_Add3();
    this.valPorcentaje3_Add3();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add3();
    if (this.props.state.add3__ben3 === false) {
      this.props.acc_add3__ben3();
    }
  };
  activeValAcc3__Add4 = () => {
    this.valParentesco3_Add4();
    this.valEdad3_Add4();
    this.valNombre3_Add4();
    this.valPaterno3_Add4();
    this.valMaterno3_Add4();
    this.valPorcentaje3_Add4();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add4();
    if (this.props.state.add4__ben3 === false) {
      this.props.acc_add4__ben3();
    }
  };
  activeValAcc3__Add5 = () => {
    this.valParentesco3_Add5();
    this.valEdad3_Add5();
    this.valNombre3_Add5();
    this.valPaterno3_Add5();
    this.valMaterno3_Add5();
    this.valPorcentaje3_Add5();
    this.changeInitParentesco3();
    this.changeInitEdad3();
    this.valTitular3_Add5();
    if (this.props.state.add5__ben3 === false) {
      this.props.acc_add5__ben3();
    }
  };
  activeValAcc4__Add0 = () => {
    this.valParentesco4_Add0();
    this.valEdad4_Add0();
    this.valNombre4_Add0();
    this.valPaterno4_Add0();
    this.valMaterno4_Add0();
    this.valPorcentaje4_Add0();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add0();
    if (this.props.state.add0__ben4 === false) {
      this.props.acc_add0__ben4();
    }
  };
  activeValAcc4__Add1 = () => {
    this.valParentesco4_Add1();
    this.valEdad4_Add1();
    this.valNombre4_Add1();
    this.valPaterno4_Add1();
    this.valMaterno4_Add1();
    this.valPorcentaje4_Add1();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add1();
    if (this.props.state.add1__ben4 === false) {
      this.props.acc_add1__ben4();
    }
  };
  activeValAcc4__Add2 = () => {
    this.valParentesco4_Add2();
    this.valEdad4_Add2();
    this.valNombre4_Add2();
    this.valPaterno4_Add2();
    this.valMaterno4_Add2();
    this.valPorcentaje4_Add2();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add2();
    if (this.props.state.add2__ben4 === false) {
      this.props.acc_add2__ben4();
    }
  };
  activeValAcc4__Add3 = () => {
    this.valParentesco4_Add3();
    this.valEdad4_Add3();
    this.valNombre4_Add3();
    this.valPaterno4_Add3();
    this.valMaterno4_Add3();
    this.valPorcentaje4_Add3();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add3();
    if (this.props.state.add3__ben4 === false) {
      this.props.acc_add3__ben4();
    }
  };
  activeValAcc4__Add4 = () => {
    this.valParentesco4_Add4();
    this.valEdad4_Add4();
    this.valNombre4_Add4();
    this.valPaterno4_Add4();
    this.valMaterno4_Add4();
    this.valPorcentaje4_Add4();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add4();
    if (this.props.state.add4__ben4 === false) {
      this.props.acc_add4__ben4();
    }
  };
  activeValAcc4__Add5 = () => {
    this.valParentesco4_Add5();
    this.valEdad4_Add5();
    this.valNombre4_Add5();
    this.valPaterno4_Add5();
    this.valMaterno4_Add5();
    this.valPorcentaje4_Add5();
    this.changeInitParentesco4();
    this.changeInitEdad4();
    this.valTitular4_Add5();
    if (this.props.state.add5__ben4 === false) {
      this.props.acc_add5__ben4();
    }
  };
  activeValAcc5__Add0 = () => {
    this.valParentesco5_Add0();
    this.valEdad5_Add0();
    this.valNombre5_Add0();
    this.valPaterno5_Add0();
    this.valMaterno5_Add0();
    this.valPorcentaje5_Add0();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add0();
    if (this.props.state.add0__ben5 === false) {
      this.props.acc_add0__ben5();
    }
  };
  activeValAcc5__Add1 = () => {
    this.valParentesco5_Add1();
    this.valEdad5_Add1();
    this.valNombre5_Add1();
    this.valPaterno5_Add1();
    this.valMaterno5_Add1();
    this.valPorcentaje5_Add1();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add1();
    if (this.props.state.add1__ben5 === false) {
      this.props.acc_add1__ben5();
    }
  };
  activeValAcc5__Add2 = () => {
    this.valParentesco5_Add2();
    this.valEdad5_Add2();
    this.valNombre5_Add2();
    this.valPaterno5_Add2();
    this.valMaterno5_Add2();
    this.valPorcentaje5_Add2();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add2();
    if (this.props.state.add2__ben5 === false) {
      this.props.acc_add2__ben5();
    }
  };
  activeValAcc5__Add3 = () => {
    this.valParentesco5_Add3();
    this.valEdad5_Add3();
    this.valNombre5_Add3();
    this.valPaterno5_Add3();
    this.valMaterno5_Add3();
    this.valPorcentaje5_Add3();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add3();
    if (this.props.state.add3__ben5 === false) {
      this.props.acc_add3__ben5();
    }
  };
  activeValAcc5__Add4 = () => {
    this.valParentesco5_Add4();
    this.valEdad5_Add4();
    this.valNombre5_Add4();
    this.valPaterno5_Add4();
    this.valMaterno5_Add4();
    this.valPorcentaje5_Add4();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add4();
    if (this.props.state.add4__ben5 === false) {
      this.props.acc_add4__ben5();
    }
  };
  activeValAcc5__Add5 = () => {
    this.valParentesco5_Add5();
    this.valEdad5_Add5();
    this.valNombre5_Add5();
    this.valPaterno5_Add5();
    this.valMaterno5_Add5();
    this.valPorcentaje5_Add5();
    this.changeInitParentesco5();
    this.changeInitEdad5();
    this.valTitular5_Add5();
    if (this.props.state.add5__ben5 === false) {
      this.props.acc_add5__ben5();
    }
  };

  /* _______________

      ACCORDION
  ______________________*/
  acc1 = (func) => {
    func;
    this.setState({
      errorFX__nombre1: false,
      errorFX__paterno1: false,
      errorFX__materno1: false,
      errorFX__porcentaje1: false,
      init__parentesco1: true,
      init__edad1: true,
    });
  };
  acc_add0__ben1 = () => {
    this.acc1(this.props.acc_add0__ben1());
  };
  acc_add1__ben1 = () => {
    this.acc1(this.props.acc_add1__ben1());
  };
  acc_add2__ben1 = () => {
    this.acc1(this.props.acc_add2__ben1());
  };
  acc_add3__ben1 = () => {
    this.acc1(this.props.acc_add3__ben1());
  };
  acc_add4__ben1 = () => {
    this.acc1(this.props.acc_add4__ben1());
  };
  acc_add5__ben1 = () => {
    this.acc1(this.props.acc_add5__ben1());
  };
  acc_add0__ben2 = () => {
    if (this.props.state.add0__ben2 === false) {
      if (this.props.state.add0__ben1 !== false) {
        this.props.acc_add0__ben2();
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
      } else {
        this.activeValAcc1__Add0();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add0__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add1__ben2 = () => {
    if (this.props.state.add1__ben2 === false) {
      if (this.props.state.add1__ben1 !== false) {
        this.props.acc_add1__ben2();
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
      } else {
        this.activeValAcc1__Add1();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add1__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add2__ben2 = () => {
    if (this.props.state.add2__ben2 === false) {
      if (this.props.state.add2__ben1 !== false) {
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
        this.props.acc_add2__ben2();
      } else {
        this.activeValAcc1__Add2();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add2__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add3__ben2 = () => {
    if (this.props.state.add3__ben2 === false) {
      if (this.props.state.add3__ben1 !== false) {
        this.props.acc_add3__ben2();
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
      } else {
        this.activeValAcc1__Add3();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add3__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add5__ben2 = () => {
    if (this.props.state.add4__ben2 === false) {
      if (this.props.state.add4__ben1 !== false) {
        this.props.acc_add4__ben2();
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
      } else {
        this.activeValAcc1__Add4();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add4__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add5__ben2 = () => {
    if (this.props.state.add5__ben2 === false) {
      if (this.props.state.add5__ben1 !== false) {
        this.props.acc_add5__ben2();
        this.setState({
          errorFX__nombre2: false,
          errorFX__paterno2: false,
          errorFX__materno2: false,
          errorFX__porcentaje2: false,
          init__parentesco2: true,
          init__edad2: true,
        });
      } else {
        this.activeValAcc1__Add5();
        this.setState({
          alertAcc: true,
        });
        return;
      }
    } else {
      this.props.acc_add5__ben2();
      this.setState({
        errorFX__nombre2: false,
        errorFX__paterno2: false,
        errorFX__materno2: false,
        errorFX__porcentaje2: false,
        init__parentesco2: true,
        init__edad2: true,
      });
    }
  };
  acc_add0__ben3 = () => {
    if (this.props.state.add0__ben3 === false) {
      if (
        this.props.state.add0__ben1 !== false &&
        this.props.state.add0__ben2 !== false
      ) {
        this.props.acc_add0__ben3();
        this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add0__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add1__ben3 = () => {
    if (this.props.state.add1__ben3 === false) {
      if (
        this.props.state.add1__ben1 !== false &&
        this.props.state.add1__ben2 !== false
      ) {
        this.props.acc_add1__ben3();
         this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add1__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add2__ben3 = () => {
    if (this.props.state.add2__ben3 === false) {
      if (
        this.props.state.add2__ben1 !== false &&
        this.props.state.add2__ben2 !== false
      ) {
        this.props.acc_add2__ben3();
         this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add2__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add3__ben3 = () => {
    if (this.props.state.add3__ben3 === false) {
      if (
        this.props.state.add3__ben1 !== false &&
        this.props.state.add3__ben2 !== false
      ) {
        this.props.acc_add3__ben3();
         this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add3__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add4__ben3 = () => {
    if (this.props.state.add4__ben3 === false) {
      if (
        this.props.state.add4__ben1 !== false &&
        this.props.state.add4__ben2 !== false
      ) {
        this.props.acc_add4__ben3();
         this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add4__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add5__ben3 = () => {
    if (this.props.state.add5__ben3 === false) {
      if (
        this.props.state.add5__ben1 !== false &&
        this.props.state.add5__ben2 !== false
      ) {
        this.props.acc_add5__ben3();
         this.setState({
          errorFX__nombre3: false,
          errorFX__paterno3: false,
          errorFX__materno3: false,
          errorFX__porcentaje3: false,
          init__parentesco3: true,
          init__edad3: true,
        });
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add5__ben3();
      this.setState({
        errorFX__add0_nombre3: false,
        errorFX__add0_paterno3: false,
        errorFX__add0_materno3: false,
        errorFX__add0_porcentaje3: false,
        init__add0_parentesco3: true,
        init__add0_edad3: true,
      });
    }
  };
  acc_add0__ben4 = () => {
    if (this.props.state.add0__ben4 === false) {
      if (
        this.props.state.add0__ben1 !== false &&
        this.props.state.add0__ben2 !== false &&
        this.props.state.add0__ben3 !== false
      ) {
        this.props.acc_add0__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.activeValAcc3__Add0();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add0__ben4();
      this.setState({
        errorFX__add0_nombre4: false,
        errorFX__add0_paterno4: false,
        errorFX__add0_materno4: false,
        errorFX__add0_porcentaje4: false,
        init__add0_parentesco4: true,
        init__add0_edad4: true,
      });
    }
  };
  acc_add1__ben4 = () => {
    if (this.props.state.add1__ben4 === false) {
      if (
        this.props.state.add1__ben1 !== false &&
        this.props.state.add1__ben2 !== false &&
        this.props.state.add1__ben3 !== false
      ) {
        this.props.acc_add1__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.activeValAcc3__Add1();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add1__ben4();
      this.setState({
        errorFX__add1_nombre4: false,
        errorFX__add1_paterno4: false,
        errorFX__add1_materno4: false,
        errorFX__add1_porcentaje4: false,
        init__add1_parentesco4: true,
        init__add1_edad4: true,
      });
    }
  };
  acc_add2__ben4 = () => {
    if (this.props.state.add2__ben4 === false) {
      if (
        this.props.state.add2__ben1 !== false &&
        this.props.state.add2__ben2 !== false &&
        this.props.state.add2__ben3 !== false
      ) {
        this.props.acc_add2__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.activeValAcc3__Add2();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add2__ben4();
      this.setState({
        errorFX__add2_nombre4: false,
        errorFX__add2_paterno4: false,
        errorFX__add2_materno4: false,
        errorFX__add2_porcentaje4: false,
        init__add2_parentesco4: true,
        init__add2_edad4: true,
      });
    }
  };
  acc_add3__ben4 = () => {
    if (this.props.state.add3__ben4 === false) {
      if (
        this.props.state.add3__ben1 !== false &&
        this.props.state.add3__ben2 !== false &&
        this.props.state.add3__ben3 !== false
      ) {
        this.props.acc_add3__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.activeValAcc3__Add3();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add3__ben4();
      this.setState({
        errorFX__add3_nombre4: false,
        errorFX__add3_paterno4: false,
        errorFX__add3_materno4: false,
        errorFX__add3_porcentaje4: false,
        init__add3_parentesco4: true,
        init__add3_edad4: true,
      });
    }
  };
  acc_add4__ben4 = () => {
    if (this.props.state.add4__ben4 === false) {
      if (
        this.props.state.add4__ben1 !== false &&
        this.props.state.add4__ben2 !== false &&
        this.props.state.add4__ben3 !== false
      ) {
        this.props.acc_add4__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.activeValAcc3__Add4();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add4__ben4();
      this.setState({
        errorFX__add4_nombre4: false,
        errorFX__add4_paterno4: false,
        errorFX__add4_materno4: false,
        errorFX__add4_porcentaje4: false,
        init__add4_parentesco4: true,
        init__add4_edad4: true,
      });
    }
  };
  acc_add5__ben4 = () => {
    if (this.props.state.add5__ben4 === false) {
      if (
        this.props.state.add5__ben1 !== false &&
        this.props.state.add5__ben2 !== false &&
        this.props.state.add5__ben3 !== false
      ) {
        this.props.acc_add5__ben4();
        this.setState({
          errorFX__nombre4: false,
          errorFX__paterno4: false,
          errorFX__materno4: false,
          errorFX__porcentaje4: false,
          init__parentesco4: true,
          init__edad4: true,
        });
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.activeValAcc3__Add5();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add5__ben4();
      this.setState({
        errorFX__add5_nombre4: false,
        errorFX__add5_paterno4: false,
        errorFX__add5_materno4: false,
        errorFX__add5_porcentaje4: false,
        init__add5_parentesco4: true,
        init__add5_edad4: true,
      });
    }
  };
  acc_add0__ben5 = () => {
    if (this.props.state.add0__ben5 === false) {
      if (
        this.props.state.add0__ben1 !== false &&
        this.props.state.add0__ben2 !== false &&
        this.props.state.add0__ben3 !== false &&
        this.props.state.add0__ben4 !== false
      ) {
        this.props.acc_add0__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.activeValAcc3__Add0();
        this.activeValAcc4__Add0();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add0__ben5();
      this.setState({
        errorFX__add0_nombre5: false,
        errorFX__add0_paterno5: false,
        errorFX__add0_materno5: false,
        errorFX__add0_porcentaje5: false,
        init__add0_parentesco5: true,
        init__add0_edad5: true,
      });
    }
  };
  acc_add1__ben5 = () => {
    if (this.props.state.add1__ben5 === false) {
      if (
        this.props.state.add1__ben1 !== false &&
        this.props.state.add1__ben2 !== false &&
        this.props.state.add1__ben3 !== false &&
        this.props.state.add1__ben4 !== false
      ) {
        this.props.acc_add1__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.activeValAcc3__Add1();
        this.activeValAcc4__Add1();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add1__ben5();
      this.setState({
        errorFX__add1_nombre5: false,
        errorFX__add1_paterno5: false,
        errorFX__add1_materno5: false,
        errorFX__add1_porcentaje5: false,
        init__add1_parentesco5: true,
        init__add1_edad5: true,
      });
    }
  };
  acc_add2__ben5 = () => {
    if (this.props.state.add2__ben5 === false) {
      if (
        this.props.state.add2__ben1 !== false &&
        this.props.state.add2__ben2 !== false &&
        this.props.state.add2__ben3 !== false &&
        this.props.state.add2__ben4 !== false
      ) {
        this.props.acc_add2__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.activeValAcc3__Add2();
        this.activeValAcc4__Add2();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add2__ben5();
      this.setState({
        errorFX__add2_nombre5: false,
        errorFX__add2_paterno5: false,
        errorFX__add2_materno5: false,
        errorFX__add2_porcentaje5: false,
        init__add2_parentesco5: true,
        init__add2_edad5: true,
      });
    }
  };
  acc_add3__ben5 = () => {
    if (this.props.state.add3__ben5 === false) {
      if (
        this.props.state.add3__ben1 !== false &&
        this.props.state.add3__ben2 !== false &&
        this.props.state.add3__ben3 !== false &&
        this.props.state.add3__ben4 !== false
      ) {
        this.props.acc_add3__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.activeValAcc3__Add3();
        this.activeValAcc4__Add3();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add3__ben5();
      this.setState({
        errorFX__add3_nombre5: false,
        errorFX__add3_paterno5: false,
        errorFX__add3_materno5: false,
        errorFX__add3_porcentaje5: false,
        init__add3_parentesco5: true,
        init__add3_edad5: true,
      });
    }
  };
  acc_add4__ben5 = () => {
    if (this.props.state.add4__ben5 === false) {
      if (
        this.props.state.add4__ben1 !== false &&
        this.props.state.add4__ben2 !== false &&
        this.props.state.add4__ben3 !== false &&
        this.props.state.add4__ben4 !== false
      ) {
        this.props.acc_add4__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.activeValAcc3__Add4();
        this.activeValAcc4__Add4();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add4__ben5();
      this.setState({
        errorFX__add4_nombre5: false,
        errorFX__add4_paterno5: false,
        errorFX__add4_materno5: false,
        errorFX__add4_porcentaje5: false,
        init__add4_parentesco5: true,
        init__add4_edad5: true,
      });
    }
  };
  acc_add5__ben5 = () => {
    if (this.props.state.add5__ben5 === false) {
      if (
        this.props.state.add5__ben1 !== false &&
        this.props.state.add5__ben2 !== false &&
        this.props.state.add5__ben3 !== false &&
        this.props.state.add5__ben4 !== false
      ) {
        this.props.acc_add5__ben5();
        this.setState({
          errorFX__nombre5: false,
          errorFX__paterno5: false,
          errorFX__materno5: false,
          errorFX__porcentaje5: false,
          init__parentesco5: true,
          init__edad5: true,
        });
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.activeValAcc3__Add5();
        this.activeValAcc4__Add5();
        this.setState({
          alertAcc: true,
        });
      }
    } else {
      this.props.acc_add5__ben5();
      this.setState({
        errorFX__add5_nombre5: false,
        errorFX__add5_paterno5: false,
        errorFX__add5_materno5: false,
        errorFX__add5_porcentaje5: false,
        init__add5_parentesco5: true,
        init__add5_edad5: true,
      });
    }
  };

  /* _______________

      VAL NULL TEST
  ______________________*/
  valAcc1__Add0 = () => {
    if (this.props.state.add0__ben1_edad === "no") {
      if (
        this.props.state.add0__ben1_nombre !== "" &&
        this.props.state.add0__ben1_materno !== "" &&
        this.props.state.add0__ben1_paterno !== "" &&
        this.props.state.add0__ben1_porcentaje !== "" &&
        this.props.state.add0__ben1_parentesco !== "" &&
        this.props.state.add0__ben1_edad !== "" &&
        this.props.state.add0__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add0: true,
          });
        } else {
          this.setState({
            valAcc1__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add0: false,
        });
      }
    } else {
      if (
        this.props.state.add0__ben1_nombre !== "" &&
        this.props.state.add0__ben1_materno !== "" &&
        this.props.state.add0__ben1_paterno !== "" &&
        this.props.state.add0__ben1_porcentaje !== "" &&
        this.props.state.add0__ben1_parentesco !== "" &&
        this.props.state.add0__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add0: true,
          });
        } else {
          this.setState({
            valAcc1__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add0: false,
        });
      }
    }
  };
  valAcc1__Add1 = () => {
    if (this.props.state.add1__ben1_edad === "no") {
      if (
        this.props.state.add1__ben1_nombre !== "" &&
        this.props.state.add1__ben1_materno !== "" &&
        this.props.state.add1__ben1_paterno !== "" &&
        this.props.state.add1__ben1_porcentaje !== "" &&
        this.props.state.add1__ben1_parentesco !== "" &&
        this.props.state.add1__ben1_edad !== "" &&
        this.props.state.add1__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add1: true,
          });
        } else {
          this.setState({
            valAcc1__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add1: false,
        });
      }
    } else {
      if (
        this.props.state.add1__ben1_nombre !== "" &&
        this.props.state.add1__ben1_materno !== "" &&
        this.props.state.add1__ben1_paterno !== "" &&
        this.props.state.add1__ben1_porcentaje !== "" &&
        this.props.state.add1__ben1_parentesco !== "" &&
        this.props.state.add1__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add1: true,
          });
        } else {
          this.setState({
            valAcc1__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add1: false,
        });
      }
    }
  };
  valAcc1__Add2 = () => {
    if (this.props.state.add2__ben1_edad === "no") {
      if (
        this.props.state.add2__ben1_nombre !== "" &&
        this.props.state.add2__ben1_materno !== "" &&
        this.props.state.add2__ben1_paterno !== "" &&
        this.props.state.add2__ben1_porcentaje !== "" &&
        this.props.state.add2__ben1_parentesco !== "" &&
        this.props.state.add2__ben1_edad !== "" &&
        this.props.state.add2__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add2: true,
          });
        } else {
          this.setState({
            valAcc1__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben1_nombre !== "" &&
        this.props.state.add2__ben1_materno !== "" &&
        this.props.state.add2__ben1_paterno !== "" &&
        this.props.state.add2__ben1_porcentaje !== "" &&
        this.props.state.add2__ben1_parentesco !== "" &&
        this.props.state.add2__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add2: true,
          });
        } else {
          this.setState({
            valAcc1__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add2: false,
        });
      }
    }
  };
  valAcc1__Add3 = () => {
    if (this.props.state.add3__ben1_edad === "no") {
      if (
        this.props.state.add3__ben1_nombre !== "" &&
        this.props.state.add3__ben1_materno !== "" &&
        this.props.state.add3__ben1_paterno !== "" &&
        this.props.state.add3__ben1_porcentaje !== "" &&
        this.props.state.add3__ben1_parentesco !== "" &&
        this.props.state.add3__ben1_edad !== "" &&
        this.props.state.add3__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add3: true,
          });
        } else {
          this.setState({
            valAcc1__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add3: false,
        });
      }
    } else {
      if (
        this.props.state.add3__ben1_nombre !== "" &&
        this.props.state.add3__ben1_materno !== "" &&
        this.props.state.add3__ben1_paterno !== "" &&
        this.props.state.add3__ben1_porcentaje !== "" &&
        this.props.state.add3__ben1_parentesco !== "" &&
        this.props.state.add3__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add3: true,
          });
        } else {
          this.setState({
            valAcc1__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add3: false,
        });
      }
    }
  };
  valAcc1__Add4 = () => {
    if (this.props.state.add4__ben1_edad === "no") {
      if (
        this.props.state.add4__ben1_nombre !== "" &&
        this.props.state.add4__ben1_materno !== "" &&
        this.props.state.add4__ben1_paterno !== "" &&
        this.props.state.add4__ben1_porcentaje !== "" &&
        this.props.state.add4__ben1_parentesco !== "" &&
        this.props.state.add4__ben1_edad !== "" &&
        this.props.state.add4__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add4: true,
          });
        } else {
          this.setState({
            valAcc1__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add4: false,
        });
      }
    } else {
      if (
        this.props.state.add4__ben1_nombre !== "" &&
        this.props.state.add4__ben1_materno !== "" &&
        this.props.state.add4__ben1_paterno !== "" &&
        this.props.state.add4__ben1_porcentaje !== "" &&
        this.props.state.add4__ben1_parentesco !== "" &&
        this.props.state.add4__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add4: true,
          });
        } else {
          this.setState({
            valAcc1__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add4: false,
        });
      }
    }
  };
  valAcc1__Add5 = () => {
    if (this.props.state.add5__ben1_edad === "no") {
      if (
        this.props.state.add5__ben1_nombre !== "" &&
        this.props.state.add5__ben1_materno !== "" &&
        this.props.state.add5__ben1_paterno !== "" &&
        this.props.state.add5__ben1_porcentaje !== "" &&
        this.props.state.add5__ben1_parentesco !== "" &&
        this.props.state.add5__ben1_edad !== "" &&
        this.props.state.add5__ben1_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc1__Add5: true,
          });
        } else {
          this.setState({
            valAcc1__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add5: false,
        });
      }
    } else {
      if (
        this.props.state.add5__ben1_nombre !== "" &&
        this.props.state.add5__ben1_materno !== "" &&
        this.props.state.add5__ben1_paterno !== "" &&
        this.props.state.add5__ben1_porcentaje !== "" &&
        this.props.state.add5__ben1_parentesco !== "" &&
        this.props.state.add5__ben1_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc1__Add5: true,
          });
        } else {
          this.setState({
            valAcc1__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc1__Add5: false,
        });
      }
    }
  };
  valAcc2__Add0 = () => {
    if (this.props.state.add0__ben2_edad === "no") {
      if (
        this.props.state.add0__ben2_nombre !== "" &&
        this.props.state.add0__ben2_materno !== "" &&
        this.props.state.add0__ben2_paterno !== "" &&
        this.props.state.add0__ben2_porcentaje !== "" &&
        this.props.state.add0__ben2_parentesco !== "" &&
        this.props.state.add0__ben2_edad !== "" &&
        this.props.state.add0__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add0: true,
          });
        } else {
          this.setState({
            valAcc2__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add0: false,
        });
      }
    } else {
      if (
        this.props.state.add0__ben2_nombre !== "" &&
        this.props.state.add0__ben2_materno !== "" &&
        this.props.state.add0__ben2_paterno !== "" &&
        this.props.state.add0__ben2_porcentaje !== "" &&
        this.props.state.add0__ben2_parentesco !== "" &&
        this.props.state.add0__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add0: true,
          });
        } else {
          this.setState({
            valAcc2__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add0: false,
        });
      }
    }
  };
  valAcc2__Add1 = () => {
    if (this.props.state.add1__ben2_edad === "no") {
      if (
        this.props.state.add1__ben2_nombre !== "" &&
        this.props.state.add1__ben2_materno !== "" &&
        this.props.state.add1__ben2_paterno !== "" &&
        this.props.state.add1__ben2_porcentaje !== "" &&
        this.props.state.add1__ben2_parentesco !== "" &&
        this.props.state.add1__ben2_edad !== "" &&
        this.props.state.add1__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add1: true,
          });
        } else {
          this.setState({
            valAcc2__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add1: false,
        });
      }
    } else {
      if (
        this.props.state.add1__ben2_nombre !== "" &&
        this.props.state.add1__ben2_materno !== "" &&
        this.props.state.add1__ben2_paterno !== "" &&
        this.props.state.add1__ben2_porcentaje !== "" &&
        this.props.state.add1__ben2_parentesco !== "" &&
        this.props.state.add1__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add1: true,
          });
        } else {
          this.setState({
            valAcc2__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add1: false,
        });
      }
    }
  };
  valAcc2__Add2 = () => {
    if (this.props.state.add2__ben2_edad === "no") {
      if (
        this.props.state.add2__ben2_nombre !== "" &&
        this.props.state.add2__ben2_materno !== "" &&
        this.props.state.add2__ben2_paterno !== "" &&
        this.props.state.add2__ben2_porcentaje !== "" &&
        this.props.state.add2__ben2_parentesco !== "" &&
        this.props.state.add2__ben2_edad !== "" &&
        this.props.state.add2__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add2: true,
          });
        } else {
          this.setState({
            valAcc2__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben2_nombre !== "" &&
        this.props.state.add2__ben2_materno !== "" &&
        this.props.state.add2__ben2_paterno !== "" &&
        this.props.state.add2__ben2_porcentaje !== "" &&
        this.props.state.add2__ben2_parentesco !== "" &&
        this.props.state.add2__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add2: true,
          });
        } else {
          this.setState({
            valAcc2__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add2: false,
        });
      }
    }
  };
  valAcc2__Add3 = () => {
    if (this.props.state.add3__ben2_edad === "no") {
      if (
        this.props.state.add3__ben2_nombre !== "" &&
        this.props.state.add3__ben2_materno !== "" &&
        this.props.state.add3__ben2_paterno !== "" &&
        this.props.state.add3__ben2_porcentaje !== "" &&
        this.props.state.add3__ben2_parentesco !== "" &&
        this.props.state.add3__ben2_edad !== "" &&
        this.props.state.add3__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add3: true,
          });
        } else {
          this.setState({
            valAcc2__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add3: false,
        });
      }
    } else {
      if (
        this.props.state.add3__ben2_nombre !== "" &&
        this.props.state.add3__ben2_materno !== "" &&
        this.props.state.add3__ben2_paterno !== "" &&
        this.props.state.add3__ben2_porcentaje !== "" &&
        this.props.state.add3__ben2_parentesco !== "" &&
        this.props.state.add3__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add3: true,
          });
        } else {
          this.setState({
            valAcc2__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add3: false,
        });
      }
    }
  };
  valAcc2__Add4 = () => {
    if (this.props.state.add4__ben2_edad === "no") {
      if (
        this.props.state.add4__ben2_nombre !== "" &&
        this.props.state.add4__ben2_materno !== "" &&
        this.props.state.add4__ben2_paterno !== "" &&
        this.props.state.add4__ben2_porcentaje !== "" &&
        this.props.state.add4__ben2_parentesco !== "" &&
        this.props.state.add4__ben2_edad !== "" &&
        this.props.state.add4__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add4: true,
          });
        } else {
          this.setState({
            valAcc2__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add4: false,
        });
      }
    } else {
      if (
        this.props.state.add4__ben2_nombre !== "" &&
        this.props.state.add4__ben2_materno !== "" &&
        this.props.state.add4__ben2_paterno !== "" &&
        this.props.state.add4__ben2_porcentaje !== "" &&
        this.props.state.add4__ben2_parentesco !== "" &&
        this.props.state.add4__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add4: true,
          });
        } else {
          this.setState({
            valAcc2__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add4: false,
        });
      }
    }
  };
  valAcc2__Add5 = () => {
    if (this.props.state.add5__ben2_edad === "no") {
      if (
        this.props.state.add5__ben2_nombre !== "" &&
        this.props.state.add5__ben2_materno !== "" &&
        this.props.state.add5__ben2_paterno !== "" &&
        this.props.state.add5__ben2_porcentaje !== "" &&
        this.props.state.add5__ben2_parentesco !== "" &&
        this.props.state.add5__ben2_edad !== "" &&
        this.props.state.add5__ben2_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc2__Add5: true,
          });
        } else {
          this.setState({
            valAcc2__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add5: false,
        });
      }
    } else {
      if (
        this.props.state.add5__ben2_nombre !== "" &&
        this.props.state.add5__ben2_materno !== "" &&
        this.props.state.add5__ben2_paterno !== "" &&
        this.props.state.add5__ben2_porcentaje !== "" &&
        this.props.state.add5__ben2_parentesco !== "" &&
        this.props.state.add5__ben2_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc2__Add5: true,
          });
        } else {
          this.setState({
            valAcc2__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc2__Add5: false,
        });
      }
    }
  };
  valAcc3__Add0 = () => {
    if (this.props.state.add0__ben3_edad === "no") {
      if (
        this.props.state.add0__ben3_nombre !== "" &&
        this.props.state.add0__ben3_materno !== "" &&
        this.props.state.add0__ben3_paterno !== "" &&
        this.props.state.add0__ben3_porcentaje !== "" &&
        this.props.state.add0__ben3_parentesco !== "" &&
        this.props.state.add0__ben3_edad !== "" &&
        this.props.state.add0__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add0: true,
          });
        } else {
          this.setState({
            valAcc3__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add0: false,
        });
      }
    } else {
      if (
        this.props.state.add0__ben3_nombre !== "" &&
        this.props.state.add0__ben3_materno !== "" &&
        this.props.state.add0__ben3_paterno !== "" &&
        this.props.state.add0__ben3_porcentaje !== "" &&
        this.props.state.add0__ben3_parentesco !== "" &&
        this.props.state.add0__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add0: true,
          });
        } else {
          this.setState({
            valAcc3__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add0: false,
        });
      }
    }
  };
  valAcc3__Add1 = () => {
    if (this.props.state.add1__ben3_edad === "no") {
      if (
        this.props.state.add1__ben3_nombre !== "" &&
        this.props.state.add1__ben3_materno !== "" &&
        this.props.state.add1__ben3_paterno !== "" &&
        this.props.state.add1__ben3_porcentaje !== "" &&
        this.props.state.add1__ben3_parentesco !== "" &&
        this.props.state.add1__ben3_edad !== "" &&
        this.props.state.add1__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add1: true,
          });
        } else {
          this.setState({
            valAcc3__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add1: false,
        });
      }
    } else {
      if (
        this.props.state.add1__ben3_nombre !== "" &&
        this.props.state.add1__ben3_materno !== "" &&
        this.props.state.add1__ben3_paterno !== "" &&
        this.props.state.add1__ben3_porcentaje !== "" &&
        this.props.state.add1__ben3_parentesco !== "" &&
        this.props.state.add1__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add1: true,
          });
        } else {
          this.setState({
            valAcc3__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add1: false,
        });
      }
    }
  };
  valAcc3__Add2 = () => {
    if (this.props.state.add2__ben3_edad === "no") {
      if (
        this.props.state.add2__ben3_nombre !== "" &&
        this.props.state.add2__ben3_materno !== "" &&
        this.props.state.add2__ben3_paterno !== "" &&
        this.props.state.add2__ben3_porcentaje !== "" &&
        this.props.state.add2__ben3_parentesco !== "" &&
        this.props.state.add2__ben3_edad !== "" &&
        this.props.state.add2__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add2: true,
          });
        } else {
          this.setState({
            valAcc3__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben3_nombre !== "" &&
        this.props.state.add2__ben3_materno !== "" &&
        this.props.state.add2__ben3_paterno !== "" &&
        this.props.state.add2__ben3_porcentaje !== "" &&
        this.props.state.add2__ben3_parentesco !== "" &&
        this.props.state.add2__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add2: true,
          });
        } else {
          this.setState({
            valAcc3__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add2: false,
        });
      }
    }
  };
  valAcc3__Add3 = () => {
    if (this.props.state.add3__ben3_edad === "no") {
      if (
        this.props.state.add3__ben3_nombre !== "" &&
        this.props.state.add3__ben3_materno !== "" &&
        this.props.state.add3__ben3_paterno !== "" &&
        this.props.state.add3__ben3_porcentaje !== "" &&
        this.props.state.add3__ben3_parentesco !== "" &&
        this.props.state.add3__ben3_edad !== "" &&
        this.props.state.add3__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add3: true,
          });
        } else {
          this.setState({
            valAcc3__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add3: false,
        });
      }
    } else {
      if (
        this.props.state.add3__ben3_nombre !== "" &&
        this.props.state.add3__ben3_materno !== "" &&
        this.props.state.add3__ben3_paterno !== "" &&
        this.props.state.add3__ben3_porcentaje !== "" &&
        this.props.state.add3__ben3_parentesco !== "" &&
        this.props.state.add3__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add3: true,
          });
        } else {
          this.setState({
            valAcc3__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add3: false,
        });
      }
    }
  };
  valAcc3__Add4 = () => {
    if (this.props.state.add4__ben3_edad === "no") {
      if (
        this.props.state.add4__ben3_nombre !== "" &&
        this.props.state.add4__ben3_materno !== "" &&
        this.props.state.add4__ben3_paterno !== "" &&
        this.props.state.add4__ben3_porcentaje !== "" &&
        this.props.state.add4__ben3_parentesco !== "" &&
        this.props.state.add4__ben3_edad !== "" &&
        this.props.state.add4__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add4: true,
          });
        } else {
          this.setState({
            valAcc3__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add4: false,
        });
      }
    } else {
      if (
        this.props.state.add4__ben3_nombre !== "" &&
        this.props.state.add4__ben3_materno !== "" &&
        this.props.state.add4__ben3_paterno !== "" &&
        this.props.state.add4__ben3_porcentaje !== "" &&
        this.props.state.add4__ben3_parentesco !== "" &&
        this.props.state.add4__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add4: true,
          });
        } else {
          this.setState({
            valAcc3__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add4: false,
        });
      }
    }
  };
  valAcc3__Add5 = () => {
    if (this.props.state.add5__ben3_edad === "no") {
      if (
        this.props.state.add5__ben3_nombre !== "" &&
        this.props.state.add5__ben3_materno !== "" &&
        this.props.state.add5__ben3_paterno !== "" &&
        this.props.state.add5__ben3_porcentaje !== "" &&
        this.props.state.add5__ben3_parentesco !== "" &&
        this.props.state.add5__ben3_edad !== "" &&
        this.props.state.add5__ben3_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc3__Add5: true,
          });
        } else {
          this.setState({
            valAcc3__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add5: false,
        });
      }
    } else {
      if (
        this.props.state.add5__ben3_nombre !== "" &&
        this.props.state.add5__ben3_materno !== "" &&
        this.props.state.add5__ben3_paterno !== "" &&
        this.props.state.add5__ben3_porcentaje !== "" &&
        this.props.state.add5__ben3_parentesco !== "" &&
        this.props.state.add5__ben3_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc3__Add5: true,
          });
        } else {
          this.setState({
            valAcc3__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc3__Add5: false,
        });
      }
    }
  };
  valAcc4__Add0 = () => {
    if (this.props.state.add0__ben4_edad === "no") {
      if (
        this.props.state.add0__ben4_nombre !== "" &&
        this.props.state.add0__ben4_materno !== "" &&
        this.props.state.add0__ben4_paterno !== "" &&
        this.props.state.add0__ben4_porcentaje !== "" &&
        this.props.state.add0__ben4_parentesco !== "" &&
        this.props.state.add0__ben4_edad !== "" &&
        this.props.state.add0__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add0: true,
          });
        } else {
          this.setState({
            valAcc4__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add0: false,
        });
      }
    } else {
      if (
        this.props.state.add0__ben4_nombre !== "" &&
        this.props.state.add0__ben4_materno !== "" &&
        this.props.state.add0__ben4_paterno !== "" &&
        this.props.state.add0__ben4_porcentaje !== "" &&
        this.props.state.add0__ben4_parentesco !== "" &&
        this.props.state.add0__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add0: true,
          });
        } else {
          this.setState({
            valAcc4__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add0: false,
        });
      }
    }
  };
  valAcc4__Add1 = () => {
    if (this.props.state.add1__ben4_edad === "no") {
      if (
        this.props.state.add1__ben4_nombre !== "" &&
        this.props.state.add1__ben4_materno !== "" &&
        this.props.state.add1__ben4_paterno !== "" &&
        this.props.state.add1__ben4_porcentaje !== "" &&
        this.props.state.add1__ben4_parentesco !== "" &&
        this.props.state.add1__ben4_edad !== "" &&
        this.props.state.add1__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add1: true,
          });
        } else {
          this.setState({
            valAcc4__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add1: false,
        });
      }
    } else {
      if (
        this.props.state.add1__ben4_nombre !== "" &&
        this.props.state.add1__ben4_materno !== "" &&
        this.props.state.add1__ben4_paterno !== "" &&
        this.props.state.add1__ben4_porcentaje !== "" &&
        this.props.state.add1__ben4_parentesco !== "" &&
        this.props.state.add1__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add1: true,
          });
        } else {
          this.setState({
            valAcc4__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add1: false,
        });
      }
    }
  };
  valAcc4__Add2 = () => {
    if (this.props.state.add2__ben4_edad === "no") {
      if (
        this.props.state.add2__ben4_nombre !== "" &&
        this.props.state.add2__ben4_materno !== "" &&
        this.props.state.add2__ben4_paterno !== "" &&
        this.props.state.add2__ben4_porcentaje !== "" &&
        this.props.state.add2__ben4_parentesco !== "" &&
        this.props.state.add2__ben4_edad !== "" &&
        this.props.state.add2__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add2: true,
          });
        } else {
          this.setState({
            valAcc4__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben4_nombre !== "" &&
        this.props.state.add2__ben4_materno !== "" &&
        this.props.state.add2__ben4_paterno !== "" &&
        this.props.state.add2__ben4_porcentaje !== "" &&
        this.props.state.add2__ben4_parentesco !== "" &&
        this.props.state.add2__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add2: true,
          });
        } else {
          this.setState({
            valAcc4__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add2: false,
        });
      }
    }
  };
  valAcc4__Add3 = () => {
    if (this.props.state.add3__ben4_edad === "no") {
      if (
        this.props.state.add3__ben4_nombre !== "" &&
        this.props.state.add3__ben4_materno !== "" &&
        this.props.state.add3__ben4_paterno !== "" &&
        this.props.state.add3__ben4_porcentaje !== "" &&
        this.props.state.add3__ben4_parentesco !== "" &&
        this.props.state.add3__ben4_edad !== "" &&
        this.props.state.add3__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add3: true,
          });
        } else {
          this.setState({
            valAcc4__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add3: false,
        });
      }
    } else {
      if (
        this.props.state.add3__ben4_nombre !== "" &&
        this.props.state.add3__ben4_materno !== "" &&
        this.props.state.add3__ben4_paterno !== "" &&
        this.props.state.add3__ben4_porcentaje !== "" &&
        this.props.state.add3__ben4_parentesco !== "" &&
        this.props.state.add3__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add3: true,
          });
        } else {
          this.setState({
            valAcc4__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add3: false,
        });
      }
    }
  };
  valAcc4__Add4 = () => {
    if (this.props.state.add4__ben4_edad === "no") {
      if (
        this.props.state.add4__ben4_nombre !== "" &&
        this.props.state.add4__ben4_materno !== "" &&
        this.props.state.add4__ben4_paterno !== "" &&
        this.props.state.add4__ben4_porcentaje !== "" &&
        this.props.state.add4__ben4_parentesco !== "" &&
        this.props.state.add4__ben4_edad !== "" &&
        this.props.state.add4__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add4: true,
          });
        } else {
          this.setState({
            valAcc4__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add4: false,
        });
      }
    } else {
      if (
        this.props.state.add4__ben4_nombre !== "" &&
        this.props.state.add4__ben4_materno !== "" &&
        this.props.state.add4__ben4_paterno !== "" &&
        this.props.state.add4__ben4_porcentaje !== "" &&
        this.props.state.add4__ben4_parentesco !== "" &&
        this.props.state.add4__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add4: true,
          });
        } else {
          this.setState({
            valAcc4__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add4: false,
        });
      }
    }
  };
  valAcc4__Add5 = () => {
    if (this.props.state.add5__ben4_edad === "no") {
      if (
        this.props.state.add5__ben4_nombre !== "" &&
        this.props.state.add5__ben4_materno !== "" &&
        this.props.state.add5__ben4_paterno !== "" &&
        this.props.state.add5__ben4_porcentaje !== "" &&
        this.props.state.add5__ben4_parentesco !== "" &&
        this.props.state.add5__ben4_edad !== "" &&
        this.props.state.add5__ben4_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc4__Add5: true,
          });
        } else {
          this.setState({
            valAcc4__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add5: false,
        });
      }
    } else {
      if (
        this.props.state.add5__ben4_nombre !== "" &&
        this.props.state.add5__ben4_materno !== "" &&
        this.props.state.add5__ben4_paterno !== "" &&
        this.props.state.add5__ben4_porcentaje !== "" &&
        this.props.state.add5__ben4_parentesco !== "" &&
        this.props.state.add5__ben4_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc4__Add5: true,
          });
        } else {
          this.setState({
            valAcc4__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc4__Add5: false,
        });
      }
    }
  };
  valAcc5__Add0 = () => {
    if (this.props.state.add0__ben5_edad === "no") {
      if (
        this.props.state.add0__ben5_nombre !== "" &&
        this.props.state.add0__ben5_materno !== "" &&
        this.props.state.add0__ben5_paterno !== "" &&
        this.props.state.add0__ben5_porcentaje !== "" &&
        this.props.state.add0__ben5_parentesco !== "" &&
        this.props.state.add0__ben5_edad !== "" &&
        this.props.state.add0__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add0: true,
          });
        } else {
          this.setState({
            valAcc5__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add0: false,
        });
      }
    } else {
      if (
        this.props.state.add0__ben5_nombre !== "" &&
        this.props.state.add0__ben5_materno !== "" &&
        this.props.state.add0__ben5_paterno !== "" &&
        this.props.state.add0__ben5_porcentaje !== "" &&
        this.props.state.add0__ben5_parentesco !== "" &&
        this.props.state.add0__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add0: true,
          });
        } else {
          this.setState({
            valAcc5__Add0: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add0: false,
        });
      }
    }
  };
  valAcc5__Add1 = () => {
    if (this.props.state.add1__ben5_edad === "no") {
      if (
        this.props.state.add1__ben5_nombre !== "" &&
        this.props.state.add1__ben5_materno !== "" &&
        this.props.state.add1__ben5_paterno !== "" &&
        this.props.state.add1__ben5_porcentaje !== "" &&
        this.props.state.add1__ben5_parentesco !== "" &&
        this.props.state.add1__ben5_edad !== "" &&
        this.props.state.add1__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add1: true,
          });
        } else {
          this.setState({
            valAcc5__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add1: false,
        });
      }
    } else {
      if (
        this.props.state.add1__ben5_nombre !== "" &&
        this.props.state.add1__ben5_materno !== "" &&
        this.props.state.add1__ben5_paterno !== "" &&
        this.props.state.add1__ben5_porcentaje !== "" &&
        this.props.state.add1__ben5_parentesco !== "" &&
        this.props.state.add1__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add1: true,
          });
        } else {
          this.setState({
            valAcc5__Add1: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add1: false,
        });
      }
    }
  };
  valAcc5__Add2 = () => {
    if (this.props.state.add2__ben5_edad === "no") {
      if (
        this.props.state.add2__ben5_nombre !== "" &&
        this.props.state.add2__ben5_materno !== "" &&
        this.props.state.add2__ben5_paterno !== "" &&
        this.props.state.add2__ben5_porcentaje !== "" &&
        this.props.state.add2__ben5_parentesco !== "" &&
        this.props.state.add2__ben5_edad !== "" &&
        this.props.state.add2__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add2: true,
          });
        } else {
          this.setState({
            valAcc5__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben5_nombre !== "" &&
        this.props.state.add2__ben5_materno !== "" &&
        this.props.state.add2__ben5_paterno !== "" &&
        this.props.state.add2__ben5_porcentaje !== "" &&
        this.props.state.add2__ben5_parentesco !== "" &&
        this.props.state.add2__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add2: true,
          });
        } else {
          this.setState({
            valAcc5__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add2: false,
        });
      }
    }
  };
  valAcc5__Add2 = () => {
    if (this.props.state.add2__ben5_edad === "no") {
      if (
        this.props.state.add2__ben5_nombre !== "" &&
        this.props.state.add2__ben5_materno !== "" &&
        this.props.state.add2__ben5_paterno !== "" &&
        this.props.state.add2__ben5_porcentaje !== "" &&
        this.props.state.add2__ben5_parentesco !== "" &&
        this.props.state.add2__ben5_edad !== "" &&
        this.props.state.add2__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add2: true,
          });
        } else {
          this.setState({
            valAcc5__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add2: false,
        });
      }
    } else {
      if (
        this.props.state.add2__ben5_nombre !== "" &&
        this.props.state.add2__ben5_materno !== "" &&
        this.props.state.add2__ben5_paterno !== "" &&
        this.props.state.add2__ben5_porcentaje !== "" &&
        this.props.state.add2__ben5_parentesco !== "" &&
        this.props.state.add2__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add2: true,
          });
        } else {
          this.setState({
            valAcc5__Add2: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add2: false,
        });
      }
    }
  };
  valAcc5__Add3 = () => {
    if (this.props.state.add3__ben5_edad === "no") {
      if (
        this.props.state.add3__ben5_nombre !== "" &&
        this.props.state.add3__ben5_materno !== "" &&
        this.props.state.add3__ben5_paterno !== "" &&
        this.props.state.add3__ben5_porcentaje !== "" &&
        this.props.state.add3__ben5_parentesco !== "" &&
        this.props.state.add3__ben5_edad !== "" &&
        this.props.state.add3__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add3: true,
          });
        } else {
          this.setState({
            valAcc5__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add3: false,
        });
      }
    } else {
      if (
        this.props.state.add3__ben5_nombre !== "" &&
        this.props.state.add3__ben5_materno !== "" &&
        this.props.state.add3__ben5_paterno !== "" &&
        this.props.state.add3__ben5_porcentaje !== "" &&
        this.props.state.add3__ben5_parentesco !== "" &&
        this.props.state.add3__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add3: true,
          });
        } else {
          this.setState({
            valAcc5__Add3: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add3: false,
        });
      }
    }
  };
  valAcc5__Add4 = () => {
    if (this.props.state.add4__ben5_edad === "no") {
      if (
        this.props.state.add4__ben5_nombre !== "" &&
        this.props.state.add4__ben5_materno !== "" &&
        this.props.state.add4__ben5_paterno !== "" &&
        this.props.state.add4__ben5_porcentaje !== "" &&
        this.props.state.add4__ben5_parentesco !== "" &&
        this.props.state.add4__ben5_edad !== "" &&
        this.props.state.add4__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add4: true,
          });
        } else {
          this.setState({
            valAcc5__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add4: false,
        });
      }
    } else {
      if (
        this.props.state.add4__ben5_nombre !== "" &&
        this.props.state.add4__ben5_materno !== "" &&
        this.props.state.add4__ben5_paterno !== "" &&
        this.props.state.add4__ben5_porcentaje !== "" &&
        this.props.state.add4__ben5_parentesco !== "" &&
        this.props.state.add4__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add4: true,
          });
        } else {
          this.setState({
            valAcc5__Add4: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add4: false,
        });
      }
    }
  };
  valAcc5__Add5 = () => {
    if (this.props.state.add5__ben5_edad === "no") {
      if (
        this.props.state.add5__ben5_nombre !== "" &&
        this.props.state.add5__ben5_materno !== "" &&
        this.props.state.add5__ben5_paterno !== "" &&
        this.props.state.add5__ben5_porcentaje !== "" &&
        this.props.state.add5__ben5_parentesco !== "" &&
        this.props.state.add5__ben5_edad !== "" &&
        this.props.state.add5__ben5_titular !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true &&
          this.state.errorTest__titular1 !== true
        ) {
          this.setState({
            valAcc5__Add5: true,
          });
        } else {
          this.setState({
            valAcc5__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add5: false,
        });
      }
    } else {
      if (
        this.props.state.add5__ben5_nombre !== "" &&
        this.props.state.add5__ben5_materno !== "" &&
        this.props.state.add5__ben5_paterno !== "" &&
        this.props.state.add5__ben5_porcentaje !== "" &&
        this.props.state.add5__ben5_parentesco !== "" &&
        this.props.state.add5__ben5_edad !== ""
      ) {
        if (
          this.state.errorTest__nombre1 !== true &&
          this.state.errorTest__paterno1 !== true &&
          this.state.errorTest__materno1 !== true &&
          this.state.errorTest__porcentaje1 !== true
        ) {
          this.setState({
            valAcc5__Add5: true,
          });
        } else {
          this.setState({
            valAcc5__Add5: false,
          });
        }
      } else {
        this.setState({
          valAcc5__Add5: false,
        });
      }
    }
  };

  /* _______________

      ACCEPT
  ______________________*/
  acceptBen1__Add0 = () => {
    this.valAcc1__Add0();
    setTimeout(() => {
      if (this.state.valAcc1__Add0 !== false) {
        this.props.acceptModalTitular();
      } else {
        this.activeValAcc1__Add0();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen1__Add1 = () => {
    this.valAcc1__Add1();
    setTimeout(() => {
      if (this.state.valAcc1__Add1 !== false) {
        this.props.acceptModalAdd1();
      } else {
        this.activeValAcc1__Add1();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen1__Add2 = () => {
    this.valAcc1__Add2();
    setTimeout(() => {
      if (this.state.valAcc1__Add2 !== false) {
        this.props.acceptModalAdd2();
      } else {
        this.activeValAcc1__Add2();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen1__Add3 = () => {
    this.valAcc1__Add3();
    setTimeout(() => {
      if (this.state.valAcc1__Add3 !== false) {
        this.props.acceptModalAdd3();
      } else {
        this.activeValAcc1__Add3();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen1__Add4 = () => {
    this.valAcc1__Add4();
    setTimeout(() => {
      if (this.state.valAcc1__Add4 !== false) {
        this.props.acceptModalAdd4();
      } else {
        this.activeValAcc1__Add4();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen1__Add5 = () => {
    this.valAcc1__Add5();
    setTimeout(() => {
      if (this.state.valAcc1__Add5 !== false) {
        this.props.acceptModalAdd5();
      } else {
        this.activeValAcc1__Add5();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add0 = () => {
    this.valAcc1__Add0();
    this.valAcc2__Add0();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add0 !== false &&
        this.state.valAcc2__Add0 !== false
      ) {
        this.props.acceptModalTitular();
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add1 = () => {
    this.valAcc1__Add1();
    this.valAcc2__Add1();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add1 !== false &&
        this.state.valAcc2__Add1 !== false
      ) {
        this.props.acceptModalAdd1();
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add2 = () => {
    this.valAcc1__Add2();
    this.valAcc2__Add2();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add2 !== false &&
        this.state.valAcc2__Add2 !== false
      ) {
        this.props.acceptModalAdd2();
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add3 = () => {
    this.valAcc1__Add3();
    this.valAcc2__Add3();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add3 !== false &&
        this.state.valAcc2__Add3 !== false
      ) {
        this.props.acceptModalAdd3();
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add4 = () => {
    this.valAcc1__Add4();
    this.valAcc2__Add4();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add4 !== false &&
        this.state.valAcc2__Add4 !== false
      ) {
        this.props.acceptModalAdd4();
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen2__Add5 = () => {
    this.valAcc1__Add5();
    this.valAcc2__Add5();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add5 !== false &&
        this.state.valAcc2__Add5 !== false
      ) {
        this.props.acceptModalAdd5();
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add0 = () => {
    this.valAcc1__Add0();
    this.valAcc2__Add0();
    this.valAcc3__Add0();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add0 !== false &&
        this.state.valAcc2__Add0 !== false &&
        this.state.valAcc3__Add0 !== false
      ) {
        this.props.acceptModalTitular();
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.activeValAcc3__Add0();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add1 = () => {
    this.valAcc1__Add1();
    this.valAcc2__Add1();
    this.valAcc3__Add1();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add1 !== false &&
        this.state.valAcc2__Add1 !== false &&
        this.state.valAcc3__Add1 !== false
      ) {
        this.props.acceptModalAdd1();
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.activeValAcc3__Add1();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add2 = () => {
    this.valAcc1__Add2();
    this.valAcc2__Add2();
    this.valAcc3__Add2();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add2 !== false &&
        this.state.valAcc2__Add2 !== false &&
        this.state.valAcc3__Add2 !== false
      ) {
        this.props.acceptModalAdd2();
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.activeValAcc3__Add2();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add3 = () => {
    this.valAcc1__Add3();
    this.valAcc2__Add3();
    this.valAcc3__Add3();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add3 !== false &&
        this.state.valAcc2__Add3 !== false &&
        this.state.valAcc3__Add3 !== false
      ) {
        this.props.acceptModalAdd3();
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.activeValAcc3__Add3();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add4 = () => {
    this.valAcc1__Add4();
    this.valAcc2__Add4();
    this.valAcc3__Add4();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add4 !== false &&
        this.state.valAcc2__Add4 !== false &&
        this.state.valAcc3__Add4 !== false
      ) {
        this.props.acceptModalAdd4();
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.activeValAcc3__Add4();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen3__Add5 = () => {
    this.valAcc1__Add5();
    this.valAcc2__Add5();
    this.valAcc3__Add5();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add5 !== false &&
        this.state.valAcc2__Add5 !== false &&
        this.state.valAcc3__Add5 !== false
      ) {
        this.props.acceptModalAdd5();
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.activeValAcc3__Add5();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add0 = () => {
    this.valAcc1__Add0();
    this.valAcc2__Add0();
    this.valAcc3__Add0();
    this.valAcc4__Add0();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add0 !== false &&
        this.state.valAcc2__Add0 !== false &&
        this.state.valAcc3__Add0 !== false &&
        this.state.valAcc4__Add0 !== false
      ) {
        this.props.acceptModalTitular();
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.activeValAcc3__Add0();
        this.activeValAcc4__Add0();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add1 = () => {
    this.valAcc1__Add1();
    this.valAcc2__Add1();
    this.valAcc3__Add1();
    this.valAcc4__Add1();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add1 !== false &&
        this.state.valAcc2__Add1 !== false &&
        this.state.valAcc3__Add1 !== false &&
        this.state.valAcc4__Add1 !== false
      ) {
        this.props.acceptModalAdd1();
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.activeValAcc3__Add1();
        this.activeValAcc4__Add1();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add2 = () => {
    this.valAcc1__Add2();
    this.valAcc2__Add2();
    this.valAcc3__Add2();
    this.valAcc4__Add2();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add2 !== false &&
        this.state.valAcc2__Add2 !== false &&
        this.state.valAcc3__Add2 !== false &&
        this.state.valAcc4__Add2 !== false
      ) {
        this.props.acceptModalAdd2();
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.activeValAcc3__Add2();
        this.activeValAcc4__Add2();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add3 = () => {
    this.valAcc1__Add3();
    this.valAcc2__Add3();
    this.valAcc3__Add3();
    this.valAcc4__Add3();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add3 !== false &&
        this.state.valAcc2__Add3 !== false &&
        this.state.valAcc3__Add3 !== false &&
        this.state.valAcc4__Add3 !== false
      ) {
        this.props.acceptModalAdd3();
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.activeValAcc3__Add3();
        this.activeValAcc4__Add3();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add4 = () => {
    this.valAcc1__Add4();
    this.valAcc2__Add4();
    this.valAcc3__Add4();
    this.valAcc4__Add4();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add4 !== false &&
        this.state.valAcc2__Add4 !== false &&
        this.state.valAcc3__Add4 !== false &&
        this.state.valAcc4__Add4 !== false
      ) {
        this.props.acceptModalAdd4();
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.activeValAcc3__Add4();
        this.activeValAcc4__Add4();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen4__Add5 = () => {
    this.valAcc1__Add5();
    this.valAcc2__Add5();
    this.valAcc3__Add5();
    this.valAcc4__Add5();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add5 !== false &&
        this.state.valAcc2__Add5 !== false &&
        this.state.valAcc3__Add5 !== false &&
        this.state.valAcc4__Add5 !== false
      ) {
        this.props.acceptModalAdd5();
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.activeValAcc3__Add5();
        this.activeValAcc4__Add5();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add0 = () => {
    this.valAcc1__Add0();
    this.valAcc2__Add0();
    this.valAcc3__Add0();
    this.valAcc4__Add0();
    this.valAcc5__Add0();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add0 !== false &&
        this.state.valAcc2__Add0 !== false &&
        this.state.valAcc3__Add0 !== false &&
        this.state.valAcc4__Add0 !== false &&
        this.state.valAcc5__Add0 !== false
      ) {
        this.props.acceptModalTitular();
      } else {
        this.activeValAcc1__Add0();
        this.activeValAcc2__Add0();
        this.activeValAcc3__Add0();
        this.activeValAcc4__Add0();
        this.activeValAcc5__Add0();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add1 = () => {
    this.valAcc1__Add1();
    this.valAcc2__Add1();
    this.valAcc3__Add1();
    this.valAcc4__Add1();
    this.valAcc5__Add1();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add1 !== false &&
        this.state.valAcc2__Add1 !== false &&
        this.state.valAcc3__Add1 !== false &&
        this.state.valAcc4__Add1 !== false &&
        this.state.valAcc5__Add1 !== false
      ) {
        this.props.acceptModalAdd1();
      } else {
        this.activeValAcc1__Add1();
        this.activeValAcc2__Add1();
        this.activeValAcc3__Add1();
        this.activeValAcc4__Add1();
        this.activeValAcc5__Add1();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add2 = () => {
    this.valAcc1__Add2();
    this.valAcc2__Add2();
    this.valAcc3__Add2();
    this.valAcc4__Add2();
    this.valAcc5__Add2();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add2 !== false &&
        this.state.valAcc2__Add2 !== false &&
        this.state.valAcc3__Add2 !== false &&
        this.state.valAcc4__Add2 !== false &&
        this.state.valAcc5__Add2 !== false
      ) {
        this.props.acceptModalAdd2();
      } else {
        this.activeValAcc1__Add2();
        this.activeValAcc2__Add2();
        this.activeValAcc3__Add2();
        this.activeValAcc4__Add2();
        this.activeValAcc5__Add2();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add3 = () => {
    this.valAcc1__Add3();
    this.valAcc2__Add3();
    this.valAcc3__Add3();
    this.valAcc4__Add3();
    this.valAcc5__Add3();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add3 !== false &&
        this.state.valAcc2__Add3 !== false &&
        this.state.valAcc3__Add3 !== false &&
        this.state.valAcc4__Add3 !== false &&
        this.state.valAcc5__Add3 !== false
      ) {
        this.props.acceptModalAdd3();
      } else {
        this.activeValAcc1__Add3();
        this.activeValAcc2__Add3();
        this.activeValAcc3__Add3();
        this.activeValAcc4__Add3();
        this.activeValAcc5__Add3();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add4 = () => {
    this.valAcc1__Add4();
    this.valAcc2__Add4();
    this.valAcc3__Add4();
    this.valAcc4__Add4();
    this.valAcc5__Add4();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add4 !== false &&
        this.state.valAcc2__Add4 !== false &&
        this.state.valAcc3__Add4 !== false &&
        this.state.valAcc4__Add4 !== false &&
        this.state.valAcc5__Add4 !== false
      ) {
        this.props.acceptModalAdd4();
      } else {
        this.activeValAcc1__Add4();
        this.activeValAcc2__Add4();
        this.activeValAcc3__Add4();
        this.activeValAcc4__Add4();
        this.activeValAcc5__Add4();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };
  acceptBen5__Add5 = () => {
    this.valAcc1__Add5();
    this.valAcc2__Add5();
    this.valAcc3__Add5();
    this.valAcc4__Add5();
    this.valAcc5__Add5();
    setTimeout(() => {
      if (
        this.state.valAcc1__Add5 !== false &&
        this.state.valAcc2__Add5 !== false &&
        this.state.valAcc3__Add5 !== false &&
        this.state.valAcc4__Add5 !== false &&
        this.state.valAcc5__Add5 !== false
      ) {
        this.props.acceptModalAdd5();
      } else {
        this.activeValAcc1__Add5();
        this.activeValAcc2__Add5();
        this.activeValAcc3__Add5();
        this.activeValAcc4__Add5();
        this.activeValAcc5__Add5();
        this.setState({
          alertError: true,
        });
      }
    }, 0.6);
  };

  /* _______________

      VAL PORCENTAJE
  ______________________*/
  porcentajeBtnBen__add0 = () => {
    const porcentaje1_Add0 = parseInt(this.props.state.add0__ben1_porcentaje);
    const porcentaje2_Add0 = parseInt(this.props.state.add0__ben2_porcentaje);
    const porcentaje3_Add0 = parseInt(this.props.state.add0__ben3_porcentaje);
    const porcentaje4_Add0 = parseInt(this.props.state.add0__ben4_porcentaje);
    const porcentaje5_Add0 = parseInt(this.props.state.add0__ben5_porcentaje);

    if (
      this.props.state.add0__ben1 === true &&
      this.props.state.add0__ben2 === false &&
      this.props.state.add0__ben3 === false &&
      this.props.state.add0__ben4 === false &&
      this.props.state.add0__ben5 === false
    ) {
      if (porcentaje1_Add0 === 100) {
        this.acceptBen1__Add0();
      } else {
        this.valPorcentaje1_Add0();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add0__ben1 === true &&
      this.props.state.add0__ben2 === true &&
      this.props.state.add0__ben3 === false &&
      this.props.state.add0__ben4 === false &&
      this.props.state.add0__ben5 === false
    ) {
      if (porcentaje1_Add0 + porcentaje2_Add0 === 100) {
        this.acceptBen2__Add0();
      } else {
        this.valPorcentaje1_Add0();
        this.valPorcentaje2_Add0();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add0__ben1 === true &&
      this.props.state.add0__ben2 === true &&
      this.props.state.add0__ben3 === true &&
      this.props.state.add0__ben4 === false &&
      this.props.state.add0__ben5 === false
    ) {
      if (porcentaje1_Add0 + porcentaje2_Add0 + porcentaje3_Add0 === 100) {
        this.acceptBen3__Add0();
      } else {
        this.valPorcentaje1_Add0();
        this.valPorcentaje2_Add0();
        this.valPorcentaje3_Add0();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add0__ben1 === true &&
      this.props.state.add0__ben2 === true &&
      this.props.state.add0__ben3 === true &&
      this.props.state.add0__ben4 === true &&
      this.props.state.add0__ben5 === false
    ) {
      if (
        porcentaje1_Add0 +
          porcentaje2_Add0 +
          porcentaje3_Add0 +
          porcentaje4_Add0 ===
        100
      ) {
        this.acceptBen4__Add0();
      } else {
        this.valPorcentaje1_Add0();
        this.valPorcentaje2_Add0();
        this.valPorcentaje3_Add0();
        this.valPorcentaje4_Add0();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add0__ben1 === true &&
      this.props.state.add0__ben2 === true &&
      this.props.state.add0__ben3 === true &&
      this.props.state.add0__ben4 === true &&
      this.props.state.add0__ben5 === true
    ) {
      if (
        porcentaje1_Add0 +
          porcentaje2_Add0 +
          porcentaje3_Add0 +
          porcentaje4_Add0 +
          porcentaje5_Add0 ===
        100
      ) {
        this.acceptBen5__Add0();
      } else {
        this.valPorcentaje1_Add0();
        this.valPorcentaje2_Add0();
        this.valPorcentaje3_Add0();
        this.valPorcentaje4_Add0();
        this.valPorcentaje5_Add0();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };
  porcentajeBtnBen__add1 = () => {
    const porcentaje1_Add1 = parseInt(this.props.state.add1__ben1_porcentaje);
    const porcentaje2_Add1 = parseInt(this.props.state.add1__ben2_porcentaje);
    const porcentaje3_Add1 = parseInt(this.props.state.add1__ben3_porcentaje);
    const porcentaje4_Add1 = parseInt(this.props.state.add1__ben4_porcentaje);
    const porcentaje5_Add1 = parseInt(this.props.state.add1__ben5_porcentaje);

    if (
      this.props.state.add1__ben1 === true &&
      this.props.state.add1__ben2 === false &&
      this.props.state.add1__ben3 === false &&
      this.props.state.add1__ben4 === false &&
      this.props.state.add1__ben5 === false
    ) {
      if (porcentaje1_Add1 === 100) {
        this.acceptBen1__Add1();
      } else {
        this.valPorcentaje1_Add1();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add1__ben1 === true &&
      this.props.state.add1__ben2 === true &&
      this.props.state.add1__ben3 === false &&
      this.props.state.add1__ben4 === false &&
      this.props.state.add1__ben5 === false
    ) {
      if (porcentaje1_Add1 + porcentaje2_Add1 === 100) {
        this.acceptBen2__Add1();
      } else {
        this.valPorcentaje1_Add1();
        this.valPorcentaje2_Add1();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add1__ben1 === true &&
      this.props.state.add1__ben2 === true &&
      this.props.state.add1__ben3 === true &&
      this.props.state.add1__ben4 === false &&
      this.props.state.add1__ben5 === false
    ) {
      if (porcentaje1_Add1 + porcentaje2_Add1 + porcentaje3_Add1 === 100) {
        this.acceptBen3__Add1();
      } else {
        this.valPorcentaje1_Add1();
        this.valPorcentaje2_Add1();
        this.valPorcentaje3_Add1();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add1__ben1 === true &&
      this.props.state.add1__ben2 === true &&
      this.props.state.add1__ben3 === true &&
      this.props.state.add1__ben4 === true &&
      this.props.state.add1__ben5 === false
    ) {
      if (
        porcentaje1_Add1 +
          porcentaje2_Add1 +
          porcentaje3_Add1 +
          porcentaje4_Add1 ===
        100
      ) {
        this.acceptBen4__Add1();
      } else {
        this.valPorcentaje1_Add1();
        this.valPorcentaje2_Add1();
        this.valPorcentaje3_Add1();
        this.valPorcentaje4_Add1();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add1__ben1 === true &&
      this.props.state.add1__ben2 === true &&
      this.props.state.add1__ben3 === true &&
      this.props.state.add1__ben4 === true &&
      this.props.state.add1__ben5 === true
    ) {
      if (
        porcentaje1_Add1 +
          porcentaje2_Add1 +
          porcentaje3_Add1 +
          porcentaje4_Add1 +
          porcentaje5_Add1 ===
        100
      ) {
        this.acceptBen5__Add1();
      } else {
        this.valPorcentaje1_Add1();
        this.valPorcentaje2_Add1();
        this.valPorcentaje3_Add1();
        this.valPorcentaje4_Add1();
        this.valPorcentaje5_Add1();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };
  porcentajeBtnBen__add2 = () => {
    const porcentaje1_Add2 = parseInt(this.props.state.add2__ben1_porcentaje);
    const porcentaje2_Add2 = parseInt(this.props.state.add2__ben2_porcentaje);
    const porcentaje3_Add2 = parseInt(this.props.state.add2__ben3_porcentaje);
    const porcentaje4_Add2 = parseInt(this.props.state.add2__ben4_porcentaje);
    const porcentaje5_Add2 = parseInt(this.props.state.add2__ben5_porcentaje);

    if (
      this.props.state.add2__ben1 === true &&
      this.props.state.add2__ben2 === false &&
      this.props.state.add2__ben3 === false &&
      this.props.state.add2__ben4 === false &&
      this.props.state.add2__ben5 === false
    ) {
      if (porcentaje1_Add2 === 100) {
        this.acceptBen1__Add2();
      } else {
        this.valPorcentaje1_Add2();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add2__ben1 === true &&
      this.props.state.add2__ben2 === true &&
      this.props.state.add2__ben3 === false &&
      this.props.state.add2__ben4 === false &&
      this.props.state.add2__ben5 === false
    ) {
      if (porcentaje1_Add2 + porcentaje2_Add2 === 100) {
        this.acceptBen2__Add2();
      } else {
        this.valPorcentaje1_Add2();
        this.valPorcentaje2_Add2();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add2__ben1 === true &&
      this.props.state.add2__ben2 === true &&
      this.props.state.add2__ben3 === true &&
      this.props.state.add2__ben4 === false &&
      this.props.state.add2__ben5 === false
    ) {
      if (porcentaje1_Add2 + porcentaje2_Add2 + porcentaje3_Add2 === 100) {
        this.acceptBen3__Add2();
      } else {
        this.valPorcentaje1_Add2();
        this.valPorcentaje2_Add2();
        this.valPorcentaje3_Add2();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add2__ben1 === true &&
      this.props.state.add2__ben2 === true &&
      this.props.state.add2__ben3 === true &&
      this.props.state.add2__ben4 === true &&
      this.props.state.add2__ben5 === false
    ) {
      if (
        porcentaje1_Add2 +
          porcentaje2_Add2 +
          porcentaje3_Add2 +
          porcentaje4_Add2 ===
        100
      ) {
        this.acceptBen4__Add2();
      } else {
        this.valPorcentaje1_Add2();
        this.valPorcentaje2_Add2();
        this.valPorcentaje3_Add2();
        this.valPorcentaje4_Add2();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add2__ben1 === true &&
      this.props.state.add2__ben2 === true &&
      this.props.state.add2__ben3 === true &&
      this.props.state.add2__ben4 === true &&
      this.props.state.add2__ben5 === true
    ) {
      if (
        porcentaje1_Add2 +
          porcentaje2_Add2 +
          porcentaje3_Add2 +
          porcentaje4_Add2 +
          porcentaje5_Add2 ===
        100
      ) {
        this.acceptBen5__Add2();
      } else {
        this.valPorcentaje1_Add2();
        this.valPorcentaje2_Add2();
        this.valPorcentaje3_Add2();
        this.valPorcentaje4_Add2();
        this.valPorcentaje5_Add2();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };
  porcentajeBtnBen__add3 = () => {
    const porcentaje1_Add3 = parseInt(this.props.state.add3__ben1_porcentaje);
    const porcentaje2_Add3 = parseInt(this.props.state.add3__ben2_porcentaje);
    const porcentaje3_Add3 = parseInt(this.props.state.add3__ben3_porcentaje);
    const porcentaje4_Add3 = parseInt(this.props.state.add3__ben4_porcentaje);
    const porcentaje5_Add3 = parseInt(this.props.state.add3__ben5_porcentaje);

    if (
      this.props.state.add3__ben1 === true &&
      this.props.state.add3__ben2 === false &&
      this.props.state.add3__ben3 === false &&
      this.props.state.add3__ben4 === false &&
      this.props.state.add3__ben5 === false
    ) {
      if (porcentaje1_Add3 === 100) {
        this.acceptBen1__Add3();
      } else {
        this.valPorcentaje1_Add3();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add3__ben1 === true &&
      this.props.state.add3__ben2 === true &&
      this.props.state.add3__ben3 === false &&
      this.props.state.add3__ben4 === false &&
      this.props.state.add3__ben5 === false
    ) {
      if (porcentaje1_Add3 + porcentaje2_Add3 === 100) {
        this.acceptBen2__Add3();
      } else {
        this.valPorcentaje1_Add3();
        this.valPorcentaje2_Add3();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add3__ben1 === true &&
      this.props.state.add3__ben2 === true &&
      this.props.state.add3__ben3 === true &&
      this.props.state.add3__ben4 === false &&
      this.props.state.add3__ben5 === false
    ) {
      if (porcentaje1_Add3 + porcentaje2_Add3 + porcentaje3_Add3 === 100) {
        this.acceptBen3__Add3();
      } else {
        this.valPorcentaje1_Add3();
        this.valPorcentaje2_Add3();
        this.valPorcentaje3_Add3();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add3__ben1 === true &&
      this.props.state.add3__ben2 === true &&
      this.props.state.add3__ben3 === true &&
      this.props.state.add3__ben4 === true &&
      this.props.state.add3__ben5 === false
    ) {
      if (
        porcentaje1_Add3 +
          porcentaje2_Add3 +
          porcentaje3_Add3 +
          porcentaje4_Add3 ===
        100
      ) {
        this.acceptBen4__Add3();
      } else {
        this.valPorcentaje1_Add3();
        this.valPorcentaje2_Add3();
        this.valPorcentaje3_Add3();
        this.valPorcentaje4_Add3();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add3__ben1 === true &&
      this.props.state.add3__ben2 === true &&
      this.props.state.add3__ben3 === true &&
      this.props.state.add3__ben4 === true &&
      this.props.state.add3__ben5 === true
    ) {
      if (
        porcentaje1_Add3 +
          porcentaje2_Add3 +
          porcentaje3_Add3 +
          porcentaje4_Add3 +
          porcentaje5_Add3 ===
        100
      ) {
        this.acceptBen5__Add3();
      } else {
        this.valPorcentaje1_Add3();
        this.valPorcentaje2_Add3();
        this.valPorcentaje3_Add3();
        this.valPorcentaje4_Add3();
        this.valPorcentaje5_Add3();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };
  porcentajeBtnBen__add4 = () => {
    const porcentaje1_Add4 = parseInt(this.props.state.add4__ben1_porcentaje);
    const porcentaje2_Add4 = parseInt(this.props.state.add4__ben2_porcentaje);
    const porcentaje3_Add4 = parseInt(this.props.state.add4__ben3_porcentaje);
    const porcentaje4_Add4 = parseInt(this.props.state.add4__ben4_porcentaje);
    const porcentaje5_Add4 = parseInt(this.props.state.add4__ben5_porcentaje);

    if (
      this.props.state.add4__ben1 === true &&
      this.props.state.add4__ben2 === false &&
      this.props.state.add4__ben3 === false &&
      this.props.state.add4__ben4 === false &&
      this.props.state.add4__ben5 === false
    ) {
      if (porcentaje1_Add4 === 100) {
        this.acceptBen1__Add4();
      } else {
        this.valPorcentaje1_Add4();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add4__ben1 === true &&
      this.props.state.add4__ben2 === true &&
      this.props.state.add4__ben3 === false &&
      this.props.state.add4__ben4 === false &&
      this.props.state.add4__ben5 === false
    ) {
      if (porcentaje1_Add4 + porcentaje2_Add4 === 100) {
        this.acceptBen2__Add4();
      } else {
        this.valPorcentaje1_Add4();
        this.valPorcentaje2_Add4();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add4__ben1 === true &&
      this.props.state.add4__ben2 === true &&
      this.props.state.add4__ben3 === true &&
      this.props.state.add4__ben4 === false &&
      this.props.state.add4__ben5 === false
    ) {
      if (porcentaje1_Add4 + porcentaje2_Add4 + porcentaje3_Add4 === 100) {
        this.acceptBen3__Add4();
      } else {
        this.valPorcentaje1_Add4();
        this.valPorcentaje2_Add4();
        this.valPorcentaje3_Add4();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add4__ben1 === true &&
      this.props.state.add4__ben2 === true &&
      this.props.state.add4__ben3 === true &&
      this.props.state.add4__ben4 === true &&
      this.props.state.add4__ben5 === false
    ) {
      if (
        porcentaje1_Add4 +
          porcentaje2_Add4 +
          porcentaje3_Add4 +
          porcentaje4_Add4 ===
        100
      ) {
        this.acceptBen4__Add4();
      } else {
        this.valPorcentaje1_Add4();
        this.valPorcentaje2_Add4();
        this.valPorcentaje3_Add4();
        this.valPorcentaje4_Add4();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add4__ben1 === true &&
      this.props.state.add4__ben2 === true &&
      this.props.state.add4__ben3 === true &&
      this.props.state.add4__ben4 === true &&
      this.props.state.add4__ben5 === true
    ) {
      if (
        porcentaje1_Add4 +
          porcentaje2_Add4 +
          porcentaje3_Add4 +
          porcentaje4_Add4 +
          porcentaje5_Add4 ===
        100
      ) {
        this.acceptBen5__Add4();
      } else {
        this.valPorcentaje1_Add4();
        this.valPorcentaje2_Add4();
        this.valPorcentaje3_Add4();
        this.valPorcentaje4_Add4();
        this.valPorcentaje5_Add4();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };
  porcentajeBtnBen__add5 = () => {
    const porcentaje1_Add5 = parseInt(this.props.state.add5__ben1_porcentaje);
    const porcentaje2_Add5 = parseInt(this.props.state.add5__ben2_porcentaje);
    const porcentaje3_Add5 = parseInt(this.props.state.add5__ben3_porcentaje);
    const porcentaje4_Add5 = parseInt(this.props.state.add5__ben4_porcentaje);
    const porcentaje5_Add5 = parseInt(this.props.state.add5__ben5_porcentaje);

    if (
      this.props.state.add5__ben1 === true &&
      this.props.state.add5__ben2 === false &&
      this.props.state.add5__ben3 === false &&
      this.props.state.add5__ben4 === false &&
      this.props.state.add5__ben5 === false
    ) {
      if (porcentaje1_Add5 === 100) {
        this.acceptBen1__Add5();
      } else {
        this.valPorcentaje1_Add5();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add5__ben1 === true &&
      this.props.state.add5__ben2 === true &&
      this.props.state.add5__ben3 === false &&
      this.props.state.add5__ben4 === false &&
      this.props.state.add5__ben5 === false
    ) {
      if (porcentaje1_Add5 + porcentaje2_Add5 === 100) {
        this.acceptBen2__Add5();
      } else {
        this.valPorcentaje1_Add5();
        this.valPorcentaje2_Add5();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add5__ben1 === true &&
      this.props.state.add5__ben2 === true &&
      this.props.state.add5__ben3 === true &&
      this.props.state.add5__ben4 === false &&
      this.props.state.add5__ben5 === false
    ) {
      if (porcentaje1_Add5 + porcentaje2_Add5 + porcentaje3_Add5 === 100) {
        this.acceptBen3__Add5();
      } else {
        this.valPorcentaje1_Add5();
        this.valPorcentaje2_Add5();
        this.valPorcentaje3_Add5();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add5__ben1 === true &&
      this.props.state.add5__ben2 === true &&
      this.props.state.add5__ben3 === true &&
      this.props.state.add5__ben4 === true &&
      this.props.state.add5__ben5 === false
    ) {
      if (
        porcentaje1_Add5 +
          porcentaje2_Add5 +
          porcentaje3_Add5 +
          porcentaje4_Add5 ===
        100
      ) {
        this.acceptBen4__Add5();
      } else {
        this.valPorcentaje1_Add5();
        this.valPorcentaje2_Add5();
        this.valPorcentaje3_Add5();
        this.valPorcentaje4_Add5();
        this.setState({
          alertPorcentaje: true,
        });
      }
    } else if (
      this.props.state.add5__ben1 === true &&
      this.props.state.add5__ben2 === true &&
      this.props.state.add5__ben3 === true &&
      this.props.state.add5__ben4 === true &&
      this.props.state.add5__ben5 === true
    ) {
      if (
        porcentaje1_Add5 +
          porcentaje2_Add5 +
          porcentaje3_Add5 +
          porcentaje4_Add5 +
          porcentaje5_Add5 ===
        100
      ) {
        this.acceptBen5__Add5();
      } else {
        this.valPorcentaje1_Add5();
        this.valPorcentaje2_Add5();
        this.valPorcentaje3_Add5();
        this.valPorcentaje4_Add5();
        this.valPorcentaje5_Add5();
        this.setState({
          alertPorcentaje: true,
        });
      }
    }
  };

  render() {
    return (
      <>
        {this.props.state.edad >= 12 ? (
          <ModalBeneficiado
            add="0"
            showModal={this.props.state.modalTitular}
            closeModal={this.props.closeModalTitular}
            addName={this.state.titularName}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add0}
            status1={this.props.state.add0__ben1}
            status2={this.props.state.add0__ben2}
            status3={this.props.state.add0__ben3}
            status4={this.props.state.add0__ben4}
            status5={this.props.state.add0__ben5}
            changeStatus1={this.acc_add0__ben1}
            changeStatus2={this.acc_add0__ben2}
            changeStatus3={this.acc_add0__ben3}
            changeStatus4={this.acc_add0__ben4}
            changeStatus5={this.acc_add0__ben5}
            valueNombre1={this.props.state.add0__ben1_nombre}
            valueNombre2={this.props.state.add0__ben2_nombre}
            valueNombre3={this.props.state.add0__ben3_nombre}
            valueNombre4={this.props.state.add0__ben4_nombre}
            valueNombre5={this.props.state.add0__ben5_nombre}
            validationNombre1={this.valNombre1_Add0}
            validationNombre2={this.valNombre2_Add0}
            validationNombre3={this.valNombre3_Add0}
            validationNombre4={this.valNombre4_Add0}
            validationNombre5={this.valNombre5_Add0}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add0__ben1_paterno}
            valuePaterno2={this.props.state.add0__ben2_paterno}
            valuePaterno3={this.props.state.add0__ben3_paterno}
            valuePaterno4={this.props.state.add0__ben4_paterno}
            valuePaterno5={this.props.state.add0__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add0}
            validationPaterno2={this.valPaterno2_Add0}
            validationPaterno3={this.valPaterno3_Add0}
            validationPaterno4={this.valPaterno4_Add0}
            validationPaterno5={this.valPaterno5_Add0}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add0__ben1_materno}
            valueMaterno2={this.props.state.add0__ben2_materno}
            valueMaterno3={this.props.state.add0__ben3_materno}
            valueMaterno4={this.props.state.add0__ben4_materno}
            valueMaterno5={this.props.state.add0__ben5_materno}
            validationMaterno1={this.valMaterno1_Add0}
            validationMaterno2={this.valMaterno2_Add0}
            validationMaterno3={this.valMaterno3_Add0}
            validationMaterno4={this.valMaterno4_Add0}
            validationMaterno5={this.valMaterno5_Add0}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add0__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add0__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add0__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add0__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add0__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add0}
            validationPorcentaje2={this.valPorcentaje2_Add0}
            validationPorcentaje3={this.valPorcentaje3_Add0}
            validationPorcentaje4={this.valPorcentaje4_Add0}
            validationPorcentaje5={this.valPorcentaje5_Add0}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add0__ben1_parentesco}
            valueParentesco2={this.props.state.add0__ben2_parentesco}
            valueParentesco3={this.props.state.add0__ben3_parentesco}
            valueParentesco4={this.props.state.add0__ben4_parentesco}
            valueParentesco5={this.props.state.add0__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add0}
            validationParentesco2={this.valParentesco2_Add0}
            validationParentesco3={this.valParentesco3_Add0}
            validationParentesco4={this.valParentesco4_Add0}
            validationParentesco5={this.valParentesco5_Add0}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add0__ben1_edad}
            valueEdad2={this.props.state.add0__ben2_edad}
            valueEdad3={this.props.state.add0__ben3_edad}
            valueEdad4={this.props.state.add0__ben4_edad}
            valueEdad5={this.props.state.add0__ben5_edad}
            validationEdad1={this.valEdad1_Add0}
            validationEdad2={this.valEdad2_Add0}
            validationEdad3={this.valEdad3_Add0}
            validationEdad4={this.valEdad4_Add0}
            validationEdad5={this.valEdad5_Add0}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add0}
            changeInitEdad2={this.changeInitEdad2_Add0}
            changeInitEdad3={this.changeInitEdad3_Add0}
            changeInitEdad4={this.changeInitEdad4_Add0}
            changeInitEdad5={this.changeInitEdad5_Add0}
            valueTitular1={this.props.state.add0__ben1_titular}
            valueTitular2={this.props.state.add0__ben2_titular}
            valueTitular3={this.props.state.add0__ben3_titular}
            valueTitular4={this.props.state.add0__ben4_titular}
            valueTitular5={this.props.state.add0__ben5_titular}
            validationTitular1={this.valTitular1_Add0}
            validationTitular2={this.valTitular2_Add0}
            validationTitular3={this.valTitular3_Add0}
            validationTitular4={this.valTitular4_Add0}
            validationTitular5={this.valTitular5_Add0}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )}
        {this.props.state.add1__edad >= 12 ? (
          <ModalBeneficiado
            add="1"
            showModal={this.props.state.modalAdd1}
            closeModal={this.props.closeModalAdd1}
            addName={this.state.add1Name}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add1}
            status1={this.props.state.add1__ben1}
            status2={this.props.state.add1__ben2}
            status3={this.props.state.add1__ben3}
            status4={this.props.state.add1__ben4}
            status5={this.props.state.add1__ben5}
            changeStatus1={this.acc_add1__ben1}
            changeStatus2={this.acc_add1__ben2}
            changeStatus3={this.acc_add1__ben3}
            changeStatus4={this.acc_add1__ben4}
            changeStatus5={this.acc_add1__ben5}
            valueNombre1={this.props.state.add1__ben1_nombre}
            valueNombre2={this.props.state.add1__ben2_nombre}
            valueNombre3={this.props.state.add1__ben3_nombre}
            valueNombre4={this.props.state.add1__ben4_nombre}
            valueNombre5={this.props.state.add1__ben5_nombre}
            validationNombre1={this.valNombre1_Add1}
            validationNombre2={this.valNombre2_Add1}
            validationNombre3={this.valNombre3_Add1}
            validationNombre4={this.valNombre4_Add1}
            validationNombre5={this.valNombre5_Add1}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add1__ben1_paterno}
            valuePaterno2={this.props.state.add1__ben2_paterno}
            valuePaterno3={this.props.state.add1__ben3_paterno}
            valuePaterno4={this.props.state.add1__ben4_paterno}
            valuePaterno5={this.props.state.add1__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add1}
            validationPaterno2={this.valPaterno2_Add1}
            validationPaterno3={this.valPaterno3_Add1}
            validationPaterno4={this.valPaterno4_Add1}
            validationPaterno5={this.valPaterno5_Add1}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add1__ben1_materno}
            valueMaterno2={this.props.state.add1__ben2_materno}
            valueMaterno3={this.props.state.add1__ben3_materno}
            valueMaterno4={this.props.state.add1__ben4_materno}
            valueMaterno5={this.props.state.add1__ben5_materno}
            validationMaterno1={this.valMaterno1_Add1}
            validationMaterno2={this.valMaterno2_Add1}
            validationMaterno3={this.valMaterno3_Add1}
            validationMaterno4={this.valMaterno4_Add1}
            validationMaterno5={this.valMaterno5_Add1}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add1__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add1__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add1__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add1__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add1__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add1}
            validationPorcentaje2={this.valPorcentaje2_Add1}
            validationPorcentaje3={this.valPorcentaje3_Add1}
            validationPorcentaje4={this.valPorcentaje4_Add1}
            validationPorcentaje5={this.valPorcentaje5_Add1}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add1__ben1_parentesco}
            valueParentesco2={this.props.state.add1__ben2_parentesco}
            valueParentesco3={this.props.state.add1__ben3_parentesco}
            valueParentesco4={this.props.state.add1__ben4_parentesco}
            valueParentesco5={this.props.state.add1__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add1}
            validationParentesco2={this.valParentesco2_Add1}
            validationParentesco3={this.valParentesco3_Add1}
            validationParentesco4={this.valParentesco4_Add1}
            validationParentesco5={this.valParentesco5_Add1}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add1__ben1_edad}
            valueEdad2={this.props.state.add1__ben2_edad}
            valueEdad3={this.props.state.add1__ben3_edad}
            valueEdad4={this.props.state.add1__ben4_edad}
            valueEdad5={this.props.state.add1__ben5_edad}
            validationEdad1={this.valEdad1_Add1}
            validationEdad2={this.valEdad2_Add1}
            validationEdad3={this.valEdad3_Add1}
            validationEdad4={this.valEdad4_Add1}
            validationEdad5={this.valEdad5_Add1}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add1}
            changeInitEdad2={this.changeInitEdad2_Add1}
            changeInitEdad3={this.changeInitEdad3_Add1}
            changeInitEdad4={this.changeInitEdad4_Add1}
            changeInitEdad5={this.changeInitEdad5_Add1}
            valueTitular1={this.props.state.add1__ben1_titular}
            valueTitular2={this.props.state.add1__ben2_titular}
            valueTitular3={this.props.state.add1__ben3_titular}
            valueTitular4={this.props.state.add1__ben4_titular}
            valueTitular5={this.props.state.add1__ben5_titular}
            validationTitular1={this.valTitular1_Add1}
            validationTitular2={this.valTitular2_Add1}
            validationTitular3={this.valTitular3_Add1}
            validationTitular4={this.valTitular4_Add1}
            validationTitular5={this.valTitular5_Add1}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )}

        {this.props.state.add2__edad >= 12 ? (
          <ModalBeneficiado
            add="2"
            showModal={this.props.state.modalAdd2}
            closeModal={this.props.closeModalAdd2}
            addName={this.state.add2Name}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add2}
            status1={this.props.state.add2__ben1}
            status2={this.props.state.add2__ben2}
            status3={this.props.state.add2__ben3}
            status4={this.props.state.add2__ben4}
            status5={this.props.state.add2__ben5}
            changeStatus1={this.acc_add2__ben1}
            changeStatus2={this.acc_add2__ben2}
            changeStatus3={this.acc_add2__ben3}
            changeStatus4={this.acc_add2__ben4}
            changeStatus5={this.acc_add2__ben5}
            valueNombre1={this.props.state.add2__ben1_nombre}
            valueNombre2={this.props.state.add2__ben2_nombre}
            valueNombre3={this.props.state.add2__ben3_nombre}
            valueNombre4={this.props.state.add2__ben4_nombre}
            valueNombre5={this.props.state.add2__ben5_nombre}
            validationNombre1={this.valNombre1_Add2}
            validationNombre2={this.valNombre2_Add2}
            validationNombre3={this.valNombre3_Add2}
            validationNombre4={this.valNombre4_Add2}
            validationNombre5={this.valNombre5_Add2}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add2__ben1_paterno}
            valuePaterno2={this.props.state.add2__ben2_paterno}
            valuePaterno3={this.props.state.add2__ben3_paterno}
            valuePaterno4={this.props.state.add2__ben4_paterno}
            valuePaterno5={this.props.state.add2__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add2}
            validationPaterno2={this.valPaterno2_Add2}
            validationPaterno3={this.valPaterno3_Add2}
            validationPaterno4={this.valPaterno4_Add2}
            validationPaterno5={this.valPaterno5_Add2}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add2__ben1_materno}
            valueMaterno2={this.props.state.add2__ben2_materno}
            valueMaterno3={this.props.state.add2__ben3_materno}
            valueMaterno4={this.props.state.add2__ben4_materno}
            valueMaterno5={this.props.state.add2__ben5_materno}
            validationMaterno1={this.valMaterno1_Add2}
            validationMaterno2={this.valMaterno2_Add2}
            validationMaterno3={this.valMaterno3_Add2}
            validationMaterno4={this.valMaterno4_Add2}
            validationMaterno5={this.valMaterno5_Add2}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add2__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add2__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add2__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add2__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add2__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add2}
            validationPorcentaje2={this.valPorcentaje2_Add2}
            validationPorcentaje3={this.valPorcentaje3_Add2}
            validationPorcentaje4={this.valPorcentaje4_Add2}
            validationPorcentaje5={this.valPorcentaje5_Add2}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add2__ben1_parentesco}
            valueParentesco2={this.props.state.add2__ben2_parentesco}
            valueParentesco3={this.props.state.add2__ben3_parentesco}
            valueParentesco4={this.props.state.add2__ben4_parentesco}
            valueParentesco5={this.props.state.add2__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add2}
            validationParentesco2={this.valParentesco2_Add2}
            validationParentesco3={this.valParentesco3_Add2}
            validationParentesco4={this.valParentesco4_Add2}
            validationParentesco5={this.valParentesco5_Add2}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add2__ben1_edad}
            valueEdad2={this.props.state.add2__ben2_edad}
            valueEdad3={this.props.state.add2__ben3_edad}
            valueEdad4={this.props.state.add2__ben4_edad}
            valueEdad5={this.props.state.add2__ben5_edad}
            validationEdad1={this.valEdad1_Add2}
            validationEdad2={this.valEdad2_Add2}
            validationEdad3={this.valEdad3_Add2}
            validationEdad4={this.valEdad4_Add2}
            validationEdad5={this.valEdad5_Add2}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add2}
            changeInitEdad2={this.changeInitEdad2_Add2}
            changeInitEdad3={this.changeInitEdad3_Add2}
            changeInitEdad4={this.changeInitEdad4_Add2}
            changeInitEdad5={this.changeInitEdad5_Add2}
            valueTitular1={this.props.state.add2__ben1_titular}
            valueTitular2={this.props.state.add2__ben2_titular}
            valueTitular3={this.props.state.add2__ben3_titular}
            valueTitular4={this.props.state.add2__ben4_titular}
            valueTitular5={this.props.state.add2__ben5_titular}
            validationTitular1={this.valTitular1_Add2}
            validationTitular2={this.valTitular2_Add2}
            validationTitular3={this.valTitular3_Add2}
            validationTitular4={this.valTitular4_Add2}
            validationTitular5={this.valTitular5_Add2}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )} 

        {this.props.state.add3__edad >= 12 ? (
          <ModalBeneficiado
            add="3"
            showModal={this.props.state.modalAdd3}
            closeModal={this.props.closeModalAdd3}
            addName={this.state.add3Name}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add3}
            status1={this.props.state.add3__ben1}
            status2={this.props.state.add3__ben2}
            status3={this.props.state.add3__ben3}
            status4={this.props.state.add3__ben4}
            status5={this.props.state.add3__ben5}
            changeStatus1={this.acc_add3__ben1}
            changeStatus2={this.acc_add3__ben2}
            changeStatus3={this.acc_add3__ben3}
            changeStatus4={this.acc_add3__ben4}
            changeStatus5={this.acc_add3__ben5}
            valueNombre1={this.props.state.add3__ben1_nombre}
            valueNombre2={this.props.state.add3__ben2_nombre}
            valueNombre3={this.props.state.add3__ben3_nombre}
            valueNombre4={this.props.state.add3__ben4_nombre}
            valueNombre5={this.props.state.add3__ben5_nombre}
            validationNombre1={this.valNombre1_Add3}
            validationNombre2={this.valNombre2_Add3}
            validationNombre3={this.valNombre3_Add3}
            validationNombre4={this.valNombre4_Add3}
            validationNombre5={this.valNombre5_Add3}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add3__ben1_paterno}
            valuePaterno2={this.props.state.add3__ben2_paterno}
            valuePaterno3={this.props.state.add3__ben3_paterno}
            valuePaterno4={this.props.state.add3__ben4_paterno}
            valuePaterno5={this.props.state.add3__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add3}
            validationPaterno2={this.valPaterno2_Add3}
            validationPaterno3={this.valPaterno3_Add3}
            validationPaterno4={this.valPaterno4_Add3}
            validationPaterno5={this.valPaterno5_Add3}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add3__ben1_materno}
            valueMaterno2={this.props.state.add3__ben2_materno}
            valueMaterno3={this.props.state.add3__ben3_materno}
            valueMaterno4={this.props.state.add3__ben4_materno}
            valueMaterno5={this.props.state.add3__ben5_materno}
            validationMaterno1={this.valMaterno1_Add3}
            validationMaterno2={this.valMaterno2_Add3}
            validationMaterno3={this.valMaterno3_Add3}
            validationMaterno4={this.valMaterno4_Add3}
            validationMaterno5={this.valMaterno5_Add3}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add3__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add3__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add3__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add3__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add3__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add3}
            validationPorcentaje2={this.valPorcentaje2_Add3}
            validationPorcentaje3={this.valPorcentaje3_Add3}
            validationPorcentaje4={this.valPorcentaje4_Add3}
            validationPorcentaje5={this.valPorcentaje5_Add3}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add3__ben1_parentesco}
            valueParentesco2={this.props.state.add3__ben2_parentesco}
            valueParentesco3={this.props.state.add3__ben3_parentesco}
            valueParentesco4={this.props.state.add3__ben4_parentesco}
            valueParentesco5={this.props.state.add3__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add3}
            validationParentesco2={this.valParentesco2_Add3}
            validationParentesco3={this.valParentesco3_Add3}
            validationParentesco4={this.valParentesco4_Add3}
            validationParentesco5={this.valParentesco5_Add3}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add3__ben1_edad}
            valueEdad2={this.props.state.add3__ben2_edad}
            valueEdad3={this.props.state.add3__ben3_edad}
            valueEdad4={this.props.state.add3__ben4_edad}
            valueEdad5={this.props.state.add3__ben5_edad}
            validationEdad1={this.valEdad1_Add3}
            validationEdad2={this.valEdad2_Add3}
            validationEdad3={this.valEdad3_Add3}
            validationEdad4={this.valEdad4_Add3}
            validationEdad5={this.valEdad5_Add3}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add3}
            changeInitEdad2={this.changeInitEdad2_Add3}
            changeInitEdad3={this.changeInitEdad3_Add3}
            changeInitEdad4={this.changeInitEdad4_Add3}
            changeInitEdad5={this.changeInitEdad5_Add3}
            valueTitular1={this.props.state.add3__ben1_titular}
            valueTitular2={this.props.state.add3__ben2_titular}
            valueTitular3={this.props.state.add3__ben3_titular}
            valueTitular4={this.props.state.add3__ben4_titular}
            valueTitular5={this.props.state.add3__ben5_titular}
            validationTitular1={this.valTitular1_Add3}
            validationTitular2={this.valTitular2_Add3}
            validationTitular3={this.valTitular3_Add3}
            validationTitular4={this.valTitular4_Add3}
            validationTitular5={this.valTitular5_Add3}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )} 

        {this.props.state.add4__edad >= 12 ? (
          <ModalBeneficiado
            add="4"
            showModal={this.props.state.modalAdd4}
            closeModal={this.props.closeModalAdd4}
            addName={this.state.add4Name}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add4}
            status1={this.props.state.add4__ben1}
            status2={this.props.state.add4__ben2}
            status3={this.props.state.add4__ben3}
            status4={this.props.state.add4__ben4}
            status5={this.props.state.add4__ben5}
            changeStatus1={this.acc_add4__ben1}
            changeStatus2={this.acc_add4__ben2}
            changeStatus3={this.acc_add4__ben3}
            changeStatus4={this.acc_add4__ben4}
            changeStatus5={this.acc_add4__ben5}
            valueNombre1={this.props.state.add4__ben1_nombre}
            valueNombre2={this.props.state.add4__ben2_nombre}
            valueNombre3={this.props.state.add4__ben3_nombre}
            valueNombre4={this.props.state.add4__ben4_nombre}
            valueNombre5={this.props.state.add4__ben5_nombre}
            validationNombre1={this.valNombre1_Add4}
            validationNombre2={this.valNombre2_Add4}
            validationNombre3={this.valNombre3_Add4}
            validationNombre4={this.valNombre4_Add4}
            validationNombre5={this.valNombre5_Add4}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add4__ben1_paterno}
            valuePaterno2={this.props.state.add4__ben2_paterno}
            valuePaterno3={this.props.state.add4__ben3_paterno}
            valuePaterno4={this.props.state.add4__ben4_paterno}
            valuePaterno5={this.props.state.add4__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add4}
            validationPaterno2={this.valPaterno2_Add4}
            validationPaterno3={this.valPaterno3_Add4}
            validationPaterno4={this.valPaterno4_Add4}
            validationPaterno5={this.valPaterno5_Add4}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add4__ben1_materno}
            valueMaterno2={this.props.state.add4__ben2_materno}
            valueMaterno3={this.props.state.add4__ben3_materno}
            valueMaterno4={this.props.state.add4__ben4_materno}
            valueMaterno5={this.props.state.add4__ben5_materno}
            validationMaterno1={this.valMaterno1_Add4}
            validationMaterno2={this.valMaterno2_Add4}
            validationMaterno3={this.valMaterno3_Add4}
            validationMaterno4={this.valMaterno4_Add4}
            validationMaterno5={this.valMaterno5_Add4}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add4__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add4__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add4__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add4__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add4__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add4}
            validationPorcentaje2={this.valPorcentaje2_Add4}
            validationPorcentaje3={this.valPorcentaje3_Add4}
            validationPorcentaje4={this.valPorcentaje4_Add4}
            validationPorcentaje5={this.valPorcentaje5_Add4}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add4__ben1_parentesco}
            valueParentesco2={this.props.state.add4__ben2_parentesco}
            valueParentesco3={this.props.state.add4__ben3_parentesco}
            valueParentesco4={this.props.state.add4__ben4_parentesco}
            valueParentesco5={this.props.state.add4__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add4}
            validationParentesco2={this.valParentesco2_Add4}
            validationParentesco3={this.valParentesco3_Add4}
            validationParentesco4={this.valParentesco4_Add4}
            validationParentesco5={this.valParentesco5_Add4}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add4__ben1_edad}
            valueEdad2={this.props.state.add4__ben2_edad}
            valueEdad3={this.props.state.add4__ben3_edad}
            valueEdad4={this.props.state.add4__ben4_edad}
            valueEdad5={this.props.state.add4__ben5_edad}
            validationEdad1={this.valEdad1_Add4}
            validationEdad2={this.valEdad2_Add4}
            validationEdad3={this.valEdad3_Add4}
            validationEdad4={this.valEdad4_Add4}
            validationEdad5={this.valEdad5_Add4}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add4}
            changeInitEdad2={this.changeInitEdad2_Add4}
            changeInitEdad3={this.changeInitEdad3_Add4}
            changeInitEdad4={this.changeInitEdad4_Add4}
            changeInitEdad5={this.changeInitEdad5_Add4}
            valueTitular1={this.props.state.add4__ben1_titular}
            valueTitular2={this.props.state.add4__ben2_titular}
            valueTitular3={this.props.state.add4__ben3_titular}
            valueTitular4={this.props.state.add4__ben4_titular}
            valueTitular5={this.props.state.add4__ben5_titular}
            validationTitular1={this.valTitular1_Add4}
            validationTitular2={this.valTitular2_Add4}
            validationTitular3={this.valTitular3_Add4}
            validationTitular4={this.valTitular4_Add4}
            validationTitular5={this.valTitular5_Add4}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )} 

        {this.props.state.add5__edad >= 12 ? (
          <ModalBeneficiado
            add="4"
            showModal={this.props.state.modalAdd5}
            closeModal={this.props.closeModalAdd5}
            addName={this.state.add5Name}
            offButton={true}
            onChange={this.props.handleChange}
            acceptBen={this.porcentajeBtnBen__add5}
            status1={this.props.state.add5__ben1}
            status2={this.props.state.add5__ben2}
            status3={this.props.state.add5__ben3}
            status4={this.props.state.add5__ben4}
            status5={this.props.state.add5__ben5}
            changeStatus1={this.acc_add5__ben1}
            changeStatus2={this.acc_add5__ben2}
            changeStatus3={this.acc_add5__ben3}
            changeStatus4={this.acc_add5__ben4}
            changeStatus5={this.acc_add5__ben5}
            valueNombre1={this.props.state.add5__ben1_nombre}
            valueNombre2={this.props.state.add5__ben2_nombre}
            valueNombre3={this.props.state.add5__ben3_nombre}
            valueNombre4={this.props.state.add5__ben4_nombre}
            valueNombre5={this.props.state.add5__ben5_nombre}
            validationNombre1={this.valNombre1_Add5}
            validationNombre2={this.valNombre2_Add5}
            validationNombre3={this.valNombre3_Add5}
            validationNombre4={this.valNombre4_Add5}
            validationNombre5={this.valNombre5_Add5}
            errorFX__nombre1={this.state.errorFX__nombre1}
            errorFX__nombre2={this.state.errorFX__nombre2}
            errorFX__nombre3={this.state.errorFX__nombre3}
            errorFX__nombre4={this.state.errorFX__nombre4}
            errorFX__nombre5={this.state.errorFX__nombre5}
            errorNull__nombre1={this.state.errorNull__nombre1}
            errorNull__nombre2={this.state.errorNull__nombre2}
            errorNull__nombre3={this.state.errorNull__nombre3}
            errorNull__nombre4={this.state.errorNull__nombre4}
            errorNull__nombre5={this.state.errorNull__nombre5}
            errorTest__nombre1={this.state.errorTest__nombre1}
            errorTest__nombre2={this.state.errorTest__nombre2}
            errorTest__nombre3={this.state.errorTest__nombre3}
            errorTest__nombre4={this.state.errorTest__nombre4}
            errorTest__nombre5={this.state.errorTest__nombre5}
            valuePaterno1={this.props.state.add5__ben1_paterno}
            valuePaterno2={this.props.state.add5__ben2_paterno}
            valuePaterno3={this.props.state.add5__ben3_paterno}
            valuePaterno4={this.props.state.add5__ben4_paterno}
            valuePaterno5={this.props.state.add5__ben5_paterno}
            validationPaterno1={this.valPaterno1_Add5}
            validationPaterno2={this.valPaterno2_Add5}
            validationPaterno3={this.valPaterno3_Add5}
            validationPaterno4={this.valPaterno4_Add5}
            validationPaterno5={this.valPaterno5_Add5}
            errorFX__paterno1={this.state.errorFX__paterno1}
            errorFX__paterno2={this.state.errorFX__paterno2}
            errorFX__paterno3={this.state.errorFX__paterno3}
            errorFX__paterno4={this.state.errorFX__paterno4}
            errorFX__paterno5={this.state.errorFX__paterno5}
            errorNull__paterno1={this.state.errorNull__paterno1}
            errorNull__paterno2={this.state.errorNull__paterno2}
            errorNull__paterno3={this.state.errorNull__paterno3}
            errorNull__paterno4={this.state.errorNull__paterno4}
            errorNull__paterno5={this.state.errorNull__paterno5}
            errorTest__paterno1={this.state.errorTest__paterno1}
            errorTest__paterno2={this.state.errorTest__paterno2}
            errorTest__paterno3={this.state.errorTest__paterno3}
            errorTest__paterno4={this.state.errorTest__paterno4}
            errorTest__paterno5={this.state.errorTest__paterno5}
            valueMaterno1={this.props.state.add5__ben1_materno}
            valueMaterno2={this.props.state.add5__ben2_materno}
            valueMaterno3={this.props.state.add5__ben3_materno}
            valueMaterno4={this.props.state.add5__ben4_materno}
            valueMaterno5={this.props.state.add5__ben5_materno}
            validationMaterno1={this.valMaterno1_Add5}
            validationMaterno2={this.valMaterno2_Add5}
            validationMaterno3={this.valMaterno3_Add5}
            validationMaterno4={this.valMaterno4_Add5}
            validationMaterno5={this.valMaterno5_Add5}
            errorFX__materno1={this.state.errorFX__materno1}
            errorFX__materno2={this.state.errorFX__materno2}
            errorFX__materno3={this.state.errorFX__materno3}
            errorFX__materno4={this.state.errorFX__materno4}
            errorFX__materno5={this.state.errorFX__materno5}
            errorNull__materno1={this.state.errorNull__materno1}
            errorNull__materno2={this.state.errorNull__materno2}
            errorNull__materno3={this.state.errorNull__materno3}
            errorNull__materno4={this.state.errorNull__materno4}
            errorNull__materno5={this.state.errorNull__materno5}
            errorTest__materno1={this.state.errorTest__materno1}
            errorTest__materno2={this.state.errorTest__materno2}
            errorTest__materno3={this.state.errorTest__materno3}
            errorTest__materno4={this.state.errorTest__materno4}
            errorTest__materno5={this.state.errorTest__materno5}
            valuePorcentaje1={this.props.state.add5__ben1_porcentaje}
            valuePorcentaje2={this.props.state.add5__ben2_porcentaje}
            valuePorcentaje3={this.props.state.add5__ben3_porcentaje}
            valuePorcentaje4={this.props.state.add5__ben4_porcentaje}
            valuePorcentaje5={this.props.state.add5__ben5_porcentaje}
            validationPorcentaje1={this.valPorcentaje1_Add5}
            validationPorcentaje2={this.valPorcentaje2_Add5}
            validationPorcentaje3={this.valPorcentaje3_Add5}
            validationPorcentaje4={this.valPorcentaje4_Add5}
            validationPorcentaje5={this.valPorcentaje5_Add5}
            errorFX__porcentaje1={this.state.errorFX__porcentaje1}
            errorFX__porcentaje2={this.state.errorFX__porcentaje2}
            errorFX__porcentaje3={this.state.errorFX__porcentaje3}
            errorFX__porcentaje4={this.state.errorFX__porcentaje4}
            errorFX__porcentaje5={this.state.errorFX__porcentaje5}
            errorNull__porcentaje1={this.state.errorNull__porcentaje1}
            errorNull__porcentaje2={this.state.errorNull__porcentaje2}
            errorNull__porcentaje3={this.state.errorNull__porcentaje3}
            errorNull__porcentaje4={this.state.errorNull__porcentaje4}
            errorNull__porcentaje5={this.state.errorNull__porcentaje5}
            errorTest__porcentaje1={this.state.errorTest__porcentaje1}
            errorTest__porcentaje2={this.state.errorTest__porcentaje2}
            errorTest__porcentaje3={this.state.errorTest__porcentaje3}
            errorTest__porcentaje4={this.state.errorTest__porcentaje4}
            errorTest__porcentaje5={this.state.errorTest__porcentaje5}
            valueParentesco1={this.props.state.add5__ben1_parentesco}
            valueParentesco2={this.props.state.add5__ben2_parentesco}
            valueParentesco3={this.props.state.add5__ben3_parentesco}
            valueParentesco4={this.props.state.add5__ben4_parentesco}
            valueParentesco5={this.props.state.add5__ben5_parentesco}
            validationParentesco1={this.valParentesco1_Add5}
            validationParentesco2={this.valParentesco2_Add5}
            validationParentesco3={this.valParentesco3_Add5}
            validationParentesco4={this.valParentesco4_Add5}
            validationParentesco5={this.valParentesco5_Add5}
            errorFX__parentesco1={this.state.errorFX__parentesco1}
            errorFX__parentesco2={this.state.errorFX__parentesco2}
            errorFX__parentesco3={this.state.errorFX__parentesco3}
            errorFX__parentesco4={this.state.errorFX__parentesco4}
            errorFX__parentesco5={this.state.errorFX__parentesco5}
            errorNull__parentesco1={this.state.errorNull__parentesco1}
            errorNull__parentesco2={this.state.errorNull__parentesco2}
            errorNull__parentesco3={this.state.errorNull__parentesco3}
            errorNull__parentesco4={this.state.errorNull__parentesco4}
            errorNull__parentesco5={this.state.errorNull__parentesco5}
            initParentesco1={this.state.init__parentesco1}
            initParentesco2={this.state.init__parentesco2}
            initParentesco3={this.state.init__parentesco3}
            initParentesco4={this.state.init__parentesco4}
            initParentesco5={this.state.init__parentesco5}
            changeInitParentesco1={this.changeInitParentesco1}
            changeInitParentesco2={this.changeInitParentesco2}
            changeInitParentesco3={this.changeInitParentesco3}
            changeInitParentesco4={this.changeInitParentesco4}
            changeInitParentesco5={this.changeInitParentesco5}
            valueEdad1={this.props.state.add5__ben1_edad}
            valueEdad2={this.props.state.add5__ben2_edad}
            valueEdad3={this.props.state.add5__ben3_edad}
            valueEdad4={this.props.state.add5__ben4_edad}
            valueEdad5={this.props.state.add5__ben5_edad}
            validationEdad1={this.valEdad1_Add5}
            validationEdad2={this.valEdad2_Add5}
            validationEdad3={this.valEdad3_Add5}
            validationEdad4={this.valEdad4_Add5}
            validationEdad5={this.valEdad5_Add5}
            errorFX__edad1={this.state.errorFX__edad1}
            errorFX__edad2={this.state.errorFX__edad2}
            errorFX__edad3={this.state.errorFX__edad3}
            errorFX__edad4={this.state.errorFX__edad4}
            errorFX__edad5={this.state.errorFX__edad5}
            errorNull__edad1={this.state.errorNull__edad1}
            errorNull__edad2={this.state.errorNull__edad2}
            errorNull__edad3={this.state.errorNull__edad3}
            errorNull__edad4={this.state.errorNull__edad4}
            errorNull__edad5={this.state.errorNull__edad5}
            initEdad1={this.state.init__edad1}
            initEdad2={this.state.init__edad2}
            initEdad3={this.state.init__edad3}
            initEdad4={this.state.init__edad4}
            initEdad5={this.state.init__edad5}
            changeInitEdad1={this.changeInitEdad1_Add5}
            changeInitEdad2={this.changeInitEdad2_Add5}
            changeInitEdad3={this.changeInitEdad3_Add5}
            changeInitEdad4={this.changeInitEdad4_Add5}
            changeInitEdad5={this.changeInitEdad5_Add5}
            valueTitular1={this.props.state.add5__ben1_titular}
            valueTitular2={this.props.state.add5__ben2_titular}
            valueTitular3={this.props.state.add5__ben3_titular}
            valueTitular4={this.props.state.add5__ben4_titular}
            valueTitular5={this.props.state.add5__ben5_titular}
            validationTitular1={this.valTitular1_Add5}
            validationTitular2={this.valTitular2_Add5}
            validationTitular3={this.valTitular3_Add5}
            validationTitular4={this.valTitular4_Add5}
            validationTitular5={this.valTitular5_Add5}
            errorFX__titular1={this.state.errorFX__titular1}
            errorFX__titular2={this.state.errorFX__titular2}
            errorFX__titular3={this.state.errorFX__titular3}
            errorFX__titular4={this.state.errorFX__titular4}
            errorFX__titular5={this.state.errorFX__titular5}
            errorNull__titular1={this.state.errorNull__titular1}
            errorNull__titular2={this.state.errorNull__titular2}
            errorNull__titular3={this.state.errorNull__titular3}
            errorNull__titular4={this.state.errorNull__titular4}
            errorNull__titular5={this.state.errorNull__titular5}
            errorTest__titular1={this.state.errorTest__titular1}
            errorTest__titular2={this.state.errorTest__titular2}
            errorTest__titular3={this.state.errorTest__titular3}
            errorTest__titular4={this.state.errorTest__titular4}
            errorTest__titular5={this.state.errorTest__titular5}
          />
        ) : (
          ""
        )} 

        <AlertForm
          showAlert={this.state.alertError}
          closedAlert={this.closedAlertError}
          linkId=""
          text="Por favor llena correctamente todos los campos"
        />
        <AlertForm
          showAlert={this.state.alertPorcentaje}
          closedAlert={this.closedAlertPorcentaje}
          linkId=""
          text="La suma de los porcentajes debe ser 100"
        />
        <AlertForm
          showAlert={this.state.alertAcc}
          closedAlert={this.closedAlertAcc}
          linkId=""
          text="Agrega a los beneficiados en orden del 1 al 5"
        />
      </>
    );
  }
}

export default CoberturaGMBeneficiados;

import { useEffect } from "react";
import TitularInputs from "../../TitularInputs";

function FisicaAutos(props) {
  useEffect(() => {
    props.validationONFisica();
  }, [props.state]); 

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <TitularInputs
      onChange={props.handleChange}
      validationNombre={props.validationNombre}
      valueNombre={props.state.nombre}
      errorFX__nombre={props.error.errorFX__nombre}
      errorNull__nombre={props.error.errorNull__nombre}
      errorTest__nombre={props.error.errorTest__nombre}
      validationPaterno={props.validationPaterno}
      valuePaterno={props.state.paterno}
      errorFX__paterno={props.error.errorFX__paterno}
      errorNull__paterno={props.error.errorNull__paterno}
      errorTest__paterno={props.error.errorTest__paterno}
      validationMaterno={props.validationMaterno}
      valueMaterno={props.state.materno}
      errorFX__materno={props.error.errorFX__materno}
      errorNull__materno={props.error.errorNull__materno}
      errorTest__materno={props.error.errorTest__materno}
      validationEdad={props.validationEdad}
      valueEdad={props.state.edad}
      errorFX__edad={props.error.errorFX__edad}
      errorNull__edad={props.error.errorNull__edad}
      errorTest__edad={props.error.errorTest__edad}
      validationCorreo={props.validationCorreo}
      valueCorreo={props.state.correo}
      errorFX__correo={props.error.errorFX__correo}
      errorNull__correo={props.error.errorNull__correo}
      errorTest__correo={props.error.errorTest__correo}
      validationTel={props.validationTel}
      valueTel={props.state.tel}
      errorFX__tel={props.error.errorFX__tel}
      errorNull__tel={props.error.errorNull__tel}
      errorTest__tel={props.error.errorTest__tel}
      validationRFC={props.validationRFC}
      valueRFC={props.state.rfc}
      errorFX__rfc={props.error.errorFX__rfc}
      errorNull__rfc={props.error.errorNull__rfc}
      errorTest__rfc={props.error.errorTest__rfc}
      validationGenero={props.validationGenero}
      valueGenero={props.state.genero}
      errorFX__genero={props.error.errorFX__genero}
      errorNull__genero={props.error.errorNull__genero}
      errorTest__genero={props.error.errorTest__rfc}
      changeInitGenero={props.changeInitGenero}
      initGenero={props.error.initGenero}
    />
  );
}

export default FisicaAutos;

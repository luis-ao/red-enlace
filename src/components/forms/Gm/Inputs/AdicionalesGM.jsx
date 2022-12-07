import { useEffect } from "react";
import styled from "styled-components";
import AdicionalAcordeon from "./AdicionalesGM/AdicionalAcordeon";

function AdicionalesGM(props) {
  useEffect(() => {
    props.activeStep();
  }, []);
  
  useEffect(() => {
    props.validationONStep2();
  }, [props.state]);

  return (
    <ContainerAdds>
      <AdicionalAcordeon
        add="1"
        status={props.state.add1}
        changeStatus={props.add1Accordion}
        onChange={props.handleChange}
        valueNombre={props.state.add1__nombre}
        validationNombre={props.validationNombreAdd1}
        errorFX__nombre={props.error.errorFX__nombreAdd1}
        errorNull__nombre={props.error.errorNull__nombreAdd1}
        errorTest__nombre={props.error.errorTest__nombreAdd1}
        valuePaterno={props.state.add1__paterno}
        validationPaterno={props.validationPaternoAdd1}
        errorFX__paterno={props.error.errorFX__paternoAdd1}
        errorNull__paterno={props.error.errorNull__paternoAdd1}
        errorTest__paterno={props.error.errorTest__paternoAdd1}
        valueMaterno={props.state.add1__materno}
        validationMaterno={props.validationMaternoAdd1}
        errorFX__materno={props.error.errorFX__maternoAdd1}
        errorNull__materno={props.error.errorNull__maternoAdd1}
        errorTest__materno={props.error.errorTest__maternoAdd1}
        valueEdad={props.state.add1__edad}
        validationEdad={props.validationEdadAdd1}
        errorFX__edad={props.error.errorFX__edadAdd1}
        errorNull__edad={props.error.errorNull__edadAdd1}
        errorTest__edad={props.error.errorTest__edadAdd1}
        valueGenero={props.state.add1__genero}
        validationGenero={props.validationGeneroAdd1}
        errorFX__genero={props.error.errorFX__generoAdd1}
        errorNull__genero={props.error.errorNull__generoAdd1}
        errorTest__genero={props.error.errorTest__generoAdd1}
        initGenero={props.error.init__generoAdd1}
        changeInitGenero={props.changeInitGeneroAdd1}
      />
      
      <AdicionalAcordeon
        add="2"
        status={props.state.add2}
        changeStatus={props.add2Accordion}
        onChange={props.handleChange}
        valueNombre={props.state.add2__nombre}
        validationNombre={props.validationNombreAdd2}
        errorFX__nombre={props.error.errorFX__nombreAdd2}
        errorNull__nombre={props.error.errorNull__nombreAdd2}
        errorTest__nombre={props.error.errorTest__nombreAdd2}
        valuePaterno={props.state.add2__paterno}
        validationPaterno={props.validationPaternoAdd2}
        errorFX__paterno={props.error.errorFX__paternoAdd2}
        errorNull__paterno={props.error.errorNull__paternoAdd2}
        errorTest__paterno={props.error.errorTest__paternoAdd2}
        valueMaterno={props.state.add2__materno}
        validationMaterno={props.validationMaternoAdd2}
        errorFX__materno={props.error.errorFX__maternoAdd2}
        errorNull__materno={props.error.errorNull__maternoAdd2}
        errorTest__materno={props.error.errorTest__maternoAdd2}
        valueEdad={props.state.add2__edad}
        validationEdad={props.validationEdadAdd2}
        errorFX__edad={props.error.errorFX__edadAdd2}
        errorNull__edad={props.error.errorNull__edadAdd2}
        errorTest__edad={props.error.errorTest__edadAdd2}
        valueGenero={props.state.add2__genero}
        validationGenero={props.validationGeneroAdd2}
        errorFX__genero={props.error.errorFX__generoAdd2}
        errorNull__genero={props.error.errorNull__generoAdd2}
        errorTest__genero={props.error.errorTest__generoAdd2}
        initGenero={props.error.init__generoAdd2}
        changeInitGenero={props.changeInitGeneroAdd2}
      />

      <AdicionalAcordeon
        add="3"
        status={props.state.add3}
        changeStatus={props.add3Accordion}
        onChange={props.handleChange}
        valueNombre={props.state.add3__nombre}
        validationNombre={props.validationNombreAdd3}
        errorFX__nombre={props.error.errorFX__nombreAdd3}
        errorNull__nombre={props.error.errorNull__nombreAdd3}
        errorTest__nombre={props.error.errorTest__nombreAdd3}
        valuePaterno={props.state.add3__paterno}
        validationPaterno={props.validationPaternoAdd3}
        errorFX__paterno={props.error.errorFX__paternoAdd3}
        errorNull__paterno={props.error.errorNull__paternoAdd3}
        errorTest__paterno={props.error.errorTest__paternoAdd3}
        valueMaterno={props.state.add3__materno}
        validationMaterno={props.validationMaternoAdd3}
        errorFX__materno={props.error.errorFX__maternoAdd3}
        errorNull__materno={props.error.errorNull__maternoAdd3}
        errorTest__materno={props.error.errorTest__maternoAdd3}
        valueEdad={props.state.add3__edad}
        validationEdad={props.validationEdadAdd3}
        errorFX__edad={props.error.errorFX__edadAdd3}
        errorNull__edad={props.error.errorNull__edadAdd3}
        errorTest__edad={props.error.errorTest__edadAdd3}
        valueGenero={props.state.add3__genero}
        validationGenero={props.validationGeneroAdd3}
        errorFX__genero={props.error.errorFX__generoAdd3}
        errorNull__genero={props.error.errorNull__generoAdd3}
        errorTest__genero={props.error.errorTest__generoAdd3}
        initGenero={props.error.init__generoAdd3}
        changeInitGenero={props.changeInitGeneroAdd3}
      />
      

      <AdicionalAcordeon
        add="4"
        status={props.state.add4}
        changeStatus={props.add4Accordion}
        onChange={props.handleChange}
        valueNombre={props.state.add4__nombre}
        validationNombre={props.validationNombreAdd4}
        errorFX__nombre={props.error.errorFX__nombreAdd4}
        errorNull__nombre={props.error.errorNull__nombreAdd4}
        errorTest__nombre={props.error.errorTest__nombreAdd4}
        valuePaterno={props.state.add4__paterno}
        validationPaterno={props.validationPaternoAdd4}
        errorFX__paterno={props.error.errorFX__paternoAdd4}
        errorNull__paterno={props.error.errorNull__paternoAdd4}
        errorTest__paterno={props.error.errorTest__paternoAdd4}
        valueMaterno={props.state.add4__materno}
        validationMaterno={props.validationMaternoAdd4}
        errorFX__materno={props.error.errorFX__maternoAdd4}
        errorNull__materno={props.error.errorNull__maternoAdd4}
        errorTest__materno={props.error.errorTest__maternoAdd4}
        valueEdad={props.state.add4__edad}
        validationEdad={props.validationEdadAdd4}
        errorFX__edad={props.error.errorFX__edadAdd4}
        errorNull__edad={props.error.errorNull__edadAdd4}
        errorTest__edad={props.error.errorTest__edadAdd4}
        valueGenero={props.state.add4__genero}
        validationGenero={props.validationGeneroAdd4}
        errorFX__genero={props.error.errorFX__generoAdd4}
        errorNull__genero={props.error.errorNull__generoAdd4}
        errorTest__genero={props.error.errorTest__generoAdd4}
        initGenero={props.error.init__generoAdd4}
        changeInitGenero={props.changeInitGeneroAdd4}
      />
      
      <AdicionalAcordeon
        add="5"
        status={props.state.add5}
        changeStatus={props.add5Accordion}
        onChange={props.handleChange}
        valueNombre={props.state.add5__nombre}
        validationNombre={props.validationNombreAdd5}
        errorFX__nombre={props.error.errorFX__nombreAdd5}
        errorNull__nombre={props.error.errorNull__nombreAdd5}
        errorTest__nombre={props.error.errorTest__nombreAdd5}
        valuePaterno={props.state.add5__paterno}
        validationPaterno={props.validationPaternoAdd5}
        errorFX__paterno={props.error.errorFX__paternoAdd5}
        errorNull__paterno={props.error.errorNull__paternoAdd5}
        errorTest__paterno={props.error.errorTest__paternoAdd5}
        valueMaterno={props.state.add5__materno}
        validationMaterno={props.validationMaternoAdd5}
        errorFX__materno={props.error.errorFX__maternoAdd5}
        errorNull__materno={props.error.errorNull__maternoAdd5}
        errorTest__materno={props.error.errorTest__maternoAdd5}
        valueEdad={props.state.add5__edad}
        validationEdad={props.validationEdadAdd5}
        errorFX__edad={props.error.errorFX__edadAdd5}
        errorNull__edad={props.error.errorNull__edadAdd5}
        errorTest__edad={props.error.errorTest__edadAdd5}
        valueGenero={props.state.add5__genero}
        validationGenero={props.validationGeneroAdd5}
        errorFX__genero={props.error.errorFX__generoAdd5}
        errorNull__genero={props.error.errorNull__generoAdd5}
        errorTest__genero={props.error.errorTest__generoAdd5}
        initGenero={props.error.init__generoAdd5}
        changeInitGenero={props.changeInitGeneroAdd5}
      />
    </ContainerAdds>
  );
}

const ContainerAdds = styled.section`
  width: 82%;
  display: grid;
  grid-template-columns: 100%;
  margin: 0 auto;
  margin-top: 5rem;
  gap: 1rem 0;
`;

export default AdicionalesGM;

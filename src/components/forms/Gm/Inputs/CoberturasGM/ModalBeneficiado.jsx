import { Overlay } from "../../../../../styles/modal.elements";
import styled from "styled-components";
import BeneficiadoAcordeon from "./BeneficiadoAcordeon";
import { Link, animateScroll as scroll } from "react-scroll";


function ModalBeneficiado({
  add,
  addName,
  showModal,
  closeModal,
  acceptBen,
  offButton,
  onChange,

  changeStatus1,
  changeStatus2,
  changeStatus3,
  changeStatus4,
  changeStatus5,

  status1,
  status2,
  status3,
  status4,
  status5,

  valueNombre1,
  valueNombre2,
  valueNombre3,
  valueNombre4,
  valueNombre5,
  validationNombre1,
  validationNombre2,
  validationNombre3,
  validationNombre4,
  validationNombre5,
  errorFX__nombre1,
  errorFX__nombre2,
  errorFX__nombre3,
  errorFX__nombre4,
  errorFX__nombre5,
  errorNull__nombre1,
  errorNull__nombre2,
  errorNull__nombre3,
  errorNull__nombre4,
  errorNull__nombre5,
  errorTest__nombre1,
  errorTest__nombre2,
  errorTest__nombre3,
  errorTest__nombre4,
  errorTest__nombre5,

  valuePaterno1,
  valuePaterno2,
  valuePaterno3,
  valuePaterno4,
  valuePaterno5,
  validationPaterno1,
  validationPaterno2,
  validationPaterno3,
  validationPaterno4,
  validationPaterno5,
  errorFX__paterno1,
  errorFX__paterno2,
  errorFX__paterno3,
  errorFX__paterno4,
  errorFX__paterno5,
  errorNull__paterno1,
  errorNull__paterno2,
  errorNull__paterno3,
  errorNull__paterno4,
  errorNull__paterno5,
  errorTest__paterno1,
  errorTest__paterno2,
  errorTest__paterno3,
  errorTest__paterno4,
  errorTest__paterno5,

  valueMaterno1,
  valueMaterno2,
  valueMaterno3,
  valueMaterno4,
  valueMaterno5,
  validationMaterno1,
  validationMaterno2,
  validationMaterno3,
  validationMaterno4,
  validationMaterno5,
  errorFX__materno1,
  errorFX__materno2,
  errorFX__materno3,
  errorFX__materno4,
  errorFX__materno5,
  errorNull__materno1,
  errorNull__materno2,
  errorNull__materno3,
  errorNull__materno4,
  errorNull__materno5,
  errorTest__materno1,
  errorTest__materno2,
  errorTest__materno3,
  errorTest__materno4,
  errorTest__materno5,

  valuePorcentaje1,
  valuePorcentaje2,
  valuePorcentaje3,
  valuePorcentaje4,
  valuePorcentaje5,
  validationPorcentaje1,
  validationPorcentaje2,
  validationPorcentaje3,
  validationPorcentaje4,
  validationPorcentaje5,
  errorFX__porcentaje1,
  errorFX__porcentaje2,
  errorFX__porcentaje3,
  errorFX__porcentaje4,
  errorFX__porcentaje5,
  errorNull__porcentaje1,
  errorNull__porcentaje2,
  errorNull__porcentaje3,
  errorNull__porcentaje4,
  errorNull__porcentaje5,
  errorTest__porcentaje1,
  errorTest__porcentaje2,
  errorTest__porcentaje3,
  errorTest__porcentaje4,
  errorTest__porcentaje5,

  valueParentesco1,
  valueParentesco2,
  valueParentesco3,
  valueParentesco4,
  valueParentesco5,
  validationParentesco1,
  validationParentesco2,
  validationParentesco3,
  validationParentesco4,
  validationParentesco5,
  errorFX__parentesco1,
  errorFX__parentesco2,
  errorFX__parentesco3,
  errorFX__parentesco4,
  errorFX__parentesco5,
  errorNull__parentesco1,
  errorNull__parentesco2,
  errorNull__parentesco3,
  errorNull__parentesco4,
  errorNull__parentesco5,
  initParentesco1,
  initParentesco2,
  initParentesco3,
  initParentesco4,
  initParentesco5,
  changeInitParentesco1,
  changeInitParentesco2,
  changeInitParentesco3,
  changeInitParentesco4,
  changeInitParentesco5,

  valueEdad1,
  valueEdad2,
  valueEdad3,
  valueEdad4,
  valueEdad5,
  validationEdad1,
  validationEdad2,
  validationEdad3,
  validationEdad4,
  validationEdad5,
  errorFX__edad1,
  errorFX__edad2,
  errorFX__edad3,
  errorFX__edad4,
  errorFX__edad5,
  errorNull__edad1,
  errorNull__edad2,
  errorNull__edad3,
  errorNull__edad4,
  errorNull__edad5,
  initEdad1,
  initEdad2,
  initEdad3,
  initEdad4,
  initEdad5,

  valueTitular1,
  valueTitular2,
  valueTitular3,
  valueTitular4,
  valueTitular5,
  validationTitular1,
  validationTitular2,
  validationTitular3,
  validationTitular4,
  validationTitular5,
  errorFX__titular1,
  errorFX__titular2,
  errorFX__titular3,
  errorFX__titular4,
  errorFX__titular5,
  errorNull__titular1,
  errorNull__titular2,
  errorNull__titular3,
  errorNull__titular4,
  errorNull__titular5,
  errorTest__titular1,
  errorTest__titular2,
  errorTest__titular3,
  errorTest__titular4,
  errorTest__titular5,
}) {
  const top = () => {
    scroll.scrollToTop();
  };

  return (
    <Overlay showModal={showModal}>
      <ContainerModal80 showModal={showModal}>
        <ContainerBeneficiado>
          <HeaderBenneficiado>
            Ingresa los datos de los beneficiarios de <span>{addName}</span>
          </HeaderBenneficiado>
          <BeneficiadoAcordeon
            ben="1"
            add={add}
            onChange={onChange}
            changeStatus={changeStatus1}
            status={status1}
            valueNombre={valueNombre1}
            validationNombre={validationNombre1}
            errorFX__nombre={errorFX__nombre1}
            errorNull__nombre={errorNull__nombre1}
            errorTest__nombre={errorTest__nombre1}
            valuePaterno={valuePaterno1}
            validationPaterno={validationPaterno1}
            errorFX__paterno={errorFX__paterno1}
            errorNull__paterno={errorNull__paterno1}
            errorTest__paterno={errorTest__paterno1}
            valueMaterno={valueMaterno1}
            validationMaterno={validationMaterno1}
            errorFX__materno={errorFX__materno1}
            errorNull__materno={errorNull__materno1}
            errorTest__materno={errorTest__materno1}
            valuePorcentaje={valuePorcentaje1}
            validationPorcentaje={validationPorcentaje1}
            errorFX__porcentaje={errorFX__porcentaje1}
            errorNull__porcentaje={errorNull__porcentaje1}
            errorTest__porcentaje={errorTest__porcentaje1}
            valueParentesco={valueParentesco1}
            validationParentesco={validationParentesco1}
            errorFX__parentesco={errorFX__parentesco1}
            errorNull__parentesco={errorNull__parentesco1}
            initParentesco={initParentesco1}
            changeInitParentesco={changeInitParentesco1}
            idEdadSi={`si1${add}`}
            idEdadNo={`no1${add}`}
            valueEdad={valueEdad1}
            validationEdad={validationEdad1}
            errorFX__edad={errorFX__edad1}
            errorNull__edad={errorNull__edad1}
            initEdad={initEdad1}
            valueTitular={valueTitular1}
            validationTitular={validationTitular1}
            errorFX__titular={errorFX__titular1}
            errorNull__titular={errorNull__titular1}
            errorTest__titular={errorTest__titular1}
          />
          <BeneficiadoAcordeon
            ben="2"
            add={add}
            onChange={onChange}
            changeStatus={changeStatus2}
            status={status2}
            valueNombre={valueNombre2}
            validationNombre={validationNombre2}
            errorFX__nombre={errorFX__nombre2}
            errorNull__nombre={errorNull__nombre2}
            errorTest__nombre={errorTest__nombre2}
            valuePaterno={valuePaterno2}
            validationPaterno={validationPaterno2}
            errorFX__paterno={errorFX__paterno2}
            errorNull__paterno={errorNull__paterno2}
            errorTest__paterno={errorTest__paterno2}
            valueMaterno={valueMaterno2}
            validationMaterno={validationMaterno2}
            errorFX__materno={errorFX__materno2}
            errorNull__materno={errorNull__materno2}
            errorTest__materno={errorTest__materno2}
            valuePorcentaje={valuePorcentaje2}
            validationPorcentaje={validationPorcentaje2}
            errorFX__porcentaje={errorFX__porcentaje2}
            errorNull__porcentaje={errorNull__porcentaje2}
            errorTest__porcentaje={errorTest__porcentaje2}
            valueParentesco={valueParentesco2}
            validationParentesco={validationParentesco2}
            errorFX__parentesco={errorFX__parentesco2}
            errorNull__parentesco={errorNull__parentesco2}
            initParentesco={initParentesco2}
            changeInitParentesco={changeInitParentesco2}
            idEdadSi={`si2${add}`}
            idEdadNo={`no2${add}`}
            valueEdad={valueEdad2}
            validationEdad={validationEdad2}
            errorFX__edad={errorFX__edad2}
            errorNull__edad={errorNull__edad2}
            initEdad={initEdad2}
            valueTitular={valueTitular2}
            validationTitular={validationTitular2}
            errorFX__titular={errorFX__titular2}
            errorNull__titular={errorNull__titular2}
            errorTest__titular={errorTest__titular2}
          />
          <BeneficiadoAcordeon
            ben="3"
            add={add}
            onChange={onChange}
            changeStatus={changeStatus3}
            status={status3}
            valueNombre={valueNombre3}
            validationNombre={validationNombre3}
            errorFX__nombre={errorFX__nombre3}
            errorNull__nombre={errorNull__nombre3}
            errorTest__nombre={errorTest__nombre3}
            valuePaterno={valuePaterno3}
            validationPaterno={validationPaterno3}
            errorFX__paterno={errorFX__paterno3}
            errorNull__paterno={errorNull__paterno3}
            errorTest__paterno={errorTest__paterno3}
            valueMaterno={valueMaterno3}
            validationMaterno={validationMaterno3}
            errorFX__materno={errorFX__materno3}
            errorNull__materno={errorNull__materno3}
            errorTest__materno={errorTest__materno3}
            valuePorcentaje={valuePorcentaje3}
            validationPorcentaje={validationPorcentaje3}
            errorFX__porcentaje={errorFX__porcentaje3}
            errorNull__porcentaje={errorNull__porcentaje3}
            errorTest__porcentaje={errorTest__porcentaje3}
            valueParentesco={valueParentesco3}
            validationParentesco={validationParentesco3}
            errorFX__parentesco={errorFX__parentesco3}
            errorNull__parentesco={errorNull__parentesco3}
            initParentesco={initParentesco3}
            changeInitParentesco={changeInitParentesco3}
            idEdadSi={`si3${add}`}
            idEdadNo={`no3${add}`}
            valueEdad={valueEdad3}
            validationEdad={validationEdad3}
            errorFX__edad={errorFX__edad3}
            errorNull__edad={errorNull__edad3}
            initEdad={initEdad3}
            valueTitular={valueTitular3}
            validationTitular={validationTitular3}
            errorFX__titular={errorFX__titular3}
            errorNull__titular={errorNull__titular3}
            errorTest__titular={errorTest__titular3}
          />
          <BeneficiadoAcordeon
            ben="4"
            add={add}
            onChange={onChange}
            changeStatus={changeStatus4}
            status={status4}
            valueNombre={valueNombre4}
            validationNombre={validationNombre4}
            errorFX__nombre={errorFX__nombre4}
            errorNull__nombre={errorNull__nombre4}
            errorTest__nombre={errorTest__nombre4}
            valuePaterno={valuePaterno4}
            validationPaterno={validationPaterno4}
            errorFX__paterno={errorFX__paterno4}
            errorNull__paterno={errorNull__paterno4}
            errorTest__paterno={errorTest__paterno4}
            valueMaterno={valueMaterno4}
            validationMaterno={validationMaterno4}
            errorFX__materno={errorFX__materno4}
            errorNull__materno={errorNull__materno4}
            errorTest__materno={errorTest__materno4}
            valuePorcentaje={valuePorcentaje4}
            validationPorcentaje={validationPorcentaje4}
            errorFX__porcentaje={errorFX__porcentaje4}
            errorNull__porcentaje={errorNull__porcentaje4}
            errorTest__porcentaje={errorTest__porcentaje4}
            valueParentesco={valueParentesco4}
            validationParentesco={validationParentesco4}
            errorFX__parentesco={errorFX__parentesco4}
            errorNull__parentesco={errorNull__parentesco4}
            initParentesco={initParentesco4}
            changeInitParentesco={changeInitParentesco4}
            idEdadSi={`si4${add}`}
            idEdadNo={`no4${add}`}
            valueEdad={valueEdad4}
            validationEdad={validationEdad4}
            errorFX__edad={errorFX__edad4}
            errorNull__edad={errorNull__edad4}
            initEdad={initEdad4}
            valueTitular={valueTitular4}
            validationTitular={validationTitular4}
            errorFX__titular={errorFX__titular4}
            errorNull__titular={errorNull__titular4}
            errorTest__titular={errorTest__titular4}
          />
          <BeneficiadoAcordeon
            ben="5"
            add={add}
            onChange={onChange}
            changeStatus={changeStatus5}
            status={status5}
            valueNombre={valueNombre5}
            validationNombre={validationNombre5}
            errorFX__nombre={errorFX__nombre5}
            errorNull__nombre={errorNull__nombre5}
            errorTest__nombre={errorTest__nombre5}
            valuePaterno={valuePaterno5}
            validationPaterno={validationPaterno5}
            errorFX__paterno={errorFX__paterno5}
            errorNull__paterno={errorNull__paterno5}
            errorTest__paterno={errorTest__paterno5}
            valueMaterno={valueMaterno5}
            validationMaterno={validationMaterno5}
            errorFX__materno={errorFX__materno5}
            errorNull__materno={errorNull__materno5}
            errorTest__materno={errorTest__materno5}
            valuePorcentaje={valuePorcentaje5}
            validationPorcentaje={validationPorcentaje5}
            errorFX__porcentaje={errorFX__porcentaje5}
            errorNull__porcentaje={errorNull__porcentaje5}
            errorTest__porcentaje={errorTest__porcentaje5}
            valueParentesco={valueParentesco5}
            validationParentesco={validationParentesco5}
            errorFX__parentesco={errorFX__parentesco5}
            errorNull__parentesco={errorNull__parentesco5}
            initParentesco={initParentesco5}
            changeInitParentesco={changeInitParentesco5}
            idEdadSi={`si5${add}`}
            idEdadNo={`no5${add}`}
            valueEdad={valueEdad5}
            validationEdad={validationEdad5}
            errorFX__edad={errorFX__edad5}
            errorNull__edad={errorNull__edad5}
            initEdad={initEdad5}
            valueTitular={valueTitular5}
            validationTitular={validationTitular5}
            errorFX__titular={errorFX__titular5}
            errorNull__titular={errorNull__titular5}
            errorTest__titular={errorTest__titular5}
          />
        </ContainerBeneficiado>
        <ContainerBtn onClick={top}>
          <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
          <ButtonOff onClick={acceptBen} off={offButton}>
            Confirmar
          </ButtonOff>
        </ContainerBtn>
      </ContainerModal80>
    </Overlay>
  );
}

const ContainerModal80 = styled.div`
  width: 82%;
  height: 90%;
  z-index: 260;
  padding: 4rem 5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 10px black;
  background-color: #fff;
  transform: scale(${({ showModal }) => (showModal ? "1" : "0.4")});

  transition-delay: 0.1s;
  transition: all 0.3s ease-out;
`;

const ContainerBeneficiado = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 2rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const HeaderBenneficiado = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-weight: 500;

  span {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0;
`;

const ButtonOff = styled.button`
  height: 6rem;
  min-width: 20rem;
  border-radius: 5rem;
  padding: 0 1rem;
  border: none;
  font-size: 2.3rem;
  text-decoration: none;
  box-shadow: 2px 2px 3px var(--shadow-color);
  border: solid 2.7px var(--primary-color2);
  color: #fff;
  font-weight: 500;
  background-color: ${({ off }) =>
    off ? "var(--primary-color2)" : "var(--off-color2)"};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({ off }) =>
      off ? "var(--primary-color3)" : "var(--off-color2)"};
    ${({ off }) => (off ? "color: var(--primary-color2);" : "")}
    ${({ off }) => (off ? "font-weight: 600;" : "")}
    transition: all ease 0.3s;
  }
`;

const ButtonCancel = styled.button`
  height: 6rem;
  min-width: 20rem;
  border-radius: 5rem;
  padding: 0 1rem;
  border: none;
  font-size: 2.3rem;
  box-shadow: 2px 2px 3px var(--shadow-color);
  text-decoration: none;
  border: 2.7px solid var(--secondary-color2);
  color: #fff;
  font-weight: 500;
  background-color: var(--secondary-color2);
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--primary-color3);
    color: var(--secondary-color2);
    font-weight: 600;
    transition: all ease 0.3s;
  }
`;

export default ModalBeneficiado;

import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import InputText from "../../../InputText";
import InputGenero from "../../../InputGenero";
import ErrorInput from "../../../ErrorInput";
import ErrorInputInit from "../../../ErrorInputInit";

function AdicionalAcordeon({
  add,
  ben,
  status,
  changeStatus,
  onChange,

  valueNombre,
  validationNombre,
  errorFX__nombre,
  errorNull__nombre,
  errorTest__nombre,

  valueMaterno,
  validationMaterno,
  errorFX__materno,
  errorNull__materno,
  errorTest__materno,

  valuePaterno,
  validationPaterno,
  errorFX__paterno,
  errorNull__paterno,
  errorTest__paterno,

  valueEdad,
  validationEdad,
  errorFX__edad,
  errorNull__edad,
  errorTest__edad,

  valueGenero,
  validationGenero,
  errorFX__genero,
  errorNull__genero,
  changeInitGenero,
  initGenero,
}) {
  const prueba = () => {
    console.log("Se ejecuto");
  };
  return (
    <Adicional
      errorText1={errorTest__materno}
      errorAge={errorTest__edad}
      status={status}
    >
      <Adicional__Header status={status} onClick={changeStatus}>
        <p>
          {status ? "Asegurado adicional " : "Agregar asegurado adicional "}
          {ben}
        </p>
        {status ? <AiOutlineUserDelete /> : <AiOutlineUserAdd />}
      </Adicional__Header>
      <Adicional__Form status={status}>
        <div>
          <InputText
            type="text"
            placeholder="Nombre(s) *"
            name={`add${add}__nombre`}
            onChange={onChange}
            value={valueNombre}
            validation={validationNombre}
            errorFX={errorFX__nombre}
          />
          <ErrorInput
            errorFX={errorFX__nombre}
            errorNull={errorNull__nombre}
            errorTest={errorTest__nombre}
            textError="Este campo sólo acepta letras"
            textNull="Ingresa el nombre"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Apellido Paterno *"
            name={`add${add}__paterno`}
            onChange={onChange}
            value={valuePaterno}
            validation={validationPaterno}
            errorFX={errorFX__paterno}
          />
          <ErrorInput
            errorFX={errorFX__paterno}
            errorNull={errorNull__paterno}
            errorTest={errorTest__paterno}
            textError="Este campo sólo acepta letras"
            textNull="Ingresa el apellido paterno"
          />
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Apellido Materno *"
            name={`add${add}__materno`}
            onChange={onChange}
            value={valueMaterno}
            validation={validationMaterno}
            errorFX={errorFX__materno}
          />
          <ErrorInput
            errorFX={errorFX__materno}
            errorNull={errorNull__materno}
            errorTest={errorTest__materno}
            textError="Este campo sólo acepta letras"
            textNull="Ingresa el apellido materno"
          />
        </div> 
        <div>
          <InputText
            type="number"
            placeholder="Edad *"
            name={`add${add}__edad`}
            onChange={onChange}
            value={valueEdad}
            validation={validationEdad}
            errorFX={errorFX__edad}
          />
          <ErrorInput
            errorFX={errorFX__edad}
            errorNull={errorNull__edad}
            errorTest={errorTest__edad}
            textError="Debe ser mayor a 1 y menor a 75 años"
            textNull="Ingresa la edad"
          />
        </div>
        <div>
          <InputGenero
            name={`add${add}__genero`}
            onChange={onChange}
            init={initGenero}
            value={valueGenero}
            validation={validationGenero}
            errorFX={errorFX__genero}
            changeInit={changeInitGenero}
          />
          <ErrorInputInit
            errorFX={errorFX__genero}
            errorNull={errorNull__genero}
            init={initGenero}
            textNull="Ingresa el genero"
          />
        </div>
      </Adicional__Form>
    </Adicional>
  );
}

const Adicional = styled.div`
  overflow: hidden;
  border: solid 2px var(--primary-color3);
  border-radius: 1rem;
  height: ${({ status }) => (status ? "17.4rem" : "7.4rem")};
  background-color: #fcfcfc;
  transition: all ease-in 0.2s;

  ${({ errorAge }) => (errorAge ? "height: 20rem;" : "")}

  &:hover {
    border: solid 2px #1d46c236;
    transition: all ease-in 0.2s;
  }
  @media screen and (max-width: 660px) {
    height: ${({ status }) => (status ? "54rem" : "7.4rem")};
  }
`;
const Adicional__Header = styled.header`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 7.4rem;
  z-index: 10;
  background-color: #fcfcfc;

  svg {
    font-size: 3.8rem;
    color: ${({ status }) => (status ? "var(--text-color)" : "gray")};
    transition: all ease-in 0.2s;
  }

  p {
    font-size: 2.3rem;
    font-weight: 600;
    font-style: italic;
    color: ${({ status }) => (status ? "var(--text-color)" : "gray")};
    transition: all ease-in 0.2s;
  }

  &:hover {
    p {
      color: var(--primary-color);
      transition: all ease-in 0.2s;
    }
    svg {
      color: var(--primary-color);
      transition: all ease-in 0.2s;
    }
  }
`;

const Adicional__Form = styled.form`
  display: grid;
  position: relative;
  grid-template-columns: 20% 20% 20% 15% 20%;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: ${({ status }) => (status ? "0" : "-2")};
  transform: translateY(${({ status }) => (status ? "0" : "-8rem")});
  opacity: ${({ status }) => (status ? "1" : "0")};
  transition: all ease-in 0.2s;

  @media screen and (max-width: 660px) {
    transform: translateY(${({ status }) => (status ? "0" : "-20rem")});
    grid-template-columns: 100%;
  }
`;

export default AdicionalAcordeon;

import styled from "styled-components";
import InputText from "./InputText";
import InputGenero from "./InputGenero";
import ErrorInput from "./ErrorInput";
import ErrorInputInit from "./ErrorInputInit";

function FisicaAutos({
  id,
  onChange,
  validationNombre,
  valueNombre,
  errorFX__nombre,
  errorNull__nombre,
  errorTest__nombre,

  validationPaterno,
  valuePaterno,
  errorFX__paterno,
  errorNull__paterno,
  errorTest__paterno,

  validationMaterno,
  valueMaterno,
  errorFX__materno,
  errorNull__materno,
  errorTest__materno,

  validationEdad,
  valueEdad,
  errorFX__edad,
  errorNull__edad,
  errorTest__edad,

  validationCorreo,
  valueCorreo,
  errorFX__correo,
  errorNull__correo,
  errorTest__correo,

  validationTel,
  valueTel,
  errorFX__tel,
  errorNull__tel,
  errorTest__tel,

  validationRFC,
  valueRFC,
  errorFX__rfc,
  errorNull__rfc,
  errorTest__rfc,

  valueGenero,
  validationGenero,
  errorFX__genero,
  errorNull__genero,
  changeInitGenero,
  initGenero,
}) {
  return (
    <FormTitular id={id}>
      <div>
        <InputText
          type="text"
          placeholder="Nombre(s) *"
          name="nombre"
          value={valueNombre}
          onChange={onChange}
          validation={validationNombre}
          errorFX={errorFX__nombre}
        />
        <ErrorInput
          errorFX={errorFX__nombre}
          errorNull={errorNull__nombre}
          errorTest={errorTest__nombre}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el nombre del titular asegurado"
        />
        <InputText
          type="number"
          placeholder="Edad *"
          name="edad"
          value={valueEdad}
          onChange={onChange}
          validation={validationEdad}
          errorFX={errorFX__edad}
        />
        <ErrorInput
          errorFX={errorFX__edad}
          errorNull={errorNull__edad}
          errorTest={errorTest__edad}
          textError="La edad debe ser mayor a 1 y menor a 75 años"
          textNull="Ingresa la edad"
        />
        <InputText
          type="email"
          placeholder="Correo Electrónico *"
          name="correo"
          value={valueCorreo}
          onChange={onChange}
          validation={validationCorreo}
          errorFX={errorFX__correo}
        />
        <ErrorInput
          errorFX={errorFX__correo}
          errorNull={errorNull__correo}
          errorTest={errorTest__correo}
          textError="El correo electrónico no es valido"
          textNull="Ingresa un correo electrónico"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Paterno *"
          name="paterno"
          value={valuePaterno}
          onChange={onChange}
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
        <InputGenero
          name="genero"
          value={valueGenero}
          placeholder="Género *"
          onChange={onChange}
          validation={validationGenero}
          errorFX={errorFX__genero}
          init={initGenero}
          changeInit={changeInitGenero}
        />
        <ErrorInputInit
          errorFX={errorFX__genero}
          errorNull={errorNull__genero}
          textNull="Ingresa el genero"
          init={initGenero}
        />

        <InputText
          type="number"
          placeholder="Teléfono *"
          name="tel"
          value={valueTel}
          onChange={onChange}
          validation={validationTel}
          errorFX={errorFX__tel}
        />
        <ErrorInput
          errorFX={errorFX__tel}
          errorNull={errorNull__tel}
          errorTest={errorTest__tel}
          textError="El número telefónico es muy corto"
          textNull="Ingresa el número telefónico"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Materno *"
          name="materno"
          value={valueMaterno}
          onChange={onChange}
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

        <InputText
          type="text"
          placeholder="RFC *"
          name="rfc"
          value={valueRFC}
          onChange={onChange}
          validation={validationRFC}
          errorFX={errorFX__rfc}
        />
        <ErrorInput
          errorFX={errorFX__rfc}
          errorNull={errorNull__rfc}
          errorTest={errorTest__rfc}
          textError="El RFC no es valido"
          textNull="Ingresa el RFC"
        />
      </div>
    </FormTitular>
  );
}

const FormTitular = styled.form`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default FisicaAutos;

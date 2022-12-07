import styled from "styled-components";
import InputText from "../../../InputText";
import ErrorInput from "../../../ErrorInput";

function FacturaTitular(props) {
  return (
    <ContainerUsuario>
      <div>
        <InputText
          type="text"
          placeholder="Nombre(s) *"
          name="nombre"
          value={props.state.nombre}
          onChange={props.handleChange}
          validation={props.validationNombre}
          errorFX={props.error.errorFX__nombre}
        />
        <ErrorInput
          errorFX={props.error.errorFX__nombre}
          errorNull={props.error.errorNull__nombre}
          errorTest={props.error.errorTest__nombre}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el nombre del titular asegurado"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Materno *"
          name="materno"
          value={props.state.materno}
          onChange={props.handleChange}
          validation={props.validationMaterno}
          errorFX={props.error.errorFX__materno}
        />
        <ErrorInput
          errorFX={props.error.errorFX__materno}
          errorNull={props.error.errorNull__materno}
          errorTest={props.error.errorTest__materno}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido materno"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Paterno *"
          name="paterno"
          value={props.state.paterno}
          onChange={props.handleChange}
          validation={props.validationPaterno}
          errorFX={props.error.errorFX__paterno}
        />
        <ErrorInput
          errorFX={props.error.errorFX__paterno}
          errorNull={props.error.errorNull__paterno}
          errorTest={props.error.errorTest__paterno}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido paterno"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="RFC *"
          name="rfc"
          value={props.state.rfc}
          onChange={props.handleChange}
          validation={props.validationRFC}
          errorFX={props.error.errorFX__rfc}
        />
        <ErrorInput
          errorFX={props.error.errorFX__rfc}
          errorNull={props.error.errorNull__rfc}
          errorTest={props.error.errorTest__rfc}
          textError="El RFC no es valido"
          textNull="Ingresa el RFC"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Correo Electrónico *"
          name="correo"
          value={props.state.correo}
          onChange={props.handleChange}
          validation={props.validationCorreo}
          errorFX={props.error.errorFX__correo}
        />
        <ErrorInput
          errorFX={props.error.errorFX__correo}
          errorNull={props.error.errorNull__correo}
          errorTest={props.error.errorTest__correo}
          textError="El correo electrónico no es valido"
          textNull="Ingresa un correo electrónico"
        />
      </div>
      <div>
        <InputText
          type="number"
          placeholder="Teléfono *"
          name="tel"
          value={props.state.tel}
          onChange={props.handleChange}
          validation={props.validationTel}
          errorFX={props.error.errorFX__tel}
        />
        <ErrorInput
          errorFX={props.error.errorFX__tel}
          errorNull={props.error.errorNull__tel}
          errorTest={props.error.errorTest__tel}
          textError="El número telefónico no es válido"
          textNull="Ingresa el número telefónico"
        />
      </div>
    </ContainerUsuario>
  );
}

const ContainerUsuario = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 31% 31% 31%;
  grid-template-rows: auto auto;
  justify-content: space-between;
  padding-top: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default FacturaTitular;

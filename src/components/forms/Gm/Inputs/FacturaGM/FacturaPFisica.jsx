import styled from "styled-components";
import InputText from "../../../InputText";
import ErrorInput from "../../../ErrorInput";

function FacturaPFisica(props) {
  return (
    <ContainerFisica>
      <div>
        <InputText
          type="text"
          placeholder="Nombre(s) *"
          name="nombrePF"
          value={props.state.nombrePF}
          onChange={props.handleChange}
          validation={props.validationNombrePF}
          errorFX={props.error.errorFX__nombrePF}
        />
        <ErrorInput
          errorFX={props.error.errorFX__nombrePF}
          errorNull={props.error.errorNull__nombrePF}
          errorTest={props.error.errorTest__nombrePF}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa un nombre"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Paterno *"
          name="paternoPF"
          value={props.state.paternoPF}
          onChange={props.handleChange}
          validation={props.validationPaternoPF}
          errorFX={props.error.errorFX__paternoPF}
        />
        <ErrorInput
          errorFX={props.error.errorFX__paternoPF}
          errorNull={props.error.errorNull__paternoPF}
          errorTest={props.error.errorTest__paternoPF}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido paterno"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Materno *"
          name="maternoPF"
          value={props.state.maternoPF}
          onChange={props.handleChange}
          validation={props.validationMaternoPF}
          errorFX={props.error.errorFX__maternoPF}
        />
        <ErrorInput
          errorFX={props.error.errorFX__maternoPF}
          errorNull={props.error.errorNull__maternoPF}
          errorTest={props.error.errorTest__maternoPF}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido materno"
        />
      </div>
    </ContainerFisica>
  );
}

const ContainerFisica = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 31% 31% 31%;
  grid-template-rows: auto;
  justify-content: space-between;
  padding-top: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default FacturaPFisica;

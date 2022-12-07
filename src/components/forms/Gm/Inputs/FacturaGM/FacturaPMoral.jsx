import styled from "styled-components";
import InputText from "../../../InputText";
import ErrorInput from "../../../ErrorInput";

function FacturaPMoral(props) {
  return (
    <ContainerMoral>
      <InputText
        type="text"
        placeholder="Razón Social *"
        name="razonSocial"
        value={props.state.razonSocial}
        onChange={props.handleChange}
        validation={props.validationRazon}
        errorFX={props.error.errorFX__Razon}
      />
      <ErrorInput
        errorFX={props.error.errorFX__Razon}
        errorNull={props.error.errorNull__Razon}
        textNull="Ingresa la Razón Social"
      />
    </ContainerMoral>
  );
}

const ContainerMoral = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default FacturaPMoral;

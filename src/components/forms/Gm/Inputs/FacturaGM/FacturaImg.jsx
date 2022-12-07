import styled from "styled-components";
import InputTerminos from "../../../InputTerminos";
import ErrorInput from "../../../ErrorInput";
import InputFile from "../../../InputFile";

function FacturaImg(props) {
  return (
    <>
      <ContainerImg>
        <InputFile
          name="ine"
          title="Identificación oficial vigente con fotografía *"
          onChange={props.handleCheckChangeImg}
          value={props.state.ine}
          validation={props.validationIne}
          errorFX={props.error.errorFX__ine}
          changeInit={props.changeInitIne}
          init={props.error.initIne}
        />
        <InputFile
          name="poliza"
          title="Carátula de tu póliza *"
          onChange={props.handleCheckChangeImg}
          value={props.state.poliza}
          validation={props.validationPoliza}
          errorFX={props.error.errorFX__poliza}
          changeInit={props.changeInitPoliza}
          init={props.error.initPoliza}
        />
      </ContainerImg>
      <ContainerTerminos>
        <InputTerminos
          name="terminosGM"
          link="https://doc-contratacion.s3.amazonaws.com/devdeduciblegmm/Contrato+de+Adhesi%C3%B3n.pdf"
          value={props.state.terminosGM}
          onChange={props.handleCheckTerminos}
          validation={props.validationTerminos}
          errorFX={props.error.errorFX__terminosGM}
          init={props.error.initTerminosGM}
          changeInit={props.changeInitTerminosGM}
        />
      </ContainerTerminos>
    </>
  );
}

const ContainerImg = styled.section`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 45.5% 46%;
  justify-content: space-between;
  padding-top: 8em;
  padding-bottom: 8em;
  min-height: 28rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 3rem 0;
  }
`;

const ContainerTerminos = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export default FacturaImg;

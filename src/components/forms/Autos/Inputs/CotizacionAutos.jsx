import { useEffect } from "react";
import {
  ContainerCotizacion,
  CotizacionTitle,
  Row32x68,
  Row40x60,
  FlexCenterBtn,
} from "../../../../styles/forms/CotizacionTabla.elements";
import ButtonDownload from "../../ButtonDownload";

function CotizacionAutos(props) {
  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <>
      <ContainerCotizacion>
        <CotizacionTitle>
          <p>Cobertura</p>
        </CotizacionTitle>
        <Row40x60 responsive={true}>
          <p>Devolución de deducible Autos- Paquete básico</p>
          <p>Suma asegurada: 10,000</p>
        </Row40x60>
        <CotizacionTitle>
          <p>Descripción de tu auto</p>
        </CotizacionTitle>
        <Row40x60>
          <p>Conductor habitual:</p>
          <p>{props.state.conductor}</p>
        </Row40x60>
        <Row40x60>
          <p>Descripción:</p>
          <p>{props.state.descripcion}</p>
        </Row40x60>
        <Row40x60>
          <p>Modelo:</p>
          <p>{props.state.modelo}</p>
        </Row40x60>
        <Row40x60>
          <p>Marca:</p>
          <p>{props.state.marca}</p>
        </Row40x60>
        <Row40x60>
          <p>Num. de serie:</p>
          <p>{props.state.serie}</p>
        </Row40x60>
        <Row40x60>
          <p>Num. de póliza:</p>
          <p>{props.state.poliza}</p>
        </Row40x60>
        <Row40x60>
          <p>Placas:</p>
          <p>{props.state.placas}</p>
        </Row40x60>
        <CotizacionTitle>
          <p>Costo anual</p>
        </CotizacionTitle>
        <Row32x68>
          <p>Costo Neto</p>
          <p>$ </p>
        </Row32x68>
        <Row32x68>
          <p>IVA</p>
          <p>$ </p>
        </Row32x68>
        <Row32x68>
          <h5>Total</h5>
          <h5>$ </h5>
        </Row32x68>
      </ContainerCotizacion>
      <FlexCenterBtn>
        <ButtonDownload />
      </FlexCenterBtn>
    </>
  );
}

export default CotizacionAutos;

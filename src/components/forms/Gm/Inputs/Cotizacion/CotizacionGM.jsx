import { useEffect } from "react";
import {
  ContainerCotizacionGM,
  CotizacionGM__Title,
  FlexCenterBtn,
} from "../../../../../styles/forms/Gm/CotizacionGM.elements";
import RowAsegurados from "./RowAsegurados.jsx";
import RowDetallesDesglose from "./RowDetallesDesglose.jsx";
import ButtonDownload from "../../../ButtonDownload";

function CotizacionGM({ activeStep, state }) {
  useEffect(() => {
    activeStep();
  }, []);

  return (
    <>
      <ContainerCotizacionGM>
        <CotizacionGM__Title>
          <p>Asegurados</p>
        </CotizacionGM__Title>
        <>
          <RowAsegurados
            id="1"
            nombre={state.nombre}
            paterno={state.paterno}
            materno={state.materno}
            edad={state.edad}
          />
          <RowAsegurados
            id="2"
            nombre={state.add1__nombre}
            paterno={state.add1__paterno}
            materno={state.add1__materno}
            edad={state.add1__edad}
          />
          <RowAsegurados
            id="3"
            nombre={state.add2__nombre}
            paterno={state.add2__paterno}
            materno={state.add2__materno}
            edad={state.add2__edad}
          />
          <RowAsegurados
            id="4"
            nombre={state.add3__nombre}
            paterno={state.add3__paterno}
            materno={state.add3__materno}
            edad={state.add3__edad}
          />
          <RowAsegurados
            id="5"
            nombre={state.add4__nombre}
            paterno={state.add4__paterno}
            materno={state.add4__materno}
            edad={state.add4__edad}
          />
          <RowAsegurados
            id="6"
            nombre={state.add5__nombre}
            paterno={state.add5__paterno}
            materno={state.add5__materno}
            edad={state.add5__edad}
          />
        </>
        <CotizacionGM__Title>
          <p>Detalles</p>
        </CotizacionGM__Title>
        <>
          <RowDetallesDesglose
            col1__Text="Deducible"
            col2__Text={state.deducible}
          />
          <RowDetallesDesglose
            col1__Text="Porcentaje de devolución"
            no$={true}
            col2__Text={state.porcentajeDeducible}
          />
          <RowDetallesDesglose
            col1__Text="Porcentaje de devolución"
            total={true}
            numberTotal=""
            col2__Text={state.porcentajeDeducible}
          />
        </>
        <CotizacionGM__Title>
          <p>Desglose</p>
        </CotizacionGM__Title>
        <>
          <RowDetallesDesglose col1__Text="Costo Neto" col2__Text="" />
          <RowDetallesDesglose col1__Text="Derechos de póliza" col2__Text="" />
          <RowDetallesDesglose col1__Text="IVA" col2__Text="" />
          <RowDetallesDesglose
            col1__Text="Porcentaje de devolución"
            total={true}
            numberTotal=""
            col2__Text={state.porcentajeDeducible}
          />
        </>
      </ContainerCotizacionGM>
      <FlexCenterBtn>
        <ButtonDownload />
      </FlexCenterBtn>
    </>
  );
}

export default CotizacionGM;

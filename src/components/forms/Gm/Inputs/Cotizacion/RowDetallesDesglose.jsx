import { Row2ColumCotizadorGM } from "../../../../../styles/forms/Gm/CotizacionGM.elements";

function RowDetallesDesglose({
  col1__Text,
  col2__Text,
  no$,
  total,
  numberTotal,
}) {
  return (
    <Row2ColumCotizadorGM>
      {total === true ? (
        <>
          <h5>Total</h5>
          <h5>$ {numberTotal}</h5>
        </>
      ) : (
        <>
          <p>{col1__Text}</p>
          <p>
            {no$ === true ? "" : "$ "}
            {col2__Text}
            {no$ === true ? " %" : ""}
          </p>
        </>
      )}
    </Row2ColumCotizadorGM>
  );
}

export default RowDetallesDesglose;

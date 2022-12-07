import { RowAseguradosStyle } from "../../../../../styles/forms/Gm/CotizacionGM.elements";

function RowAsegurados({ id, nombre, paterno, materno, edad }) {
  return (
    <>
      {nombre !== "" ? (
        <RowAseguradosStyle>
          <p>{id}</p>
          <p>
            {nombre} {paterno} {materno}
          </p>
          <p>
            {edad} {edad === 1 ? "año" : "años"}
          </p>
        </RowAseguradosStyle>
      ) : (
        ""
      )}
    </>
  );
}

export default RowAsegurados;

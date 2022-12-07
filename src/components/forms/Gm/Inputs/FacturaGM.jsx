import { useEffect } from "react";
import "../../../../styles/forms/Gm/Step7GM.css";
import FacturaTitular from "./FacturaGM/FacturaTitular";
import FacturaPFisica from "./FacturaGM/FacturaPFisica";
import FacturaPMoral from "./FacturaGM/FacturaPMoral";
import FacturaContato from "./FacturaGM/FacturaContato";
import InputRadio from "../../InputRadio";
import FacturaDireccion from "./FacturaGM/FacturaDireccion";
import FacturaImg from "./FacturaGM/FacturaImg";
import FacturaPagoGM from "./FacturaGM/FacturaPagoGM";

function FacturaGM(props) {
  useEffect(() => {
    props.validationONStep7();
  }, [props.state]);

  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <form>
      <div className="contratante">
        <InputRadio
          id="siFacturaGM"
          label="si"
          value="si"
          name="factura_si_no"
          checked={props.state.factura_si_no}
          onChange={props.handleChange}
        />
        <InputRadio
          id="noFacturaGM"
          label="no"
          value="no"
          name="factura_si_no"
          checked={props.state.factura_si_no}
          onChange={props.handleChange}
        />
      </div>
      {props.state.factura_si_no === "si" ? (
        <FacturaTitular
          state={props.state}
          error={props.error}
          handleChange={props.handleChange}
          validationNombre={props.validationNombre}
          validationPaterno={props.validationPaterno}
          validationMaterno={props.validationMaterno}
          validationCorreo={props.validationCorreo}
          validationRFC={props.validationRFC}
          validationTel={props.validationTel}
        />
      ) : (
        <>
          <div className="moralFisica">
            <InputRadio
              id="fisicaGM"
              label="Persona física"
              value="fisica"
              name="fisica_o_moral"
              checked={props.state.fisica_o_moral}
              onChange={props.handleChange}
            />
            <InputRadio
              id="moralGM"
              label="Persona moral"
              value="moral"
              name="fisica_o_moral"
              checked={props.state.fisica_o_moral}
              onChange={props.handleChange}
            />
          </div>
          {props.state.fisica_o_moral === "fisica" ? (
            <FacturaPFisica
              state={props.state}
              error={props.error}
              handleChange={props.handleChange}
              validationNombrePF={props.validationNombrePF}
              validationPaternoPF={props.validationPaternoPF}
              validationMaternoPF={props.validationMaternoPF}
            />
          ) : (
            <FacturaPMoral
              state={props.state}
              error={props.error}
              handleChange={props.handleChange}
              validationRazon={props.validationRazon}
            />
          )}
          <FacturaContato
            state={props.state}
            error={props.error}
            handleChange={props.handleChange}
            validationCorreoFactura={props.validationCorreoFactura}
            validationRFCFactura={props.validationRFCFactura}
            validationTelFactura={props.validationTelFactura}
          />
        </>
      )}
      <FacturaDireccion
        state={props.state}
        error={props.error}
        handleChange={props.handleChange}
        validationCalle={props.validationCalle}
        validationNumExt={props.validationNumExt}
        validationNumInt={props.validationNumInt}
        validationCP={props.validationCP}
        validationAlcaldia={props.validationAlcaldia}
        validationColonia={props.validationColonia}
        validationEstado={props.validationEstado}
        validationNumPoliza={props.validationNumPoliza}
        validationCompania={props.validationCompania}
      />
      <FacturaPagoGM
        state={props.state}
        error={props.error}
        handleChange={props.handleChange}
        validationFormaDePago={props.validationFormaDePago}
        validationMetodoDePago={props.validationMetodoDePago}
        changeInitMetodoDePago={props.changeInitMetodoDePago}
        changeInitFormaDePago={props.changeInitFormaDePago}
      />
      <FacturaImg
        state={props.state}
        error={props.error}
        handleCheckTerminos={props.handleCheckTerminos}
        handleCheckChangeImg={props.handleCheckChangeImg}
        validationIne={props.validationIne}
        validationPoliza={props.validationPoliza}
        changeInitIne={props.changeInitIne}
        changeInitPoliza={props.changeInitPoliza}
        validationTerminos={props.validationTerminos}
        changeInitTerminosGM={props.changeInitTerminosGM}
      />
    </form>
  );
}

export default FacturaGM;

import {
  ContainerPago,
  ContainerPagoCol1,
  ContainerPagoCol2,
  LinkInfo,
} from "../../styles/forms/Gm/FacturaPago.elements";
import InputSelect from "./InputSelect";
import InputText__tooltip from "./InputText_tooltip";
import ErrorInputInit from "./ErrorInputInit";

function AgentePagoInputs({
  onChange,
  valuePago,
  validationPago,
  errorFX__pago,
  errorNull__pago,
  initPago,
  changeInitPago,
  valueAgente,
}) {

  const optionsFormaDePago = [
    {
      id: "aqui",
      value: "aqui",
      text: "Pagar aquí",
    },
    {
      id: "link",
      value: "link",
      text: "Generar link para pago posterior",
    },
  ];

  return (
    <>
      <ContainerPago>
        <ContainerPagoCol1>
          <InputSelect
            name="formaDePago"
            value={valuePago}
            placeholder="Forma de Pago *"
            options={optionsFormaDePago}
            onChange={onChange}
            validation={validationPago}
            errorFX={errorFX__pago}
            init={initPago}
            changeInit={changeInitPago}
          />
          {valuePago === "link" ? (
            <LinkInfo>*Válido por 24 horas / se envía a tu correo</LinkInfo>
          ) : (
            <ErrorInputInit
              errorFX={errorFX__pago}
              errorNull={errorNull__pago}
              textNull="Selecciona una forma de pago"
              init={initPago}
            />
          )}
        </ContainerPagoCol1>
        <ContainerPagoCol2>
          <InputText__tooltip
            name="codigoAgente"
            value={valueAgente}
            placeholder="Código de Agente"
            onChange={onChange}
            tooltip="Campo exclusivo para agentes afiliados"
          />
        </ContainerPagoCol2>
      </ContainerPago>
    </>
  );
}

export default AgentePagoInputs;

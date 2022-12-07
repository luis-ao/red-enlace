import { useEffect } from "react";
import InputText from "../../../InputText";
import InputSelect from "../../../InputSelect";
import InputRadio from "../../../InputRadio";
import ErrorInput from "../../../ErrorInput";
import ErrorInputInit from "../../../ErrorInputInit";
import {
  Beneficiado,
  Beneficiado__Header,
  BeneficiadoForm,
  BeneficiadoForm__row1,
  PorcentajeBen,
  BeneficiadoForm__row2,
  EdadBeneficiado,
  EdadBeneficiado__input,
} from "../../../../../styles/forms/Gm/BeneficiadosAcordeon.elements";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

function BeneficiadoAcordeon({
  add,
  ben,
  status,
  changeStatus,
  onChange,

  valueNombre,
  validationNombre,
  errorFX__nombre,
  errorNull__nombre,
  errorTest__nombre,

  valueMaterno,
  validationMaterno,
  errorFX__materno,
  errorNull__materno,
  errorTest__materno,

  valuePaterno,
  validationPaterno,
  errorFX__paterno,
  errorNull__paterno,
  errorTest__paterno,

  valuePorcentaje,
  validationPorcentaje,
  errorFX__porcentaje,
  errorNull__porcentaje,
  errorTest__porcentaje,

  valueParentesco,
  validationParentesco,
  errorFX__parentesco,
  errorNull__parentesco,
  initParentesco,
  changeInitParentesco,

  valueEdad,
  validationEdad,
  errorFX__edad,
  errorNull__edad,
  initEdad,
  idEdadSi,
  idEdadNo,

  valueTitular,
  validationTitular,
  errorFX__titular,
  errorNull__titular,
  errorTest__titular,
}) {
  const optionsParentesco = [
    {
      id: "padreGM",
      value: "padre",
      text: "Padre",
    },
    {
      id: "madreGM",
      value: "madre",
      text: "Madre",
    },
    {
      id: "hijoGM",
      value: "hijo(a)",
      text: "Hijo(a)",
    },
    {
      id: "hermanoGM",
      value: "hermano(a)",
      text: "Hermano(a)",
    },
    {
      id: "conyugeGM",
      value: "conyuge",
      text: "Conyuge",
    },
    {
      id: "otroGM",
      value: "otro",
      text: "Otro",
    },
  ];

  useEffect(() => {
    validationEdad();
  }, [valueEdad]);

  return (
    <Beneficiado status={status} errorPorcentaje={errorTest__porcentaje}>
      <Beneficiado__Header onClick={changeStatus} status={status}>
        <p>
          {status ? "Beneficiario " : "Agregar beneficiario "}
          {ben}
        </p>
        {status ? <AiOutlineUserDelete /> : <AiOutlineUserAdd />}
      </Beneficiado__Header>
      <BeneficiadoForm status={status}>
        <BeneficiadoForm__row1 errorPorcentaje={errorTest__porcentaje}>
          <div>
            <InputText
              type="text"
              placeholder="Nombre(s) *"
              name={`add${add}__ben${ben}_nombre`}
              onChange={onChange}
              value={valueNombre}
              validation={validationNombre}
              errorFX={errorFX__nombre}
            />
            <ErrorInput
              errorFX={errorFX__nombre}
              errorNull={errorNull__nombre}
              errorTest={errorTest__nombre}
              textError="Este campo sólo acepta letras"
              textNull="Ingresa el nombre"
            />
          </div>
          <div>
            <InputText
              type="text"
              placeholder="Apellido Paterno *"
              name={`add${add}__ben${ben}_paterno`}
              onChange={onChange}
              value={valuePaterno}
              validation={validationPaterno}
              errorFX={errorFX__paterno}
            />
            <ErrorInput
              errorFX={errorFX__paterno}
              errorNull={errorNull__paterno}
              errorTest={errorTest__paterno}
              textError="Este campo sólo acepta letras"
              textNull="Ingresa el apellido paterno"
            />
          </div>
          <div>
            <InputText
              type="text"
              placeholder="Apellido Materno *"
              name={`add${add}__ben${ben}_materno`}
              onChange={onChange}
              value={valueMaterno}
              validation={validationMaterno}
              errorFX={errorFX__materno}
            />
            <ErrorInput
              errorFX={errorFX__materno}
              errorNull={errorNull__materno}
              errorTest={errorTest__materno}
              textError="Este campo sólo acepta letras"
              textNull="Ingresa el apellido materno"
            />
          </div>
          <div>
            <PorcentajeBen>
              <InputText
                type="number"
                placeholder="Porcentaje *"
                name={`add${add}__ben${ben}_porcentaje`}
                onChange={onChange}
                value={valuePorcentaje}
                validation={validationPorcentaje}
                errorFX={errorFX__porcentaje}
              />
              <h4>%</h4>
            </PorcentajeBen>

            <ErrorInput
              errorFX={errorFX__porcentaje}
              errorNull={errorNull__porcentaje}
              errorTest={errorTest__porcentaje}
              textNull="Ingresa el porcentaje"
              textError="El valor debe ser mayor a 1 y menor a 100"
            />
          </div>
        </BeneficiadoForm__row1>
        <BeneficiadoForm__row2>
          <div>
            <InputSelect
              placeholder="Parentesco *"
              options={optionsParentesco}
              name={`add${add}__ben${ben}_parentesco`}
              onChange={onChange}
              init={initParentesco}
              value={valueParentesco}
              validation={validationParentesco}
              errorFX={errorFX__parentesco}
              changeInit={changeInitParentesco}
            />
            <ErrorInputInit
              errorFX={errorFX__parentesco}
              errorNull={errorNull__parentesco}
              init={initParentesco}
              textNull="Selecciona el parentesco"
            />
          </div>
          <div>
            <EdadBeneficiado init={initEdad} errorFX={errorFX__edad}>
              <h3>¿Es mayor de Edad? *</h3>
              <EdadBeneficiado__input>
                <InputRadio
                  label="Si"
                  id={idEdadSi}
                  name={`add${add}__ben${ben}_edad`}
                  value="si"
                  checked={valueEdad}
                  onChange={onChange}
                />
                <InputRadio
                  label="No"
                  id={idEdadNo}
                  name={`add${add}__ben${ben}_edad`}
                  value="no"
                  checked={valueEdad}
                  onChange={onChange}
                />
              </EdadBeneficiado__input>
            </EdadBeneficiado>
            <ErrorInputInit
              errorFX={errorFX__edad}
              errorNull={errorNull__edad}
              init={initEdad}
              textNull="Selecciona si o no"
            />
          </div>
          {valueEdad === "no" && (
            <div>
              <InputText
                type="text"
                placeholder="Nombre completo del titular del menor *"
                name={`add${add}__ben${ben}_titular`}
                onChange={onChange}
                value={valueTitular}
                validation={validationTitular}
                errorFX={errorFX__titular}
              />
              <ErrorInput
                errorFX={errorFX__titular}
                errorNull={errorNull__titular}
                errorTest={errorTest__titular}
                textError="Este campo sólo acepta letras"
                textNull="Ingresa el nombre del titular"
              />
            </div>
          )}
        </BeneficiadoForm__row2>
      </BeneficiadoForm>
    </Beneficiado>
  );
}

export default BeneficiadoAcordeon;

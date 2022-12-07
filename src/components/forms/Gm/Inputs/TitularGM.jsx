import { useEffect } from "react";
import InputText from "../../InputText";
import InputSelect from "../../InputSelect";
import ErrorInput from "../../ErrorInput";
import ErrorInputInit from "../../ErrorInputInit";

function TitularGM(props) {
  useEffect(() => {
    props.validationONStep1();
  }, [props.state]);

  useEffect(() => {
    props.activeStep();
  }, []);

  const optionsGenero = [
    {
      id: "masculinoTitularGM",
      value: "masculino",
      text: "Masculino",
    },
    {
      id: "femeninoTitularGM",
      value: "femenino",
      text: "Femenino",
    },
  ];

  return (
    <form id="formStep1GM" className="gridStep1GM">
      <div>
        <InputText
          type="text"
          placeholder="Nombre(s) *"
          name="nombre"
          value={props.state.nombre}
          onChange={props.handleChange}
          validation={props.validationNombre}
          errorFX={props.error.errorFX__nombre}
        />
        <ErrorInput
          errorFX={props.error.errorFX__nombre}
          errorNull={props.error.errorNull__nombre}
          errorTest={props.error.errorTest__nombre}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el nombre del titular asegurado"
        />
        <InputText
          type="number"
          placeholder="Edad *"
          name="edad"
          value={props.state.edad}
          onChange={props.handleChange}
          validation={props.validationEdad}
          errorFX={props.error.errorFX__edad}
        />
        <ErrorInput
          errorFX={props.error.errorFX__edad}
          errorNull={props.error.errorNull__edad}
          errorTest={props.error.errorTest__edad}
          textError="La edad debe ser mayor a 1 y menor a 75 años"
          textNull="Ingresa la edad"
        />
        <InputText
          type="email"
          placeholder="Correo Electrónico *"
          name="correo"
          value={props.state.correo}
          onChange={props.handleChange}
          validation={props.validationCorreo}
          errorFX={props.error.errorFX__correo}
        />
        <ErrorInput
          errorFX={props.error.errorFX__correo}
          errorNull={props.error.errorNull__correo}
          errorTest={props.error.errorTest__correo}
          textError="El correo electrónico no es valido"
          textNull="Ingresa un correo electrónico"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Paterno *"
          name="paterno"
          value={props.state.paterno}
          onChange={props.handleChange}
          validation={props.validationPaterno}
          errorFX={props.error.errorFX__paterno}
        />
        <ErrorInput
          errorFX={props.error.errorFX__paterno}
          errorNull={props.error.errorNull__paterno}
          errorTest={props.error.errorTest__paterno}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido paterno"
        />
        <InputSelect
          name="genero"
          value={props.state.genero}
          placeholder="Género *"
          options={optionsGenero}
          onChange={props.handleChange}
          validation={props.validationGenero}
          errorFX={props.error.errorFX__genero}
          init={props.error.initGenero}
          changeInit={props.changeInitGenero}
        />
        <ErrorInputInit
          errorFX={props.error.errorFX__genero}
          errorFXInit={props.error.errorInit__genero}
          errorNull={props.error.errorNull__genero}
          textNull="Ingresa el genero"
          init={props.error.initGenero}
        />

        <InputText
          type="number"
          placeholder="Teléfono *"
          name="tel"
          value={props.state.tel}
          onChange={props.handleChange}
          validation={props.validationTel}
          errorFX={props.error.errorFX__tel}
        />
        <ErrorInput
          errorFX={props.error.errorFX__tel}
          errorNull={props.error.errorNull__tel}
          errorTest={props.error.errorTest__tel}
          textError="El número telefónico es muy corto"
          textNull="Ingresa el número telefónico"
        />
      </div>
      <div>
        <InputText
          type="text"
          placeholder="Apellido Materno *"
          name="materno"
          value={props.state.materno}
          onChange={props.handleChange}
          validation={props.validationMaterno}
          errorFX={props.error.errorFX__materno}
        />
        <ErrorInput
          errorFX={props.error.errorFX__materno}
          errorNull={props.error.errorNull__materno}
          errorTest={props.error.errorTest__materno}
          textError="Este campo sólo acepta letras"
          textNull="Ingresa el apellido materno"
        />

        <InputText
          type="text"
          placeholder="RFC *"
          name="rfc"
          value={props.state.rfc}
          onChange={props.handleChange}
          validation={props.validationRFC}
          errorFX={props.error.errorFX__rfc}
        />
        <ErrorInput
          errorFX={props.error.errorFX__rfc}
          errorNull={props.error.errorNull__rfc}
          errorTest={props.error.errorTest__rfc}
          textError="El RFC no es valido"
          textNull="Ingresa el RFC"
        />
      </div>
    </form>
  );
}

export default TitularGM;

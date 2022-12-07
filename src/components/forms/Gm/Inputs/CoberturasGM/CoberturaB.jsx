import InputCheckbox_tooltip from "../../../InputCheckbox_tooltip";

function CoberturaByC({
  onChange,
  state,
  cobertura,
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
}) {
  return (
    <div className="coberturaGM">
      <InputCheckbox_tooltip
        label={state.nombre}
        paterno={state.paterno}
        materno={state.materno}
        name="titular__cobB"
        onChange={onChange}
        value={value0}
      />
      {state.add1__nombre !== "" ? (
        <InputCheckbox_tooltip
          label={state.add1__nombre}
          paterno={state.add1__paterno}
          materno={state.add1__materno}
          name="add1__cobB"
          onChange={onChange}
          value={value1}
        />
      ) : (
        ""
      )}
      {state.add2__nombre !== "" ? (
        <InputCheckbox_tooltip
          label={state.add2__nombre}
          paterno={state.add2__paterno}
          materno={state.add2__materno}
          name="add2__cobB"
          onChange={onChange}
          value={value2}
        />
      ) : (
        ""
      )}
      {state.add3__nombre !== "" ? (
        <InputCheckbox_tooltip
          label={state.add3__nombre}
          paterno={state.add3__paterno}
          materno={state.add3__materno}
          name="add3__cobB"
          onChange={onChange}
          value={value3}
        />
      ) : (
        ""
      )}
      {state.add4__nombre !== "" ? (
        <InputCheckbox_tooltip
          label={state.add4__nombre}
          paterno={state.add4__paterno}
          materno={state.add4__materno}
          name="add4__cobB"
          onChange={onChange}
          value={value4}
        />
      ) : (
        ""
      )}
      {state.add5__nombre !== "" ? (
        <InputCheckbox_tooltip
          label={state.add5__nombre}
          paterno={state.add5__paterno}
          materno={state.add5__materno}
          name="add5__cobB"
          onChange={onChange}
          value={value5}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CoberturaByC;

import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function InputCheckbox_tooltip({
  label,
  name,
  onChange,
  value,
  validation,
  materno,
  paterno,
}) {
  const nameTooltip = label + " " + materno + " " + paterno;

  return (
    <CkeckboxInput>
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
          validation={validation}
          value={value}
          checked={value === true}
        />
      <Tippy content={nameTooltip}>
        <label htmlFor={name}>{label}</label>
      </Tippy>
    </CkeckboxInput>
  );
}

const CkeckboxInput = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

  input {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.8rem;
  }

  label {
    font-size: 2rem;
  }
`;

export default InputCheckbox_tooltip;

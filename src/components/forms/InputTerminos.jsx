import { useEffect } from "react";
import styled from "styled-components";

function InputCheckbox({
  name,
  onChange,
  value,
  link,
  validation,
  errorFX,
  changeInit,
  init,
}) {
  useEffect(() => {
    validation();
  }, [value]);

  return (
    <>
      <CkeckboxTerminos onClick={changeInit} errorFX={errorFX} init={init}>
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
          value={value}
          checked={value === true}
        />
        <label htmlFor={name}>
          He leído y acepto los{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            términos y condiciones
          </a>
        </label>
      </CkeckboxTerminos>
    </>
  );
}

const CkeckboxTerminos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 50rem;
  margin-top: 3rem;
  overflow: hidden;
  border-bottom: solid 2px
    ${({ errorFX }) => (errorFX ? "var(--errorInput-color)" : "#fff")};
  color: ${({ errorFX }) =>
    errorFX ? "var(--errorInput-color)" : "var(--text-color)"};

  ${({ init }) => (init ? "color: var(--text-color)" : "")};
  ${({ init }) => (init ? "border-bottom: solid 2px #fff" : "")};

  transition: all ease-in 00.2s;

  input {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.8rem;
  }

  label {
    font-size: 2rem;
  }
`;

export default InputCheckbox;

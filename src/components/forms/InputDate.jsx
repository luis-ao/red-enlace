import { useEffect } from "react";
import styled from "styled-components";

function InputDate({
  label,
  name,
  onChange,
  validation,
  value,
  errorFX,
  init,
  changeInit,
}) {
  useEffect(() => {
    validation();
  }, [value]);

  return (
    <DateInput init={init} onClick={changeInit} errorFX={errorFX}>
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </DateInput>
  );
}

const DateInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0 1rem 0 3rem;
  border-radius: 0.8rem;
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--off-color)"};

  ${({ init }) => (init ? "border: 2px solid var(--primary-color3);" : "")};
  transition: all ease 0.3s;

  label {
    color: ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--text-color)"};

    ${({ init }) => (init ? "color: var(--text-color);" : "")};

    font-size: 2.2rem;
  }

  input {
    font-size: 2.2rem;
    font-family: "Poppins", sans-serif;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
    outline: none;
    background-color: var(--primary-color3);
  }
`;
export default InputDate;

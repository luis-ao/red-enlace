import React from "react";
import styled from "styled-components";

export default function InputText({
  onChange,
  type,
  name,
  placeholder,
  validation,
  value,
  errorFX,
  autoComplete,
}) {
  return (
    <Input
      autoComplete={autoComplete}
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={validation}
      onBlur={validation}
      errorFX={errorFX}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  font-size: 2.22rem;
  font-size: 2.22rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  outline: none;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};
  transition: all ease 0.3s;
`;

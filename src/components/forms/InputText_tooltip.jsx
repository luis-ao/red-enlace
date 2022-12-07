import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function InputText_tooltip({
  onChange,
  type,
  name,
  placeholder,
  validation,
  value,
  errorFX,
  autoComplete,
  tooltip,
}) {
  return (
    <ContainerTooltip>
      <Tippy content={tooltip}>
        <Tooltip>?</Tooltip>
      </Tippy>
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
    </ContainerTooltip>
  );
}

const ContainerTooltip = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  height: 5.6rem;
  width: 100%;
`;

const Tooltip = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  font-weight: 600;
  background-color: var(--primary-color2);
  color: #fff;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  user-select: none;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 2.22rem;
  font-size: 2.22rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  outline: none;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};
  transition: all ease 0.3s;
`;

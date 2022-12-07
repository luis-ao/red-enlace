import { useState, useEffect } from "react";
import styled from "styled-components";

export default function InputSelect({
  onChange,
  name,
  value,
  options,
  placeholder,
  validation,
  errorFX,
  changeInit,
  init,
}) {
  const [defaultOption, setDefaultOption] = useState(true);

  useEffect(() => {
    if (value === "") {
      setDefaultOption(true);
    } else {
      setDefaultOption(false);
    }
  }, [value]);

  useEffect(() => {
    validation();
  }, [defaultOption]);

  return (
    <SelectContainer onClick={changeInit} init={init} errorFX={errorFX}>
      <Select
        defaultColor={defaultOption}
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={validation}
        onBlur={validation}
      >
        <OptionDefault value="">{placeholder}</OptionDefault>
        {options.map((op) => (
          <Option value={op.value} key={op.id}>
            {op.text}
          </Option>
        ))}
      </Select>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 100%;
  height: 5.6rem;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};
  ${({ init }) => (init ? "border: 2px solid var(--primary-color3);" : "")};
  transition: all ease 0.3s;


  /* */
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: 0px;
  font-size: 2.22rem;
  color: ${({ defaultColor }) => (defaultColor ? "gray" : "var(--text-color)")};
`;

const OptionDefault = styled.option`
  color: gray;
`;

const Option = styled.option`
  color: var(--text-color);
`;

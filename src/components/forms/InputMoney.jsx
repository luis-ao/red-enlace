import styled from "styled-components";
import Cleave from "cleave.js/react";

function InputMoney({
  name,
  onChange,
  value,
  validation,
  errorFX,
}) {
  return (
    <InputMoney2 errorFX={errorFX}>
      <span>$</span>
      <Cleave
        options={{
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
        }}
        placeholder="0.00"
        name={name}
        onChange={onChange}
        value={value}
        onKeyUp={validation}
        onBlur={validation}
      />
    </InputMoney2>
  );
}

const InputMoney2 = styled.div`
  width: 16rem;
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  padding-left: 1.6rem;
  margin-bottom: 0.8rem;
  background-color: var(--primary-color3);

  border: 2px solid
    ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};
  transition: all ease 0.3s;

  span {
    font-size: 2.5rem;
    margin-right: 0.6rem;
    font-weight: 400;
    color: ${({ errorFX }) =>
      errorFX ? "var(--errorInput-color)" : "var(--text-color)"};
  }

  input {
    width: 12rem;
    height: 100%;
    padding-right: 1rem;
    font-size: 2.3rem;
    border-radius: 0.6rem;
    outline: none;
    background-color: transparent;
    border: none;
  }
`;

export default InputMoney;

import styled from "styled-components";

function InputRadio({ id, label, name, onChange, value, checked, validation }) {
  return (
    <RadioContainer>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked === value}
        onKeyUp={validation}
        onBlur={validation}
      />
      <label htmlFor={id}>{label}</label>
    </RadioContainer>
  );
}

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input{
    width: 2rem;
    margin-right: 0.6rem;
  }

  label{
    font-size: 2rem;
  }
`;

export default InputRadio;

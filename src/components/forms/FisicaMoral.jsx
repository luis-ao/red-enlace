import InputRadio from "./InputRadio";
import styled from "styled-components";

function FisicaMoral({ onChange, checked, name, idFisica, idMoral }) {
  return (
    <MoralFisica>
      <InputRadio
        id={idFisica}
        label="Persona física"
        value="fisica"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <InputRadio
        id={idMoral}
        label="Persona moral"
        value="moral"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </MoralFisica>
  );
}

const MoralFisica = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  margin: 0 auto;
  font-size: 1rem;
  padding-top: 4em;
  padding-bottom: 2em;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export default FisicaMoral;

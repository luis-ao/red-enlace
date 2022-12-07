import styled from "styled-components";

function Button({ text }) {
  return <BtnDown>Descargar</BtnDown>;
}

const BtnDown = styled.button`
  height: 6rem;
  min-width: 20rem;
  border-radius: 5rem;
  padding: 0 1rem;
  border: none;
  font-size: 2.3rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-color2);
  box-shadow: 2px 2px 3px var(--shadow-color);
  border: 2px solid var(--primary-color2);
  font-weight: 600;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--secondary-color2);
    border: 2px solid var(--secondary-color2);
    color: #fff;
    font-weight: 500;
    transition: all ease 0.3s;
  }
`;

export default Button;

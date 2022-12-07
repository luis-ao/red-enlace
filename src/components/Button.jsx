import styled from "styled-components";

function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  height: 6rem;
  min-width: 20rem;
  border-radius: 5rem;
  padding: 0 1rem;
  border: none;
  font-size: 2.3rem;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  box-shadow: 2px 2px 3px var(--shadow-color);
  background-color: var(--primary-color2); 
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--secondary-color2);
    transition: all ease 0.3s;
  }
`;

export default Button;

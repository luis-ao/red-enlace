import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

function NumberStepIndicator({ number, line, text, active, complete }) {
  return (
    <StepIndicatorContainer>
      <NumberLineContainer line={line}>
        <NumberStep complete={complete} active={active}>
          <p>{number}</p>
          <BiCheck />
        </NumberStep>
        <LineStep complete={complete} line={line}></LineStep>
      </NumberLineContainer>

      <TextStep active={active}>{text}</TextStep>
    </StepIndicatorContainer>
  );
}

const StepIndicatorContainer = styled.div`
  width: 100%;
`;

const NumberLineContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 6rem;
  width: 100%;
  align-items: center;
  ${({ line }) => (line ? "justify-content: space-around;" : "")}
  user-select: none;
`;

const NumberStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  font-weight: 600;

  color: ${({ active }) =>
    active ? "var(--secondary-color2);" : "var(--off-color)"};
  border: 2px solid
    ${({ active }) =>
      active ? "var(--secondary-color2);" : "var(--off-color)"};
  background-color: ${({ active }) =>
    active ? "var(--secondary-color4);" : ""};

  ${({ complete }) =>
    complete
      ? "background-color: var(--secondary-color2); color: #fff; border: 2px solid var(--secondary-color2);"
      : ""}
  transition: all ease-in-out 0.2s;

  p {
    font-size: 2rem;

    transform: scale(${({ complete }) => (complete ? "0" : "1")});
    transition: all ease-in-out 0.3s;
  }

  svg {
    font-size: 4rem;
    position: absolute;

    transform: scale(${({ complete }) => (complete ? "1" : "0")});
    transition: all ease-in-out 0.3s;
  }
`;

const LineStep = styled.div`
  ${({ line }) => (line ? "display: block;" : "display: none;")}
  height: 0.5rem;
  width: 72%;
  background-color: #8080803a;

  @media screen and (max-width: 600px) {
    width: 10%;

  }
`;

const TextStep = styled.div`
  font-size: 1.5rem;
  color: ${({ active }) =>
    active ? "var(--secondary-color2);" : "var(--off-color)"};
  transition: all ease-in-out 0.3s;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default NumberStepIndicator;

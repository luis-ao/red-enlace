import { MdArrowBackIosNew } from "react-icons/md";
import "../../styles/forms/NextPrevStep.css";
import styled from "styled-components";


function NextPrevStep({ icon, text, nextStep, prevStep, off }) {
  return (
    <div className="nextPrevContainer">
      <div>
        {icon ? (
          <div onClick={prevStep}>
            <MdArrowBackIosNew className="iconPrev" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <div onClick={nextStep}>
          <ButtonOff off={off}>{text}</ButtonOff>
        </div>
      </div>
      <div></div>
    </div>
  );
}

const ButtonOff = styled.button`
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

  background-color: ${({ off }) =>
    off ? "var(--primary-color2)" : "var(--off-color2)"};
  transition: all ease 0.3s;


  &:hover {
    background-color: ${({ off }) =>
      off ? "var(--secondary-color2)" : "var(--off-color2)"};
    transition: all ease 0.3s;
  }
`;

export default NextPrevStep;

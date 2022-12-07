import styled from "styled-components";

export const Beneficiado = styled.div`
  overflow: hidden;
  border: solid 2px var(--primary-color3);
  border-radius: 1rem;
  height: ${({ status }) => (status ? "26rem" : "7.4rem")};
  background-color: #fcfcfc;
  margin-bottom: 1rem;
  transition: all ease-in 0.2s;

  ${({ errorPorcentaje }) => (errorPorcentaje ? "height: auto;" : "")}

  &:hover {
    border: solid 2px #1d46c236;
    transition: all ease-in 0.2s;
  }
  @media screen and (max-width: 660px) {
    height: ${({ status }) => (status ? "auto" : "7.4rem")};
  }
`;
export const Beneficiado__Header = styled.header`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 7.4rem;
  z-index: 10;
  background-color: #fcfcfc;

  svg {
    font-size: 3.8rem;
    color: ${({ status }) => (status ? "var(--text-color)" : "gray")};
    transition: all ease-in 0.2s;
  }

  p {
    font-size: 2.3rem;
    font-weight: 600;
    font-style: italic;
    color: ${({ status }) => (status ? "var(--text-color)" : "gray")};
    transition: all ease-in 0.2s;
  }

  &:hover {
    p {
      color: var(--primary-color);
      transition: all ease-in 0.2s;
    }
    svg {
      color: var(--primary-color);
      transition: all ease-in 0.2s;
    }
  }
`;

export const BeneficiadoForm = styled.div`
  opacity: ${({ status }) => (status ? "1" : "0")};
  transition: all ease-in-out 0.3s;
`;

export const BeneficiadoForm__row1 = styled.form`
  display: grid;
  grid-template-columns: 26% 26% 26% 18%;
  justify-content: space-between;
  padding: 0 3rem;

  ${({ errorPorcentaje }) => (errorPorcentaje ? "margin-bottom: 3rem;" : "")}

  @media screen and (max-width: 660px) {
    grid-template-columns: 100%;
  }
`;

export const PorcentajeBen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 2.6rem;
    margin-right: 2rem;
    margin-left: 1rem;
    opacity: 0.5;
  }
`;

export const BeneficiadoForm__row2 = styled.form`
  display: grid;
  position: relative;
  grid-template-columns: 26% 23% 48%;
  justify-content: space-between;
  padding: 0 3rem;

  @media screen and (max-width: 660px) {
    grid-template-columns: 100%;
  }
`;

export const EdadBeneficiado = styled.div`
  width: 100%;
  height: 5.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ errorFX }) =>
    errorFX ? "var(--errorInput-color)" : "var(--primary-color3)"};

    ${({ init }) => init ? " border: 2px solid var(--primary-color3);" : ""}
  transition: all ease 0.3s;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    opacity: 0.6;
    width: 12rem;
    line-height: 2rem;
  }
`;
export const EdadBeneficiado__input = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
`;

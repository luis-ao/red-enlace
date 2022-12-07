import styled from "styled-components";

export const ContainerPago = styled.section`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 46% 46%;
  justify-content: space-between;
  padding-top: 6rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    padding-right: 0;
    gap: 3em;
  }
`;

export const ContainerPagoCol1 = styled.div`
  order: 1;
  @media screen and (max-width: 600px) {
    order: 2;
  }
`;
export const ContainerPagoCol2 = styled.div`
  order: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;

export const ContainerMetodoDePago = styled.section`
  display: grid;
  width: 84rem;
  margin: 0 auto;
  grid-template-columns: 100%;
  justify-items: center;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  color: var(--tertiary-color);
  font-size: 3em;
  font-weight: 600;
  border-top-left-radius: 0.3em;
  cursor: default;
`;

export const CodigoAgente = styled.div`
  display: flex;
  font-size: 1rem;
  width: 96%;
  box-shadow: 0 4px 2px -2px #676767;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const MetodoDePago = styled.div`
  display: flex;
  font-size: 1rem;
  width: 70em;
  box-shadow: 0 4px 2px -2px #676767;
  height: 7.6rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const LinkInfo = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  font-weight: 00;
  opacity: 0.8;
  padding-top: 0.6rem;
  padding-left: 0.6rem;
`;
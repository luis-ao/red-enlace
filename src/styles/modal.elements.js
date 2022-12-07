import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${({ showModal }) => (showModal ? "200" : "-20")};
  opacity: ${({ showModal }) => (showModal ? "1" : "0")};

  transition: all 0.1s ease-in;
`;

export const ContainerModal = styled.div`
  width: auto;
  height: auto;
  z-index: 300;
  padding: 4rem 5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 10px black;
  background-color: #fff;
  transform: scale(${({ showModal }) => (showModal ? "1" : "0.4")});

  transition-delay: 0.1s;
  transition: all 0.3s ease-out;
`;

export const BtnClose = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  svg {
    color: #000000;
    font-size: 5.6rem;
    transition: all 0.2s ease-in-out;
  }

  svg:hover {
    color: var(--secondary-color2);
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const TextModal = styled.div`
  

  img {
    width: 30rem;
    margin-right: 6rem;
  }

  h3 {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      margin: 0 auto;
    }

    h3 {
      text-align: center;
      margin-top: 6rem;
    }
  }
`;

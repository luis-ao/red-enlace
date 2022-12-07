import styled from "styled-components";

export const ContainerNav = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 11.5rem;
  background-color: var(--primary-color);
  padding: 0 5rem;
  box-shadow: 3px 3px 8px var(--shadow-color2);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5rem;
  justify-content: space-between;

  a {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  img {
    width: 17.5rem;
    cursor: pointer;
  }
  @media screen and (max-width: 970px) {
    padding-left: 0rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;

  @media screen and (max-width: 970px) {
    background-color: var(--primary-color);
    position: absolute;
    top: 11.5rem;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    padding-bottom: 11.5rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 600px) {
    top: 56px;
    padding-bottom: 60px;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1.2em;
    color: var(--off-color);
    font-size: 2.25rem;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s all ease;

    &:hover {
      background-color: var(--primary-color2);
      transition: 0.3s all ease;
      color: #fff;
    }
  }

  @media screen and (max-width: 970px) {
    width: 100%;
    height: 12rem;

    a {
      font-size: 2.6rem;
      padding: 0 1.2em;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  position: absolute;
  right: 1.6rem;
  cursor: pointer;
  color: #fff;

  /* 
  svg {
    fill: #fff;
  }
  background-color: ${({ open }) => (open ? "#ff5500" : "#545b8c")}; 
  padding: 0.5px 2px;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  */

  @media screen and (max-width: 970px) {
    display: flex;
    align-items: center;
  }
`;

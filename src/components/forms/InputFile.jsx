import { useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";

function InputFile({
  name,
  onChange,
  title,
  value,
  errorFX,
  validation,
  changeInit,
  init,
}) {
  
  useEffect(() => {
    validation();
  }, [value]);

  return (
    <FileContainer>
      <File__icon onClick={changeInit}>
        <input type="file" id={name} name={name} onChange={onChange} />
        <File__icon_label htmlFor={name} error={errorFX} init={init}>
          <FiUpload />
          <span>{value ? "Cambiar" : "Elegir"} Archivo</span>
        </File__icon_label>
      </File__icon>
      <File__text error={errorFX} init={init}>
        <h5>{title}</h5>
        {value ? (
          <File__text_nameImg>
            <h6>Nombre del Archivo:</h6>
            <p>{value.name}</p>
          </File__text_nameImg>
        ) : (
          <h4>No se ha seleccionado un archivo</h4>
        )}
      </File__text>
    </FileContainer>
  );
}

const FileContainer = styled.div`
  display: grid;
  grid-template-columns: 22% 79%;
  width: 100%;
  min-height: 10rem;
`;

const File__icon = styled.div`
  input {
    display: none;
  }
`;

const File__icon_label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: var(--primary-color2);
  transition: all ease-in 0.3s;

  span {
    color: #f5f7f9;
    font-size: 1.4rem;
    margin-top: 1rem;
    font-weight: 400;
    text-align: center;
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
    color: #f5f7f9;
  }
`;

const File__text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-left: 1.8rem;
  background-color: var(--primary-color3);
  border: 2px solid
    ${({ error }) =>
      error ? "var(--errorInput-color)" : "var(--primary-color3)"};

  ${({ init }) => (init ? "border: 2px solid var(--primary-color3)" : "")};

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: all ease-in 0.3s;

  h5 {
    font-size: 2.2rem;
    text-align: start;
    font-weight: 500;
    color: var(--text-color2);
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    text-align: start;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ init }) =>
      init ? "var(--text-color2)" : "var(--errorInput-color)"};

    transition: all ease-in 0.3s;
  }
  @media screen and (max-width: 600px) {
    overflow: hidden;
  }
`;

const File__text_nameImg = styled.div`
  margin-top: 0.8rem;

  h6 {
    font-size: 1.5rem;
    text-align: start;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
    overflow: hidden;
    max-height: 7rem;
    min-height: 0;
    font-weight: 500;
    font-style: italic;
  }
`;

export default InputFile;

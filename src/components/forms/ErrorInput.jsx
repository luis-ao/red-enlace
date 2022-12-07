import React from "react";
import styled from "styled-components";

export default function ErrorInput({
  errorFX,
  errorTest,
  errorNull,
  textError,
  textNull,
  textStart,
}) {
  return (
    <>
      <ErrorInput2 textStart={textStart} errorFX={errorFX}>
        {errorTest ? textError : ""}
        {errorNull ? textNull : ""}
      </ErrorInput2>
    </>
  );
}

const ErrorInput2 = styled.div`
  width: 100%;
  height: 3.6rem;
  font-size: 1.8rem;
  color: #ff0000;
  font-weight: 500;
  text-align: center;
  opacity: ${({ errorFX }) => (errorFX ? "1" : "0")};
  transform: scale(${({ errorFX }) => (errorFX ? "1" : "0.7")});
  transition: all ease-in-out 0.2s;

  ${({ textStart }) => (textStart ? "text-align: start;" : "")}
`;

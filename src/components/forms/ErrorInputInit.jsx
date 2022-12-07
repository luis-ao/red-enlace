import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function ErrorInputInit({
  errorFX,
  errorTest,
  errorNull,
  textError,
  textNull,
  init,
}) {
  return (
    <ErrorInput2 errorFX={errorFX}>
      {init ? (
        ""
      ) : (
        <>
          {errorTest ? textError : ""}
          {errorNull ? textNull : ""}
        </>
      )}
    </ErrorInput2>
  );
}

const ErrorInput2 = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  color: #ff0000;
  font-weight: 500;
  text-align: center;
  opacity: ${({ errorFX }) => (errorFX ? "1" : "0")};
  transform: scale(${({ errorFX }) => (errorFX ? "1" : "0.7")});
  transition: all ease-in-out 0.2s;
`;

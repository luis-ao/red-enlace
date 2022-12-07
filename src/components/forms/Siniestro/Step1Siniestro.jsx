import { useState } from "react";
import { useDispatch } from "react-redux";
import { onChangeSiniesto } from "../../../app/slices/siniestroSlice";

export default function Step1Siniestro({ nextStep }) {
  const dispatch = useDispatch();

  const product1 = () => {
    dispatch(onChangeSiniesto("gm"));
  };

  const product2 = () => {
    dispatch(onChangeSiniesto("af"));
  };

  const product3 = () => {
    dispatch(onChangeSiniesto("da"));
  };

  return (
    <>
      <div>Paso 1</div>
      <button onClick={product1}>Producto 3</button>
      <button onClick={product2}>Producto 3</button>
      <button onClick={product3}>Producto 3</button>
    </>
  );
}

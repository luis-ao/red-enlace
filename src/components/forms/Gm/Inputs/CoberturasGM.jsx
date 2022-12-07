import { useEffect } from "react";
import CoberturaA from "./CoberturasGM/CoberturaA";
import CoberturaB from "./CoberturasGM/CoberturaB";
import CoberturaC from "./CoberturasGM/CoberturaC";

function CoberturasGM(props) {
  useEffect(() => {
    props.activeStep();
  }, []);

  return (
    <>
      <form className="containerStep5GM">
        <div className="titleStep5GM">
          <h5>Coberturas</h5>
          <h5>Asegurados</h5>
        </div>
        <div className="gridStep5GM">
          <div className="gridStep5GM__text">
            <p>
              Muerte natural - En caso de que fallezcas, le damos a tus
              beneficiarios $200,000.00
            </p>
            <p className="gridStep5GM__text_aplica">* Aplica únicamente para mayores de 12 años.</p>
          </div>
          <CoberturaA
            state={props.state}
            value0={props.state.titular__cobA}
            value1={props.state.add1__cobA}
            value2={props.state.add2__cobA}
            value3={props.state.add3__cobA}
            value4={props.state.add4__cobA}
            value5={props.state.add5__cobA}
            onChange0={props.handleCheckCobAT}
            onChange1={props.handleCheckCobA1}
            onChange2={props.handleCheckCobA2}
            onChange3={props.handleCheckCobA3}
            onChange4={props.handleCheckCobA4}
            onChange5={props.handleCheckCobA5}
          />
        </div>
        <div className="gridStep5GM">
          <div className="gridStep5GM__text">
            Ayuda por hospitalización - Te damos una ayuda diaria de $500 MXN
          </div>
          <CoberturaB
            onChange={props.handleCheckCobertura}
            state={props.state}
            value0={props.state.titular__cobB}
            value1={props.state.add1__cobB}
            value2={props.state.add2__cobB}
            value3={props.state.add3__cobB}
            value4={props.state.add4__cobB}
            value5={props.state.add5__cobB}
          />
        </div>
        <div className="gridStep5GM">
          <div className="gridStep5GM__text">
            <p>
              Pérdida de ingreso por accidente - Si llegas a tener un accidente
              y no puedes trabajar, te damos ayuda de $200MXN
            </p>
            <p className="gridStep5GM__text_aplica">* Aplica únicamente para mayores de 18 años.</p>
          </div>
          <CoberturaC
            onChange={props.handleCheckCobertura}
            state={props.state}
            value0={props.state.titular__cobC}
            value1={props.state.add1__cobC}
            value2={props.state.add2__cobC}
            value3={props.state.add3__cobC}
            value4={props.state.add4__cobC}
            value5={props.state.add5__cobC}
          />
        </div>
      </form>
      <form className="adicionalCobertura">
        <h5 className="adicionalCobertura__title">
          ¿Deseas agregar una cobertura extra? <br />
          <span>
            *En 24 horas te responderemos a tu correo si la cobertura aplica o
            no.
          </span>
        </h5>
        <textarea
          className="adicionalCobertura__textarea"
          type="textarea"
          name={props.state.coberturaNueva}
          onChange={props.handleChange}
          placeholder="Escribenos..."
        ></textarea>
      </form>
    </>
  );
}

export default CoberturasGM;

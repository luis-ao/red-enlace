import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import GastosMedicos from "./pages/GastosMedicos";
import CotizadorGastosMedicos from "./pages/forms/CotizadorGastosMedicos";
import CotizadorDeducibleAutos from "./pages/forms/CotizadorDeducibleAutos";
import Siniestro from "./pages/Siniestro";
import ReclamacionSiniestro from "./pages/forms/ReclamacionSiniestro";
import CotizadorAFSeguroIndividual10 from "./pages/forms/CotizadorAFSeguroIndividual10"
import CotizadorAFSeguroIndividual20 from "./pages/forms/CotizadorAFSeguroIndividual20"
import CotizadorAFSeguroFamiliar10 from "./pages/forms/CotizadorAFSeguroFamiliar10"
import CotizadorAFSeguroFamiliar20 from "./pages/forms/CotizadorAFSeguroFamiliar20"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Inicio />} />
          <Route path="/" element={<Inicio />} />

          <Route path="/deducible-gastos-medicos" element={<GastosMedicos />} />
          <Route
            path="/cotizador-deducible-autos"
            element={<CotizadorDeducibleAutos />}
          />
          <Route
            path="/cotizador-deducible-gastos-medicos"
            element={<CotizadorGastosMedicos />}
          />
          <Route
            path="/cotizador-al-fin-seguro-individual-10"
            element={<CotizadorAFSeguroIndividual10 />}
          />
          <Route
            path="/cotizador-al-fin-seguro-individual-20"
            element={<CotizadorAFSeguroIndividual20 />}
          />
          <Route
            path="/cotizador-al-fin-seguro-familiar-10"
            element={<CotizadorAFSeguroFamiliar10 />}
          />
          <Route
            path="/cotizador-al-fin-seguro-familiar-20"
            element={<CotizadorAFSeguroFamiliar20 />}
          />

          <Route path="/siniestro" element={<Siniestro />} />
          <Route
            path="/reclamacion-de-siniestro"
            element={<ReclamacionSiniestro />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

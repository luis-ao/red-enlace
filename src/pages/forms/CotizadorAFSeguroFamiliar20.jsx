import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainFamiliar from "../../components/forms/AFSeguro/Familiar/MainFamiliar";

function CotizadorAFSeguroFamiliar20() {
  return (
    <>
      <Navbar type="productos" />
      <MainFamiliar plan={"20"} />
      <Footer />
    </>
  );
}

export default CotizadorAFSeguroFamiliar20;

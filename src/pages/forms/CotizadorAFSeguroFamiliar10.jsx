import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainFamiliar from "../../components/forms/AFSeguro/Familiar/MainFamiliar";

function CotizadorAFSeguroFamiliar10() {
  return (
    <>
      <Navbar type="productos" />
      <MainFamiliar plan={"10"} />
      <Footer />
    </>
  );
}

export default CotizadorAFSeguroFamiliar10;

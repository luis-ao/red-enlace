import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainIndividual from "../../components/forms/AFSeguro/Individual/MainIndividual";

function CotizadorAFSeguroIndividual20() {
  return (
    <>
      <Navbar type="productos" />
      <MainIndividual plan={"20"} />
      <Footer />
    </>
  );
}

export default CotizadorAFSeguroIndividual20;

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainIndividual from "../../components/forms/AFSeguro/Individual/MainIndividual";

function CotizadorAFSeguroIndividual10() {
  return (
    <>
      <Navbar type="productos" />
      <MainIndividual plan={"10"} />
      <Footer />
    </>
  );
}

export default CotizadorAFSeguroIndividual10;

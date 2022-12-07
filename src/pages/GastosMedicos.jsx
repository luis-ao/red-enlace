import Navbar from "../components/Navbar";
import HeaderVideo from "../components/productos/HeaderVideo";
import Footer from "../components/Footer";

export default function GastosMedicos() {
  return (
    <>
      <Navbar type="productos" />
      <HeaderVideo video={true} title="Gastos Médicos" />
      <Footer />
    </>
  );
}

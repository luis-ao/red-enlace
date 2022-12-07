import "../styles/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section1">
        <a
          className="rrssFooter"
          href="https://www.facebook.com/RedEnlaceMX/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
          <p>Red Enlace</p>
        </a>
        <a
          className="rrssFooter"
          href="https://www.instagram.com/redenlacemx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill />
          <p>@redenlacemx</p>
        </a>
        <a className="rrssFooter" href="mailto:contacto@redenlace.com.mx">
          <MdEmail />
          <p>contacto@redenlace.com.mx</p>
        </a>
      </div>
      <div className="footer__section2">
        <img
          src="https://elementos-red-enlace.s3.amazonaws.com/Nueva+Imagen+Red+Enlace/logoRedEnlace.webp"
          alt="Logo Red Enlace"
          className="footer__section2_img"
        />
      </div>
      <div className="footer__section3">
        <div className="footer_tel">
          <p>55 4140 0531</p>
          <AiFillPhone />
        </div>
        <div className="footer_tel">
          <p>55 5488 1900</p>
          <AiFillPhone />
        </div>
      </div>
      <div className="footer__section4">
        <p>© 2021 Red Enlace / Todos los derechos reservados</p>
        <p>
          Prol. P.° de la Reforma 627, Santa Fe, Paseo de las Lomas, Cuajumalpa
          de Morelos, 01330 Ciudad de México, CDMX
        </p>
      </div>
    </footer>
  );
}

export default Footer;

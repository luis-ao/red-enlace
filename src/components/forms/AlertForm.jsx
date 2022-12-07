import { Link } from "react-scroll";
import "../../styles/forms/AlertForm.css";
import { Overlay, ContainerModal } from "../../styles/modal.elements";
import Button from "../Button";

function AlertForm({ showAlert, closedAlert, linkId, text }) {
  const accept = () => {
    closedAlert();
  };

  return (
    <Overlay showModal={showAlert}>
      <ContainerModal showModal={showAlert}>
        <div className="alertForm">
          <h5 className="alertForm__text">{text}</h5>
          <Link
            to={linkId}
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            onClick={accept}
          >
            <Button text="Aceptar" />
          </Link>
        </div>
      </ContainerModal>
    </Overlay>
  );
}

export default AlertForm;

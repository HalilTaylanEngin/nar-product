import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import "./direct.scss";

function Direct() {
  return (
    <div className="direct">
      <div className="button-container">
        <a
          className="d-phone"
          href="tel:+905547757075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelephone />
        </a>
        <span>Ara</span>
      </div>
      <div className="button-container">
        <a
          className="d-whatsapp"
          href="https://api.whatsapp.com/send?phone=+905547757075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
        <span>Mesaj</span>
      </div>
    </div>
  );
}

export default Direct;

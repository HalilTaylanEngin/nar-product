import "./navi.scss";

//icons
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsFacebook, BsInstagram, BsGoogle, BsYoutube } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function Navi({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navi " + (menuOpen && "show")}>
      <div className="navi-header">
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <AiOutlineClose />{" "}
        </div>
      </div>
      <hr />
      <div className="navi-nav">
        <a className="brand-wrapper" href="#intro">
          <div className="logo-wrapper">
            <img src="assets/topbar/logo.png" alt="logo-img" className="logo" />
          </div>
          <div className="brand"> {"Nar Tarım & Peyzaj"} </div>
        </a>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">
              <span>
                <AiOutlineHome />{" "}
              </span>
              Anasayfa
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#works">
              <span>
                <MdCleaningServices />{" "}
              </span>
              Hizmetler
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#testimonials">
              <span>
                <FaRegCommentDots />{" "}
              </span>{" "}
              Yorumlar
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">
              <span>
                <GiFarmer />{" "}
              </span>
              Hakkımızda
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">
              <span>
                <MdOutlineContactPhone />{" "}
              </span>
              İletişim
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="navi-footer">
        <div className="icon-wrapper">
          <div className="icons face">
            <span>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </span>
          </div>
          <div className="icons insta">
            <span>
              <a
                href="https://www.instagram.com/?hl=tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </span>
          </div>
          <div className="icons google">
            <span>
              <a
                href="https://www.google.com.tr/?hl=tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGoogle />
              </a>
            </span>
          </div>
          <div className="icons youtube">
            <span>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navi;

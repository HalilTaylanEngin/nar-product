import "./footer.scss";

//icons
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsFacebook, BsInstagram, BsGoogle, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="left-side">
          <div className="column-wrapper">
            <div className="column left">
              <div className="container">
                <h3>İnfo</h3>
                <a className="brand-wrapper" href="#intro">
                  <div className="logo-wrapper">
                    <img
                      src="assets/topbar/logo.png"
                      alt="logo-img"
                      className="logo"
                    />
                  </div>
                  <div className="brand"> {"Nar Tarım & Peyzaj"} </div>
                </a>
                <div className="wrapper">
                  <div className="phone">
                    <span>
                      <AiOutlinePhone />
                    </span>
                    <p>0232 239 37 52</p>
                  </div>
                  <div className="whatsapp">
                    <span>
                      <AiOutlineWhatsApp />
                    </span>
                    <p>0544 535 02 37</p>
                  </div>
                  <div className="address">
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <div className="text">
                      <p>Ilıca Mahallesi Mithatpaşa Caddesi </p>
                      <p>No: 50/A-B 35320</p>
                      <p>Narlıdere-İzmir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <h3>Hızlı Menu</h3>
              <div className="footer-nav">
                <ul>
                  <li>
                    <a href="#intro">
                      <span>
                        <AiOutlineHome />
                      </span>
                      Anasayfa
                    </a>
                  </li>
                  <li>
                    <a href="#works">
                      <span>
                        <MdCleaningServices />
                      </span>
                      Hizmetler
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials">
                      <span>
                        <FaRegCommentDots />
                      </span>
                      Yorumlar
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <span>
                        <GiFarmer />
                      </span>
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <span>
                        <MdOutlineContactPhone />
                      </span>
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="column-wrapper-right">
            <div className="column-start">
              <div className="container">
                <h3>Çalışma saatlerimiz</h3>
                <ul>
                  {cs.map((day, i) => (
                    <li key={i}>
                      <p>
                        <span>{day.day} </span>
                        {day.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="column-end">
              <div className="container">
                <h3>Social</h3>
                <div className="icon-wrapper">
                  <div className="icons face">
                    <span>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>   
                    </span>
                  </div>
                  <div className="icons insta">
                    <span>
                     <a href="https://www.instagram.com/?hl=tr" target="_blank" rel="noopener noreferrer"><BsInstagram /></a> 
                    </span>
                  </div>
                  <div className="icons google">
                    <span>
                      {" "}
                    <a href="https://www.google.com.tr/?hl=tr" target="_blank" rel="noopener noreferrer"><BsGoogle /></a>   
                    </span>
                  </div>
                  <div className="icons youtube">
                    <span>
                      {" "}
                      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><BsYoutube /></a> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Copyright2019 © Kudal Software </p>
    </div>
  );
}

export default Footer;

const cs = [
  {
    day: "Pzt",
    time: "08:30–17:30",
  },
  {
    day: "Sal",
    time: "08:30–17:30",
  },
  {
    day: "Çar",
    time: "08:30–17:30",
  },
  {
    day: "Prş",
    time: "08:30–17:30",
  },
  {
    day: "Cum",
    time: "08:30–17:30",
  },
  {
    day: "Cts",
    time: "08:30–17:30",
  },
  {
    day: "Pzr",
    time: "10:00–16:00",
  },
];

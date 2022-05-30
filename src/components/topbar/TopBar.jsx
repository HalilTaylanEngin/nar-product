
import './topBar.scss'

//icons
import { AiOutlinePhone, AiOutlineMenu ,AiOutlineWhatsApp} from 'react-icons/ai';


function TopBar({ menuOpen, setMenuOpen }) {

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="topbar" id='topbar'>
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <a className="brand-wrapper" href='#intro'>
            <div className="logo-wrapper">
              <img src="assets/topbar/logo.png" alt="logo-img" className="logo" />
            </div>
            <div className="brand"> {"Nar Tarım & Peyzaj"} </div>
          </a>
        </div>
        <div className="topbar-center">
          <div className="wrapper">
            <div className="phone">
              <span><AiOutlinePhone /> </span><p>0232 239 37 52</p>
            </div>
            <div className="whatsapp">
              <span><AiOutlineWhatsApp /> </span><p>0544 535 02 37</p>
            </div>
          </div>
        </div>
        <div className="topbar-right"  >
          <span onClick={() => handleClick()}> <AiOutlineMenu /> </span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
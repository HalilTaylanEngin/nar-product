import React, { useState, useEffect, useRef } from "react";
import { init } from 'ityped'
import './intro.scss'


//icons
/* import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; */
import { VscWorkspaceTrusted } from 'react-icons/vsc';

function Intro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const textRef = useRef();



  /* const handleClick = (way) => {
    
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : itemList.length - 1)
      : setCurrentSlide(currentSlide < itemList.length - 1 ? currentSlide + 1 : 0)
  };
 */
  var timer = 3007
  setTimeout(() => {

    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : itemList.length - 1)
  }, timer);
  useEffect(() => {
    init(textRef.current, {
      showCursor: false, strings:
        ['Peyzaj Tasarım', 'Gübre & Tohum', 'Tarım Planlama', 'Zirai İlaçlama', 'Otomatik Sulama', 'Tarım Aletleri']
    })
  }, [])


  return (
    <div className='intro' id='intro'>
      <div className="intro-wrapper">
        <div className="left">
          <div className="wrapper" >
            <div className="arrow-wrapper">
              {/*  <div className="arrow left-arrow" onClick={() => handleClick("left")}> <AiOutlineLeft /> </div>
              <div className="arrow right-arrow" onClick={() => handleClick()}> <AiOutlineRight /> </div> */}
            </div>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
              {
                itemList.map((item, i) => (
                  <div className="item" key={i}>
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-wrapper">
            <h2>{"Nar Tarım & Peyzaj "}</h2>
            <div className="itype-text"> <span> <VscWorkspaceTrusted /></span><p ref={textRef}></p></div>
            <h3>"Bahçenize ferahlık katan çözüm ortağınız.."</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro


const itemList = [
  {
    title: "item 1",
    imgUrl: "assets/intro/p-1.jpg"
  },
  {
    title: "item 2",
    imgUrl: "assets/intro/p-2.jpg"
  },
  {
    title: "item 3",
    imgUrl: "assets/intro/p-3.jpg"
  },
  {
    title: "item 4",
    imgUrl: "assets/intro/p-4.jpg"
  },
]
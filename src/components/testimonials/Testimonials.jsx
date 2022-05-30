import React from 'react'
import './testimonials.scss'

export default function Testimonials() {

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Sizden Gelenler</h1>
      <div className="container">
        {cardList.map((d,i) => (
          <div className={d.featured ? "card featured" : "card"} key={i}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.imgURL}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.comment}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


const cardList = [
  {
    name: "Sevda Sakin",
    comment: "Kaliteli çalışma,hoşgörü ve anlayışlı müşterilerine güven veren bir firma.",
    imgURL: "assets/testimonials/woman-1.jpg"
  },
  {
    name: "Ayşenur Görün",
    comment: "Sebze tohumları almıştım , Nasıl yapacağımı ayrıntılarıyla anlattılar , ilgilerinden dolayı hepsine buradan teşekkür ederim.",
    imgURL:"assets/testimonials/woman-2.jpg"
  },
  {
    name: "Akın Sailoğlu",
    comment: "Fiyatları uygun , işcilik de iyi  , bahçem gayet güzel düzenlendi,  özen gösterdiler sağolsunlar.",
    imgURL:"assets/testimonials/man-1.jpg"
  },

]
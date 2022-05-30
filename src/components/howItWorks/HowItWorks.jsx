import "./howItWorks.scss";

function HowItWorks() {
  return (
    <div className="howItWorks">
      <h1>Nasıl Çalışıyoruz</h1>
      <div className="how-container">
        <div className="howItWorks-wrapper-1">
          {cardList1.map((card, i) => (
            <div className="card" key={i}>
              <div className="card-img">
                <img src={card.imgUrl} alt={card.title} />
              </div>
              <div className="card-footer">
                <div className="title">{card.title} </div>
                <div className="desc">{card.desc} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="howItWorks-wrapper-2">
          {cardList2.map((card, i) => (
            <div className="card" key={i}>
              <div className="card-img">
                <img src={card.imgUrl} alt={card.title} />
              </div>
              <div className="card-footer">
                <div className="title">{card.title} </div>
                <div className="desc">{card.desc} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

const cardList1 = [
  {
    title: "Kefiş",
    desc: "Projenin Uygulanacağı Alanı Keşfediyoruz.",
    imgUrl: "assets/how/look.jpg",
  },
  {
    title: "Planlama",
    desc: "Projeniz İçin Planlama Yapıyoruz.",
    imgUrl: "assets/how/plan.jpg",
  },
];
const cardList2 = [
  {
    title: "Uygulama",
    desc: "Planlama programına bağlı kalarak uygulamaya geçiyoruz.",
    imgUrl: "assets/how/apply.jpg",
  },
  {
    title: "Zamanında Teslim",
    desc: "Projenizi zamanında tamamlayıp anahtar teslimatı yapıyoruz.",
    imgUrl: "assets/how/time.jpg",
  },
];

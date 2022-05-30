import { useState } from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="icon-container">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                  </div>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/works/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/works/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Works;

const data = [
  {
    id: "1",
    icon: "assets/works/w-1.jpg",
    title: "Gübre & Tohum",
    desc: "Çim alanlarınız yılda birkaç defa gübreleme ihtiyacı duyar. Uzun ömürlü ve sağlıklı çim yetiştirebilmeniz için sizlere yavaş çözülen gübre ile besin takviyesi yapılmasında yardımcı oluyoruz.",
    img: "assets/works/w-1.jpg",
  },
  {
    id: "2",
    icon: "assets/works/w-2.jpg",
    title: "Otomatik Sulama",
    desc: "Bahçe bakımı düzenlilik isteyen keyifli bir iştir. Bu işlemin hem verimli hem de tasarruflu olmasında en büyük payı olan otomatik sulama sistemi sizlere kolaylık sağlar. Tüm bahçenize eşit miktarda su dağılımı yapmanın yanı sıra su kaynağınızı olabilecek en iyi şekilde optimize eder.",
    img: "assets/works/w-2.jpg",
  },
  {
    id: "3",
    icon: "assets/works/w-3.jpg",
    title: "Hazır Çim",
    desc: "Uzun ömürlü ve kaliteli ürünlerimizle uzman kadromuz hangi alanda hangi tür hazır çim kullanacağınız konusunda sizlere yardımcı olur.",
    img: "assets/works/w-3.jpg",
  },
  {
    id: "4",
    icon: "assets/works/w-4.jpg",
    title: "Bahçe Planlama",
    desc: "Kümes , ahır , depo, su deposu  tamir atölyesi yeri ,  Sera planlanması ve yeri , Sulama hatları planlanması, Kuyu yeri,Gölge çalışma alanı ve bunlar gibi aklınıza gelebilecek  yerleri planlanması.",
    img: "assets/works/w-4.jpg",
  },
  {
    id: "5",
    icon: "assets/works/w-5.jpg",
    title: "Zirai İlaçlama",
    desc: "Bitkilerde, çim ve yeşil alanların tümünde oluşabilecek tüm hastalık ve zararlıları tespit edip ilaçlama süresi ve miktarı ayrıca fiyat teklifi sunarak tarafınıza profesyonel ekipmanlarımız ve kadromuz ile en iyi hizmeti sunmaktayız.",
    img: "assets/works/w-5.jpg",
  },
  {
    id: "6",
    icon: "assets/works/w-6.jpg",
    title: "Peyzaj & Tasarım",
    desc: "Yaşam alanlarınızın güzelleşmesi ve kullanım kolaylığı sağlaması açısından çevre ve bahçe düzenlemesi önemlidir. Bu nedenle sizin çevre ve bahçe ölçülerinize göre en uygun bitkileri kullanarak doğru yerlere uygulanmasını sağlarız. ",
    img: "assets/works/w-6.jpg",
  },
];

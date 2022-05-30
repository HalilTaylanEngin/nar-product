import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="left">
          <div className="left-header">
            <h1>Hakkımızda</h1>
            <h3>
              İzmir`in Öncü Markası <span>{"Nar Tarım & Peyzaj"}'a </span>
              Hoşgeldiniz.
            </h3>
          </div>

          <div className="left-body">
            <p>
              Yılların vermiş olduğu tecrübemiz ile, kilit parke taşı döşeme,
              bahçe düzenleme ağaçlandırma gibi peyzaj mimarisi gerektiren
              işlerinizde işinde uzman kadromuzla profesyonel hizmet
              sunmaktayız.
            </p>
            <p>
              30 Yılı aşkın süredir İzmir'de Peyzaj ve Mühendislik proje
              konusunda uzman Kadromuzla ile hizmet vermekteyiz.
            </p>
            <p>
              Kilit parke ve bordür döşenmesi, havuz şelale yapımı, ihata duvarı
              yapımı, kamelya yapımı, sulama sistemleri, çim ekim çalışmaları,
              aydınlatma sistemleri, ağaçlandırma çalışmaları, Bahçe ve Villa
              bakım budama işleri hizmetlerimizle, her zaman yanızda olmaktan
              keyif duyar, bu hissimizi işimize yansıtırız.
            </p>
            <p>
              Peyzaj mimarisi alanının her dalında hizmet veren firmamız müşteri
              memnuniyetini ve güvenilir ticareti iş ahlakı kurallarına göre
              yürütmektedir.
            </p>
          </div>
          <div className="left-footer">
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
          </div>
        </div>
        <div className="right">
            <div className="about-wrapper">
                <img src="assets/about/about.jpg" alt="about.jpg" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;

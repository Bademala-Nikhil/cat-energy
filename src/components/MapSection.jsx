import "../styles/MapSection.css";
import map from "../images/map.png";

function MapSection() {
  return (
    <section className="map-section">

      {/* MAP IMAGE */}
      <img src={map} alt="map" className="map-img" />

      {/* OVERLAY BOX */}
      <div className="map-card">

        <h3>
          ПРИГЛАШАЕМ <br />
          К СОТРУДНИЧЕСТВУ ДИЛЕРОВ!
        </h3>

        <p>
          ул. Большая <br />
          Конюшенная, д. 19/8 <br />
          Санкт-Петербург
        </p>

      </div>

    </section>
  );
}

export default MapSection;

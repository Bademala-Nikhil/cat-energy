import "../styles/Hero.css";
import can from "../images/can.png";
import bg from "../images/bg-cat.png";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT BLACK AREA */}
      <div className="left-bg"></div>

      {/* RIGHT GREEN BACKGROUND */}
      <img src={bg} className="bg" alt="bg" />

      {/* TEXT */}
      <div className="hero-text">
        <h1>Функциональное питание для котов</h1>
      </div>

      {/* BUTTON */}
      <button className="hero-btn">
        ПОДОБРАТЬ ПРОГРАММУ
      </button>

      {/* CAN IMAGE */}
      <img src={can} className="can" alt="can" />

    </section>
  );
}

export default Hero;

import "../styles/Programs.css";
import slim from "../images/silm.png";   // sitting cat
import pro from "../images/pro.png";     // walking cat

function Programs() {
  return (
    <section className="programs">

      {/* CARD 1 */}
      <div className="program-card">
        <div className="card-header">
          <div className="icon-bg">
            <img src={slim} alt="slim" />
          </div>
          <h2>ПОХУДЕНИЕ</h2>
        </div>

        <p>
          Ваш кот весит больше собаки и почти утратил способность лазить по
          деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу
          сбросить лишний вес.
        </p>

        <button className="link-btn">
          КАТАЛОГ SLIM →
        </button>
      </div>

      {/* CARD 2 */}
      <div className="program-card">
        <div className="card-header">
          <div className="icon-bg">
            <img src={pro} alt="pro" />
          </div>
          <h2>НАБОР МАССЫ</h2>
        </div>

        <p>
          Заработать авторитет среди дворовых котов и даже собак? Серия Cat
          Energy Pro поможет вашему коту нарастить необходимые мышцы!
        </p>

        <button className="link-btn">
          КАТАЛОГ PRO →
        </button>
      </div>

    </section>
  );
}

export default Programs;

import "../styles/HowItWorks.css";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function HowItWorks() {
  return (
    <section className="how">

      <h2>Как это работает</h2>

      <div className="blocks">

        <div className="block">
          <div className="icon">
            <img src={icon1} />
          </div>
          <p>
            Функциональное питание содержит только полезные питательные вещества.
          </p>
          <span className="num">1</span>
        </div>

        <div className="block">
          <div className="icon">
            <img src={icon2} />
          </div>
          <p>
            Выпускается в виде порошка, который нужно лишь залить кипятком и готово.
          </p>
          <span className="num">2</span>
        </div>

        <div className="block">
          <div className="icon">
            <img src={icon3} />
          </div>
          <p>
            Замените один-два приема обычной еды на наше функциональное питание.
          </p>
          <span className="num">3</span>
        </div>

        <div className="block">
          <div className="icon">
            <img src={icon4} />
          </div>
          <p>
            Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
          </p>
          <span className="num">4</span>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;

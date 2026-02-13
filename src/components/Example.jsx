import "../styles/Example.css";
import before from "../images/before-desktop.png";
import after from "../images/after-desktop.png";

function Example() {
  return (
    <section className="example">

      {/* TOP BLACK STRIP */}
      <div className="top-strip"></div>

      {/* CONTENT AREA */}
      <div className="content">

        {/* LEFT TEXT */}
        <div className="left">

          <h2>Живой пример</h2>

          <p>
            Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
            на Cat Energy Slim. Отличный результат без изнуряющих тренировок!
            При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
          </p>

          {/* STATS */}
          <div className="stats">
            <div className="box">
              <h3>5 КГ</h3>
              <span>снижение веса</span>
            </div>

            <div className="box">
              <h3>60 ДНЕЙ</h3>
              <span>затрачено времени</span>
            </div>
          </div>

          {/* COST */}
          <div className="cost">
            <span>ЗАТРАТЫ НА ПИТАНИЕ:</span>
            <strong>15 000 РУБ.</strong>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="right">

          <div className="image-wrapper">
            <img src={before} className="before" />
            <img src={after} className="after" />
            <div className="divider"></div>
          </div>

          {/* SLIDER */}
          <div className="slider">
            <span>БЫЛО</span>
            <div className="line">
              <div className="circle"></div>
            </div>
            <span>СТАЛО</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Example;

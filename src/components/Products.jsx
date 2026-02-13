import "../styles/Products.css";

// import images
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";

const products = [
  {
    img: p1,
    name: "CAT ENERGY PRO 500 Г",
    weight: "500 г",
    taste: "Курица",
    price: "700 Р.",
  },
  {
    img: p2,
    name: "CAT ENERGY PRO 1000 Г",
    weight: "1000 г",
    taste: "Курица",
    price: "1000 Р.",
  },
  {
    img: p3,
    name: "CAT ENERGY PRO 500 Г",
    weight: "500 г",
    taste: "Рыба",
    price: "700 Р.",
  },
  {
    img: p4,
    name: "CAT ENERGY PRO 1000 Г",
    weight: "1000 г",
    taste: "Рыба",
    price: "1000 Р.",
  },
  {
    img: p5,
    name: "CAT ENERGY SLIM 500 Г",
    weight: "500 г",
    taste: "Гречка",
    price: "400 Р.",
  },
  {
    img: p6,
    name: "CAT ENERGY SLIM 1000 Г",
    weight: "1000 г",
    taste: "Гречка",
    price: "700 Р.",
  },
  {
    img: p7,
    name: "CAT ENERGY SLIM 500 Г",
    weight: "500 г",
    taste: "Рис",
    price: "500 Р.",
  },
];

function Products() {
  return (
    <section className="products">

      <h2>Каталог продукции</h2>

      <div className="products-grid">

        {products.map((item, index) => (
          <div className="card" key={index}>

            <img src={item.img} alt="product" />

            <h3>{item.name}</h3>

            <div className="info">
              <p><span>Масса</span><span>{item.weight}</span></p>
              <p><span>Вкус</span><span>{item.taste}</span></p>
              <p><span>Цена</span><span>{item.price}</span></p>
            </div>

            <button>ЗАКАЗАТЬ</button>

          </div>
        ))}

        {/* SHOW MORE CARD */}
        <div className="card more">
          <div className="plus">+</div>
          <h3>ПОКАЗАТЬ ЕЩЕ 100500 ТОВАРОВ</h3>
          <p>На самом деле вкусов гораздо больше!</p>
          <button className="gray">ПОКАЗАТЬ ВСЕ</button>
        </div>

      </div>

    </section>
  );
}

export default Products;

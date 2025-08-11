import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
          <div className="card">
            <img src={"/sweety.jpg"} alt="sweetyImage" />
            <h3>Sweety Corner</h3>
            <button>sweety</button>
          </div>
          <div className="card">
            <img src={"/food1.jpg"} alt="sweetyImage" />
            <h3>full of vitamins</h3>
            <button>mix salad</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

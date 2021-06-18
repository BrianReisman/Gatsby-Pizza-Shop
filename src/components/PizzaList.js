import React from "react";
import { Link } from "gatsby";

// not exporting since this isn't used elsewhere in the site.
function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map((topping) => topping.name).join(", ")}</p>
      </Link>
    </div>
  );
}

const PizzaList = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;

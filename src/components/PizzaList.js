import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaStyles = styled.div`
  display: grid;
  /* take your row sizing, NOT from the PizzaStyles did, but from the PizzaGridStyles grid */

  /* //TODO< HEY! run this code. If not supports it, set this variable. Else, carry on */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
    /* grid-template-rows: auto auto 1fr; */
  }

  /* //TODO< HEY! check is --rows exists. If it does, use it. Otherwise use subgrid */
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

// not exporting since this isn't used elsewhere in the site.
function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(", ")}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}

const PizzaList = ({ pizzas }) => (
  <PizzaGridStyles>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </PizzaGridStyles>
);

export default PizzaList;

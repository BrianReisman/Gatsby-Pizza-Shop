import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter.js";

const Pizza = ({ data, pageContext }) => {
  console.log(data);
  return (
    <>
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={data.pizzas.nodes} />
    </>
  );
};

// # () is filters for the query. query is a banana here
export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default Pizza;

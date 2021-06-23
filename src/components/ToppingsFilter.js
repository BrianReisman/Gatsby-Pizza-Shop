import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const ToppingsFilter = ({}) => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  return (
    <div>
      <p>toppings</p>
    </div>
  );
};

export default ToppingsFilter;

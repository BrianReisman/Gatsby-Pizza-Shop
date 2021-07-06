import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background-color: var(--grey);
    border-radius: 2px;
    .count {
      background-color: white;
      padding: 2px 5px;
    }
    &[aria-current="page"] {
      background-color: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) existingTopping.count += 1;
      if (!existingTopping)
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      return acc;
      //  if it is, increment by 1
      //  otherwise create a new entry in our acc and set it to one
    }, {});

  return Object.values(counts).sort((a, b) => b.count - a.count);
}

const ToppingsFilter = ({ activeTopping }) => {
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
  // console.clear();
  // count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  // console.log(toppingsWithCounts);
  // loop over the list of toppings and display the topping and the count of pizzas in that topping
  // link it up...
  return (
    <ToppingsStyles>
      <Link to='/pizzas'>
        <span className='name'>All</span>
        <span className='count'>{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className='name'>{topping.name}</span>
          <span className='count'>{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
};

export default ToppingsFilter;

import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <PizzaGrid>
      <Img fluid={pizza.image.asset.fluid} />
      <div>
        <h2 className='mark'>{pizza.name}</h2>
        <ul>
          {pizza.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </ul>
      </div>
    </PizzaGrid>
  );
}

// this needs to be dynamic based on the slug passed in via contact in gatsby node.
// *graphql has access to page parameters?
export const query = graphql`
  # type is needed. And the bang, !, means it is required
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;

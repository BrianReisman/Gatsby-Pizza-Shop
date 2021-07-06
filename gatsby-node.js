import path from "path"; //from Node directly

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. get a template for this page
  const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // what is the url of this new page?
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPage({ graphql, actions }) {
  console.log("turning toppings into pages");
  // get the template
  const toppingTemplate = path.resolve("./src/pages/pizza.js");
  // query all toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  // createPage for THAT topping
  data.toppings.nodes.forEach((topping) => {
    console.log(`creating page for ${topping.name}`);
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        // TODO regex 
      }
    })
  });
  // pass topping data to pizza.js
}

export async function createPages(params) {
  // create pages dynamically
  // * wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPage(params),
  ]);
  // 2. toppings
  // 3. slicemasters
}

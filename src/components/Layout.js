import React from "react";
import styled from "styled-components";
import "normalize.css";

import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles"; //Doesn't need to wrap children
import Typography from "../styles/Typography"; //Doesn't need to wrap children
import stripes from "../assets/images/stripes.svg";

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(
    2rem,
    10vw,
    12rem
  ); //this overrides the above property if browser doesn't support.max-width
  background: white url(${stripes});
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.44);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background-color: white;
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
};

export default Layout;

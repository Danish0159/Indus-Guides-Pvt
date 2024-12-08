import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import './error.css';

const ErrorPage = () => {
  return (
    <>
      <main className="E_main">
        <section>
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </section>
      </main>
    </>
  );
};


export default ErrorPage;

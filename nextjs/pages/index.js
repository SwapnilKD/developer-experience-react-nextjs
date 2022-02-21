import React from "react";
import Header from "./components/Header";

function HomePage111(props) {
  return (
    <section className="home">
      <Header />
      <img src={"/HomePage.jpg"} alt="Home Page" />
      <p>
        photo can originally be found{" "}
        <a href="https://starwars.fandom.com/wiki/The_Mandalorian">here</a>
      </p>
    </section>
  );
}

export default HomePage111;

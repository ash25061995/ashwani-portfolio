import React from "react";
import plane from "../../assets/img/plane.gif";
import "./Style.scss";

const Introduction = () => {
  return (
    <div className="main">
      <section className="intro">
        <h1>
          <img src={plane} alt="plane" /><br/>
          <span className="title">Ashwani Sinha</span><br/>
        </h1>
      </section>
      <span className="intro-text">I am a</span><br/>
      <button className="Connect-btn">Connect with me!</button>
    </div>
  );
};

export default Introduction;

import React, { Component } from "react";
import { Benefits } from "./Landing-benefits";

class SectionMain extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const styles = {
        color:"#fff",
        backgroundColor:"rgb(18, 33, 80)",
        padding:"5px",
        border:"solid rgb(18, 33, 80) .1px",
        borderRadius:"10px"
    } 
    return (
      <section className="main">
        <article>
          <div className="about-us center">
            <h2>Make landing pages</h2>
            <p>
              Langin pages efectivas para hacer crecer tu negocio, <span style={styles}> crea la tuya  </span>  y disfruta de todos estos beneficios
            </p>
          </div>

          <Benefits />
        </article>
      </section>
    );
  }
}

export { SectionMain };

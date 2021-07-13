import React, { Component } from "react";
import { FormContat } from "./Form-contact";
import "../assets/css/Aside.css";
import "../assets/css/Form.css";
import upSalesRobot from "../assets/img/upsales-robot.png";

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleAside = {
        fontSize:"1.7em"
    }

    return (
      <aside className="aside">
        <div>
        <h4 style={titleAside}>Contactanos y aumenta tus ventas</h4>
          <FormContat />
        </div>

        <div>
          <img src={upSalesRobot} alt="" />
        </div>
      </aside>
    );
  }
}

export { Aside };

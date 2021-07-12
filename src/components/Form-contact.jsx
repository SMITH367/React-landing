import React, { Component } from "react";
import {Button} from './Button'
class FormContat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="" id="" placeholder="Nombre" />
          <input type="email" name="" id="" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <Button contentButton="Enviar"/>
        </form>
      </div>
    );
  }
}

export { FormContat };

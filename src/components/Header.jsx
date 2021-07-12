import React, {Component} from 'react';
import {Button} from './Button'
import "../assets/css/Header.css"
import logo from '../assets/img/logo.png'

class Header extends Component {
  
    render(){
        return (
            <header className="header">
                <div className="logo"> <img src={logo} alt="" className="logo-img" />  </div>
                <div className="button-header"> <Button contentButton="Empieza ahora"/>  </div>

            </header>
        )
    }

}
export {
    Header
}
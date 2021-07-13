import React , {Component}from 'react';
import {FormContat} from './Form-contact'
import '../assets/css/Hero.css'
import heroimg from '../assets/img/create-landings-now.png'

class Hero extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hero">
               <div className="hero-information">
                   <h1 className="hero-title">Creamos tu landing page a medida</h1>
                   <div className="hero-img-container">
                       <img src={heroimg} alt="" className="hero-img" />
                   </div>
                   
               </div>
               <div className="hero-contact">
                   <FormContat></FormContat>
                
                   
               </div>
            </div>
        );
    }
}

export {
    Hero
}
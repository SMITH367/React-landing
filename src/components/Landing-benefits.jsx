import React, {Component} from 'react'
import Upsales from '../assets/img/up-sales.png'
import Client from '../assets/img/clients.png'
import Visitans from '../assets/img/visitants.png'
import "../assets/css/landingBeneficies.css";
class Benefits extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="landing-beneficies-container">
          <div className="benefit">
            <img src={Upsales} alt="" />
            <h3>Aumenta tus ventas</h3>
            <p> Una presencia online significa mucho y podras aumentar tus ingresos</p>
          </div>

          <div className="benefit">
            <img src={Visitans} alt="" />
            <h3>Atrae nuevos clientes</h3>
            <p>Da a conocer tu negocio para atraer a nuevos clientes</p>
          </div>

          <div className="benefit">
            <img src={Client} alt="" />
            <h3>Podras llegar a mas personas</h3>
            <p>Haz que tu negocio crezca y puedas ser reconocido </p>
          </div>
          
        </div>
      );
    }
  }
  
  export { Benefits };

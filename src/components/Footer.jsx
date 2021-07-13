import React , {Component}from 'react';
import '../assets/css/Footer.css'


class Footer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="footer">
                <div>
                    <h2>Make landings </h2>
                    <p>
                    Que esperas, haz crecer tu negocio
                    </p>
                </div>
                <div className="contact">
                    <h2>Contactame</h2>
                    <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>

                  
                    
                    
                </div>
                <div>
                Copyright © 2021 Brayan Puentes.
                </div>
                 
            </div>
           
        );
    }
}

export {
    Footer
   
}
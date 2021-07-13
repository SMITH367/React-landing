import React , {Component}from 'react';
import '../assets/css/Button.css'


class Button extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="button-container">
                 <a href="" className="button ">{this.props.contentButton}</a>
            </div>
           
        );
    }
}

export {
    Button,
   
}
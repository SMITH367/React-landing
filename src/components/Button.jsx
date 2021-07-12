import React , {Component}from 'react';


class Button extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <a href="" className="button">{this.props.contentButton}</a>
        );
    }
}

export {
    Button
}
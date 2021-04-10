import React, { Component } from 'react';
import Color from './Color';
import "./Color.css";
export default class Colors_container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Number_boxes : Array.from({length : 60})
        }
    }
    
    render() {
        const Boxes = this.state.Number_boxes.map(() => 
        <Color />);
        return (
            <div className="Boxes">
                {Boxes}
            </div>
        )
    }
}
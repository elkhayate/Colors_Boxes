import React, { Component } from 'react';
import {choice} from "./helpers";
import "./Color.css";
export default class Color extends Component {
    static defaultProps = {
        colors : ["purple", "blue", "red",
                "violet", "green", "magenta","#7b113a",
                "#f7f3e9","#184d47","#ffe268", "#151515",
                "#1f441e", "#440a67"]
    }
    constructor(props) {
        super(props)
    
        this.state = {
             color : choice(this.props.colors)
        }
    }
    
    generate = () => {
        let New_color;
        do {
            New_color = choice(this.props.colors)
        } while(New_color === this.state.color)
        
        this.setState({color : New_color})
    }
    render() {
        return (
            <div className="Box" 
            style={{backgroundColor : this.state.color}} 
            onClick={this.generate}/>
        )
    }
}
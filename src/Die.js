import React, { Component } from 'react';
import "./Die.css"

export default class Die extends Component {
    render() {
        const Die_face = `fas fa-dice-${this.props.face} ${this.props.rolling && "rolling"}`;
        return(
            <div className="Die">
                <i className={Die_face}></i>
            </div>
        )
    }
}
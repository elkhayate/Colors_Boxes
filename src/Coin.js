import React, { Component } from 'react';

export default class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img src ={this.props.pic} />
            </div>
        ) 
    }
}

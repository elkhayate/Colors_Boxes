import React, { Component } from 'react';
import "./RollDice.css";
import Die from "./Die";

export default class RollDice extends Component {
    static defaultProps = {
        numbers : ["one","two","three","four","five","six"]
    }
    constructor(props) {
        super(props)
    
        this.state = {
             die1 : "one",
             die2 : "two",
             rolling : false
        }
        this.roll = this.roll.bind(this);
    }
    roll () {
        const dice1 = this.props.numbers[Math.floor(Math.random() * this.props.numbers.length)];
        const dice2 = this.props.numbers[Math.floor(Math.random() * this.props.numbers.length)];
        this.setState({
            die1 : dice1 , die2 : dice2 , rolling : true 
        })
    setTimeout(() => {
       this.setState({
           rolling : false
       }) 
    }, 1000);
    }
    
    render(){
        const giphy = <img src ="https://media.giphy.com/media/LOzyexjYyXe7cHSaR0/giphy.gif" /> ;
        return (
            <div className="RollDice">
                <div className="Roll-Dice">
                <Die  face = {this.state.die1} rolling = {this.state.rolling} />
                <Die face = {this.state.die2} rolling = {this.state.rolling}/>
                </div>
                <button disabled={this.state.rolling} onClick={this.roll}>{this.state.rolling ? "Rolling..." : "Roll Dice !"}</button>
                {this.state.die1 === this.state.die2 ? giphy : <h1>Keep Trying !</h1>}
            </div>
        )
    }
}
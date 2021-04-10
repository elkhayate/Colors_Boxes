 import React, { Component } from 'react';
import Coin from "./Coin";
import "./CoinFlip.css";
export default class CoinFlip extends Component {
    static defaultProps = {
        heads : "https://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg",
        tails : "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
    }
    constructor(props) {
        super(props)
    
        this.state = {
             num_flip : 0,
             num_heads : 0,
             num_tails : 0,
             pic : "https://media.giphy.com/media/l0NgRbwVlSLtxO59u/giphy.gif"
        }
        this.flip = this.flip.bind(this);
    }
    
    flip() {
        const Rand_num = Math.floor(Math.random() * 2);
        if(Rand_num){
            
            this.setState({
                num_heads : this.state.num_heads + 1,
                pic : this.props.heads
            })
        }else{
            
                this.setState({
                    num_tails : this.state.num_tails + 1,
                    pic : this.props.tails
                })
        }
        this.setState({
            num_flip : this.state.num_flip + 1
        })
    }
    render() {
        return(
            <section className="CoinFlip">
                <h1>Let's flip a coin !</h1>
                <div className="Coin"><Coin pic = {this.state.pic}/></div>
                <button onClick={this.flip}>Flip Meee</button>
                <div>Out of {this.state.num_flip} flips, there have been {this.state.num_heads} heads and {this.state.num_tails} tails.</div>
            </section>
        )
    }
}
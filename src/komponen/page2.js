import React, { Component } from 'react';
import axios from 'axios';

class Page2 extends Component {
    constructor(){
        super();
        this.state={
            rupiah:'',
            dollar:'',
            bcoin:''
        }
    }
    konvert2 = ()=>{

        var doll = this.refs.input1.value * 14000;
        this.setState({dollar: `https://blockchain.info/tobtc?currency=USD&value=${doll}`})
    }

  render() {
    return (
      <div className="card bg-light" style={{width:"500px", height:"400px"}}>
        <h3>konversi rupiah ke bitcoin</h3>
        <div className="card-body">
            <input type="number" className="" ref="input1" placeholder="masukkan jumlah rupiah"></input>
            <button onClick={()=>{this.konvert2()}} className="btn btn-success rounded">convert</button>
        </div>
        <h4>{this.state.dollar}</h4>
      </div>
    );
  }
}

export default Page2;

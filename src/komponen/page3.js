import React, { Component } from 'react';

class Page3 extends Component {
  constructor(){
    super();
    this.state={
        rupiah3:'',
        dollar3:'',
        bcoin3:''
    }
}
konvert2 = ()=>{

    var doll3 = this.refs.input2.value * 14000;
    this.setState({dollar3: `https://blockchain.info/tobtc?currency=USD&value=${doll3}`})
}
  render() {
    return (
    <div className="card bg-light" style={{width:"500px", height:"400px"}}>
        <h3>konversi bitcoin ke rupiah</h3>
        <div className="card-body">
            <input type="number" className="" ref="input2" placeholder="masukkan jumlah rupiah"></input>
            <button className="btn btn-success rounded">convert</button>
        </div>
        <h4>{this.state.dollar3}</h4>
      </div>
    );
  }
}

export default Page3;

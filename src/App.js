import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import Dua from './komponen/page2.js'
import Tiga from './komponen/page3.js'

class App extends Component {
  constructor(){
    super();
    this.state= {
      judul:'',
     daftarBitcoin:[]
    }
  }
  componentDidMount(){
    axios.get('https://blockchain.info/ticker').then((z) => {
      this.setState({
        daftarBitcoin: z.data,
      })
      console.log(this.state.daftarBitcoin)
      console.log(this.state.daftarBitcoin.USD)

    })
    this.setState({
      judul: 'daftar harga bitcoin'
    })

  }
  render() {

    var listbitcoin = this.state.daftarBitcoin.map((x,y)=>{
      
      var mataUang = x.daftarBitcoin;
      var jual = x.daftarBitcoin.sell;
      var beli = x.daftarBitcoin.buy;

      return <tr key={y}><td>{mataUang}</td><td>{jual}</td><td>{beli}</td></tr>
    
    })

    return (
      <div>
        <center>
        <table>
          <thead><tr><th>Mata Uang</th><th>Harga Jual Bitcoin</th><th>Harga Beli Bitcoin</th></tr></thead>
          <tbody>{listbitcoin}</tbody>
        </table>

        <Link to='/'><button className="btn btn-primary mx-2">Daftar Bitcoin</button></Link>
        <Link to='/dua'><button className="btn btn-primary mx-2">Konversi Rp ke Bit</button></Link>
        <Link to='/tiga'><button className="btn btn-primary mx-2 my-3">Konversi Bit ke Rp</button></Link>
        
        <h3>{this.state.judul}</h3>
        
        <div>
          <Route path='/' component={'Home'}/><br/>
          <Route path='/dua' component={Dua}/><br/>
          <Route path='/tiga' component={Tiga}/>
        </div>

        </center>
      </div>
    );
  }
}

export default App;

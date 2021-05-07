import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Web3 from "web3";
import "./App.css";
import Color from "../abis/Color.json";
import AccessList from './AccessList';
import RestrictedContent from './RestrictedContent';

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider using MetaMask."
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = Color.networks[networkId];
    if (networkData) {
      const abi = Color.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      console.log(contract);
      this.setState({ contract });
      const totalSupply = await contract.methods.totalSupply().call();
      //const totalSupply = await contract.methods.totalSupply();
      //console.log(await contract.methods);
      this.setState({ totalSupply });
      for (let i = 1; i <= totalSupply; i++) {
        // const color = await contract.methods.colors(i - 1).call();
        const color = await contract.methods.accessCodes(i - 1).call();
        this.setState({ colors: [...this.state.colors, color] });
      }
    } else {
      window.alert("Smart contract is not deployed to detected network");
    }
  }

  // mint = color => {
  mint = () => {
    const color = uuidv4();
    // console.log(color);
    this.state.contract.methods
      // .mint(color)
      .buyAccessCode(color, '0x20325DE54276207325A9F5525D8CF8F203Ab4029')
      .send({ from: this.state.account, value: 1000000000000000000 })
      .once("receipt", receipt => {
        this.setState({
          colors: [...this.state.colors, color]
        });
      });
  };

  route = routeName => this.setState({ route: routeName });

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      contract: null,
      totalSupply: 0,
      colors: [],
      price: 1000000000000000000,
      route: 'access'
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pearson eText Access Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">
                <span id="account">{this.state.account}</span>
              </small>
            </li>
          </ul>
        </nav>
        {this.state.route === 'access' && <AccessList colors={this.state.colors} mint={this.mint} price={this.state.price} route={this.route} />}
        {this.state.route === 'restricted' && <RestrictedContent contract={this.state.contract} route={this.route} />}
      </div>
    );
  }
}

export default App;

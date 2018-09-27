import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import List from "./List";

import logo from "../images/logo.png";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      store: [],
      count: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://marketplace.bestbuy.ca/api/offers?api_key=fa4ab3b8-4421-4a9a-9e2d-6c087e7bc9ce&max=100"
      )
      .then(json =>
        json.data.offers.map(offer => ({
          id: offer.shop_sku,
          title: offer.product_title,
          quantity: offer.quantity
        }))
      )
      .then(newData => this.setState({ products: newData, store: newData }))
      .catch(error => alert(error));
  }

  filterProduct(e) {
    this.setState({
      products: this.state.store.filter(item =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : null;
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Market Unity</h1>
        </header>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
        </button>
        <button className="btn m-2 btn-danger" onClick={this.handleDecrement}>
          Dec
        </button>
        <div className="container">
          <SearchBar searchFunc={e => this.filterProduct(e)} />
          <List productName={products} />
        </div>
      </div>
    );
  }
}

export default App;

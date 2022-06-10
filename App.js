import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }
  addToCart =(product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false
    cartItems.forEach(item =>{
      if(item._id === product._id){
        item++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart){
      cartItems.push({...product, count: 1})
      
    }
    this.setState({cartItems});
  } 
  render() {
  

  
  return (
    <div className="grid-container">
      <header>
        
        <div><button className="category">women</button><button className="category">men</button><button className="category">kids</button><a href="ссылка">
   <img className="logo" src="images/logo1.jpg" />
  </a>
  <div className="container">
    <div className="currency">
      <select>
        <option value="us dollar">$</option>
        <option value="euro">eu</option>
    </select>
    </div>
    </div>
  </div>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={this.state.products} addToCart={this.addToCart}></Products>
            </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} /></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
  }
}

export default App; 


















































  

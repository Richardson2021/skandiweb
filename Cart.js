import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
      const {cartItems} = this.props;
    return (
      <div>
          {cartItems.length === 0? <div className="cart cart-header">Cart is empty</div>
          :
          <div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>}
          <div className="cart">
            <ul className="cartItems">{Cart.Items.map(item=>(
              <li key="Items._id">
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{cartItems.title}</div>
                  <div className="right">
                    {(item.price)} x {item.count}{" "}
                    <button className="button" onClick={()=>this.props.removeFromCart(item)}>Remove</button></div>
                </div>
              </li>
            ))}</ul>
            </div>
            
      </div>
      
      
    )
  
  
    

  }
}

  
      


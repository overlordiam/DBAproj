import React from "react";
import "./checkoutPage.css";
import { useStateValue } from "./StateProvider";
import StripeCheckoutButton from "./Stripe";
import CartCheckout from "./cartCheckout";
import { getBasketTotal } from "./reducer";
import Subtotal from "./Subtotal"
import {useHistory}  from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
<div className="main_content_checkout">
{basket.map((item) => (
            <CartCheckout
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
</div>
        </div>
      </div>
       <div className="bigTotal"> 
        <div className="totalContainer">
            <Subtotal />
        </div>
        <div className="warningContainer">
        Please use the following test credit card for payments
           <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        <StripeCheckoutButton price={getBasketTotal(basket)} />

        </div>
     </div> 
    </div>
  );
}

export default Checkout;


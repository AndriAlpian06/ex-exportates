import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { dataProducts } from "../../Products";
import { CartItem } from "./cart-item";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import {useUser} from '../../components/UserContext'
import {useAuth} from '../../components/AuthToken'

import "./cart.css";

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(angka);
}

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [paymentToken, setPaymentToken] = useState(null)
  const totalAmount = getTotalCartAmount();
  const {userData} = useUser()
  const {token} = useAuth()
  
  const navigate = useNavigate();

  const imageUrl1 = 'https://cdn.create.vista.com/api/media/small/296406986/stock-photo-top-view-shopping-cart-presents';
  
  const checkoutPayment = async () => {
    
    //console.log(userData)

    try {

      const transactions = [];
      dataProducts.forEach((product) => {
        if (cartItems[product.id] !== 0) {
          transactions.push({
            id: product.id,
            price: product.price,
            quantity: cartItems[product.id],
            name: product.name,
          });
        }
      });

      const paymentData = { // Total jumlah pembayaran
        orderId: 'ORDER-123',
        totalAmount: totalAmount,
        transactions: transactions,
        customer_details: {
          "first_name": userData.data[0].firstname,
          "last_name": userData.data[0].lastname,
          "email": userData.data[0].email,
          "phone": userData.data[0].phone,
          "billing_address":{
            "first_name": userData.data[0].firstname,
            "last_name": userData.data[0].lastname,
            "email": userData.data[0].email,
            "phone": userData.data[0].phone,
            "address": userData.data[0].address,
            "city": userData.data[0].city,
            "postal_code": userData.data[0].postal_code,
            "country_code": userData.data[0].country_code,
          }
        }
      };

      //console.log(paymentData)

      const response = await axios.post("https://api-exportates.vercel.app/checkout", paymentData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      //console.log(response.data.token.token)
      if(response.status === 200){
        const data = response.data
        //console.log(data.token.token)
        setPaymentToken(data.token.token)
        window.snap.pay(data.token.token);
      } else {
        console.log(response)
      }
    }
    catch (err){
      console.log(err)
    }
  }

  return (
    <>
      <div className='w-full h-96 relative bg-black'>
          <img className='w-full h-full object-cover opacity-50' src={imageUrl1} alt="" />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                <h1 className='uppercase text-5xl font-bold lg:ml-40 py-8 mt-16'>Your Cart Items</h1>     
            </div>
      </div>
      <div className="cart">
        <div>
          <h1></h1>
        </div>
        <div className="cart">
          {dataProducts.map((product, index) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={index} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: {formatRupiah(totalAmount)} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              id="pay-button"
              onClick={() => 
                checkoutPayment()
              }
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1 className="py-4 text-4xl font-bold"> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
};
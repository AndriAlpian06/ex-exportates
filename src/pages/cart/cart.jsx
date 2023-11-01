import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { dataProducts } from "../../Products";
import { CartItem } from "./cart-item";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

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


  const navigate = useNavigate();

  const imageUrl1 = 'https://cdn.create.vista.com/api/media/small/296406986/stock-photo-top-view-shopping-cart-presents';

  const checkoutPayment = async () => {
    
    try {

      const paymentData = { // Total jumlah pembayaran
        orderId: 'ORDER-123',
        totalAmount: totalAmount,
        transactions: [],
      };

      // Isi daftar item yang terpilih
      dataProducts.forEach((product) => {
        if (cartItems[product.id] !== 0) {
          paymentData.transactions.push({
            id: product.id,
            price: product.price,
            quantity: cartItems[product.id],
            name: product.name,
          });
        }
      })

      const response = await axios.post("http://localhost:4000/checkout2", paymentData, {
        headers: {
          "Content-Type": "application/json",
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

  // Fungsi untuk menangani pembayaran
  // const handlePayment = async () => {
  //   try {
  //     // Buat objek pembayaran
  //     const paymentData = {
  //       amount: totalAmount, // Total jumlah pembayaran
  //       items: [], // Daftar item yang terpilih
  //     };

  //     // Isi daftar item yang terpilih
  //     dataProducts.forEach((product) => {
  //       if (cartItems[product.id] !== 0) {
  //         paymentData.items.push({
  //           id: product.id,
  //           price: product.price,
  //           quantity: cartItems[product.id],
  //           name: product.name,
  //         });
  //       }
  //     });

  //     // Kirim permintaan pembayaran ke server backend
  //     const response = await axios.post("http://localhost:4000/api/checkout", paymentData);

  //     // Redirect ke halaman pembayaran Midtrans
  //     window.location.href = response.data.redirect_url;
  //   } catch (error) {
  //     console.error("Error saat memproses pembayaran:", error);
  //   }
  // };

  // console.log(cartItems)
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
                // navigate("/checkout");
              
              //onClick={handlePayment}
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
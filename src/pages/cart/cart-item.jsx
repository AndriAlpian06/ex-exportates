import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(angka);
}

export const CartItem = (props) => {
  const { id, name, img, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

    // console.log(id, name, price)

  return (
    <div className="cartItem" key={id}>
      <img src={img} alt="" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: {formatRupiah(price)}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
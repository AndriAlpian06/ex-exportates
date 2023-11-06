import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(angka);
}

export const Product = (props) => {
  const { id, name, img, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  

  const cartItemCount = cartItems[id];

  // State untuk melacak status login pengguna
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" data-aos="fade-up" data-aos-duration="1000" key={id}>
        <div className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
            }}>
            <button 
                className="p-2 rounded-full bg-green-500 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                // onClick={() => {
                //   if (isUserLoggedIn) {
                //       // Lakukan logika penambahan ke keranjang
                //   } else {
                //       alert("Anda harus login terlebih dahulu untuk menambahkan ke keranjang.");
                //   }
                // }}
                onClick={() => addToCart(id)} 
                >
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
                {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
        <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{name}</h3>
            <span className="text-gray-500 mt-2">{formatRupiah(price)}</span>
        </div>
      </div>
    </>
  );
};
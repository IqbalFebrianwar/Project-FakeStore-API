"use client";

import { useEffect, useState } from "react";

const ButtonAddCart = ({ id }) => {
    const [isAvaibleCart, setIsAvaibleCart] = useState(false)

    useEffect(() => {
        const getCart = localStorage.getItem("cart");
        
        if(getCart != null && JSON.parse(getCart).id.find(e => e == id) != undefined){
            setIsAvaibleCart(true)
        }else{
            setIsAvaibleCart(false)
        }
    })
  const handleCart = () => {
    let item = { id: [] };
    const getCart = localStorage.getItem("cart");

    if (getCart != null) {
      item = JSON.parse(getCart);
    }

    if (item.id.find((e) => e == id) == undefined) {
      item.id.push(id);
      localStorage.setItem("cart", JSON.stringify(item));
    }

    setIsAvaibleCart(true)
  };
  return (
    <>
      {!isAvaibleCart ? (
        <button
          onClick={handleCart}
          className="btn bg-black text-md text-white"
        >
          Add to Cart
        </button>
      ) : null}
    </>
  );
};
export default ButtonAddCart;

"use client";

import Image from "next/image";

const { useState, useEffect } = require("react");

const childCart = () => {
  const [dataId, setDataId] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getID = localStorage.getItem("cart");
    if (getID != null) {
      const dataID = JSON.parse(getID);
      setDataId(dataID);
    }
  }, []);

  useEffect(() => {
    if (dataId) {
      const getData = async () => {
        const tempData = [];
        await Promise.all(
          dataId.id.map(async (e) => {
            const res = await fetch(`https://fakestoreapi.com/products/${e}`);
            const body = await res.json();
            tempData.push(body);
          })
        );

        console.log(tempData);
        setData(tempData);
      };

      getData();
    }
  }, [dataId]);

  const removeCart = () => {
    localStorage.removeItem("cart");
    setData(null);
  };

  return (
    <div className="w-full grid justify-center">
      <div className="w-full">
        <h1 className="mt-20 mb-20 text-center text-lg font-bold">My Cart</h1>
      </div>
      {data != null ? (
        data.map((e) => (
          <>
            <div className="w-full space-x-5 h-40 px-10 items-center rounded-lg shadow-md flex">
              <Image width={100} height={70} src={e.image} />
              <div className=" space-y-2">
                <h1 className="font-bold text-lg">{e.title}</h1>
                <p>$ {e.price}</p>
              </div>
            </div>
          </>
        ))
      ) : (
        <p>Tidak Ada Data</p>
      )}

      <div className="w-full flex justify-end my-10">
        <button
          onClick={removeCart}
          className="btn bg-black text-white justify-end"
        >
          Delete All
        </button>
        <button className="btn bg-black text-white justify-end">Buy All</button>
      </div>
    </div>
  );
};
export default childCart;

const cartProducts = () => {
  return (
    <div className="w-full grid justify-center">
      <div className="w-full">
        <h1 className="mt-20 mb-20 text-center text-lg font-bold">My Cart</h1>
      </div>
      <div className="w-full space-x-5 h-40 px-10 items-center rounded-lg shadow-md flex">
        <img src="" alt="img" />
        <div className=" space-y-2">
          <h1 className="font-bold text-lg">Tiitle Product</h1>
          <p>$ Price</p>
          <button className="btn bg-black text-white justify-end">Edit</button>
        </div>
      </div>
      <div className="w-full flex justify-end my-10">
        <button className="btn bg-black text-white justify-end">Buy All</button>
      </div>
    </div>
  );
};
export default cartProducts;

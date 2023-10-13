import Link from "next/link";

const CardProducts = (data) => {
    return (
      <div className="card w-60 h-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={data.image}
            alt="All Products"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg line-clamp-1">{data.title}</h2>
          <p>$ {data.price}</p>
          <div className="card-actions justify-end">
            <Link href={`/products?id=${data.id}`} className="btn bg-black text-white">Buy Now</Link>
          </div>
        </div>
      </div>
    );
  };
  export default CardProducts
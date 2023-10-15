import Image from "next/image";
import ButtonAddCart from "@/components/buttonAddcart";

const DetailProducts = async ({ searchParams }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${searchParams.id}`
  );
  const data = await res.json();

  console.log(Math.round(data.rating.rate));

  
  return (
    <div className="w-full gap-20 flex h-screen items-center justify-center">
      <div className="flex justify-between gap-20 my-10">
        <div>
          <Image width={300} height={500} src={data.image} />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <p>$ {data.price}</p>
          <div className="rating">
            {Array.from({ length: 4 }).map((_, index) => (
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                defaultChecked={index + 1 == Math.round(data.rating.rate)}
              />
            ))}
          </div>
          <p>Description :</p>
          <p className=" max-w-[500px]">{data.description}</p>
          <button className="btn bg-black text-md text-white">Buy now</button>
          <ButtonAddCart id={data.id} />
        </div>
      </div>
    </div>
  );
};
export default DetailProducts;

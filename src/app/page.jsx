import CardProducts from "@/components/cardproduct";
import CartIcon from "@/components/svg/cart.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const getData = await res.json();

  return (
    <>
      <Navbar />
      <div className="w-full grid text-center justify-center">
        <div className="w-full flex items-center justify-between">
          <h1 className="mt-20 mb-20 text-lg font-bold">Product</h1>
          <Link href={"/cart"}>
            <Image
              className="btn bg-white"
              src={CartIcon}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-16">
          {getData.map((e) => (
            <CardProducts
              key={e.id}
              id={e.id}
              title={e.title}
              price={e.price}
              image={e.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

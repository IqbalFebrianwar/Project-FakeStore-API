import CardProducts from "@/components/cardproduct";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const getData = await res.json();

  return (
    <div className="w-full grid text-center justify-center">
      <h1 className="mt-20 mb-20 text-lg font-bold">Product</h1>
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
  );
}

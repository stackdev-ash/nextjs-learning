import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default async function ProductsPage() {
  const res = await fetch(
    "https://fakestoreapi.com/products"
  );

  const products: Product[] = await res.json();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        SSR Products
      </h1>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border p-4 shadow"
          >
            <h2 className="font-semibold">
              {product.title}
            </h2>

            <p className="my-2">
              ₹{product.price}
            </p>

            <Link
              href={`/ssr/products/${product.id}`}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
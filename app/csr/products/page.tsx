"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await res.json();

      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-2xl">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Products List
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
              href={`/csr/products/${product.id}`}
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
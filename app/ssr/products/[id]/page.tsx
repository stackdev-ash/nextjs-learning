interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const id = (await params).id;

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const product = await res.json();

  return (
    <div className="p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Product Details
      </h1>

      <h2 className="text-xl font-semibold">
        {product.title}
      </h2>

      <p className="mt-3">
        ₹{product.price}
      </p>

      <p className="mt-3">
        {product.description}
      </p>
    </div>
  );
}
interface Product {
  id: number;
  title: string;
}

export default async function CachingDemo() {
  // SSG
  const ssgProducts: Product[] = await (
    await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "force-cache",
      }
    )
  ).json();

  // SSR
  const ssrProducts: Product[] = await (
    await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store",
      }
    )
  ).json();

  // ISR
  const isrProducts: Product[] = await (
    await fetch(
      "https://fakestoreapi.com/products",
      {
        next: {
          revalidate: 30,
        },
      }
    )
  ).json();

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Next.js Caching Demo
      </h1>

      <div>
        <h2 className="text-xl font-semibold">
          SSG (force-cache)
        </h2>
        <p>{ssgProducts[0].title}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          SSR (no-store)
        </h2>
        <p>{ssrProducts[0].title}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          ISR (revalidate: 30)
        </h2>
        <p>{isrProducts[0].title}</p>
      </div>
    </div>
  );
}

// Pages with fetch
//     ↓
// Be explicit with cache settings

// Pages without fetch
//     ↓
// No need


// SSG
// ↓
// cache: "force-cache"
// ↓
// Static

// SSR
// ↓
// cache: "no-store"
// ↓
// Fresh every request

// ISR
// ↓
// revalidate: 30
// ↓
// Refresh every 30 sec
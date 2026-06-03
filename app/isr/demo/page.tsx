export const revalidate = 10;

export default async function ISRDemo() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        ISR Demo
      </h1>

      <p className="mt-4">
        Generated At:
      </p>

      <p className="font-semibold">
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}



// CSR
// ↓
// Browser fetches data
// ↓
// Every request

// SSR
// ↓
// Server fetches data
// ↓
// Every request

// SSG
// ↓
// Build time fetch
// ↓
// Never changes until rebuild

// ISR
// ↓
// Build time fetch
// ↓
// Automatically regenerates later
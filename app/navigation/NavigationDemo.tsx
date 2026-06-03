"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";

export default function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-blue-600">
          Navigation Demo
        </h1>

        {/* Current Path */}
        <div className="mb-6">
          <h2 className="text-xl text-black font-semibold">
            Current Pathname
          </h2>

          <p className="mt-2 rounded text-black bg-gray-100 p-3">
            {pathname}
          </p>
        </div>

        {/* Query Params */}
        <div className="mb-6">
          <h2 className="text-xl text-black font-semibold">
            Query Parameter
          </h2>

          <p className="mt-2 rounded text-black bg-gray-100 p-3">
            id = {searchParams.get("id") || "Not Found"}
          </p>
        </div>

        {/* Link */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl text-black font-semibold">
            Link Component
          </h2>

          <Link
            href="/static-routing/about"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Go to About Page
          </Link>
        </div>

        {/* router.push */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl text-black font-semibold">
            router.push()
          </h2>

          <button
            onClick={(e) =>
              router.push("/dynamic-routing/user/ashish")
            }
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Go to Ashish Profile
          </button>
        </div>

        {/* router.replace */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl text-black font-semibold">
            router.replace()
          </h2>

          <button
            onClick={() =>
              router.replace("/static-routing/about")
            }
            className="rounded bg-yellow-500 px-4 py-2 text-white"
          >
            Replace Route
          </button>
        </div>

        {/* router.back */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl text-black font-semibold">
            router.back()
          </h2>

          <button
            onClick={() => router.back()}
            className="rounded bg-purple-500 px-4 py-2 text-white"
          >
            Go Back
          </button>
        </div>

        {/* router.forward */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl text-black font-semibold">
            router.forward()
          </h2>

          <button
            onClick={() => router.forward()}
            className="rounded bg-pink-500 px-4 py-2 text-white"
          >
            Go Forward
          </button>
        </div>

        {/* router.refresh */}
        <div>
          <h2 className="mb-3 text-xl text-black font-semibold">
            router.refresh()
          </h2>

          <button
            onClick={() => router.refresh()}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Refresh Route
          </button>
        </div>
      </div>
    </div>
  );
}
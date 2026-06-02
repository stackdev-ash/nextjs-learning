interface UserPageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserPage({
  params,
}: UserPageProps) {
  const { username } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          User Profile
        </h1>

        <p className="mt-4 text-lg text-black">
          Username:{" "}
          <span className="font-semibold text-green-600">
            {username}
          </span>
        </p>
      </div>
    </div>
  );
}
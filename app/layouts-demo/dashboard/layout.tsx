export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70vh]">
      <aside className="w-64 bg-gray-900 p-6 text-white">
        <h2 className="text-xl font-bold">
          Dashboard Sidebar
        </h2>

        <ul className="mt-4 space-y-2">
          <li>Profile</li>
          <li>Orders</li>
          <li>Settings</li>
        </ul>
      </aside>

      <section className="flex-1 p-6">
        {children}
      </section>
    </div>
  );
}
// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="pt-16 pb-8 bg-gray-900 min-h-screen pl-0 md:pl-64">
        {children}
      </main>
    </div>
  );
}

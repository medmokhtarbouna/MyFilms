import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="pt-16 pl-64 pb-8 bg-gray-900 min-h-screen">
        {children}
      </main>
    </div>
  );
}

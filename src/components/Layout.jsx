import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
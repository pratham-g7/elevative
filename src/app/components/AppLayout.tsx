import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0C08] text-[#F2EFD8] selection:bg-[#F2EFD8]/20 selection:text-[#F2EFD8]">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

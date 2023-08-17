"use client";
import Image from "next/image";
import { Navbar } from "./components";
import { useRouter } from "next/navigation";
import { Footer } from "./components";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeRoute={router.pathname} />

      <main className="overflow-hidden flex-grow">
        {/* Contenido de la página */}
      </main>

      <Footer />
    </div>
  );
}

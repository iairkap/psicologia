"use client";
import Image from "next/image";
import { Navbar } from "./components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="overflow-hidden">
      <Navbar activeRoute={router.pathname} />
      {/* <Footer /> */}
    </main>
  );
}

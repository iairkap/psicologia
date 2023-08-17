"use client";
import Image from "next/image";
import { Navbar } from "./components";
import { useRouter } from "next/navigation";
import { Footer } from "./components";
import "./styles.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeRoute={router.pathname} />

      <main className="overflow-y-auto mt-36 flex-grow">
        {/* Sección 1 */}
        <section className="firts-section flex p-4">
          <div className="w-1/2 pr-4">
            <Image
              src="https://images.pexels.com/photos/5207589/pexels-photo-5207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de la sección 1"
              width={500}
              height={600}
            />
          </div>
          <div className="w-1/2 ">
            <div className="font-semibold">
              <h1 className="text-2xl lg:text-3xl">
                Acompañamiento Terapéutico en Neuquen
              </h1>
            </div>
            <div className="mt-4 text-light-pink font-semibold">
              <h2 className="text-lg lg:text-xl">
                Tu Psicóloga Perinatal de Confianza Construyendo Familias
                Fuertes desde el Inicio.
              </h2>
            </div>
            <Link href="/schedule">
              <button className="global-primary-button mt-4">
                Pedir Turno
              </button>
            </Link>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="flex p-4">
          <div className="w-1/2 pl-4">
            <p>Texto de la sección 2</p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://images.pexels.com/photos/5207589/pexels-photo-5207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de la sección 2"
              width={500}
              height={300}
            />
          </div>
        </section>

        {/* Sección 3 */}
        <section className="flex bg-dark-pink p-4">
          <div className="w-1/4 text-white">
            <p>Texto de la sección 3 - Lado izquierdo</p>
            <button className="text-white bg-dark-pink">Botón</button>
          </div>
          <div className="w-1/2"></div>
          <div className="w-1/4 text-white">
            <p>Texto de la sección 3 - Lado medio</p>
            <button className="text-white bg-dark-pink">Botón</button>
          </div>
          <div className="w-1/2"></div>
          <div className="w-1/4 text-white">
            <p>Texto de la sección 3 - Lado derecho</p>
            <button className="text-white bg-dark-pink">Botón</button>
          </div>
        </section>

        {/* Sección 4 */}
        <section className="flex p-4">
          <div className="h-36">
            <p>Info de la sección 4</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

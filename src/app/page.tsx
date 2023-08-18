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
            <div>
              <p>
                <span className="text-dark-pink">¡Hola!</span> Soy una psicóloga
                perinatal dedicada a brindar apoyo emocional y psicológico a las
                personas durante el período de embarazo, parto y posparto.
              </p>
            </div>
            <div className="mt-10">
              <p>
                Mi objetivo es acompañarte en este viaje emocionalmente
                significativo, proporcionando orientación y herramientas para
                enfrentar desafíos como ansiedad, depresión, cambios de estado
                de ánimo y ajustes a la nueva etapa de la maternidad/paternidad.
              </p>
            </div>
            <div className="mt-10">
              <p>
                Juntos, podemos trabajar para fortalecer tu bienestar emocional
                y promover un ambiente saludable para ti y tu familia. Estoy
                aquí para ayudarte a navegar por este emocionante y
                transformador capítulo de tu vida.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="https://images.pexels.com/photos/7631944/pexels-photo-7631944.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de la sección 2"
              width={500}
              height={300}
            />
          </div>
        </section>

        {/* Sección 3 */}
        <section className="bg-dark-pink">
          <div className="w-full text-white py-4 px-4 mb-4">
            <h2>SERVICIOS</h2>
          </div>
          <div className="flex p-4">
            <div className="w-1/4 text-white">
              <Image
                src="/images/heart.png"
                alt="Icono de corazón"
                width={50}
                height={50}
              />
              <h3>Texto de la sección 3</h3>
              <h3>Lado izquierdo</h3>
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

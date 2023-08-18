"use client";
import Image from "next/image";
import { Navbar } from "./components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Footer } from "./components";
import "./styles.css";
import Link from "next/link";
import { MyModal } from "./components";
import Vector1 from "../../public/vector1.png";
import Vector2 from "../../public/vector2.png";
import Vector3 from "../../public/vector3.png";

export default function Home() {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  /* VECTORES PARA LOS MODALES */
  const svgString = `
  <svg width="39" height="97" viewBox="0 0 39 97" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.86287 9.66667C4.86287 4.30167 9.16454 0 14.5295 0C19.8945 0 24.1962 4.30167 24.1962 9.66667C24.1962 15.0317 19.8945 19.3333 14.5295 19.3333C9.16454 19.3333 4.86287 15.0317 4.86287 9.66667ZM38.6962 53.1667C38.6962 46.69 34.6845 41.0833 29.0295 38.6667C29.0295 34.821 27.5019 31.1329 24.7826 28.4136C22.0633 25.6943 18.3752 24.1667 14.5295 24.1667C10.6839 24.1667 6.99577 25.6943 4.27649 28.4136C1.55721 31.1329 0.029541 34.821 0.029541 38.6667V72.5H9.69621V96.6667H24.1962V72.5H38.6962V53.1667Z" fill="white"/>
  </svg>
`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeRoute={router.pathname} />

      <main className="overflow-y-auto mt-36 flex-grow">
        {/* Section 1 */}
        <section className="firts-section flex flex-col md:flex-row p-4">
          <div className="w-full md:w-1/2 pr-4">
            <Image
              src="https://images.pexels.com/photos/5207589/pexels-photo-5207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de la sección 1"
              width={500}
              height={600}
              className="w-full md:w-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
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

        {/* Section 2 */}
        <section className="flex flex-col-reverse md:flex-row p-4 mt-20">
          <div className="w-full md:w-1/2 pl-4">
            <div>
              <p>
                <span className="text-dark-pink font-medium">¡Hola!</span> Soy
                una psicóloga perinatal dedicada a brindar apoyo emocional y
                psicológico a las personas durante el período de embarazo, parto
                y posparto.
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
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.pexels.com/photos/7631944/pexels-photo-7631944.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen de la sección 2"
              width={500}
              height={300}
              className="w-full md:w-auto"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-dark-pink mt-20">
          <div className="w-full text-white py-4 px-4 text-lg font-bold">
            <h2>SERVICIOS</h2>
          </div>
          <div className="flex p-4 space-x-4">
            <div className="w-1/3 text-white flex flex-col justify-between items-start">
              <Image
                src={Vector1}
                alt="Perinatal"
                width={70}
                height={50}
                className="mb-4 "
              />
              <h3 className="font-semibold">Psicología Perinatal</h3>
              <h3 className="mt-3 text-sm">
                Orientada a la prevención, cuidado, apoyo, diagnóstico e
                intervención en la salud mental de la mujer y su familia durante
                todo el proceso desde la concepción, embarazo, parto, postparto
                y puerperio.
              </h3>
              <div className="mt-auto">
                <button
                  className="text-black font-semibold bg-dark-pink mt-3 text-sm bg-grey rounded-md px-4 py-2 font-medium"
                  onClick={openModal}
                >
                  VER MÁS...
                </button>
              </div>
            </div>
            <div className="w-1/3 text-white flex flex-col justify-between items-start">
              <Image
                src={Vector2}
                alt="Perinatal"
                width={70}
                height={50}
                className="mb-4 "
              />
              <h3 className="font-semibold">Psicología Clínica de Adultos</h3>
              <h3 className="mt-3 text-sm">
                Ayudar al manejo del malestar provocado por procesos de duelo,
                estrés académico o laboral, dificultades familiares, rupturas
                sentimentales, cambios vitales, episodios traumáticos, baja
                autoestima, miedos, fobias, enfermedades, dolor crónico entre
                otros.
              </h3>
              <div className="mt-auto">
                <button
                  className="text-black font-semibold bg-dark-pink mt-3 text-sm bg-grey rounded-md px-4 py-2 font-medium"
                  onClick={openModal}
                >
                  VER MÁS...
                </button>
              </div>
            </div>
            <div className="w-1/3 text-white flex flex-col justify-between items-start">
              <Image
                src={Vector3}
                alt="Perinatal"
                width={70}
                height={50}
                className="mb-4 "
              />
              <h3 className="font-semibold">Psicología Infantil</h3>
              <h3 className="mt-3 text-sm">
                Aborda el estudio y tratamiento de los problemÁs psicológicos y
                del neurodesarrollo de los niños y adolescentes (autismo,
                hiperactividad, adicciones…).
              </h3>
              <div className="mt-auto">
                <button
                  className="text-black font-semibold bg-dark-pink mt-3 text-sm bg-grey rounded-md px-4 py-2 font-medium"
                  onClick={openModal}
                >
                  VER MÁS...
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex p-4 mt-20">
          <div className="h-36">
            <p>Info de la sección 4</p>
          </div>
        </section>

        <MyModal isOpen={modalIsOpen} closeModal={closeModal}>
          <h2>Título del Modal</h2>
          <p>Descripción del modal.</p>
          <p>Contenido del modal.</p>
        </MyModal>
      </main>

      <Footer />
    </div>
  );
}

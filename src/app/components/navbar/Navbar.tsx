"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ServicesContext } from "../../Context";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activeRoute }) => {
  const router = useRouter();
  const activeStyle = "underline underline-thickness-thin";
  const activeListItemStyle = "border-b-2 border-dark-pink";
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isRouteActive = (route) => route === activeRoute;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex fixed justify-between items-center hrefp-0 fixed z-10 w-full py-5 px-8 text-sm font-medium">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <Link href="/">
            <Image
              className="rounded-full"
              src="https://img.freepik.com/vector-gratis/joven-atractiva_225004-1459.jpg?w=740&t=st=1692243341~exp=1692243941~hmac=780bb8bb935dab9cc33fec304289e06e1677aaa283b12b3ac1be4140963bf415"
              alt="Psychologist Photo"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <h1 className="font-semibold text-lg">Psicolog@</h1>
        </li>
      </ul>
      {/* ---------- Hamburger Menu --------- */}
      {/* Hamburger menu button */}
      {window.innerWidth <= 655 && (
        <button
          onClick={toggleMenu}
          className={`md:hidden text-4xl mr-3 ${
            isMenuOpen ? "text-dark-pink" : "text-black"
          }`}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      )}
      {/* Hamburger menu links */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-3 text-sm cursor-pointer font-medium">
          <li className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4">
            <Link href="/">INICIO</Link>
          </li>
          <li className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4">
            <Link href="/article">ARTÍCULOS</Link>
          </li>
          <li className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4">
            <Link href="/about">SOBRE MI</Link>
          </li>
        </ul>
      )}
      {/* --------- Finish Hamburger Menu ---------- */}

      {/* --------- Largest Menu ---------- */}
      {windowWidth >= 656 && !isMenuOpen && (
        <ul className={`flex items-center gap-3 text-lg cursor-pointer`}>
          <li
            className={`${
              isRouteActive("/") ? activeListItemStyle : ""
            } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
          >
            <Link href="/">INICIO</Link>
          </li>
          <li
            className={`${
              isRouteActive("/article") ? activeListItemStyle : ""
            } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
          >
            <Link href="/article">ARTÍCULOS</Link>
          </li>
          <li
            className={`${
              isRouteActive("/about") ? activeListItemStyle : ""
            } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
          >
            <Link href="/about">SOBRE MI</Link>
          </li>
        </ul>
      )}
      {/* --------- Finish Largest Menu ---------- */}

      <ul className="flex items-center gap-3 font-semibold text-lg cursor-pointer">
        <button
          className={`global-button border border-dark-pink rounded-lg px-4 py-2 text-dark-pink cursor-pointer ${
            windowWidth <= 390 ? "text-sm py-1 px-2" : ""
          }`}
          onClick={() => {
            router.push("/schedule");
          }}
        >
          Agendar
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

//RESPALDO SIN MENU HAMBURGUESA
// ("use client");
// import { useContext } from "react";
// import { useRouter } from "next/navigation";
// import { ServicesContext } from "../../Context";
// import Image from "next/image";
// import "./styles.css";
// import Link from "next/link";
// //import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// //import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const Navbar = ({ activeRoute }) => {
//   const router = useRouter();
//   const activeStyle = "underline underline-thickness-thin";
//   const activeListItemStyle = "border-b-2 border-dark-pink";

//   const isRouteActive = (route) => route === activeRoute;

//   return (
//     <nav className="flex fixed justify-between items-center hrefp-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
//       <ul className="flex items-center gap-3">
//         <li className="font-semibold text-lg">
//           <Link href="/">
//             <Image
//               className="rounded-full"
//               src="https://img.freepik.com/vector-gratis/joven-atractiva_225004-1459.jpg?w=740&t=st=1692243341~exp=1692243941~hmac=780bb8bb935dab9cc33fec304289e06e1677aaa283b12b3ac1be4140963bf415"
//               alt="Psychologist Photo"
//               width={50}
//               height={50}
//             />
//           </Link>
//         </li>
//         <li>
//           <h1 className="font-semibold text-lg">Psicologa Name</h1>
//         </li>
//       </ul>
//       <ul className="flex items-center gap-3 text-lg">
//         <li
//           className={`${
//             isRouteActive("/") ? activeListItemStyle : ""
//           } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
//         >
//           <Link href="/">INICIO</Link>
//         </li>
//         <li
//           className={`${
//             isRouteActive("/article") ? activeListItemStyle : ""
//           } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
//         >
//           <Link href="/article">ARTÍCULOS</Link>
//         </li>
//         <li
//           className={`${
//             isRouteActive("/about") ? activeListItemStyle : ""
//           } hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4`}
//         >
//           <Link href="/about">SOBRE MI</Link>
//         </li>
//       </ul>
//       <ul className="flex items-center gap-3 font-semibold text-lg">
//         <button
//           className={`global-button border border-dark-pink rounded-lg px-4 py-2 text-dark-pink cursor-pointer`}
//           onClick={() => {
//             router.push("/schedule");
//           }}
//         >
//           Agendar
//         </button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

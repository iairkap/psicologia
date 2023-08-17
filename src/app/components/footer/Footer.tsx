import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer flex text-white py-4 justify-between items-center cursor-pointer;">
      <ul className="flex-row ">
        <li>
          <a
            href="https://example.com"
            className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://example.com"
            className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://example.com"
            className="hover:underline hover:text-dark-pink hover:font-semibold hover:underline-offset-4"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </li>
      </ul>
      <span className="text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Todos los Derechos Reservados
      </span>
    </footer>
  );
};

export default Footer;

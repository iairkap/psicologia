import Link from "next/link";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <a href="https://example.com" className="hover:text-gray-300">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://example.com" className="hover:text-gray-300">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://example.com" className="hover:text-gray-300">
            WhatsApp
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

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCar } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
                {/* Sección de información */}
                <div>
                    <h4 className="text-xl font-bold mb-4">TECAR</h4>
                    <p className="text-sm">
                        Nos dedicamos a ofrecer los mejores productos y servicios. Tu satisfacción es nuestra prioridad.
                    </p>
                </div>

                {/* Sección de enlaces */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
                    <ul className="text-sm space-y-2">
                        <li><a href="#about" className="hover:text-gray-400">Sobre Nosotros</a></li>
                        <li><a href="#services" className="hover:text-gray-400">Servicios</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contáctanos</a></li>
                        <li><a href="#faq" className="hover:text-gray-400">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                {/* Sección de redes sociales */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Síguenos</h4>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <FaFacebookF className="text-white" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <FaTwitter className="text-white" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <FaInstagram className="text-white" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <FaLinkedinIn className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea divisoria y copyright */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">&copy; Copyright 2024 TECAR. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

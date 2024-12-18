import { Button } from "@nextui-org/react";

export default function () {
    return (
        <div className="relative w-full h-full flex justify-center">
            {/* Imagen de fondo */}
            <img
                alt="Main Carousel Image 1"
                src="/imgs/imgMainCarousel03.jpeg"
                className="w-full h-full object-cover"
            />

            {/* Gradiente oscuro sobre la imagen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>

            {/* Contenedor de texto y botones */}
            <div className="absolute top-[65%] lg:top-3/4 left-2 sm:left-10 md:left-40 transform -translate-y-1/2 text-center sm:text-left text-white z-10 scale-[0.80] sm:scale-100">
                <h2 className="text-5xl font-bold mb-4">TECAR te da el mejor valor por tu auto</h2>
                <p className="text-2xl mb-6 ">Vende con nosotros y obtén el mejor precio</p>
                <Button color="#d87442" onClick={() => (window.location.href = "/vender")}  variant="ghost" size="lg" className="backdrop-blur-sm transform transition duration-300 ease-in-out hover:scale-105 hover:backdrop-blur-lg">
                    Vender mi Auto
                </Button>
            </div>
        </div>
    );
}   
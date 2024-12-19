import { useState } from "react";

const useAutos = () => {
    // Estado inicial de los autos con el modelo actualizado
    const [autos, setAutos] = useState([
        {
            id: 1,
            marca: "Nissan",
            modelo: "Pathfinder",
            ano: 2014,
            precio: "250,000",
            color: "Rojo",
            ubicacion: "Tepic",
            transmision: "Automático",
            combustible: "Gasolina",
            kilometraje: "10,000",
            descripcion: "Auto de alta gama con diseño elegante y tecnología de vanguardia",
            subidoHace: "hace 3 días",
            chips: ["Automático", "SUV", "Tepic"],
            images: [
                "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzY3NDgzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzM0MTkyMTE1MTM3LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0="
            ],
        },
        {
            id: 2,
            marca: "Mini",
            modelo: "Cooper S",
            ano: 2018,
            precio: "366,999",
            color: "Azul",
            ubicacion: "Tepic",
            transmision: "Manual",
            combustible: "Gasolina",
            kilometraje: "39,000 km",
            descripcion: "Auto de alta gama con diseño elegante y tecnología de vanguardia",
            subidoHace: "hace 3 días",
            chips: ["Manual", "Hatchback", "Tepic"],
            images: [
                "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzY3NTYwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzM0MTE2MjE5MDc2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",

            ],
        },
        {
            id: 3,
            marca: "Hyundai",
            modelo: "Ioniq",
            ano: 2019,
            precio: "311,999",
            color: "Azul",
            ubicacion: "Tepic",
            transmision: "Manual",
            combustible: "Gasolina",
            kilometraje: "44,300 km",
            descripcion: "Auto de alta gama con diseño elegante y tecnología de vanguardia",
            subidoHace: "hace 5 días",
            chips: ["Manual", "Sedan", "Tepic"],
            images: [
                "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzY2NjEyL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzMzNTkzNjEzNDk4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",

            ],
        },
        {
            id: 4,
            marca: "Volkswagen",
            modelo: "Tiguan",
            ano: 2022,
            precio: "484,999",
            color: "Rojo",
            ubicacion: "Tepic",
            transmision: "Automático",
            combustible: "Gasolina",
            kilometraje: "26,263 km",
            descripcion: "Auto de alta gama con diseño elegante y tecnología de vanguardia",
            subidoHace: "hace 5 días",
            chips: ["Automático", "SUV", "Tepic"],
            images: [
                "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzY3ODE2L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzM0MDQyODkxMjkxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",

            ],
        },
        {
            id: 5,
            marca: "Kia",
            modelo: "Seltos",
            ano: 2020,
            precio: "305,999",
            color: "Negro",
            ubicacion: "Tepic",
            transmision: "Automático",
            combustible: "Gasolina",
            kilometraje: "70,416 km",
            descripcion: "Auto de alta gama con diseño elegante y tecnología de vanguardia",
            subidoHace: "hace 15 días",
            chips: ["Automático", "SUV", "Tepic"],
            images: [
                "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzY3Nzk4L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzM0MjE2NDkzMDI2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",

            ],
        },
    ]);

    // Función para agregar un auto
    const agregarAuto = (nuevoAuto) => {
        setAutos((prevAutos) => [...prevAutos, nuevoAuto]);
    };

    // Función para eliminar un auto por id
    const eliminarAuto = (id) => {
        setAutos((prevAutos) => prevAutos.filter((auto) => auto.id !== id));
    };

    // Función para actualizar un auto
    const actualizarAuto = (id, autoActualizado) => {
        setAutos((prevAutos) =>
            prevAutos.map((auto) => (auto.id === id ? { ...auto, ...autoActualizado } : auto))
        );
    };

    // Función para obtener un auto por id
    const obtenerAutoPorId = (id) => {
        return autos.find((auto) => auto.id === id) || null;
    };

    return { autos, agregarAuto, eliminarAuto, actualizarAuto, obtenerAutoPorId };
};

export default useAutos;

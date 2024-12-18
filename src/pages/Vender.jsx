import React from "react";
import { Form, Input, Select, SelectItem, Button } from "@nextui-org/react";
import Layout from "../layout";
import useAutos from "../hooks/useAutos"; // Asegúrate de importar tu hook

export default function Vender() {
    const { agregarAuto } = useAutos(); // Accede a la función para agregar autos
    const [errors, setErrors] = React.useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Validación personalizada
        const newErrors = {};
        if (!data.marca) newErrors.marca = "La marca es requerida";
        if (!data.modelo) newErrors.modelo = "El modelo es requerido";
        if (!data.ano || isNaN(data.ano)) newErrors.ano = "El ano debe ser un número válido";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        // Formato de nuevo auto
        const nuevoAuto = {
            id: Date.now(),
            marca: data.marca,
            modelo: data.modelo,
            ano: parseInt(data.ano, 10),
            precio: data.precio || "0",
            color: data.color || "N/A",
            ubicacion: data.ubicacion || "Sin especificar",
            transmision: data.transmision || "Manual",
            combustible: data.combustible || "Gasolina",
            kilometraje: data.kilometraje || "0 km",
            descripcion: data.descripcion || "Sin descripción",
            chips: [data.transmision || "Manual", data.color || "N/A", data.ubicacion || "Sin especificar"],
            images: [], // Puedes agregar lógica para manejar imágenes si es necesario
        };

        agregarAuto(nuevoAuto); // Agrega el auto al estado
        e.currentTarget.reset(); // Limpia el formulario
    };

    return (
        <Layout>
            <Form
                className="w-full justify-center items-center h-screen-navbar space-y-6"
                onSubmit={onSubmit}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
                    <Input
                        isRequired
                        errorMessage={errors.marca}
                        label="Marca"
                        labelPlacement="outside"
                        name="marca"
                        placeholder="Ejemplo: Nissan"
                    />

                    <Input
                        isRequired
                        errorMessage={errors.modelo}
                        label="Modelo"
                        labelPlacement="outside"
                        name="modelo"
                        placeholder="Ejemplo: Pathfinder"
                    />

                    <Input
                        isRequired
                        errorMessage={errors.ano}
                        label="Año"
                        labelPlacement="outside"
                        name="ano"
                        placeholder="Ejemplo: 2022"
                        type="number"
                    />

                    <Input
                        label="Precio"
                        labelPlacement="outside"
                        name="precio"
                        placeholder="Ejemplo: 250,000"
                    />

                    <Input
                        label="Color"
                        labelPlacement="outside"
                        name="color"
                        placeholder="Ejemplo: Rojo"
                    />

                    <Input
                        label="Kilometraje"
                        labelPlacement="outside"
                        name="kilometraje"
                        placeholder="Ejemplo: 10,000 km"
                    />

                    <Select
                        label="Ubicación"
                        labelPlacement="outside"
                        name="ubicacion"
                        placeholder="Seleccione una ciudad"
                    >
                        <SelectItem key="tpc" value="Tepic">
                            Tepic, Nay
                        </SelectItem>
                        <SelectItem key="gdl" value="Guadalajara">
                            Guadalajara, Jal
                        </SelectItem>
                        <SelectItem key="mty" value="Monterrey">
                            Monterrey, NL
                        </SelectItem>
                    </Select>

                    <Select
                        label="Transmisión"
                        labelPlacement="outside"
                        name="transmision"
                        placeholder="Seleccione tipo de transmisión"
                    >
                        <SelectItem key="manual" value="Manual">
                            Manual
                        </SelectItem>
                        <SelectItem key="automatico" value="Automático">
                            Automático
                        </SelectItem>
                    </Select>

                    <Select
                        label="Combustible"
                        labelPlacement="outside"
                        name="combustible"
                        placeholder="Seleccione tipo de combustible"
                    >
                        <SelectItem key="gasolina" value="Gasolina">
                            Gasolina
                        </SelectItem>
                        <SelectItem key="electrico" value="Eléctrico">
                            Eléctrico
                        </SelectItem>
                        <SelectItem key="hibrido" value="Híbrido">
                            Híbrido
                        </SelectItem>
                    </Select>

                    <Input
                        label="Descripción"
                        labelPlacement="outside"
                        name="descripcion"
                        placeholder="Breve descripción del auto"
                    />
                </div>

                <div className="flex justify-end gap-4 max-w-4xl">
                    <Button className="w-full sm:w-auto" color="primary" type="submit">
                        Agregar Auto
                    </Button>
                    <Button type="reset" variant="bordered" className="w-full sm:w-auto">
                        Cancelar
                    </Button>
                </div>
            </Form>
        </Layout>
    );
}

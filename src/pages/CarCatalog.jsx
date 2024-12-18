import Layout from "../layout";
import MyDetailBar from "../components/MyDetailBar";
import Filter from "../components/Filter";
import NextGrid from "../components/NextGrid";
import DynamicGrid from "../components/DynamicGrid";
import { useState, useEffect } from "react";

import useAutos from "../hooks/useAutos";

function HomePage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de 2 segundos
        console.log("Cargando...");
        setTimeout(() => {
            setIsLoading(false);
            console.log("Carga completa...");
        }, 1500);
    }, []);

    const { autos } = useAutos();

    return (
        <Layout>
            <MyDetailBar />
            <div className="flex flex-col items-center xl:w-full w-full bg-slate-50">
                <div className="w-[95%] xl:w-[1250px] mt-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {/* Primer elemento ocupa 1 columna */}
                        <div className="col-span-1 w-full h-[200px] lg:h-[600px] bg-white rounded-lg shadow-md">
                            <Filter />
                        </div>
                        {/* Segundo elemento ocupa 4 columnas */}
                        <div className="col-span-1 lg:col-span-4 w-full h-[1200px] bg-white rounded-lg shadow-md">
                            <DynamicGrid cards={autos} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;

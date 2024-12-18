import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/react";

const ProductoPage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    setLoading(true); // Inicia la carga
    // Simula una llamada a una API con un retraso
    setTimeout(() => {
      // Datos de ejemplo (simulando una respuesta de la API)
      const fakeData = {
        id,
        nombre: `Producto ${id}`,
        descripcion: "Este es un producto de ejemplo.",
        precio: 199.99,
      };
      setProducto(fakeData);
      setLoading(false); // Finaliza la carga
    }, 2000); // Simula 2 segundos de carga
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Detalles del Producto</h1>
      {loading ? (
        // Skeletons mientras se carga el contenido
        <>
          <Skeleton className="h-8 w-3/4 mb-4" /> {/* Skeleton para el título */}
          <Skeleton className="h-6 w-full mb-2" /> {/* Skeleton para descripción */}
          <Skeleton className="h-6 w-1/4" /> {/* Skeleton para precio */}
          <Skeleton className="h-40 w-full mt-4" /> {/* Skeleton para imagen */}
        </>
      ) : (
        // Contenido real cuando se cargan los datos
        <>
          <h2>{producto.nombre}</h2>
          <p>Descripción: {producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <img
            src={`https://via.placeholder.com/400?text=Producto+${producto.id}`}
            alt={`Producto ${producto.id}`}
            style={{ width: "100%", height: "auto", marginTop: "1rem" }}
          />
        </>
      )}
    </div>
  );
};

export default ProductoPage;

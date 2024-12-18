import {useNavigate, useHref, Routes, Route} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import ProductoPage from "./pages/ProductoPage";
import GridPage from "./pages/GridPage.jsx";
import NextGrid from "./components/NextGrid.jsx";
import CarCatalog from "./pages/CarCatalog.jsx";
import IniciarSesion from "./pages/IniciarSesion.jsx";
import RegistrarSesion from "./pages/registrarSesion.jsx";
import LateralbarTet from "./pages/LateralbarTet.jsx";
import Vender from "./pages/Vender.jsx";

function App() {

  const navigate = useNavigate();
  
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarCatalog />} />
        <Route path="/car/:id" element={<ProductoPage />} />
        <Route path="/grid" element={<GridPage />} /> 
        <Route path="/nextGrid" element={<NextGrid />} /> 
        <Route path="/vender" element={<Vender />} />
        <Route path="/signup" element={<RegistrarSesion />} /> 
        <Route path="/login" element={<IniciarSesion />} /> 
        <Route path="/test01" element={<LateralbarTet />} /> 

        {/* ... */}
      </Routes>
    </NextUIProvider>
  )
}

export default App

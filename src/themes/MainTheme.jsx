// theme.js
import { createTheme } from "@nextui-org/react";

export const myCustomTheme = createTheme({
  type: "light", // También puedes usar "dark"
  theme: {
    colors: {
      primary: "#1E88E5", // Azul personalizado
      secondary: "#8E24AA", // Morado personalizado
      success: "#43A047", // Verde para acciones exitosas
      warning: "#FB8C00", // Naranja para advertencias
      error: "#E53935", // Rojo para errores
      // Puedes definir colores adicionales
      customYellow: "#FFD600",
      customBackground: "#F9F9F9",
    },
    space: {}, // Personaliza espaciados si lo necesitas
    fonts: {
      sans: "Roboto, sans-serif", // Personaliza las fuentes
    },
  },
});

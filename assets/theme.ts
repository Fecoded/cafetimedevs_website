import { createTheme } from "@nextui-org/react";

export const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      ctd_primary_color: "#3072B9",
      ctd_services_bg_color: "rgba(48, 114, 185, 0.1)",
      primary:
        "linear-gradient(150.57deg, rgba(255, 255, 255, 0.48) 18.03%, rgba(48, 114, 185, 0.74) 94.23%)",
      textPrimary: "#122841",
      textSecondary: "#4E5761",
      btnPrimary: "#3072B9",
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
    },
  },
});

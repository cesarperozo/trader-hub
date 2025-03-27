import 'dotenv/config'; // Asegúrate de que dotenv esté configurado

export default {
  expo: {
    name: "TraderHub",
    slug: "TraderHub",
    version: "1.0.0",
    extra: {
      BASE_URL: process.env.BASE_URL || "https://dummy-api-topaz.vercel.app",  // Leer la variable de entorno
    },
  },
};

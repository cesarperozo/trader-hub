module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-transform-private-methods", { loose: true }],
    [
      "module-resolver",
      {
        root: ["./src"], // Indica la raíz del proyecto para resolver módulos
        alias: {
          commons: "./src/commons", // Configura el alias 'commons' para la ruta src/commons
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react-native-reanimated/plugin",
  ],
};

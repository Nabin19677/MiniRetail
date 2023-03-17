import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "MiniRetail API Documentation",
    version: "1.0.0",
    description:
      "REST API Application made with Express for mini retail web application.",
    contact: {
      name: "Contact : Anil Khadka",
      url: "https://anilkhadka.info.np",
    },
  },
  tags: ["Retail"],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./src/app/v1/modules/*/*.js", "./src/app/v1/modules/*/*/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };

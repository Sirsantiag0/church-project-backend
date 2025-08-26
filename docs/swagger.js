const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentación con Swagger',
    version: '1.0.0',
    description: 'Documentación de una API Express usando Swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Archivos donde escribirás las anotaciones
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
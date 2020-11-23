import swaggerJSDoc from 'swagger-jsdoc';
// https://swagger.io/docs/specification/about/
// http://editor.swagger.io/

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'TEST', // Title (required)
      version: '1.0.0', // Version (required)
    },
    basePath: './api',
  },
  // Path to the API docs
  apis: ['**/*swag.yaml'],
  explorer: true,
  swaggerOptions: {
    authAction: {
      JWT: {
        name: 'JWT',
        schema: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
        value: 'Bearer <JWT token>',
      },
    },
  },
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
export default swaggerJSDoc(options);

import swaggerUi from 'swagger-ui-express';
import checkAuth from '~lib/checkAuth';
import errorHandler from '~lib/httpErrorHandler';
import logger from '~lib/logger';
import swaggerSpec from './swaggerSpec';
// import cote from '~lib/cote';
import app from './app';
import api from './api';
import health from './api/health';

const { PORT } = process.env;
// app.use(cote);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(health);
// app.use(checkAuth);
app.use(api);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(process.env);
  logger.info(`server listening on port ${PORT}`);
});

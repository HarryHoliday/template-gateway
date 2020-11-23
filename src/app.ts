import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;

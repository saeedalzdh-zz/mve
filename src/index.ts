import express from 'express';
import * as routes from './routes';
import logger from './helpers/logger';
import { errorHandler } from './middlewares/error-handler';
import bodyParser from 'body-parser';

const port = process.env.SERVER_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '60mb' }));

routes.register(app);

app.use(errorHandler);

app.listen(port, () => {
    logger.log(`Backend started at http://localhost:${port}`);
});

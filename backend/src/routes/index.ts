import * as express from 'express';
import {
	getTasks,
	addTask,
	editTask,
	removeTask,
} from '../controllers/tasks-controller';
import { requestHandler } from '../middlewares/request-handler';
import { responseHandler } from '../middlewares/response-handler';
import { asyncMiddleware } from '../middlewares/async-middleware';

export const register = (app: express.Application) => {

	app.get('/',
		requestHandler,
		asyncMiddleware(getTasks),
		responseHandler,
	);

	app.post('/',
		requestHandler,
		asyncMiddleware(addTask),
		responseHandler,
	);

	app.put('/:id',
		requestHandler,
		asyncMiddleware(editTask),
		responseHandler,
	);

	app.delete('/:id',
		requestHandler,
		asyncMiddleware(removeTask),
		responseHandler,
	);
};
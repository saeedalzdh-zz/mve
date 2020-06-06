import logger from '../helpers/logger';

const asyncMiddleware = (controller: any) =>
	(req: any, res: any, next: any) => {
		Promise.resolve(controller(req, res, next))
			.catch(err => {
				logger.log('asyncMiddleware');
				logger.log(err);
				next(err);
			});
	};

export { asyncMiddleware };

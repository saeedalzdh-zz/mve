import responseCodes from '../response-codes';

const responseHandler = (req: any, res: any, next: any) => {
	const { status, code, text } = responseCodes.SUCCESS;

	const response = {
		data: req.data || {},
		success: true,
		statusCode: code,
		statusText: text,
	};

	res.status(status).json(response);
};

export { responseHandler };
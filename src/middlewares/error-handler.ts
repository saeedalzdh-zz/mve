import responseCodes from '../response-codes';

function getErrorCodeAndText(err: any) {
    if (!(err.code && err.status && err.text)) {
        return responseCodes.E_UNKNOWN;
    }

    return err;
}

const errorHandler = (err: any, req: any, res: any, next: any) => {
    const { code, text, status } = getErrorCodeAndText(err);

    const response = {
        success: false,
        statusCode: code,
        statusText: text,
    };

    res.status(status).json(response);
};

export { errorHandler };

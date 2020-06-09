class ErrorWithProps extends Error {
    constructor(message: any, props: object = {}) {
        if (message instanceof Object && 'text' in message) {
            props = message;
            message = message.text;
        }

        super(typeof message === 'string' ? message : JSON.stringify(message));

        if (message instanceof Error) {
            if (props) {
                Object.assign(message, props);
            }

            return message;
        }

        if (props) {
            Object.assign(this, props);
        }
    }
}

const errorResponse = (resCode: object) => (err: any) => {
    throw new ErrorWithProps(err, resCode);
};

export { errorResponse, ErrorWithProps };

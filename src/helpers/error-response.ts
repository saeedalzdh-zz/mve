class ErrorWithProps extends Error {
    constructor(message: any, props: any = {}) {
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

const errorResponse = (resCode: any) => (err: any) => {
    throw new ErrorWithProps(err, resCode);
};

export { errorResponse, ErrorWithProps };

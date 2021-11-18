const DOES_NOT_SUPPORT_FETCH = 0;

const errors: any = {
    [DOES_NOT_SUPPORT_FETCH]: {
        message: "Browser not supported!",
        detail: "This browser does not support \"fetch\", please choose another one.",
    },
    default: {
        message: "Oops, something went wrong!",
    },
};

interface Err {
    code: number;
}

function deriveMessageFromError(err: Err) {
    const { code } = err;
    if (typeof code === "number") {
        return errors[code];
    }
    return errors.default;
}

export { deriveMessageFromError, DOES_NOT_SUPPORT_FETCH, errors };

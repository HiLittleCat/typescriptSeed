/**
 * 自定义Error
 */
import {HttpError} from 'routing-controllers';

export class ResourceNotFoundError extends HttpError {
    constructor(message) {
        super(410, message);
    }
}

export class ResourceExistError extends HttpError {
    constructor(message) {
        super(406, message);
    }
}

export class CheckError extends HttpError {
    constructor(message) {
        super(406, message);
    }
}


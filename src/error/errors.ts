/**
 * 自定义Error
 */
import { HttpError } from 'routing-controllers';
import { isNullOrUndefined } from 'util';

export class BusinessError extends HttpError {
    constructor(message: string) {
        super(400, message);
        this.name = 'BusinessError';
    }
}

export class ValidationError extends HttpError {
    constructor(message: string) {
        super(406, message);
        this.name = 'ValidationError';
        this.stack = undefined;
    }
}


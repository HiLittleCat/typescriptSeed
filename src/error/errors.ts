/**
 * 自定义Error
 */
import { HttpError } from 'routing-controllers';

export class BusinessError extends HttpError {
    constructor(message: string) {
        super(400, message);
        this.name = 'BusinessError';
        this.stack = undefined;
    }
}

export class ValidationError extends HttpError {
    constructor(message: string) {
        super(406, message);
        this.name = 'ValidationError';
        this.stack = undefined;
    }
}


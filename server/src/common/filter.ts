 import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch() 
export class HttpExceptionFilter implements ExceptionFilter {
catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>()
    
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
        status = exception.getStatus();
        const response = exception.getResponse();
        message = (response as any).message || exception.message;
        }
    else {
        console.error('Unhandled Exception:', exception);
    }

    response.status(status).json({
        code: status,
        message,
        data: null,
        path: request.url,
        timestamp: new Date().toISOString(),
    });
}
}
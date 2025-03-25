import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(message: string, code: HttpStatus = HttpStatus.BAD_REQUEST) {
    super({ code, message }, code);
  }
}
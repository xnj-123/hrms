import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common'
import { map } from 'rxjs/operators'
import {Observable} from 'rxjs'
 
interface data<T>{
    data:T
}
 
@Injectable()
export class Response<T = any> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
          map((data) => ({
            code: context.switchToHttp().getResponse().statusCode,
            message: 'Success',
            data,
            timestamp: new Date().toISOString(),
          })),
        );
    }
}
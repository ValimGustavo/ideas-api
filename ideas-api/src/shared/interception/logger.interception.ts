import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterception implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler):Observable<any>{
        const req = context.switchToHttp().getRequest()
        console.log(`Antes: Handle: ${req.url}  method: ${req.method}`)
        
        return next
        .handle()
        .pipe(
            tap(()=> console.log("depois"))
        )

    }
}
import { Catch, HttpException, ExceptionFilter, ArgumentsHost, Logger } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    
    catch(exception: HttpException, host:ArgumentsHost){
        const contextInHttp = host.switchToHttp()
        const request = contextInHttp.getRequest()
        const response = contextInHttp.getResponse()

        const statusException = exception.getStatus()

        const errorResponse = {
            code: statusException,
            timestamp: new Date().toLocaleDateString(),
            path: request.path,
            method: request.method,
            message: exception.message || null
        }

        response.status(statusException).json(errorResponse)
    }
}
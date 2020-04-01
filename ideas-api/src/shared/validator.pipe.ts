import { Injectable, PipeTransform, Next } from "@nestjs/common";
import { HttpExceptionFilter } from "./http-error-filter";

@Injectable()
export class ShowInformationPipe implements PipeTransform{

    transform(value:any){
       console.log( typeof value)
       return value
    }

}
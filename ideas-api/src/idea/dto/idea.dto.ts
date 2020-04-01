import { IsString } from  'class-validator'

export class ideaDTO {
    id: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
    created: Date;
}
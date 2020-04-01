import { Controller, Get, Param, Post, Body, Patch, Delete, UsePipes } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { ideaDTO } from './dto/idea.dto';
import { ShowInformationPipe } from 'src/shared/validator.pipe';


@Controller('idea')
export class IdeaController {

    constructor(private ideaService:IdeaService){}


    @Get()
    showAllIdeas(){
        return this.ideaService.getIdeaWhere()
    }

    @Post("/create")
    async createIdea(@Body() body:ideaDTO){
        return await this.ideaService.createIdea(body)
    }

    @Patch(':id')
    async updateIdea(@Body() ideaUpdated:ideaDTO){
        return await this.ideaService.updateIdea(ideaUpdated)
    }

    @Delete(':id')
    deleteIdea(){
        return this.ideaService.delete()

    }
}

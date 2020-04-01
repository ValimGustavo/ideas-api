import { Injectable } from '@nestjs/common';
import { IdeaRepository } from './idea.repository';
import { ideaDTO } from './dto/idea.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IdeaService {

    constructor(
        @InjectRepository(IdeaRepository) 
        private ideaRepository: IdeaRepository
    ){}

    getIdeaWhere(){
        return this.ideaRepository.getIdeaWhere()
    }

    async createIdea(body:ideaDTO){
        return await this.ideaRepository.createIdea(body)
    }

    async updateIdea(ideaUpdated:Partial<ideaDTO>){
        return await this.ideaRepository.updateIdea(ideaUpdated)
    }

    delete(){
        return this.ideaRepository.deleteIdea()
    }

}

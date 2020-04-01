import { EntityRepository, Repository, UpdateResult, getRepository } from "typeorm";
import { IdeaEntity } from "./idea.entity";
import { ideaDTO } from "./dto/idea.dto";


@EntityRepository(IdeaEntity)
export class IdeaRepository extends Repository<IdeaEntity>{
  
    getIdeaWhere(){
        
    }

    async createIdea(body:ideaDTO){
        const idea = new IdeaEntity()
        idea.description = body.description;
        idea.title = body.title;
        idea.created = body.created;

        
        //const repository = getRepository(IdeaEntity)
        return await idea.save();
    }

    async updateIdea(ideaUpdated:Partial<ideaDTO>){        
       return await this.update(ideaUpdated.id, ideaUpdated)
    }

    deleteIdea(){

    }


}
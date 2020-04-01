import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { UserDTO, UserRO } from "./user.dto";
import { ideaDTO } from "src/idea/dto/idea.dto";
import { v4 as uuid } from 'uuid';
import * as bcryptjs  from 'bcryptjs'
import { from } from "rxjs";
import { HttpException, HttpStatus } from "@nestjs/common";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

    async login(data:UserDTO):Promise<UserRO>{
        const user  = await this.findOne({where:{username:data.username}})
        if(!user || !(user.comparePassword(data.password))){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        }

        return user.toResponseObject()
    }

    async register(data:UserDTO):Promise<UserRO>{

        if (await this.findOne({where: { username: data.username }}))
            throw new HttpException('User already exits', HttpStatus.BAD_REQUEST)

        const user = new UserEntity();
        user.id = uuid()
        user.username = data.username
        user.password = data.password

       await user.save()
       return user.toResponseObject()
    }

    async showAll():Promise<UserRO[]>{
        let users = await this.find();

        return users.map((user) => {
            return user.toResponseObject(false)
        })
    }


}
import { Injectable } from '@nestjs/common';
import { UserDTO, UserRO } from './user.dto';
import { UserRepository } from './user.repository'
import { from } from 'rxjs';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

    constructor(private userRepository:UserRepository){}

    async login(data:UserDTO):Promise<UserRO>{
        return await this.userRepository.login(data)
    }

    async register(data:UserDTO):Promise<UserRO>{
        return await this.userRepository.register(data)
    }

    async showAll():Promise<UserRO[]>{
        return await this.userRepository.showAll()
    }
}

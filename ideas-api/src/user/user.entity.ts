import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity, CreateDateColumn } from "typeorm";
import * as bcryptjs from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { UserRO } from "./user.dto";


@Entity('user')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    created: Date
    
    @Column({
        type:'text',
        unique:true
    })
    username: string

    @Column('text')
    password: string


    @BeforeInsert()
    async hashPassword(){
        this.password = await bcryptjs.hash(this.password, 10)
    }

    private get token(){
        const { id, username } = this
        const token = jwt.sign({id, username}, process.env.SECRET, {expiresIn:'7d'})
        return token;
    }

    toResponseObject( showToken:boolean = true ):UserRO{ //good pratice for securite for show data 
        const { id, username, created, token } = this
        const response:UserRO = { id, username, created}
         
        if(showToken){
            response['token'] = token;
        }
        return response;
    }

    async comparePassword(password){
        return await bcryptjs.compare(this.password, password)
    }

}
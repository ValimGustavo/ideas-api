import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";

@Entity("idea")
export class IdeaEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @CreateDateColumn()
    created: Date;

    @Column('text')
    title: string;

    @Column('text')
    description: string;
}
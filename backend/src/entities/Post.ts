import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity(`Post`)
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    message: string

    @Column()
    id_owner: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

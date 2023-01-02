import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity('categories')
export class Categories {

   @PrimaryGeneratedColumn("uuid")
   id : string

   @Column()
   name : string

   @ManyToOne(()=> Properties, properties => properties.category)
   @JoinColumn()
   properties: Properties[]

}
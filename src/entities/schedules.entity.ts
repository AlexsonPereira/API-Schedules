import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Properties } from "./properties.entity"
import { User } from "./user.entity"

@Entity('schedules')
export class Schedule {

   @PrimaryGeneratedColumn("uuid")
   id : string

   @Column()
   date : Date

   @Column()
   hour: string

   @ManyToOne(()=> Properties, {eager : true})
   property: Properties

   @ManyToOne(()=> User, {eager: true})
   user: User

}

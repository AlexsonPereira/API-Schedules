import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Adress } from './adress.entity';
import { Categories } from './categories.entity';
import { Schedule } from './schedules.entity';

@Entity('properties') 
export class Properties {
 
   @PrimaryGeneratedColumn("uuid")
   id: string

   @Column({default: false})
   sold: boolean

   @Column()
   value: number

   @Column()
   size : number

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   @OneToOne(() => Adress, {eager: true})
   @JoinColumn()
   address : Adress

   @ManyToOne(() => Categories, {eager : true, nullable : true})
   category: Categories
 
}
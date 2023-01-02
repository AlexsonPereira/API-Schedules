import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Adress } from './adress.entity';
import { Categories } from './categories.entity';

@Entity('properties') 
export class Properties {
 
   @PrimaryGeneratedColumn("uuid")
   id: string

   @Column({default: false})
   sold: boolean

   @Column()
   value: number

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   @OneToOne(() => Adress)
   @JoinColumn()
   adress : Adress

   @OneToMany(() => Categories, categories => categories.properties)
   @JoinColumn()
   category: Categories
}
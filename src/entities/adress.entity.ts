import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adress') 
export class Adress {
 
   @PrimaryGeneratedColumn("uuid")
   id: string

   @Column()
   district: string

   @Column()
   zipCode: string

   @Column()
   number: string

   @Column()
   city: string

   @Column()
   state: string
}
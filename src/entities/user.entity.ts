import { hashSync } from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, DeleteDateColumn, OneToOne, OneToMany} from 'typeorm';
import { Schedule } from './schedules.entity';

@Entity('users')
class User {

   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   password: string

   @Column()
   isAdm: boolean

   @Column({default: true})
   isActive: boolean

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   @OneToMany(() => Schedule, schedule => schedule.user)
   schedules : Schedule[] 

   @BeforeUpdate()
   @BeforeInsert()
   hashPassword(){
      this.password = hashSync(this.password,10)
   }
}

export {User}
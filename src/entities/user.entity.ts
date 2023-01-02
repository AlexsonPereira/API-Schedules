import { hashSync } from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, DeleteDateColumn} from 'typeorm';

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

   @BeforeUpdate()
   @BeforeInsert()
   hashPassword(){
      this.password = hashSync(this.password,10)
   }
}

export {User}
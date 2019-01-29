import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "./Todo";
import { Friend } from "./Friend";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[];

  @OneToMany(() => Friend, friend => friend.user)
  friends: Friend[];
}

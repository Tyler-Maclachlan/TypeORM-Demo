import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  accepted: boolean;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  friend: User;

  @ManyToOne(() => User, user => user.friends)
  user: User;
}

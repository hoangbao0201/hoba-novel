import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column({ unique: true })
    author: string

    @Column()
    description: string

    @Column()
    category: string

    @Column()
    personality: string

    @Column()
    scene: string

    @Column()
    classify: string

    @Column()
    viewFrame: string

    @Column({ default: "default-book.png", })
    thumbnail: string;

    // User
    @ManyToOne(() => User, user => user.books)
    @JoinColumn()
    user!: User;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}

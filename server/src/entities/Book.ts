import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Image } from "./Image";
import { User } from "./User";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column({ unique: true })
    link: string

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

    // Image
    @OneToOne(() => Image, image => image.book)
    image: Image;

    // User
    @ManyToOne(() => User, user => user.books)
    @JoinColumn()
    user!: User;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}


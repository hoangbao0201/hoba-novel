import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publicId: string;

    @Column()
    url: string;

    // Book
    @OneToOne(() => Book, book => book.image)
    @JoinColumn()
    book: Book;

    // User
    @OneToOne(() => User, user => user.image)
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}

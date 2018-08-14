import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    /**
     *
     */
    constructor() {
        super();
        this.id = 0;
        this.firstName = this.lastName = "";
        this.age = 18;
    }
}
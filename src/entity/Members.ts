import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("members")
class Members {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: string;

    @Column()
    sex: string;

    @Column()
    telephone: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    // criar id
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Members }
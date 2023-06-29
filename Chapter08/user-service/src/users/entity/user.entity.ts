import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryColumn()
    id: string;

    @Column("varchar",{ length: 30 })
    name: string;

    @Column("varchar",{ length: 60 })
    email: string;

    @Column("varchar",{ length: 30 })
    password: string;

    @Column("varchar",{ length: 60 })
    signupVerifyToken: string;
}
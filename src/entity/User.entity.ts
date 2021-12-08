import {Entity, PrimaryColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";

@Entity({
    name: "user",
  })

export class User extends BaseEntity{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;


  }

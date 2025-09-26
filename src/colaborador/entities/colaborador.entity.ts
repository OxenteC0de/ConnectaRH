import { Entity } from "typeorm";

@Entity({name: 'tb_colaborador'})
export class Colaborador {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    cargo: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    departamento: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    salario: number;

}

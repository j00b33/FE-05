import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
//entit가 보이면 이건 테이블이야 라고 알려주는것

@Entity()
export class fetchProducts{
    @PrimaryGeneratedColumn('increment')
    number!: number

    @Column({type: "text"})
    id!: number

    @Column({type: "text"})
    seller!: string

    @Column({type: "text"})
    name!: string

    @Column({type: "text"})
    detail!: string
}
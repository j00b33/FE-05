import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
//entity라는게 보이면 얘는 테이블이라고 알려주는것
@Entity()
export class Board{
    
    @PrimaryGeneratedColumn('increment')
    number!: number
    //! => 반드시 있을거다 라고 해주는것

    @Column({type: "text"})
    writer!: string

    @Column({type: "text"})
    title!: string
    
    @Column({type: "text"})
    age!: number
    //연결해주려면 sync true해줘야하고 entities에 Board 불러와줘야함
}
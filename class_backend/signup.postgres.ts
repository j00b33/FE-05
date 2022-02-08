import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
//entity라는게 보이면 얘는 테이블이라고 알려주는것
//BaseEntity 는 기본 기능들 추가된 보드 만들수 있게 해줌

@Entity()
export class Signup extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;
  //! => 반드시 있을거다 라고 해주는것

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  id!: string;

  @Column({ type: "text" })
  age!: number;

  @Column({ type: "text" })
  password!: String;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
  //시간이 기록되어있으면 그건 삭제된 데이터
  //그냥 isDeleted보다 더 많은 내용 포괄 가능함
}

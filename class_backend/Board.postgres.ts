import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
//entity라는게 보이면 얘는 테이블이라고 알려주는것
//BaseEntity 는 기본 기능들 추가된 보드 만들수 있게 해줌

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;
  //! => 반드시 있을거다 라고 해주는것

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;
  //연결해주려면 sync true해줘야하고 entities에 Board 불러와줘야함

  // @Column({ default: false })
  // isDeleted!: boolean;
  //이러면 조회할때 isDeleted가 false인 애들만 조회가 가능하게 되는거임
  //가짜로 삭제하는 고런 너낌 (soft delete)
  //--> soft delete를 하려면 더 좋은 방법도 존재함
  //언제 삭제됐는지까진 알 수 없기 때문에 삭제한 시간으로 적는게 좋음

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
  //시간이 기록되어있으면 그건 삭제된 데이터
  //그냥 isDeleted보다 더 많은 내용 포괄 가능함
}

//테이블을 만들어주는 부분

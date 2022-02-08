import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
//entit가 보이면 이건 테이블이야 라고 알려주는것

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  id!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}

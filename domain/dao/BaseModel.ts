import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";

export abstract class BaseModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({
    type: "datetime",
    name: "created_at"
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "datetime",
    name: "updated_at"
  })
  updatedAt: Date;
  @BeforeInsert()
  private beforeInsert() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date();
  }
}

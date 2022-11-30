import { Column, Entity, OneToMany } from "typeorm";
import { Dictionary } from "./Dictionary";

@Entity("category", { schema: "english" })
export class Category {
  @Column("varchar", { primary: true, name: "category", length: 100 })
  category: string;

  @OneToMany(() => Dictionary, (dictionary) => dictionary.category2)
  dictionary: Dictionary[];
}

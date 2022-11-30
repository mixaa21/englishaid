import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./Category";
import {PartsOfSpeech} from "./PartsOfSpeech";


@Index("verb_fk_category", ["category"], {})
@Index("fk_part_of_speech", ["partOfSpeech"], {})
@Entity("dictionary", { schema: "english" })
export class Dictionary {
  @Column("varchar", { primary: true, name: "word", length: 100 })
  word: string;

  @Column("varchar", { primary: true, name: "translation", length: 100 })
  translation: string;

  @Column("varchar", { name: "transcription", nullable: true, length: 100 })
  transcription: string | null;

  @Column("smallint", { name: "preference", nullable: true })
  preference: number | null;

  @Column("char", { name: "cefr", nullable: true, length: 4 })
  cefr: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 100 })
  category: string | null;

  @Column("enum", {
    name: "form",
    nullable: true,
    enum: ["infinitive", "past", "participle"],
  })
  form: "infinitive" | "past" | "participle" | null;

  @Column("tinyint", { name: "regular", width: 1, default: () => "'1'" })
  regular: boolean;

  @Column("tinyint", { name: "stative", width: 1, default: () => "'0'" })
  stative: boolean;

  @Column("varchar", { name: "part_of_speech", length: 100 })
  partOfSpeech: string;

  @ManyToOne(() => Category, (category) => category.dictionary, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "category", referencedColumnName: "category" }])
  category2: Category;

  @ManyToOne(
      () => PartsOfSpeech,
      (partsOfSpeech) => partsOfSpeech.dictionary,
      { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "part_of_speech", referencedColumnName: "partOfSpeech" },
  ])
  partOfSpeech2: PartsOfSpeech;
}

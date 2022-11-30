import {Column, Entity, OneToMany} from "typeorm";
import {Dictionary} from "./Dictionary";

@Entity("parts_of_speech", { schema: "english" })
export class PartsOfSpeech {
    @Column("varchar", { primary: true, name: "part_of_speech", length: 100 })
    partOfSpeech: string;

    @OneToMany(() => Dictionary, (dictionary) => dictionary.partOfSpeech2)
    dictionary: Dictionary[];
}
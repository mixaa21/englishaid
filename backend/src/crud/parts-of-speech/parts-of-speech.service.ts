import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {PartsOfSpeech} from "../../database/entities/PartsOfSpeech";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PartsOfSpeechService {


    constructor(
        @InjectRepository(PartsOfSpeech)
        private partsOfSpeechRepository: Repository<PartsOfSpeech>
    ) {}

    async getAll(): Promise<String[]> {
        return (await this.partsOfSpeechRepository.find()).map(item => {
            return item.partOfSpeech
        })
    }

}

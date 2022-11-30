import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Dictionary} from "../../database/entities/Dictionary";
import { Repository} from "typeorm";

const WooordhuntAPI = require('@vviital/wooordhunter-api');
const options = { apiUri: 'https://wooordhunt.ru' };
const API = new WooordhuntAPI(options);

@Injectable()
export class DictionaryService {

    constructor(
        @InjectRepository(Dictionary)
        private dictionaryRepository: Repository<Dictionary>
    ) {}

    async getAll(): Promise<any> {
        return await this.dictionaryRepository.find()
    }
    async save(entity): Promise<any> {
        // entity.transcription = (await API.fetchWordTranslation(entity.word)).transcription.us
        await this.dictionaryRepository.save(entity)
        return entity.transcription
    }
}

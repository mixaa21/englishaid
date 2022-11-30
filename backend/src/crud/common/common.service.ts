import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DataSource, Repository} from "typeorm";
import {Dictionary} from "../../database/entities/Dictionary";

@Injectable()
export class CommonService {

    constructor(
        @InjectRepository(Dictionary)
        private commonRepository: Repository<Dictionary>,
        private dataSource: DataSource
    ) {}

    async getAllWords() {
        return 'sdf'
    }

}

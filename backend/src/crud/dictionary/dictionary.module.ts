import { Module } from '@nestjs/common';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dictionary} from "../../database/entities/Dictionary";

@Module({
  imports: [TypeOrmModule.forFeature([Dictionary])],
  exports: [TypeOrmModule],
  controllers: [DictionaryController],
  providers: [DictionaryService]
})
export class DictionaryModule {}

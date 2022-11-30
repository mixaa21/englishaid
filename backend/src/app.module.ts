import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {DictionaryModule} from "./crud/dictionary/dictionary.module";
import ormconfig from "./database/entities/ormconfig";
import {CategoryModule} from "./crud/category/category.module";
import {CommonModule} from "./crud/common/common.module";
import {PartsOfSpeechModule} from "./crud/parts-of-speech/parts-of-speech.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(ormconfig),
      DictionaryModule,
      CategoryModule,
      CommonModule,
      PartsOfSpeechModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

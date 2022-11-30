import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PartsOfSpeechService} from "./parts-of-speech.service";
import {PartsOfSpeechController} from "./parts-of-speech.controller";
import {PartsOfSpeech} from "../../database/entities/PartsOfSpeech";

@Module({
    imports: [TypeOrmModule.forFeature([PartsOfSpeech])],
    controllers: [PartsOfSpeechController],
    providers: [PartsOfSpeechService]
})
export class PartsOfSpeechModule {}

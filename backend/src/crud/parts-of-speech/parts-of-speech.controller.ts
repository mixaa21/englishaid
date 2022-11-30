import {Controller, Get, Header} from '@nestjs/common';
import {PartsOfSpeechService} from "./parts-of-speech.service";

@Controller('parts-of-speech')
export class PartsOfSpeechController {

    constructor(
        private partsOfSpeechService: PartsOfSpeechService
    ) {}

    @Header("Access-Control-Allow-Origin", "*")
    @Get('/getAll')
    async getAll(): Promise<String[]> {
        return await this.partsOfSpeechService.getAll()
    }

}

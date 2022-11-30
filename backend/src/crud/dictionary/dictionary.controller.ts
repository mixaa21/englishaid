import {Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {DictionaryService} from "./dictionary.service";

@Controller('dictionary')
export class DictionaryController {

    constructor(
        private dictionaryService: DictionaryService
    ) {}

    @Header("Access-Control-Allow-Origin", "*")
    @Get('/getAll')
    async getAll(): Promise<any> {
        return await this.dictionaryService.getAll()
    }

    @Header("Access-Control-Allow-Origin", "*")
    @Get(':id')
    getOne(@Param('id') id: string): string {
        return `Get one ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Access-Control-Allow-Origin", "*")
    @Header("Cache-Control", "none")
    async create(@Body() entity: any): Promise<any> {
        return await this.dictionaryService.save(entity)
    }
}



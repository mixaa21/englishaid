import {Controller, Get} from '@nestjs/common';
import {CommonService} from "./common.service";

@Controller('common')
export class CommonController {

    constructor(
        private commonService: CommonService
    ) {}

    @Get('/getAllWords')
    async getAllWords() {
        console.log('sdfsdf')
        return await this.commonService.getAllWords()
    }

}

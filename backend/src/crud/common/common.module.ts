import { Module } from '@nestjs/common';
import {CommonController} from "./common.controller";
import {CommonService} from "./common.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dictionary} from "../../database/entities/Dictionary";

@Module({
    imports: [TypeOrmModule.forFeature([Dictionary])],
    controllers: [CommonController],
    exports: [TypeOrmModule],
    providers: [CommonService]
})
export class CommonModule {}

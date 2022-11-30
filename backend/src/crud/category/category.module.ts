import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "../../database/entities/Category";
import {CategoryController} from "./category.controller";
import {CategoryService} from "./category.service";
import {PartsOfSpeech} from "../../database/entities/PartsOfSpeech";

@Module({
    imports: [TypeOrmModule.forFeature([Category, PartsOfSpeech])],
    exports: [TypeOrmModule],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
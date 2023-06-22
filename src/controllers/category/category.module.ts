import { Module } from '@nestjs/common';
import {RecipesService} from "../../services/recipes/recipes.service";
import {CategoryController} from "./category.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Recipe, RecipeSchema} from "../../shemas/recipe";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Recipe.name, schema: RecipeSchema}]),
    ],
    controllers: [CategoryController],
    providers: [RecipesService],
})
export class CategoryModule {}

import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Recipe, RecipeSchema} from "../../shemas/recipe";
import {RecipesController} from "./recipes.controller";
import {RecipesService} from "../../services/recipes/recipes.service";
import {CategoryController} from "../category/category.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Recipe.name, schema: RecipeSchema}]),
    ],
    controllers: [RecipesController, CategoryController],
    providers: [RecipesService],
})
export class RecipesModule {
}

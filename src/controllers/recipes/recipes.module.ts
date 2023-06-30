import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Recipe, RecipeSchema} from "../../shemas/recipe";
import {RecipesController} from "./recipes.controller";
import {RecipesService} from "../../services/recipes/recipes.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Recipe.name, schema: RecipeSchema}]),
    ],
    controllers: [RecipesController],
    providers: [RecipesService],
})
export class RecipesModule {
}

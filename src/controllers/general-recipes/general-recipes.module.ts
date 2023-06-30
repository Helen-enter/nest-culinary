import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {RecipesService} from "../../services/recipes/recipes.service";
import {GeneralRecipesController} from "./general-recipes.controller";
import {GeneralRecipe, GeneralRecipeSchema} from "../../shemas/general-recipe";
import { GeneralRecipesService } from 'src/services/general-recipes/general-recipes.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: GeneralRecipe.name, schema: GeneralRecipeSchema}]),
    ],
    controllers: [GeneralRecipesController],
    providers: [GeneralRecipesService],
})
export class GeneralRecipesModule {

}

import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {Recipe} from "../../shemas/recipe";
import {GeneralRecipesService} from "../../services/general-recipes/general-recipes.service";
import {IRecipe} from "../../interfaces/recipes";

@Controller('general-recipes')
export class GeneralRecipesController {
    constructor(private recipesService: GeneralRecipesService) {
    }

    @Get()
    getAllRecipes(): Promise<Recipe[]> {
        return this.recipesService.getAllRecipes();
    }

    @Post()
    sendRecipe(@Body() data: IRecipe) {
        return this.recipesService.addRecipe(data)
    }

    @Delete()
    deleteAllRecipes() {
        return this.recipesService.deleteAll()
    }

    @Get('recipe/:id')
    getRecipeById(@Param('id') id): Promise<IRecipe> {
        return this.recipesService.getRecipeById(id);
    }

    @Get(":title")
    getRecipeByName(@Param("title") title) {
        return this.recipesService.getRecipeByName(title);

    }

    @Get("category/:category")
    getRecipeByCategory(@Param("category") category) {
        return this.recipesService.getRecipeByCategory(category);

    }
}

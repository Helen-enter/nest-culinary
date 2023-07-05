import {Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {RecipesService} from "../../services/recipes/recipes.service";
import {Recipe} from "../../shemas/recipe";
import {diskStorage} from "multer";
import {FileInterceptor} from '@nestjs/platform-express/multer';
import {IRecipe} from "../../interfaces/recipes";
import {RecipeDto} from "../../dto/recipe-dto";

@Controller('recipes')

export class RecipesController {
    static imgName: string;

    constructor(private recipesService: RecipesService) {
    }

    @Get()
    getAllRecipes(): Promise<Recipe[]> {
        return this.recipesService.getAllRecipes();
    }

    @Get(':id')
    getRecipeById(@Param('id') id): Promise<Recipe> {
        return this.recipesService.getRecipeById(id);
    }

    @Post('/favorite')
    sendRecipeForBook(@Body() data: RecipeDto) {
        return this.recipesService.addRecipe(data)
    }

    @Post()
    @UseInterceptors(FileInterceptor("img", {
        storage: diskStorage({
            destination: "./public/",
            filename: (req, file, callback) => {
                const imgType = file.mimetype.split("/");
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
                const imgName = file.fieldname + "-" + uniqueSuffix + "." + imgType[1];

                callback(null, imgName);
                RecipesController.imgName = imgName;
            }
        })
    }))
    sendRecipe(@Body() data: IRecipe) {
        data.img = RecipesController.imgName
        return this.recipesService.addRecipe(data)
    }

    @Put(':id')
    updateRecipe(@Param('id') id, @Body() data): Promise<Recipe> {
        return this.recipesService.updateRecipe(id, data);
    }

    @Delete(':id')
    deleteRecipeById(@Param('id') id): Promise<Recipe> {
        return this.recipesService.deleteRecipeById(id);
    }

    @Delete()
    deleteAllRecipes() {
        return this.recipesService.deleteAllRecipes();
    }
}

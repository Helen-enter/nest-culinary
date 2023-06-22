import {Controller, Get} from '@nestjs/common';
import {RecipesService} from "../../services/recipes/recipes.service";

@Controller('category')
export class CategoryController {
    constructor(private recipesService: RecipesService) {}

    @Get()
    getCategory() {
        return this.recipesService.getCategory();
    }
}

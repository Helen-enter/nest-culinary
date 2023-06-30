import {IRecipe} from "../interfaces/recipes";

export class RecipeDto implements IRecipe {
    title: string;
    description: string;
    category: string;
    recipeId: string;
    userId: string
    img: string

    constructor(title, description, category, recipeId, userId, img) {
        this.title = title
        this.description = description
        this.category = category
        this.recipeId = recipeId
        this.userId = userId
        this.img = img
    }
}
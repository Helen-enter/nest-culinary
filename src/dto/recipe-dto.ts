import {IRecipe} from "../interfaces/recipes";

export class RecipeDto implements IRecipe {
    title: string;
    ingredients: string
    description: string;
    category: string;
    recipeId: string;
    userId: string
    img: string

    constructor(title, ingredients, description, category, recipeId, userId, img) {
        this.title = title
        this.ingredients = ingredients
        this.description = description
        this.category = category
        this.recipeId = recipeId
        this.userId = userId
        this.img = img
    }
}
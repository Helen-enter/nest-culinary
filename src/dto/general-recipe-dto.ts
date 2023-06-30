import {IRecipe} from "../interfaces/recipes";

export class GeneralRecipeDto implements IRecipe {
    title: string;
    description: string;
    category: string;
    id?: string;
    recipeId: string
    userId: string
    img: string
    _id?: string

    constructor(title, description, category, recipeId, userId, img) {
        this.title = title
        this.description = description
        this.category = category
        this.recipeId = recipeId
        this.userId = userId
        this.img = img
    }

}
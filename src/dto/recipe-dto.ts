import {IRecipe} from "../interfaces/recipes";

export class RecipeDto implements IRecipe {
    title: string;
    description: string;
    category: string;
    id: string;
    userId: string
    img: string

    constructor(title, description, category, id, userId, img) {
        this.title = title
        this.description = description
        this.category = category
        this.id = id
        this.userId = userId
        this.img = img
    }
}
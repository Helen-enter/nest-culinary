import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Recipe, RecipeDocument} from "../../shemas/recipe";
import {RecipeDto} from "../../dto/recipe-dto";

@Injectable()
export class RecipesService {
    constructor(
        @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    ) {console.log("recipeService run");}

    async getAllRecipes() {
        return this.recipeModel.find()
    }

    async getRecipeById(id) {
        return this.recipeModel.findById(id)
    }

    async addRecipe(data) {
        const recipe = new RecipeDto(data.title, data.description, data.category, data.id, data.userId, data.img);
        const recipeData = new this.recipeModel(recipe);
        await recipeData.save();


        // const recipeData = new this.recipeModel(data);
        // return recipeData.save();
    }

    async updateRecipe(id, body) {
        return this.recipeModel.findByIdAndUpdate(id, body);
    }

    async deleteRecipeById(id) {
        return this.recipeModel.findByIdAndRemove(id);
    }

    async deleteAllRecipes() {
        return this.recipeModel.deleteMany()
    }
}

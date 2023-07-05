import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {GeneralRecipe, GeneralRecipeDocument} from "../../shemas/general-recipe";
import {GeneralRecipeDto} from "../../dto/general-recipe-dto";

@Injectable()
export class GeneralRecipesService {
    constructor( @InjectModel(GeneralRecipe.name) private generalRecipeModel: Model<GeneralRecipeDocument>,) {
    }

    async getAllRecipes() {
        return this.generalRecipeModel.find()
    }

    async getRecipeById(id) {
        return this.generalRecipeModel.findById(id)
    }

    async addRecipe(data) {
        const recipe = new GeneralRecipeDto(data.title, data.ingredients, data.description, data.category, data.recipeId, data.userId, data.img);
        const recipeData = new this.generalRecipeModel(recipe);
        await recipeData.save();
    }

    async deleteAll() {
        return this.generalRecipeModel.deleteMany()
    }

    async getRecipeByName(title): Promise<GeneralRecipe[]> {
        return this.generalRecipeModel.find({title: { "$regex": title, "$options": "i" }})

    }

    async getRecipeByCategory(category): Promise<GeneralRecipe[]> {
        return this.generalRecipeModel.find({category: { "$regex": category, "$options": "i" }})

    }
}

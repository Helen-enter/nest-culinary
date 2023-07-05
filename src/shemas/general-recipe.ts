import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {IRecipe} from "../interfaces/recipes";

export type GeneralRecipeDocument = HydratedDocument<GeneralRecipe>;

@Schema()
export class GeneralRecipe implements IRecipe {

    @Prop() title: string;

    @Prop() ingredients: string;

    @Prop() description: string;

    @Prop() category: string;

    @Prop() recipeId: string;

    @Prop() userId: string;

    @Prop() img: string;
}

export const GeneralRecipeSchema = SchemaFactory.createForClass(GeneralRecipe);
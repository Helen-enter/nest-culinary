import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {IRecipe} from "../interfaces/recipes";

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe implements IRecipe {

    @Prop() title: string;

    @Prop() description: string;

    @Prop() category: string;

    @Prop() id: string;   //   -----> добавить

    @Prop() userId: string;

    @Prop() img?: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
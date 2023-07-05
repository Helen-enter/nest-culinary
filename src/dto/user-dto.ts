import {IUser} from '../interfaces/user';
import {Prop} from "@nestjs/mongoose";

export class UserDto implements IUser {
    psw: string;
    login: string;
    email: string;
    id: string;

    calories?: string
    proteins?: string
    fats?: string
    carbohydrates?: string

    constructor(
        psw,
        login,
        email,
        id,
        calories,
        proteins,
        fats,
        carbohydrates
    ) {
        this.psw = psw;
        this.login = login;
        this.email = email;
        this.id = id;
        this.calories = calories;
        this.proteins = proteins;
        this.fats = fats;
        this.carbohydrates = carbohydrates
    }
}
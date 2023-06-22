import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './controllers/users/users.module';
import {MongooseModule} from '@nestjs/mongoose';
import {RecipesModule} from "./controllers/recipes/recipes.module";
import {CategoryModule} from "./controllers/category/category.module";

@Module({
    imports: [
        UsersModule,
        RecipesModule,
        CategoryModule,
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/culinary'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

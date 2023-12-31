import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from 'src/services/users/users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from 'src/shemas/user';
import {PassportModule} from '@nestjs/passport';
import {jwtConstants} from 'src/static/private/constants';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategyService} from '../../services/Autentification/jwt-strategy/jwt-strategy.service';
import {AuthService} from 'src/services/Autentification/auth/auth.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            // signOptions: { expiresIn: '60s' },
        }),],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {
}

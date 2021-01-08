import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginEntity } from '../entity/login.entity';
import { Repository } from 'typeorm';
import Login from './interface/login.interface';
import NewUser from './interface/newuser.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(LoginEntity)
        private loginRepository: Repository<LoginEntity>
    ) {}

    async getUser(user: string) {
        let getUser = this.loginRepository.createQueryBuilder().select("user").from(LoginEntity, "login").where(`login.user = "${user}"`).getOne();
        return getUser;
    }

    async createUser(newUser: NewUser) {
        if(newUser.password === newUser.repeatPassword) {
            let existing = await this.loginRepository.createQueryBuilder()
                .select("login")
                .from(LoginEntity, "login")
                .where(`login.user = "${newUser.user}"`).getOne();
            if(existing) {
                return false
            } else {
                await this.loginRepository.createQueryBuilder().insert().into(LoginEntity).values({
                    user: newUser.user,
                    password: newUser.password,
                    email: newUser.email,
                    passport: uuidv4()
                }).execute();
                return true;
            }
        }
        return false;
    }

    async enterLogin(user: Login) {
        let existing = await this.loginRepository.createQueryBuilder()
            .select("login")
            .from(LoginEntity, "login")
            .where(`login.user = "${user.user}"`).getOne();
        if(existing && user.password === existing.password) {
            return JSON.stringify(existing.passport);
        }
        return false;
    }
}

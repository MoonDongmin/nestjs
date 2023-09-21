import {
    Injectable, UnauthorizedException,
} from "@nestjs/common";
import {
    PrismaConfig,
} from "@main/configurer/prisma.config";
import {
    Account,
} from "@prisma/client";

import * as bcrypt from "bcrypt";

@Injectable()
export class AccountService {
    constructor(
    private readonly prisma: PrismaConfig,
    ) {
    }

    async create(
        account: {
      email: string,
      name: string,
      password: string,
    },
    ): Promise<Account> {
        account.password = await bcrypt.hash(account.password, 10);

        console.log(account);

        return await this.prisma.account.create({
            data: account,
        });
    }

    async findAll(): Promise<Account[]> {
        return await this.prisma.account.findMany();
    }

    async findById(
        id: string,
    ): Promise<Account> {
        const result = await this.prisma.account.findUnique({
            where: {
                id,
            },
        });

        return result ? result : {} as Account; //typeCasting
    }

    async update(
        id: string,
        account: {
      email: string,
    },
    ): Promise<Account> {
        return await this.prisma.account.update({
            where: {
                id,
            },
            data: account,
        });
    }

    async remove(
        id: string,
    ): Promise<Account> {
        return await this.prisma.account.delete({
            where: {
                id,
            },
        });
    }

    async login(
        email: string,
        password: string,
    ): Promise<Account> {

        const user = await this.prisma.account.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new UnauthorizedException("해당하는 이메일이 없습니다. 회원가입을 진행해 주세요.");
        }
        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            throw new UnauthorizedException("아이디와 비밀번호를 확인해주세요.");
        } else {
            console.log(user);

            return user;
        }
    }
}

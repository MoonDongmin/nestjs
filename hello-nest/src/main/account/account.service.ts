import {
    Injectable, UnauthorizedException,
} from "@nestjs/common";
import {
    PrismaConfig,
} from "@main/configurer/prisma.config";
import {
    Account,
} from "@prisma/client";

import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
    constructor(
    private readonly prisma: PrismaConfig,
    ) {
    }

    async create(
        account: Account,
    ): Promise<Account> {
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
        id: string,
        password: string,
    ):Promise<Account> {

        const user = await this.prisma.account.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new UnauthorizedException("해당하는 아이디가 없습니다. 회원가입을 진행해 주세요.");
        }

        if (user.password === password) {
            return user;
        } else {
            throw new UnauthorizedException("아이디와 비밀번호를 확인해주세요.");
        }
    }
}

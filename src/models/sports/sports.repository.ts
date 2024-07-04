import { PrismaClient } from '@prisma/client';
import { SportsActivityDTO } from './dto';

const prisma = new PrismaClient();

export class SportsActivityRepository {
    async findAll() {
        return await prisma.sports.findMany();
    }

    async findById({ id }: string): Promise<any> {
        return await prisma.sports.findUnique({
            where: {
                id: id,
            },
        });
    }

    async create(data: SportsActivityDTO): Promise<any> {
        // const { name, description, date } = data;

        return await prisma.sports.create({
            ...data,
        });
    }

    async update(id: string, data: SportsActivityDTO): Promise<any> {
        return await prisma.sports.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    async delete(id: string): Promise<any> {
        return await prisma.sports.delete({
            where: {
                id: id,
            },
        });
    }
}

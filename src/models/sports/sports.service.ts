import { SportsActivityDTO } from './dto';
import { SportsActivityRepository } from './sports.repository';
export class SportsActivityService {
    async findAll(sportsActivityRepository: SportsActivityRepository) {
        const content = await sportsActivityRepository.findAll();
        return content;
    }

    async findById(sportsActivityRepository: SportsActivityRepository, id: string) {
        const content = await sportsActivityRepository.findById(id);
        return content;
    }

    async create(sportsActivityRepository: SportsActivityRepository, data: SportsActivityDTO) {
        const content = await sportsActivityRepository.create(data);
        return content;
    }

    async update(
        sportsActivityRepository: SportsActivityRepository,
        id: string,
        data: SportsActivityDTO
    ) {
        const content = await sportsActivityRepository.update(id, data);
        return content;
    }

    async delete(sportsActivityRepository: SportsActivityRepository, id: string) {
        const content = await sportsActivityRepository.delete(id);
        return content;
    }
}

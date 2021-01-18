import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScoreEntity } from 'src/entity/score.entity';
import { Repository } from 'typeorm';
import { Score } from './interface/score.interface';

@Injectable()
export class ScoreService {
    constructor(
        @InjectRepository(ScoreEntity)
        private scoreEntity: Repository<ScoreEntity>
    ) {}

    setScore(score: Score) {
        console.log(score);
    }
}

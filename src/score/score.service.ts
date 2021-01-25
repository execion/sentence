import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScoreEntity } from 'src/entity/score.entity';
import { Repository } from 'typeorm';
import { listToString } from './helper/helper';
import { Score } from './interface/score.interface';

@Injectable()
export class ScoreService {
    constructor(
        @InjectRepository(ScoreEntity)
        private scoreEntity: Repository<ScoreEntity>
    ) {}

    async setScore(score: Score) {
        const findId = await this.scoreEntity.createQueryBuilder()
            .select("score")
            .from(ScoreEntity, "score")
            .where(`score.id_sentence = "${score.id}"`).getOne();

        let correct: boolean;
        if(score.answerCorrect === listToString(score.answerUser)) {
            correct = true;
        } else {
            correct = false;
        }
        
        if(findId) {
            if(correct) {
                await this.scoreEntity.createQueryBuilder()
                    .update(ScoreEntity)
                    .set({
                        correct: findId.correct + 1
                    })
                    .where("id = :id", {id: findId.id})
                    .execute();
            } else {
                await this.scoreEntity.createQueryBuilder()
                    .update(ScoreEntity)
                    .set({
                        incorrect: findId.incorrect + 1
                    })
                    .where("id = :id", {id: findId.id})
                    .execute();
            }
        } else {
            if(correct) {
                await this.scoreEntity.createQueryBuilder()
                    .insert().into(ScoreEntity)
                    .values({
                        id_sentence: score.id,
                        id_user: 1,
                        correct: 1,
                        incorrect: 0
                    }
                ).execute();
            } else {
                await this.scoreEntity.createQueryBuilder()
                    .insert().into(ScoreEntity)
                    .values({
                        id_sentence: score.id,
                        id_user: 1,
                        incorrect: 1,
                        correct: 0
                    }
                    ).execute();
            }
        }
        const result = {
            result: correct
        }
        console.log(result);
        return result;
    }
}

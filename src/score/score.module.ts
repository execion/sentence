import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreEntity } from 'src/entity/score.entity';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports:[TypeOrmModule.forFeature([ScoreEntity])],
  controllers: [ScoreController],
  providers: [ScoreService]
})
export class ScoreModule {}

import { Module } from '@nestjs/common';
import { SentenceController } from './sentence.controller';
import { SentenceService } from './sentence.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sentence } from '../entity/sentence.entity';
import { LoginEntity } from 'src/entity/login.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Sentence, LoginEntity]),],
  controllers: [SentenceController],
  providers: [SentenceService]
})
export class SentenceModule {}

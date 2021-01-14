import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sentence } from 'src/entity/sentence.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as tts from 'google-translate-tts';
import { LoginEntity } from 'src/entity/login.entity';

@Injectable()
export class SentenceService {
    constructor(
        @InjectRepository(Sentence)
        private sentenceRepository: Repository<Sentence>,
        @InjectRepository(LoginEntity)
        private loginRepository: Repository<LoginEntity>
    ){}

    async getSentences(passport: string) {
        let existing = await this.loginRepository
            .createQueryBuilder("login")
            .where("passport = :passport", {passport: passport})
            .getOne();
        if(existing.passport) {
            let query = await this.sentenceRepository.find();
            return query;
        } else {
            return false;
        }
    }

    async createSentence(sentence: string) {
        let temp = sentence[sentence.length - 1] === "." ? sentence.substring(0, sentence.length - 1 ) : sentence ;
        let existing = await this.sentenceRepository.createQueryBuilder().select("sentence")
        .from(Sentence, "sentence")
        .where("sentence.sentence = :sentence", { sentence: temp })
        .getOne();
        if(existing) {
            return false;
        } else {
            await this.sentenceRepository.createQueryBuilder().insert().into(Sentence).values({sentence: temp}).execute();
            return true;
        }
    }

    async createAudio(id: number) {
        let sentence = await this.sentenceRepository.createQueryBuilder("sentence").where("id = :id", {id: id}).getOne();
        const buffer = await tts.synthesize({
            text: `${sentence.sentence}`,
            voice: 'en-US',
            slow: true
        })
        await fs.writeFileSync("./assets/audio.mp3", buffer);
    }

}

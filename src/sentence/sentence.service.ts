import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sentence } from 'src/entity/sentence.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SentenceService {
    constructor(
        @InjectRepository(Sentence)
        private sentenceRepository: Repository<Sentence>,
    ){}

    async getSentences() {
        let query = await this.sentenceRepository.find();
        /* let fs = require("fs");
        for await(let i of query) {
            fs.writeFileSync("async.txt", i.sentence + ".\n", {flag: "a+"});
        } */
        return query.slice(250, 300);
    }

    async createSentence(sentence: string) {
        let temp = sentence[sentence.length - 1] === "." ? sentence.substring(0, sentence.length - 1 ) : sentence ;
        let existing = await this.sentenceRepository.createQueryBuilder()
            .select("sentence")
            .from(Sentence, "sentence")
            .where(`sentence.sentence = "${temp}"`).getOne();
        if(existing) {
            return false;
        } else {
            await this.sentenceRepository.createQueryBuilder().insert().into(Sentence).values({sentence: temp}).execute();
            return true;
        }
    }

}

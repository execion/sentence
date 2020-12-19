import { Body, Controller, Get, Post } from '@nestjs/common';
import { SentenceDto } from 'src/models/sentence.dto';
import { SentenceService } from './sentence.service';
@Controller('api')
export class SentenceController {
    constructor(
        private readonly sentenceService: SentenceService
    ) {}
    @Get("sentences")
    getSentences() {
        return this.sentenceService.getSentences();
    }
    @Post("create/sentence")
    async createSentence(@Body() createSen: SentenceDto ) {
        return await this.sentenceService.createSentence(createSen.sentence);
    }
}

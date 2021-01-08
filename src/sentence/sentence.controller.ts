import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SentenceDto } from './models/sentence.dto';
import { SentenceService } from './sentence.service';
import {resolve} from 'path';

@Controller('api')
export class SentenceController {
    constructor(
        private readonly sentenceService: SentenceService
    ) {}
    @Post("sentences")
    getSentences(@Body() body: SentenceDto) {
        return this.sentenceService.getSentences(body.passport);
    }
    @Post("create/sentence")
    async createSentence(@Body() createSen: SentenceDto ) {
        return await this.sentenceService.createSentence(createSen.sentence);
    }
    @Get("audio/:id")
    async getAudio(@Res() res: Response, @Param() params) {
        await this.sentenceService.createAudio(params.id);
        await res.sendFile(resolve("./assets/audio.mp3"), {acceptRanges: false});
    }
}

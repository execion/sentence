import { Body, Controller, Post } from '@nestjs/common';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
    constructor(
        private readonly scoreService: ScoreService
    ) {}

    @Post()
    setScore(@Body() body) {
        return this.scoreService.setScore(body);
    }
}

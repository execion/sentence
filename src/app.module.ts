import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SentenceModule } from './sentence/sentence.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SentenceModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    })
],
})
export class AppModule {}

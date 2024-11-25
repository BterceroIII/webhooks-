import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GithubModule } from './github/github.module';


@Module({
  imports: [HttpModule, GithubModule], // import
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

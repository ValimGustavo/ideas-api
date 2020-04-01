import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { IdeaModule } from './idea/idea.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/http-error-filter';
import { LoggerInterception } from './shared/interception/logger.interception';
import { UserModule } from './user/user.module';


@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule, UserModule],
  controllers: [AppController],
  providers: [AppService,
   {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
   },
   {
     provide: APP_INTERCEPTOR,
     useClass: LoggerInterception
   }
],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { Logger } from '@nestjs/common';
import { ShowInformationPipe } from './shared/validator.pipe';

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`Server Port: ${PORT}`, 'bootstrap')
}
bootstrap();

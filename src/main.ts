import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async function () {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};
bootstrap();

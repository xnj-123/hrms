import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import * as cors from 'cors'
import { HttpExceptionFilter } from './common/filter'
import { Response } from './common/response'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new Response());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

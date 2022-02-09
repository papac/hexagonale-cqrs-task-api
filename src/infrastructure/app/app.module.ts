import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_DATABASE_CONFIGURATION } from '../database/configuration';

@Module({
  controllers: [AppController],
  imports: [
    CqrsModule,
    TypeOrmModule.forRoot(TYPEORM_DATABASE_CONFIGURATION),
    DomainModule,
  ],
})
export class AppModule {}
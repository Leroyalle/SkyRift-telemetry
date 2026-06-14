import { Module } from '@nestjs/common';

import { CREATE_EVENT_USE_CASE_PORT } from './application/ports/create-event-use-case.port';
import { EVENT_REPOSITORY_TOKEN } from './application/ports/tokens';
import { CreateEventUseCase } from './application/use-cases/create-event.use-case';
import { EventRepository } from './infrastructure/repositories/event.repository';

@Module({
  providers: [
    {
      provide: EVENT_REPOSITORY_TOKEN,
      useClass: EventRepository,
    },
    {
      provide: CREATE_EVENT_USE_CASE_PORT,
      useClass: CreateEventUseCase,
    },
  ],
})
export class EventModule {}

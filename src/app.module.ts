import { Module } from '@nestjs/common';

import { CREATE_EVENT_USE_CASE_PORT } from './events/application/ports/create-event-use-case.port';
import { EVENT_REPOSITORY_TOKEN } from './events/application/ports/tokens';
import { CreateEventUseCase } from './events/application/use-cases/create-event.use-case';
import { EventRepository } from './events/infrastructure/repositories/event.repository';

@Module({
  imports: [],
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
export class AppModule {}

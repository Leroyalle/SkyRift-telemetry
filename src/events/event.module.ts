import { Module } from '@nestjs/common';

import { CREATE_EVENT_USE_CASE_TOKEN } from './application/ports/create-event-use-case.port';
import { GET_STATISTICS_USE_CASE_TOKEN } from './application/ports/get-statistics-use-case.port';
import { EVENT_REPOSITORY_TOKEN } from './application/ports/tokens';
import { CreateEventUseCase } from './application/use-cases/create-event.use-case';
import { GetStatisticsUseCase } from './application/use-cases/get-statistics.use-case';
import { EventRepository } from './infrastructure/repositories/event.repository';
import { EventsController } from './presentation/events/events.controller';

@Module({
  providers: [
    {
      provide: EVENT_REPOSITORY_TOKEN,
      useClass: EventRepository,
    },
    {
      provide: CREATE_EVENT_USE_CASE_TOKEN,
      useClass: CreateEventUseCase,
    },
    {
      provide: GET_STATISTICS_USE_CASE_TOKEN,
      useClass: GetStatisticsUseCase,
    },
  ],
  controllers: [EventsController],
})
export class EventModule {}

import { EventRepositoryPort } from 'src/events/domain/ports/event-repository.port';

import { Inject, Injectable } from '@nestjs/common';

import {
  GetStatisticsPayload,
  GetStatisticsUseCasePort,
} from '../ports/get-statistics-use-case.port';
import { EVENT_REPOSITORY_TOKEN } from '../ports/tokens';

@Injectable()
export class GetStatisticsUseCase implements GetStatisticsUseCasePort {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN) private readonly eventRepository: EventRepositoryPort,
  ) {}

  public async execute(params: GetStatisticsPayload) {
    const result = await this.eventRepository.findBy(params);
    return result.map(event => event.snapshot());
  }
}

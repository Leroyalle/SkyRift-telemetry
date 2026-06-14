import { randomUUID } from 'crypto';
import { Event } from 'src/events/domain/entities/event.entity';
import { EventRepositoryPort } from 'src/events/domain/ports/event-repository.port';
import { IEvent } from 'src/events/domain/types/event.type';

import { Inject, Injectable } from '@nestjs/common';

import { CreateEventUseCasePort } from '../ports/create-event-use-case.port';
import { EVENT_REPOSITORY_TOKEN } from '../ports/tokens';

@Injectable()
export class CreateEventUseCase implements CreateEventUseCasePort {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN) private readonly eventRepository: EventRepositoryPort,
  ) {}

  public async execute(input: Omit<IEvent, 'id'>): Promise<IEvent> {
    const domain = Event.create({
      id: randomUUID(),
      payload: input.payload,
      type: input.type,
      timestamp: new Date(),
    });

    const result = await this.eventRepository.create(domain);
    return result.snapshot();
  }
}

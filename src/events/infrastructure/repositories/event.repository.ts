import { HydratedDocument, Model } from 'mongoose';
import { Event } from 'src/events/domain/entities/event.entity';
import { EventRepositoryPort } from 'src/events/domain/ports/event-repository.port';
import { IEvent } from 'src/events/domain/types/event.type';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { EventOrmEntity } from '../entities/event.entity';

@Injectable()
export class EventRepository implements EventRepositoryPort {
  constructor(
    @InjectModel(EventOrmEntity.name)
    private readonly model: Model<HydratedDocument<EventOrmEntity>>,
  ) {}

  public async create(domain: Event): Promise<Event> {
    const snapshot = domain.snapshot();

    const event = await this.model.create({
      _id: snapshot.id,
      type: snapshot.type,
      payload: snapshot.payload,
    });

    return Event.create({
      id: event.id,
      type: event.type,
      payload: event.payload,
      timestamp: event.timestamp,
    });
  }

  public async findBy(params: Partial<Omit<IEvent, 'payload'>>) {
    const cleanedFilter = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== undefined),
    );

    const result = await this.model.find(cleanedFilter).select({ type: 1, payload: 1 });
    return result.map(event => Event.create(event));
  }
}

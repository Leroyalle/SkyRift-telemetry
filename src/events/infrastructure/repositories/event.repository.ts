import { HydratedDocument, Model } from 'mongoose';
import { Event } from 'src/events/domain/entities/event.entity';
import { EventRepositoryPort } from 'src/events/domain/ports/event-repository.port';

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
      playerId: snapshot.playerId,
      type: snapshot.type,
      payload: snapshot.payload,
    });

    return Event.create({
      id: event.id,
      playerId: event.playerId,
      type: event.type,
      payload: event.payload,
    });
  }
}

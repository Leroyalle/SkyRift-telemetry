import { Event } from '../entities/event.entity';
import { IEvent } from '../types/event.type';

export interface EventRepositoryPort {
  create(domain: Event): Promise<Event>;
  findBy(params: Partial<Omit<IEvent, 'payload'>>): Promise<Event[]>;
}

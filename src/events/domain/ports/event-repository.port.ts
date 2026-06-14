import { Event } from '../entities/event.entity';

export interface EventRepositoryPort {
  create(domain: Event): Promise<Event>;
}

import { IEvent } from 'src/events/domain/types/event.type';

export interface CreateEventUseCasePort {
  execute(input: Omit<IEvent, 'id'>): Promise<IEvent>;
}

export const CREATE_EVENT_USE_CASE_TOKEN = Symbol('CREATE_EVENT_USE_CASE_TOKEN');

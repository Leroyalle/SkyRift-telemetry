import { IEvent } from 'src/events/domain/types/event.type';

export interface CreateEventUseCasePort {
  execute(input: IEvent): Promise<IEvent>;
}

export const CREATE_EVENT_USE_CASE_PORT = Symbol('CREATE_EVENT_USE_CASE_PORT');

import { EventType, IEvent } from 'src/events/domain/types/event.type';

export const GET_STATISTICS_USE_CASE_TOKEN = Symbol('GET_STATISTICS_USE_CASE_TOKEN');

export interface GetStatisticsUseCasePort {
  execute(params: GetStatisticsPayload): Promise<IEvent[]>;
}

export interface GetStatisticsPayload {
  type: EventType;
  timestamp: Date;
}

import { EVENT_TYPES } from '../constants/event-types.constants';

export interface IEvent {
  id: string;
  type: EventType;
  payload: Record<string, unknown>;
  timestamp: Date;
}

export type EventType = (typeof EVENT_TYPES)[number];

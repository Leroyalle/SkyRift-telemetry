import { EVENT_TYPES } from '../constants/event-types.constants';

export interface IEvent {
  id: string;
  type: EventType;
  playerId: string;
  payload: Record<string, unknown>;
}

export type EventType = (typeof EVENT_TYPES)[number];

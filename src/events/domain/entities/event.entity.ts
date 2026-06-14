import { EventSchema } from '../schemas/event.schema';
import { IEvent } from '../types/event.type';

export class Event {
  private constructor(private readonly props: IEvent) {}

  public static create(payload: IEvent): Event {
    EventSchema.parse(payload);

    return new Event(payload);
  }

  public snapshot(): Readonly<IEvent> {
    return this.props;
  }
}

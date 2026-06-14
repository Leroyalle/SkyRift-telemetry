import {
  CREATE_EVENT_USE_CASE_TOKEN,
  CreateEventUseCasePort,
} from 'src/events/application/ports/create-event-use-case.port';
import { EventSchema, IEventSchema } from 'src/events/domain/schemas/event.schema';

import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { ZodPipe } from '../pipes/zod.pipe';

@Controller()
export class EventsController {
  constructor(
    @Inject(CREATE_EVENT_USE_CASE_TOKEN)
    private readonly createEventUseCase: CreateEventUseCasePort,
  ) {}

  @EventPattern('events')
  public createEvent(@Payload(new ZodPipe(EventSchema)) payload: IEventSchema) {
    return this.createEventUseCase.execute(payload);
  }
}

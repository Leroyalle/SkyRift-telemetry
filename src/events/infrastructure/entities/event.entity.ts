import { EVENT_TYPES } from 'src/events/domain/constants/event-types.constants';
import { EventType } from 'src/events/domain/types/event.type';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'events',
  strict: true,
})
export class EventOrmEntity {
  @Prop({
    required: true,
    enum: EVENT_TYPES,
  })
  type!: EventType;

  @Prop({
    required: true,
    type: Object,
  })
  payload!: Record<string, unknown>;

  @Prop({
    type: Date,
    required: true,
  })
  timestamp!: Date;
}

export const CreatedEventSchema = SchemaFactory.createForClass(EventOrmEntity);

CreatedEventSchema.index({
  type: 1,
  timestamp: 1,
});

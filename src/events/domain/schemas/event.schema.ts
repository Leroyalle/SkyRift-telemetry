import { z } from 'zod';

const MobKilledEventSchema = z.object({
  type: z.literal('mob_killed'),
  timestamp: z.date(),
  payload: z.object({
    mobId: z.string(),
    killerId: z.string(),
  }),
});

const PlayerJoinedEventSchema = z.object({
  type: z.literal('player_joined'),
  timestamp: z.date(),
  payload: z.object({
    playerId: z.string(),
    nickname: z.string(),
  }),
});

export const EventSchema = z.discriminatedUnion('type', [
  MobKilledEventSchema,
  PlayerJoinedEventSchema,
]);

export type IEventSchema = z.infer<typeof EventSchema>;

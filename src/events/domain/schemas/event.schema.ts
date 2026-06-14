import { z } from 'zod';

const MobKilledEventSchema = z.object({
  type: z.literal('mob_killed'),
  payload: z.object({
    mobId: z.string(),
    killerId: z.string(),
  }),
});

const PlayerJoinedEventSchema = z.object({
  type: z.literal('player_joined'),
  payload: z.object({
    playerId: z.string(),
    nickname: z.string(),
  }),
});

export const EventSchema = z.discriminatedUnion('type', [
  MobKilledEventSchema,
  PlayerJoinedEventSchema,
]);

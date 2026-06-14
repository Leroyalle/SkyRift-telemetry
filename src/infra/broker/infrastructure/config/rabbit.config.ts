import { ConfigService } from '@nestjs/config';
import { ClientProvider, Transport } from '@nestjs/microservices';

export const BROKER_TOKEN = Symbol('BROKER_TOKEN');

export function createRabbitMqConfig(configService: ConfigService): ClientProvider {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
      queue: 'events',
    },
  };
}

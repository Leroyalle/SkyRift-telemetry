import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';

import { BROKER_ADAPTER_TOKEN } from './application/ports/broker-adapter.port';
import { BrokerAdapter } from './infrastructure/adapters/broker.adapter';
import { BROKER_TOKEN, createRabbitMqConfig } from './infrastructure/config/rabbit.config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: BROKER_TOKEN,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: createRabbitMqConfig,
      },
    ]),
  ],
  providers: [
    {
      provide: BROKER_ADAPTER_TOKEN,
      useClass: BrokerAdapter,
    },
  ],
  exports: [BROKER_ADAPTER_TOKEN],
})
export class BrokerModule {}

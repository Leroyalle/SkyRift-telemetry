import { Module } from '@nestjs/common';

import { BrokerModule } from './broker/broker.module';

@Module({
  imports: [BrokerModule],
})
export class InfraModule {}

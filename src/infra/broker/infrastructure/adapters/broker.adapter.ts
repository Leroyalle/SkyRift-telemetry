import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { BROKER_TOKEN } from '../config/rabbit.config';

@Injectable()
export class BrokerAdapter {
  constructor(@Inject(BROKER_TOKEN) private readonly client: ClientProxy) {}

  public emit(event: string, payload: any) {
    this.client.emit(event, payload);
  }
}

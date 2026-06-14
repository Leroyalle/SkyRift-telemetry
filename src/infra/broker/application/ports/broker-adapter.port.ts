export const BROKER_ADAPTER_TOKEN = Symbol('BROKER_ADAPTER_TOKEN');

export interface BrokerAdapterPort {
  emit(event: string, payload: any): Promise<void>;
}

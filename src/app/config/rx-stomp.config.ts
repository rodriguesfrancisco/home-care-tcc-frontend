import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

const token = localStorage.getItem('token');

export const rxJsStompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://localhost:8080/socket',
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 20000,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
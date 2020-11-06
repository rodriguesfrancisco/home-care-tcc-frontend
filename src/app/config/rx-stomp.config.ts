import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { environment } from 'src/environments/environment';

const token = localStorage.getItem('token');

export const rxJsStompConfig: InjectableRxStompConfig = {
  brokerURL: environment.wsApi,
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 1000,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
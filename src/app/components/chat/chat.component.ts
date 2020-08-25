import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocketService } from 'src/app/services/socket/socket.service';
import { Mensagem } from 'src/app/models/Mensagem';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HttpClient } from '@angular/common/http';
import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { rxJsStompConfig } from 'src/app/config/rx-stomp.config';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  formMyId: FormGroup;
  formMensagem: FormGroup;

  myId: number;
  myToken: string;
  messages = [];

  isSocketOpened = false;

  constructor(private rxStompService: RxStompService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.formMyId = formBuilder.group({
      myIdForm: ['', Validators.required]
    });

    this.formMensagem = formBuilder.group({
      mensagem: ['', Validators.required],
      toId: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.myToken = localStorage.getItem('token');
    const config: InjectableRxStompConfig = { ...rxJsStompConfig, connectHeaders: { 'login': this.myToken } };
    this.rxStompService.configure(config);
    this.rxStompService.activate();

    if (this.rxStompService.connected()) {
      this.isSocketOpened = true;
    }
  }

  registrarId() {
    this.myId = this.formMyId.value.myIdForm;
    this.rxStompService.watch(`/status-processor/${this.myId}`, { 'login': this.myToken }).subscribe((message) => {
      this.isSocketOpened = true;
      this.messages.push(JSON.parse(message.body));
      console.log(this.messages);
    });
  }

  enviarMensagem() {
    const { mensagem, toId } = this.formMensagem.value;
    this.http.post('http://localhost:8080/api/socket/message', { message: mensagem, toId, fromId: this.myId })
      .subscribe(res => {

      })
  }

}

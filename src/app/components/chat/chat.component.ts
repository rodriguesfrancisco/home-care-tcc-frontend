import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocketService } from 'src/app/services/socket/socket.service';
import { Mensagem } from 'src/app/models/Mensagem';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HttpClient } from '@angular/common/http';
import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { rxJsStompConfig } from 'src/app/config/rx-stomp.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  formMensagem: FormGroup;

  toId: number;
  fromId: number;
  userToken: string;
  messages = [];

  enviandoMensagem = false;

  constructor(
    private rxStompService: RxStompService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private socketService: SocketService,
    router: Router) {

    this.toId = router.getCurrentNavigation().extras.state.toId;

    this.formMensagem = formBuilder.group({
      mensagem: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.userToken = localStorage.getItem('token');
    this.fromId = Number(localStorage.getItem('id'));
    const config: InjectableRxStompConfig = { ...rxJsStompConfig, connectHeaders: { 'login': this.userToken } };
    this.rxStompService.configure(config);
    this.rxStompService.activate();
    this.rxStompService.watch(`/status-processor/${this.fromId}`, { 'login': this.userToken }).subscribe((message) => {
      this.messages.push(JSON.parse(message.body));
    });
    this.socketService.getMensagens(this.fromId, this.toId)
      .subscribe((mensagens) => {
        mensagens.forEach(mensagem => {
          this.messages.push(mensagem);
        });
        this.scrollToBottom();
      });
  }

  ngOnDestroy() {
    this.rxStompService.deactivate();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  enviarMensagem() {
    const { mensagem } = this.formMensagem.value;
    this.enviandoMensagem = true;
    setTimeout(() => {
      this.http.post(`${environment.api}/api/socket/message`, { message: mensagem, toId: this.toId, fromId: this.fromId })
        .subscribe(res => {
          this.enviandoMensagem = false;
        })
    }, 2000);
  }

  checkWebSocketState() {
    return this.rxStompService.connected();
  }

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}

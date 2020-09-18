import { Solicitacao } from './Solicitacao';
import { User } from './User';

export interface MensagemDTO {
  mensagensProfissional: any[];
  solicitacao: Solicitacao;
}
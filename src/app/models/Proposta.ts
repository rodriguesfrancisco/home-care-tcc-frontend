import { Solicitacao } from './Solicitacao';
import { User } from './User';

export interface Proposta {
  id?: number;
  preco: number;
  data?: Date;
  informacoes: string;
  solicitacao: Solicitacao;
  profissional?: User;
}
import { Proposta } from './Proposta';

export interface Solicitacao {
  id?: number;
  titulo: string;
  informacoes: string;
  dataSolicitacao: Date;
  statusSolicitacao: string;
  valorAproximadoSolicitacao: Number;
  preferenciaSexoProfissional: string;
  user?: any;
  propostas?: Proposta[];
  atendimento?: any;
}
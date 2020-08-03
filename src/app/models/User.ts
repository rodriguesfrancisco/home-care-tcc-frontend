import { Endereco } from './Endereco';

export interface User {
  nomeCompleto: string;
  email?: string;
  password?: string;
  roles: string[];
  sexo: string;
  dataNascimento: Date;
  paciente?: User;
  endereco?: Endereco;
}
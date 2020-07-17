export interface User {
    nomeCompleto: string;
    email?: string;
    password?: string;
    roles: string[];
}
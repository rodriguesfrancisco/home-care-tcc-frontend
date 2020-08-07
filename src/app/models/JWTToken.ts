export interface JWTToken {
  id: number;
  username: string;
  token: string;
  expireDate: Date;
  roles: string[];
}
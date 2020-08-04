export interface JWTToken {
  username: string;
  token: string;
  expireDate: Date;
  roles: string[];
}
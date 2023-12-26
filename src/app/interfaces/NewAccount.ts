export interface NewAccount {
  name: string;
  cnpj: string;
  phone?: string;
  email: string;
  address?: string;
  cep?: string;
  password: string;
}

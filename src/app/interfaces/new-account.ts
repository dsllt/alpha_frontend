export interface NewAccount {
  name: string;
  cnpj: string;
  phone?: string;
  email: string;
  address: {
    street?: string;
    building?: string;
    sub_building?: string;
    city?: string;
    state?: string;
    country?: string;
    cep?: string;
  };
  password: string;
}

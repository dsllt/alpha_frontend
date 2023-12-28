export interface AccountInfo {
  accountId: string;
  clientId: string;
  name: string;
  cnpj: string;
  phone?: string;
  email: string;
  address: string;
  cep?: string;
  approvalDate: string;
  requestDate: string;
}

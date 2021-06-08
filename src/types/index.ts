export interface User {
  id: number;
  name: string;
  age: number;
  dev: string;
  company: string;
  years: number;
  features: Array<number>;
}

export interface UserDataTable {
  name: string;
  age: number;
  dev: string;
  company: string;
  years: number;
  features: string;
}

export type MachineCategory =
  | 'Tratores'
  | 'Colheitadeiras'
  | 'Plantadeiras'
  | 'Pulverizadores'
  | 'Implementos'
  | 'Outros';

export interface Machine {
  id: string;
  brand: string;
  model: string;
  category: MachineCategory;
  year: number;
  hours: number;
  price: number;
  location: string;
  state: string;
  horsepower?: number;
  traction?: string;
  transmission?: string;
  description: string;
  images: string[];
  featured: boolean;
}

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  year: string;
  maxPrice: string;
  location: string;
}

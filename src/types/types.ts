export interface Study {
  id: string;
  name: string;
  code: string;
  category: string;
  price: number;
  etaMinutes: number;
  preparation: string;
  description: string;
}

export interface CartItem extends Study {
  quantity: number;
}

export interface StudiesState {
  studies: Study[];
  filteredStudies: Study[];
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalTime: number;
}

export interface StudiesFilter {
  search: string;
  category: string;
  sort: "price-asc" | "price-desc" | "";
}

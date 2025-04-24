export interface Option {
  label: string;
  isActive: boolean;
}

export interface CategoryGroup {
  category: string;
  options: Option[];
}

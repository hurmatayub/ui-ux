interface MenuItem {
  icon: string;
  label: string;
}

interface MainMenuItem extends MenuItem {
  isActive?: boolean;
}

interface PreferenceMenuItem extends MenuItem {
  hasToggle?: boolean;
}

interface TransactionItem {
  image: string;
  name: string;
  type: string;
  date: string;
  price: string;
}

interface CarStatistic {
  type: string;
  count: number;
  color: string;
}

export type { MainMenuItem, PreferenceMenuItem, TransactionItem, CarStatistic };

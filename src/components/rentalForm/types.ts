export interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
}

export interface StepHeaderProps {
  title: string;
  subtitle: string;
  step: string;
}

export interface PaymentMethodProps {
  icon: string;
  name: string;
  logo?: string;
}

export interface CheckboxProps {
  text: string;
}

export interface RentalSummaryProps {
  carName: string;
  carImage: string;
  rating: number;
  reviews: number;
  subtotal: number;
  tax: number;
  total: number;
}

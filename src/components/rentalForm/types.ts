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

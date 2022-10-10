export interface CounterProps {
  onValueHandler: any;
}

export interface ResultProps {
  value: number | null;
  prevValueRef?: number | null;
}

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick: () => void | any;
}

export interface CardProps {
  className?: string | undefined;
  children: React.ReactNode;
}

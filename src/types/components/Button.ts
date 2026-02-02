export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: 'xs' | 'sm' | 'md' | 'lg';
    variant: 'primary' | 'secondary' | 'tertiary';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
    isSelected?: boolean;
}


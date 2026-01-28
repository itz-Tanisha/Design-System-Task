export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: 'xs' | 'sm' | 'md' | 'lg';
    variant: 'primary' | 'secondary' | 'tertiary';
    icon?: React.ReactNode;
    iconPlacement?: 'start' | 'end';
    loading?: boolean;
}


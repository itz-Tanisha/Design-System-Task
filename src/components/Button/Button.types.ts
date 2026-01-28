export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: 'xs' | 'sm' | 'md' | 'lg';
    variant: 'primary' | 'secondary' | 'tertiary';
    icon?: React.ReactNode;
    iconPlacememt?: 'start' | 'end';
    loading?: boolean;
}


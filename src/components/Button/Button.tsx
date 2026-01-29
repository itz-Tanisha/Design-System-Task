import React from 'react'
import './Button.css'
import type { ButtonProps } from '../../types/components/Button'


const Button: React.FC<ButtonProps> = ({
    label,
    variant,
    size,
    startIcon,
    endIcon,
    className = "",
    loading = false,
    disabled,
    ...otherprops
}) => {

    return (
        <button
            className={`${variant} ${size} ${className}`}
            disabled={disabled || loading}
            {...otherprops}
        >
            {
                loading
                    ? <span className='button-loading-spinner' />
                    : (startIcon && <span>{startIcon}</span>)
            }

            {label}

            {!loading && endIcon && <span>{endIcon}</span>}

        </button>
    )
}

export default Button
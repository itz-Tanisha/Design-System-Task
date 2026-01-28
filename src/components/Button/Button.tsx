import React from 'react'
import './Button.css'
import type { ButtonProps } from './Button.types'


const Button: React.FC<ButtonProps> = ({
    label,
    variant,
    size,
    icon,
    iconPlacement = "start",
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
                    ? <span className='button-loading-spinner'/>
                    : (icon && iconPlacement === "start" && <span>{icon}</span>)
            }

            {label}

            {!loading && icon && iconPlacement === "end" && <span>{icon}</span>}
            
        </button>
    )
}

export default Button
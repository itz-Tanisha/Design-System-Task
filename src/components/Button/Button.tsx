import React from 'react'
import './Button.css'
import type { ButtonProps } from './Button.types'


const Button: React.FC<ButtonProps> = ({
    label,
    variant,
    size,
    icon,
    iconPlacememt = "start",
    className,
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
                    : (icon && iconPlacememt === "start" && <span>{icon}</span>)
            }

            {label}

            {icon && iconPlacememt === "end" && <span>{icon}</span>}

        </button>
    )
}

export default Button
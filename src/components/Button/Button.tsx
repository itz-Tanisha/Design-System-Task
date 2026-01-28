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
    ...otherprops
}) => {

    return (
        <button className={`${variant} ${size} ${className}`} {...otherprops}>

            {icon && iconPlacememt === "start" && <span>{icon}</span>}

            {label}

            {icon && iconPlacememt === "end" && <span>{icon}</span>}

        </button>
    )
}

export default Button
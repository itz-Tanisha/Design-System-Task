import React from 'react'
import './Button.css'
import type { ButtonProps } from '../../types/components/Button'


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        label,
        variant,
        size,
        startIcon,
        endIcon,
        className = "",
        loading = false,
        disabled,
        ...otherprops
    }, ref) => {

        return (
            <button
                className={`${variant} ${size} ${className} button`}
                disabled={disabled || loading}
                {...otherprops}
                ref={ref}
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
)

export default Button
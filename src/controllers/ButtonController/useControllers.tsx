import React, { useCallback } from 'react'
import type { ButtonProps } from '../../types/components/Button';


const useControllers = (setButtonProps: React.Dispatch<React.SetStateAction<ButtonProps>>) => {

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {

        const name = e.target.name;
        const value = e.target.value;

        setButtonProps((prev) => ({
            ...prev,
            [name]: value
        }));


    }, [setButtonProps]);


    const handleToggleIcon = useCallback((name: 'startIcon' | 'endIcon') => {

        setButtonProps((prev) => ({
            ...prev,
            [name]: prev[name] ? undefined : <span>$ </span>
        }))

    }, [setButtonProps]);


    const handleToggleState = useCallback((name: 'loading' | 'isSelected' | 'disabled') => {

        setButtonProps((prev) => ({
            ...prev,
            [name]: !prev[name]
        }))

    }, [setButtonProps]);

    return {
        handleInputChange,
        handleToggleIcon,
        handleToggleState
    }
}

export default useControllers
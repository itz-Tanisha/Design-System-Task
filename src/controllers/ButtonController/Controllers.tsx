import React from 'react';
import type { ButtonProps } from '../../types/components/Button';
import useControllers from './useControllers';

export type ButtonControllersProps = {
    buttonProps: ButtonProps,
    setButtonProps: React.Dispatch<React.SetStateAction<ButtonProps>>
}

const Controllers: React.FC<ButtonControllersProps> = ({ buttonProps, setButtonProps }) => {

    const {
        handleInputChange,
        handleToggleIcon,
        handleToggleState
    } = useControllers(setButtonProps);

    return (
        <div className='button-controller-container'>

            <h2 className='button-controller-heading'>Controllers</h2>

            <div className='button-controller-input-container'>

                <label htmlFor='label'>Label</label>
                <input type="text" name="label" id='label' value={buttonProps.label} onChange={handleInputChange} />

            </div>

            <div className='button-controller-input-container'>

                <label htmlFor='size'>Size</label>

                <select name='size' id='size' value={buttonProps.size} onChange={handleInputChange}>
                    <option value="xs">xs</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                </select>

            </div>


            <div className='button-controller-input-container'>

                <label htmlFor='variant'>Variant</label>

                <select name='variant' id='variant' value={buttonProps.variant} onChange={handleInputChange}>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="tertiary">Tertiary</option>
                </select>

            </div>


            <div className='button-controller-input-container'>

                <label htmlFor='startIcon'>Start Icon</label>

                <button id='startIcon' onClick={() => handleToggleIcon("startIcon")}>
                    {
                        buttonProps.startIcon ? "Remove Icon" : "Add Icon"
                    }
                </button>

            </div>

            <div className='button-controller-input-container'>

                <label htmlFor='endIcon'>End Icon</label>

                <button id='endIcon' onClick={() => handleToggleIcon("endIcon")}>
                    {
                        buttonProps.endIcon ? "Remove Icon" : "Add Icon"
                    }
                </button>

            </div>

            <div className='button-controller-checkbox-container'>

                <input type="checkbox" name="isSelected" id='isSelected' checked={buttonProps.isSelected} onChange={() => handleToggleState("isSelected")} />

                <label htmlFor='isSelected'>isSelected</label>

            </div>

            <div className='button-controller-checkbox-container'>

                <input type='checkbox' id='loading' name='loading' checked={buttonProps.loading} onChange={() => handleToggleState("loading")} />

                <label htmlFor='loading'>Loading</label>

            </div>

            <div className='button-controller-checkbox-container'>

                <input type='checkbox' id='disabled' name='disabled' checked={buttonProps.disabled} onChange={() => handleToggleState("disabled")} />

                <label htmlFor='disabled'>Disabled</label>

            </div>

        </div>
    )
}

export default Controllers
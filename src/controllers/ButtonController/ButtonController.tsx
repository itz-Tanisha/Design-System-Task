import { useState } from 'react'
import type { ButtonProps } from '../../types/components/Button';
import './ButtonController.css'
import Button from '../../components/Button/Button';
import Controllers from './Controllers';

type ButtonControllerProps = {
    showControls: boolean
}

const ButtonController: React.FC<ButtonControllerProps> = ({ showControls }) => {

    const [buttonProps, setButtonProps] = useState<ButtonProps>({
        label: "Button Text",
        size: 'md',
        variant: 'primary',
        loading: false,
        isSelected: false,
        startIcon: undefined,
        endIcon: undefined,
        disabled: false
    });

    return (
        <div className='button-controller-wrapper'>

            <div className='button-wrappper'>
                <Button
                    {...buttonProps}
                />
            </div>
            {
                showControls &&

                <Controllers
                    buttonProps={buttonProps}
                    setButtonProps={setButtonProps}
                />

            }

        </div>
    )
}

export default ButtonController
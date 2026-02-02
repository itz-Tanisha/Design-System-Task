import { useCallback, useState } from 'react';
import ButtonController from '../../controllers/ButtonController/ButtonController';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import './StoryBookLayout.css';


const StorybookLayout = () => {

    const [showControls, setShowControls] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('button');

    const handleToggleControls = useCallback(() => {
        setShowControls((prev) => !prev)
    }, [setShowControls]);

    const componentsList = [
        {
            id: "button",
            displayName: "Button",
            component: <ButtonController showControls={showControls} />
        },
        {
            id: "dropdown",
            displayName: "Dropdown",
            component: <div> I am a dropdown !</div>
        }
    ]

    return (
        <div className='storybook-container'>

            <Sidebar
                heading='Components'
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
                sidebarList={componentsList}
            />

            <section className='storybook-main-section'>

                <div className='storybook-controls-button-container'>

                    <Button
                        variant='primary'
                        size='md'
                        label={showControls ? "Hide Controls" : "Show Controls"}
                        onClick={handleToggleControls}
                    />

                </div>

                <div className="storybook-component-preview">
                    {
                        componentsList.filter((item) => item.id === selectedComponent)?.[0].component
                    }
                </div>

            </section>

        </div>
    )
}

export default StorybookLayout
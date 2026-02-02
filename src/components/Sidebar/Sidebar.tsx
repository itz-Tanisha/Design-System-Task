import React from 'react'
import type { SidebarProps } from '../../types/components/Sidebar'
import './Sidebar.css'

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>((
    {
        heading,
        sidebarList,
        selectedComponent,
        setSelectedComponent
    }, ref) => {

    return (
        <nav className='sidebar-container' ref={ref}>

            <h2 className="sidebar-title">{heading}</h2>

            <ul className="sidebar-list">

                {
                    sidebarList.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={`sidebar-item ${selectedComponent === item.id ? 'sidebar-active-item' : ''}`}
                                onClick={() => setSelectedComponent(item.id)}
                            >
                                {item.displayName}
                            </li>
                        )
                    })
                }

            </ul>

        </nav>
    )
})

export default Sidebar
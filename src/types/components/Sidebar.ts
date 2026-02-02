export type SidebarListType = {
    id: string,
    displayName: string
}[]

export type SidebarProps = {
    heading : string,
    sidebarList: SidebarListType,
    selectedComponent: string,
    setSelectedComponent: React.Dispatch<React.SetStateAction<string>>
}
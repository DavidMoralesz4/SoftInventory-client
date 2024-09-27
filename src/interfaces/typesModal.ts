export interface TypesModal {
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    onClose: () => void
}
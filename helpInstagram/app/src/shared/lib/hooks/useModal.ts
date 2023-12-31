import {useCallback, useState} from "react";


export const useModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = useCallback(() => {
        setIsOpen(true)
    },[isOpen])

    const onClose = useCallback(() => {
        setIsOpen(false)
    },[isOpen])

    return {
        isOpen,
        onClose,
        onOpen
    }
}
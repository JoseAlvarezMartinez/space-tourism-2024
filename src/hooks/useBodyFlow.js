import { useState } from "react"
export default function useBodyFlow() {

    const [isOpen, setOpen] = useState(false)

    const handleBodyFlow = () => {

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
        }
    }
    handleBodyFlow()


    return {
        isOpen,
        handleBodyFlow,
        setOpen
    }
}
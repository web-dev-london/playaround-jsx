import { Button } from "@chakra-ui/react";
import { useState } from "react";
import ModalContent from "./ModalContent";


const Modal = () => {
    const [showModal, setShowModal] = useState(false);


    const handleToggleModal = () => {
        setShowModal(!showModal);
    }

    const modal = showModal && <ModalContent
        handleToggleModal={handleToggleModal}
    />

    return (
        <>

            <Button
                colorScheme="cyan"
                onClick={handleToggleModal}
                mb={5}
            >
                Open Modal Popup
            </Button>
            {modal}
        </>
    )
}

export default Modal
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle, HiTrash } from "react-icons/hi";

function DeleteTicketComponent() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Button color="red" onClick={() => setOpen(true)}>
                <div className="flex items-center gap-x-2">
                    <HiTrash className="text-lg" />
                    Eliminar ticket
                </div>
            </Button>
            <Modal onClose={() => setOpen(false)} show={isOpen} size="md">


                <ModalHeader className="border-b border-gray-200 !p-6 dark:border-gray-700">
                    <strong>Eliminación de ticket</strong>
                </ModalHeader>
                <ModalBody className="px-6 pt-0 pb-6">
                    <div className="flex flex-col items-center gap-y-6 text-center">
                        <HiOutlineExclamationCircle className="text-7xl text-red-500" />
                        <p className="text-xl text-gray-500">
                            ¿Está seguro de eliminar el ticket?
                        </p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="flex items-center gap-x-3">
                        <Button color="red" onClick={() => setOpen(false)}>
                            Eliminar
                        </Button>
                        <Button color="gray" onClick={() => setOpen(false)}>
                            Cancelar
                        </Button>
                    </div>

                </ModalFooter>
            </Modal>
        </>
    );
};
export default DeleteTicketComponent;
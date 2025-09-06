import {
    Button,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    TextInput,
    Select,
    HelperText,
    Alert
} from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlus, } from "react-icons/hi";
import { createTicket } from "../../services/tickets/tickets.service";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Tickets } from "../../services/tickets/tickets.type";



const ticketSchema = z.object({
    description: z.string().min(15, "Descripción demaciado corta"),
    category: z.string().refine((val) => val !== "Seleccionar", { message: "Debe seleccionar categoria" })
});
interface FormTicketProps {
  onTicketCreated: (ticket: Tickets) => void;
}

function FormTicketComponent({onTicketCreated}:FormTicketProps) {
    const [isOpen, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TicketFormData>({ resolver: zodResolver(ticketSchema) })

    const onSubmit = async (data: TicketFormData) => {
        try {
            const newTicket = await createTicket(data);
            onTicketCreated(newTicket);
            reset();
            setOpen(false);
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        } catch (error) {
            alert(error);
        }

    }
    type TicketFormData = z.infer<typeof ticketSchema>;
    return (
        <>
         {showAlert && (
                <Alert className="w-auto" color="success" onDismiss={() => setShowAlert(false)}>
                    <span className="font-medium">¡Éxito!</span> Ticket creado correctamente.
                </Alert>
            )}
            <Button color="primary" onClick={() => setOpen(true)}>
                <div className="flex items-center gap-x-3">
                    <HiPlus className="text-xl" />
                    Crear ticket
                </div>
            </Button>
            <Modal onClose={() => setOpen(false)} show={isOpen}>
                <ModalHeader className="border-b border-gray-200 !p-6 dark:border-gray-700">
                    <strong>Creación de ticket</strong>
                </ModalHeader>
                <ModalBody>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <Label htmlFor="description">Descripción del ticket</Label>
                            <div className="mt-1">
                                <TextInput id="description" placeholder="Ingrese descripción"
                                    {...register('description')}
                                />
                            </div>
                            {errors.description && <HelperText>
                                <span className="font-medium text-red-500">uy! {errors.description.message}</span>
                            </HelperText>}
                        </div>
                        <div>
                            <Label htmlFor="category">Categoría </Label>
                            <Select {...register('category')} id="category" required>
                                <option>Seleccionar</option>
                                <option>Software</option>
                                <option>Hardware</option>
                                <option>Otros</option>
                            </Select>
                            {errors.category && <HelperText>
                                <span className="font-medium text-red-500">uy! {errors.category.message}</span>
                            </HelperText>}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit(onSubmit)}>
                        Generar
                    </Button>
                    <Button color="red" onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default FormTicketComponent;

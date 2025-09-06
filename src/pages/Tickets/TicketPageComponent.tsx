import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHeadCell,
  TableHead,
  TextInput,
  Label
} from "flowbite-react";
import type { FC } from "react";
import { useState, useEffect } from "react";
import {  HiChevronLeft,  HiChevronRight} from "react-icons/hi";
import Layout from "../../layout/Layout";
import {  getTickets } from "../../services/tickets/tickets.service";
import type { Tickets } from "../../services/tickets/tickets.type";
import FormTicketComponent from "./FormTicketComponent";
import EditTicketComponent from "./EditTicketComponent";
import DeleteTicketComponent from "./DeleteTicketComponent"

function getStatus(status: number) {
  if (status === 1) {
    return (
      <div className="flex items-center">
        <div className="mr-2 h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
          En progreso
        </div>
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="flex items-center">
        <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>
        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Cerrado
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="mr-2 h-2.5 w-2.5 rounded-full bg-red-400"></div>
      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Abierto
      </div>
    </div>
  );
}

function TicketPageComponent() {
  const [tickets, setTickets] = useState<Tickets[]>([]);

  useEffect(() => {
    getTickets().then(setTickets)
  }, []);
  const handleTicketCreated = (newTicket: Tickets) => {
    setTickets((prev) => [...prev, newTicket]);
  };

  return (
    <Layout isFooter={true}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-2">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mt-8">
              Mis Tickets :
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <form className="lg:pr-3">
                <Label htmlFor="users-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <TextInput
                    id="users-search"
                    name="users-search"
                    placeholder="Buscar un tikects"
                  />
                </div>
              </form>
            </div>
            <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
              <FormTicketComponent  onTicketCreated={handleTicketCreated}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <TicketTableComponent tickets={tickets} />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </Layout>
  );
}

function TicketTableComponent({ tickets }: { tickets: Tickets[] }) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <TableHead className="bg-gray-100 dark:bg-gray-700">
          <TableRow>
            <TableHeadCell>Código de ticket</TableHeadCell>
            <TableHeadCell>Descripción</TableHeadCell>
            <TableHeadCell>Categoria</TableHeadCell>
            <TableHeadCell>Estado de ticket</TableHeadCell>
            <TableHeadCell>Fecha de creación</TableHeadCell>
            <TableHeadCell>Acción</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
          {
            tickets.map((ticket) => (
              <TableRow key={ticket.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">

                <TableCell>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {ticket.code}
                    </div>
                  </div>
                </TableCell>

                <TableCell className=" whitespace-nowrap ">
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {ticket.description}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="whitespace-nowrap text-base font-medium text-gray-900 dark:text-white">
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {ticket.category}
                  </div>
                </TableCell>

                <TableCell className="mr-12 whitespace-nowrap text-base font-normal text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    {getStatus(ticket.status)}
                  </div>
                </TableCell>

                <TableCell className="mr-12 whitespace-nowrap  text-base font-medium text-gray-900 dark:text-white">
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {new Date(ticket.createdDate).toDateString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-x-3 whitespace-nowrap">
                    <EditTicketComponent />
                    <DeleteTicketComponent />
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}


export const Pagination: FC = function () {
  return (
    <div className="sticky right-0 bottom-0 w-full items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </a>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            1-20
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            2290
          </span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <HiChevronLeft className="mr-1 text-base" />
          Previous
        </a>
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Next
          <HiChevronRight className="ml-1 text-base" />
        </a>
      </div>
    </div>
  );
};

export default TicketPageComponent;

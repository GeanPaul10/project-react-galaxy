import type { Tickets } from "./tickets.type";

const BASE_URL = 'http://localhost:3000/tickets/';

export const getTickets = async (): Promise<Tickets[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error al consultar tickets!");
  }

  const data = await response.json();
  return data.map((t: any) => ({
    ...t,
    createdDate: new Date(t.createdDate),
  }));
};

export const createTicket = async (
  data: Pick<Tickets, "description" | "category">
): Promise<Tickets> => {
  const tickets = await getTickets();
  const nextNumber = tickets.length>0 ? tickets.length+1:1;
  const year = new Date().getFullYear();
  const code = `#TCK-${year}-${nextNumber}`;
  const ticket: Omit<Tickets,"id"> = {
    ...data,
    code,
    status: 0,
    createdDate: new Date().toISOString(),
  };

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  if (!response.ok) {
    throw new Error("Error al registrar tickets!");
  }

  return response.json();
};

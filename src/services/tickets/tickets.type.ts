export interface Tickets{
    id : string; // id de ticket
    code: string; // codigo de ticket #TKT-2025-1
    description : string; //descripcion indicando el motivo de ticket
    category : string //Software o Hardware
    status : number; // 0: abierto 1: En progreso 3: Cerrado
    createdDate : string;
}
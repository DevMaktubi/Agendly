import { RootState } from "@/redux/store";

export const selectAgendamentos = (state: RootState) => state.agendamentos.agendamentos
export const selectAgendamentosStatus = (state: RootState) => state.agendamentos.status
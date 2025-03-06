import { RootState } from "@/redux/store";

export const selectAgendamentos = (state: RootState) => state.agendamentos.agendamentos
export const selectAgendamentosStatus = (state: RootState) => state.agendamentos.status
export const selectAcoesCarregando = (state: RootState) => state.agendamentos.acoesCarregando
import { AcoesAgendamento, Agendamento } from "@/types/Agendamentos"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { buscarAgendamentosThunk, criarAgendamentoThunk } from "./thunks"
import { ACOES_AGENDAMENTO } from "@/lib/constants"


export interface AgendamentosState {
  agendamentos: Agendamento[]
  status: "idle" | "loading" | "failed",
  error: string | null,
  acoesCarregando: AcoesAgendamento[]
}

const initialState: AgendamentosState = {
  agendamentos: [],
  status: "idle",
  error: null,
  acoesCarregando: []
}

export const agendamentosSlice = createSlice({
  name: "agendamentos",
  initialState,
  reducers: {
    buscarAgendamentos: (state) => {
      state.status = "loading"
    },
    buscarAgendamentosSucesso: (state, action) => {
      state.agendamentos = action.payload
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarAgendamentosThunk.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(buscarAgendamentosThunk.fulfilled, (state, action) => {
      state.agendamentos = action.payload
      state.status = "idle"
    })
    builder.addCase(buscarAgendamentosThunk.rejected, (state) => {
      state.status = "failed",
      state.error = "Erro ao buscar os agendamentos"
    })
    builder.addCase(criarAgendamentoThunk.pending, (state) => {
      state.acoesCarregando.push(ACOES_AGENDAMENTO.CRIAR)
    })
    builder.addCase(criarAgendamentoThunk.fulfilled, (state, action) => {
      state.agendamentos.push(action.payload)
      state.acoesCarregando = state.acoesCarregando.filter(acao => acao !== ACOES_AGENDAMENTO.CRIAR)
    })
  }
})

// Export the generated action creators for use in components
export const { buscarAgendamentos, buscarAgendamentosSucesso } = agendamentosSlice.actions

// Export the slice reducer for use in the store configuration
export default agendamentosSlice.reducer
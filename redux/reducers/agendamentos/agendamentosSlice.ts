import { Agendamento } from "@/types/Agendamentos"
import { createSlice } from "@reduxjs/toolkit"
import { buscarAgendamentosThunk } from "./thunks"

export interface AgendamentosState {
  agendamentos: Agendamento[]
  status: "idle" | "loading" | "failed",
  error: string | null
}

const initialState: AgendamentosState = {
  agendamentos: [],
  status: "idle",
  error: null
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
  }
})

// Export the generated action creators for use in components
export const { buscarAgendamentos, buscarAgendamentosSucesso } = agendamentosSlice.actions

// Export the slice reducer for use in the store configuration
export default agendamentosSlice.reducer
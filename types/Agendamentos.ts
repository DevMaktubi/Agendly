export interface Agendamento {
  id: string
  type: string
  date: string
  updated_at: string
  description: string
}

export interface AgendamentoEmCriacao {
  type: string
  date: string
  description: string
}

export type AcoesAgendamento = "criar" | "atualizar" | "deletar"

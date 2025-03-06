"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { ACOES_AGENDAMENTO } from "@/lib/constants";
import { selectAcoesCarregando } from "@/redux/reducers/agendamentos/selectors";
import { criarAgendamentoThunk } from "@/redux/reducers/agendamentos/thunks";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export function FormAgendar() {
  const dispatch = useAppDispatch();
  const acoesCarregando = useSelector(selectAcoesCarregando);

  const carregandoCriacao = acoesCarregando.includes(ACOES_AGENDAMENTO.CRIAR);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const type = (e.target as HTMLFormElement).type.value;
    const date = (e.target as HTMLFormElement).date.value;
    const description = (e.target as HTMLFormElement).description.value;

    if(!type || !date || !description) {
      toast("Preencha todos os campos");
      return
    }
    dispatch(criarAgendamentoThunk({ type, date, description }));
  };
  return (
    <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-2">
        <label htmlFor="type" className="text-sm font-medium">
          Tipo de Serviço
        </label>
        <select
          id="type"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue={""}
        >
          <option value="" disabled>
            Selecione um serviço
          </option>
          <option value="corte">Corte de Cabelo</option>
          <option value="barba">Barba</option>
          <option value="manicure">Manicure</option>
          <option value="pedicure">Pedicure</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-medium">
          Data
        </label>
        <input
          type="datetime-local"
          id="date"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Descrição
        </label>
        <textarea
          id="description"
          rows={4}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Detalhes adicionais sobre o agendamento..."
        />
      </div>

      <Button type="submit" className="w-full" disabled={carregandoCriacao}>
        {carregandoCriacao ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          "Agendar"
        )}
      </Button>
    </form>
  );
}

import { Button } from "@/components/ui/button";

export default function AgendarPage() {
  return (
    <div className="w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Agendar Serviço</h1>
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Tipo de Serviço
          </label>
          <select
            id="service"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue={""}
          >
            <option value="" disabled >Selecione um serviço</option>
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
        
        <Button type="submit" className="w-full">
          Agendar
        </Button>
      </form>
    </div>
  )
}
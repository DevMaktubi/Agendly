import { Button } from "@/components/ui/button";
import { FormAgendar } from "./form";

export default function AgendarPage() {
  return (
    <div className="w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Agendar Serviço</h1>
      <FormAgendar />
    </div>
  )
}
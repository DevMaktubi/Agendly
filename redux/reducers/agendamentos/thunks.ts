import { AppThunk } from "@/redux/store";
import { buscarAgendamentos } from "./agendamentosSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buscarAgendamentosThunk = createAsyncThunk(
  'agendamentos/buscarAgendamentos',
  async () => {
    const response = await new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'Corte de cabelo da semana',
            updated_at: "2023-06-01",
            date: "10:00",
            type: "Corte de cabelo",
          },
          {
            id: 2,
            description: 'Pintura de cabelo',
            updated_at: "2023-06-02",
            date: "14:30",
            type: "Coloração",
          },
          {
            id: 3,
            description: 'Manicure e pedicure',
            updated_at: "2023-06-03",
            date: "09:15",
            type: "Unhas",
          },
          {
            id: 4,
            description: 'Tratamento capilar',
            updated_at: "2023-06-04",
            date: "16:00",
            type: "Tratamento",
          },
          {
            id: 5,
            description: 'Depilação com cera',
            updated_at: "2023-06-05",
            date: "11:45",
            type: "Depilação",
          },
          
        ]);
      }, 2000);
    });
    // The value we return becomes the `fulfilled` action payload
    return response
  }
)
"use client";

import { useTarefas } from "../lib/tarefaContext";
import TarefaItem from "./TarefaItem";
import type { Tarefa, AcaoTarefa } from "../types/tarefa";

interface ListaTarefasProps {
    tarefas: Tarefa[];
    dispatch: React.Dispatch<AcaoTarefa>;
}

export default function ListaTarefas({ tarefas, dispatch }: ListaTarefasProps) {
    const handleToggle = (id: string) => {
        dispatch({ tipo: 'COMPLETAR', id });
    };

    if (tarefas.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>Nenhuma tarefa cadastrada.</p>
                <p className="text-sm mt-2">Clique em "Nova Tarefa" para começar!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tarefas.map(tarefa => (
                <TarefaItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
}

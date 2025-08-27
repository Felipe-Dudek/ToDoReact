import { useState } from "react";
import Input from "./Input";

function AddTask({ onAdicionarTaskClicked }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Titulo da tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <button
        onClick={() => {
          if (!titulo.trim() && !descricao.trim())
            return alert("Por favor, preencha os campos");
          onAdicionarTaskClicked(titulo, descricao);
          setTitulo("");
          setDescricao("");
        }}
        className="w-full bg-slate-500 p-2 rouded-md text-white font-medium"
      >
        Adicionar Task
      </button>
    </div>
  );
}

export default AddTask;

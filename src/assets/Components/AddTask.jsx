import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        onChange={(event) => setTitle(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Digite o descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Input>
      <button
        className="bg-slate-500 text-center w-full text-white px-4 py-2 font-medium rounded-md "
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Erro ao adicionar a tarefa! Não existe dados!");
          }
          onAddTaskSubmit(title, description);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

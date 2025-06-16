import { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "./components/input";
import { type TaskStatus } from "../home/components/task";

import "./taskForm.css";

interface TaskProps {
  title: string;
  description?: string;
  status: TaskStatus;
  id: number;
}

export const TaskFormPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const saveLocalStorage = (task: TaskProps, key: string) => {
    localStorage.setItem(key, JSON.stringify(task));
  };

  const handleAddTask = () => {
    if (!title && !description) return;

    const newTask: TaskProps = {
      title: title,
      description: description || "Sem descricao",
      status: "pending",
      id: Math.random() * (1000 - 0 + 1),
    };

    saveLocalStorage(newTask, "@DevTarefas");
    setTitle("");
    setDescription("");

    navigate("/");
  };

  return (
    <div className="main-container">
      <h2 className="title">O que voce vai fazer hoje?</h2>

      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <Input
          name="title"
          text="Ex: Estudar para a prova"
          labelMsg="Título da tarefa"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <Input
          name="description"
          text="Ex: Até meio dia"
          labelMsg="Descricao da tarefa"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button className="add-task-btn">Adicionar</button>
      </form>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Task } from "./components/task";
import type { TaskProps } from "./components/task";

import "./home.css";

export function HomePage() {
  const [tasksList, setTasksList] = useState<TaskProps[]>([
    {
      title: "Comprar pao todo dia",
      status: "completed",
      id: 12,
    },
  ]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("@DevTarefas");

    if (savedTasks) {
      return setTasksList([JSON.parse(savedTasks)]);
    }
  }, []);

  console.log(tasksList);

  return (
    <div className="main-container">
      <div className="tasks-list">
        {tasksList.map((task) => (
          <Task
            title={task.title}
            description={task.description}
            status={task.status}
            id={task.id}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
}

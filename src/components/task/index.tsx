import { Link } from "react-router";
import "./task.css";

type TaskStatus = "pending" | "completed" | "in-progress";

interface TaskProps {
  title: string;
  description?: string;
  status: TaskStatus;
}

export const Task = ({
  title,
  description = "Sem descricao",
  status,
}: TaskProps) => {
  const statusMsg =
    status == "pending"
      ? "Pendente"
      : status === "in-progress"
      ? "Em andamento"
      : "Concluída";
  const taskId = parseInt((Math.random() * 100).toString());

  return (
    <article className="task-container">
      <h3 className="task-title">
        {title} <p className={`task-status ${status}`}>{statusMsg}</p>
      </h3>
      <div className="wrapper">
        <span className="task-description">{description}</span>
        <Link to={`/task/${taskId}`}>Ver detalhes</Link>
      </div>
    </article>
  );
};

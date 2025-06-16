import { Link } from "react-router";
import "./task.css";

export type TaskStatus = "pending" | "completed" | "inProgress";

export interface TaskProps {
  title: string;
  description?: string;
  status: TaskStatus;
  id: number;
}

export enum StatusMgs {
  pending = "Pendente",
  inProgress = "Em andamento",
  completed = "Concluída",
}

export const Task = ({
  title,
  description = "Sem descricao",
  status,
  id,
}: TaskProps) => {
  return (
    <article className="task-container">
      <h3 className="task-title">
        {title} <p className={`task-status ${status}`}>{StatusMgs[status]}</p>
      </h3>
      <div className="wrapper">
        <span className="task-description">{description}</span>
        <Link to={`/task/${id}`}>Ver detalhes</Link>
      </div>
    </article>
  );
};

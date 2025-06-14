import { Task } from "../../components/task";

import "./home.css";

export function HomePage() {
  return (
    <div className="main-container">
      <div className="tasks-list">
        <Task
          title="Estudar TypeScript"
          description="Revisar conceitos de TS do curso"
          status="pending"
        />

        <Task
          title="Estudar React Native"
          description="Estudar RN pela parte da noite"
          status="in-progress"
        />

        <Task title="Revisar roteamento React Router" status="completed" />
      </div>
    </div>
  );
}

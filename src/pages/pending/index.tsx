import { Link } from "react-router";

export function PendingTasks() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Ir para a Home</Link>
        </nav>
      </header>

      <h1>Página de tarefas pendentes!</h1>
    </div>
  );
}

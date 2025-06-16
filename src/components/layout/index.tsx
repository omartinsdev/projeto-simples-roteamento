import { Outlet, Link } from "react-router";

import "./layout.css";

export const Layout = () => {
  return (
    <>
      <header className="header-container">
        <Link to="/" className="header-title">
          <span className="title-prefix">Dev</span>Tarefas
        </Link>
        <nav className="navbar-container">
          <Link to="/task/new" className="new-task">
            Nova tarefa
          </Link>
          <Link to="/tasks/pending">Tarefas pendentes</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

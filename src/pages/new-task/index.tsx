import { Input } from "../../components/input";

import "./index.css";

export const NewTask = () => {
  return (
    <div className="main-container">
      <h2 className="title">O que voce vai fazer hoje?</h2>

      <form className="form-container">
        <Input
          name="title"
          text="Ex: Estudar para a prova"
          labelMsg="Título da tarefa"
        />

        <Input
          name="description"
          text="Ex: Até meio dia"
          labelMsg="Descricao da tarefa"
        />

        <button>Adicionar</button>
      </form>
    </div>
  );
};

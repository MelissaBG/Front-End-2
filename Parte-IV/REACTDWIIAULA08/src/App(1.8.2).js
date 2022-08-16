//Faça uma componente que será responsável por adicionar tarefas
//e excluir tarefas.
//1.8.2

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputTarefas, setInputTarefa] = useState("");

  const handleOnSubmit = (e) => e.preventDefault();

  const getEstilos = () => ({
    display: "flex",
    gap: 10
  });

  //pegar o input tarefas
  const handleOnClickAdicionar = () => {
    const novoArray = tarefas;
    novoArray.push(inputTarefas);
    setTarefas([...novoArray]);
  };
  const handleOneClick = (index) => {
    console.log(index);
  };
  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="tarefa_box">
              <label htmlFor="tarefa">Tarefa</label>
              <div style={getEstilos()}>
                <input
                  id="tarefa"
                  name="tarefa"
                  value={inputTarefas}
                  onChange={(e) => setInputTarefa(e.target.value)}
                  placeholder="minha tarefa"
                />
                <button
                  className="btn btn_adicionar"
                  onClick={handleOnClickAdicionar}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </form>
          <section>
            <ul>
              {tarefas.map((tarefa, index) => (
                <li>
                  <input className="tarefa_conteudo" disabled value={tarefa} />
                  <button
                    className="btn btn_excluir"
                    onClick={() => handleOneClick(index)}
                  >
                    Excluir{" "}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

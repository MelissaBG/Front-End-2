import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  // cria uma variável que controlará o estado do componente
  //nós passamos o valor inicial do estado
  //Como retorno temos a variável com o valor do estado, que demos o nome de tarefa,e
  ///uma função que serve unicamente para atualizar o valor desta variável, que demos //o nome de setTarefa./

  const [inputTarefas, setInputTarefa] = useState('');

  const handleOnSubmit = (e) => e.preventDefault();

  const getEstilos = () => ({
    display: 'flex',
    gap: 10,
  });

  //pegar o input tarefas
  const handleOnClickAdicionar = () => {
    const novoArray = tarefas;
    novoArray.push(inputTarefas);
    setTarefas([...novoArray]);
  };

  //  const handleOnClickExcluir = () => {
  //    const novoArray = tarefas;
  //    novoArray.push(inputTarefas);
  //    setTarefas([...novoArray]);
  //  }
  /** Axios (get, put, delete) */
  //Buscar
  async function buscarTodasAsTarefasMatheus() {
    const url = 'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/';
    const resultado = await axios.get(url, { params: { user: 'Matheus' } });
    return resultado.data.items;
  }
  // resultado = await inserirTarefa('Melissa', 'Entregar exercício');

  async function alterarTarefa(id, user, description) {
    const dto = {
      user: user,
      description: description,
    };

    const alterar = await axios.put(`${url}${id}`, dto);
    return alterar.data;
  }
  //Deletar
  const deletarTarefasById = async (id) => {
    //     = await axios.delete(`${url}${id}`);
    //     const resultado = tarefas.filter(tarefas => tarefas.//id == id);
    buscarTodasAsTarefasMatheus().then((response) => {
      console.log(response);
      setTarefas(response);
      return resultado;
    });
  };

  //Inserir
  //Alterar
  //
  /**Use Effect */
  //recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar. A função passada ao useEffect() será executada sempre que o componente for atualizado.
  React.useEffect(() => {
    buscarTodasAsTarefasMatheus().then((retornoTarefas) => {
      console.log(retornoTarefas);
      setTarefas(retornoTarefas);
    });
  }, []);

  //  React.useEffect(() => {
  //    buscarPorUsuarios('Melissa').then((response) => {
  //      console.log(response);
  //      setTarefas(response.items);
  //    });
  //  }, [])

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
          <ul>
            {tarefas.map((tarefa, index) => (
              <li>
                <input
                  className="tarefa_conteudo"
                  disabled
                  value={tarefa.description}
                />
                <button
                  className="btn btn_excluir"
                  onClick={() => deletarTarefasById(tarefa.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      //Chamar API
      /* const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      ); */
      //Pegar dados que ela retorna
      //const data = await response.json();
      //Armazena dados no state
      //Se quiser, você pode chamar uma API para pega as tarefas
      //setTasks(data);
    };
    fetchTasks();
  }, []);

  function onTaskClicked(taskId) {
    //atualiza o estado de tasks caso seja clicada uma tarefa
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // se não for a task clicada, retorna a task original
      return task;
    });

    setTasks(newTasks);
    console.log(tasks);
  }

  function onDeleteTaskClicked(taskId) {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  }

  function onAdicionarTaskClicked(titulo, descricao) {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    const newTask = {
      id: lastId + 1,
      title: titulo,
      description: descricao,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAdicionarTaskClicked={onAdicionarTaskClicked} />
        <Tasks
          tasks={tasks}
          onTaskClicked={onTaskClicked}
          onDeleteTaskClicked={onDeleteTaskClicked}
        />
      </div>
    </div>
  );
}

export default App;

/* import { useState } from "react";

function App() {
  // State {estado}
  //State é uma variável que quando alterada, atualiza a interface
  //hook é uma função especial do React
  //useState é um hook que cria um estado
  //useState retorna um array com 2 posições
  //1ª posição: valor do estado
  //2ª posição: função para atualizar o estado
  const [message, setMessage] = useState("Hello World");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Hello Universe");
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}

export default App;
 */

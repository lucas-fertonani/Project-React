import { useEffect, useState } from "react";
import AddTask from "./assets/Components/AddTask";
import Tasks from "./assets/Components/Tasks";
import axios from "axios";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/task");
        setTasks(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  async function onTaskClick(taskId) {
    // request para o backend
    try {
      await axios.post("http://localhost:3000/api/task/complete", {
        id: taskId,
      });
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      return;
    }

    console.log(taskId);
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  async function deleteOnTaskClick(taskId) {
    // Atualizacao no backend
    try {
      await axios.delete("http://localhost:3000/api/task", {
        data: { id: taskId },
      });
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      return;
    }

    // Atualizacao no front
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(newTasks);
  }

  async function onAddTaskSubmit(title, description) {
    try {
      await axios.post("http://localhost:3000/api/task/addtask", {
        descricao: description,
        titulo: title,
      });
    } catch (error) {
      console.log(error);
      return;
    }

    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // EU DESATIVEI
  // function onAddTaskSubmit(title, description) {
  //   const newTask = {
  //     id: v4(),
  //     title,
  //     description,
  //     isCompleted: false,
  //   };
  //   setTasks([...tasks, newTask]);
  // }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteOnTaskClick={deleteOnTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

// Hooks:
import { useState, useEffect } from 'react';

// Estilo:
import './styles.css'; // GLOBAL

// Componentes:
import Navbar from './components/Navbar/Navbar';
import Tasklist from './components/Tasklist/Tasklist';




// APLICAÇÃO:
let idAcc = 0;
const generateId = ()=> {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  useEffect(() => {
    // Atualiza o título do documento
    document.title = `Kanban`;
  }, []);

  const [tasks, setTasks] = useState([]);


  function addTask(title, state) {
    // console.log("Funcao sendo chamada em App");
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks)=> {
      return [...existingTasks, newTask];
    });
  }

  function updateTask(id, title, state) {
    setTasks((existingTasks)=> {
      return existingTasks.map((task)=> {
        if(task.id === id) {
          return {...task, title, state};
        } else {
          return task;
        }
      });
    });

  }

  function onDeleteTask(id) {
    setTasks((existingTasks)=> {
      return existingTasks.filter((task)=> task.id !== id);
    });
  }

  
  return (
    <div className="App">
        <Navbar />
        
        <div className="container">
          <Tasklist 
            title="A fazer" 
            onAddTask={addTask}
            taskState="a fazer"
            tasks={tasks.filter((t)=> t.state === "a fazer")}
            onTaskUpdate={updateTask}
            onDeleteTask={onDeleteTask}
          />
          <Tasklist 
            title="Em andamento" 
            onAddTask={addTask}
            taskState="em andamento"
            tasks={tasks.filter((t)=> t.state === "em andamento")}
            onTaskUpdate={updateTask}
            onDeleteTask={onDeleteTask}
          />
          <Tasklist 
            title="Concluído" 
            onAddTask={addTask} 
            taskState="concluido"
            tasks={tasks.filter((t)=> t.state === "concluido")}
            onTaskUpdate={updateTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
        
    </div>
  );
}


import { ClipboardText, Plus } from 'phosphor-react';
import { useState } from 'react';
import { Container, EmptyList, InputAndButtonWrapper, TasksWrapper } from './AppStyles';
import './assets/styles/global.css';
import { Header } from './components/Header';
import { Task } from './components/Task';
export interface ITask {
  id: string;
  name: string;
  status: string;
}

export function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>(
      JSON.parse(localStorage.getItem("@rocketseat:todo-tasks") || "") || []
  );

  function addTask(){
      if(newTask === '') return ;
  
      setTasks([...tasks, {
        id: String(Math.floor(Math.random() * 10000)),
        name: newTask,
        status: 'undone'
      }]);
  
      setNewTask('');
      localStorage.setItem('@rocketseat:todo-tasks', JSON.stringify(
          [...tasks, {
              id: String(Math.floor(Math.random() * 10000)),
              name: newTask,
              status: 'undone'
          }]
      ))
  }
  
  function editTask(id: string){
      const updatedTasks = tasks.map(task => {
          if(task.id === id){
              return {
                  ...task,
                  status: task.status === 'done' ? 'undone' : 'done'
              }
          } else return task;
      })

      setTasks(updatedTasks);
      localStorage.setItem('@rocketseat:todo-tasks', JSON.stringify(updatedTasks));
  }

  function deleteTask(id: string){
      const updatedTasks = tasks.filter(task => task.id !== id);

      setTasks(updatedTasks);
      localStorage.setItem('@rocketseat:todo-tasks', JSON.stringify(updatedTasks));
  }

  const completedTasks = tasks?.filter(task => task.status === 'done');

  return (
    <>
      <Header />
      <Container>
        <InputAndButtonWrapper>
          <input 
            className='input-add-task' 
            placeholder='Adicione uma nova tarefa' 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className='button-add-task' onClick={addTask}>
            <span className='button-text'>Criar</span>
            <Plus />
          </button>
        </InputAndButtonWrapper>

        <TasksWrapper>
            <div className='status-header'>
                <div className='status'>
                    <div className='status-text' style={{color: 'var(--blue)'}}>Tarefas criadas</div>
                    <div className='status-counter'>{tasks?.length}</div>
                </div>

                <div className='status'>
                    <div className='status-text' style={{color: 'var(--purple)'}}>Tarefas concluidas</div>
                    <div className='status-counter'>{tasks && tasks.length > 0 ? `${completedTasks?.length} de ${tasks?.length}` : '0'}</div>
                </div>
            </div>

            <div className='tasks-list'>
                {tasks && tasks.length > 0 ? (
                    tasks?.map(task => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            name={task.name} 
                            status={task.status}
                            editTask={() => editTask(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                        />
                    ))
                ) : (
                    <EmptyList>
                        <ClipboardText size={56} color='var(--gray-300)'/>
                        <div>
                            <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </EmptyList>
                )}
            </div>
        </TasksWrapper>
      </Container>
    </>
  )
}

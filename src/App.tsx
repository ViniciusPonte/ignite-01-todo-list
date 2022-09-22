import { Plus } from 'phosphor-react';
import { useEffect } from 'react';
import { ButtonText, Container, InputAndButtonWrapper } from './AppStyles';
import './assets/styles/global.css';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskContainer } from './components/TaskContainer';
import { useTasks } from './hooks/useTasks';

export interface ITask {
  id: string;
  name: string;
  status: string;
}

export function App() {
  const {addTask, setNewTask, newTask} = useTasks();
  
  return (
    <>
      <Header />
      <Container>
        <InputAndButtonWrapper>
          <Input placeholder='Adicione uma nova tarefa' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <CreateButton onClick={addTask}>
            <ButtonText>Criar</ButtonText>
            <Plus />
          </CreateButton>
        </InputAndButtonWrapper>

        <TaskContainer />
      </Container>
    </>
  )
}

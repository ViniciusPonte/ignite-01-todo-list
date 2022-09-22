import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ITask } from "../App";
import { taskEnum } from "../constants/enum";

interface IContextProps {
    tasks: ITask[] | null;
    setTasks: Dispatch<SetStateAction<ITask[]>>;
    addTask: () => void;
    editTask: (id: string) => void;
    newTask: string;
    setNewTask: Dispatch<SetStateAction<string>>;
    deleteTask: (id: string) => void;
}

const TasksContext = createContext({} as IContextProps);

export default function TasksProvider({ children }: any) {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>(
        JSON.parse(localStorage.getItem("@rocketseat:todo-tasks") || "") || []
    );

    function addTask(){
        if(newTask === '') return ;
    
        setTasks([...tasks, {
          id: String(Math.floor(Math.random() * 10000)),
          name: newTask,
          status: taskEnum.undone
        }]);
    
        setNewTask('');
        localStorage.setItem('@rocketseat:todo-tasks', JSON.stringify(
            [...tasks, {
                id: String(Math.floor(Math.random() * 10000)),
                name: newTask,
                status: taskEnum.undone
            }]
        ))
    }
    
    function editTask(id: string){
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    status: task.status === taskEnum.done ? taskEnum.undone : taskEnum.done
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

    return (
        <TasksContext.Provider value={{tasks, setTasks, addTask, editTask, newTask, setNewTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasks = () =>{
    const context = useContext(TasksContext);
    const { addTask, editTask, tasks, setTasks, newTask, setNewTask, deleteTask } = context;
    return {tasks, setTasks, addTask, editTask, newTask, setNewTask, deleteTask}
}

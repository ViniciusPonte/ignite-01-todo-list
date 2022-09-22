import { ClipboardText } from "phosphor-react"
import { ITask } from "../../App"
import { taskEnum } from "../../constants/enum";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../Task"
import { Counter, CreatedTasksCount, DoneTasksCount, EmptyList, Status, StatusWrapper, TasksWrapper, Wrapper } from "./styles"

export function TaskContainer(){
    const {tasks} = useTasks();

    const completedTasks = tasks?.filter(task => task.status === taskEnum.done);

    return (
        <Wrapper>
            <Status>
                <StatusWrapper>
                    <CreatedTasksCount>Tarefas criadas</CreatedTasksCount>
                    <Counter>{tasks?.length}</Counter>
                </StatusWrapper>

                <StatusWrapper>
                    <DoneTasksCount>Tarefas concluidas</DoneTasksCount>
                    <Counter>{tasks && tasks.length > 0 ? `${completedTasks?.length} de ${tasks?.length}` : '0'}</Counter>
                </StatusWrapper>
            </Status>

            <TasksWrapper>
                {tasks && tasks.length > 0 ? (
                    tasks?.map(task => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            name={task.name} 
                            status={task.status}
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
            </TasksWrapper>
        </Wrapper>
    )
}
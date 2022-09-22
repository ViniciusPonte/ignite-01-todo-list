import { CheckCircle, Circle, Trash } from "phosphor-react";
import { ITask } from "../../App";
import { taskEnum } from "../../constants/enum";
import { useTasks } from "../../hooks/useTasks";
import { StyledTrash, Wrapper } from "./styles"

export function Task({name, status, id}: ITask){
    const {editTask, deleteTask} = useTasks();

    return (
        <Wrapper>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={() => editTask(id)}>
                {status === taskEnum.done ? (
                    <CheckCircle style={{marginRight: 8}}/>
                ) : (
                    <Circle style={{marginRight: 8}} />
                )}
                <span>{name}</span>
            </div>
            <StyledTrash style={{cursor: 'pointer'}} onClick={() => deleteTask(id)}/> 
        </Wrapper>
    )
}
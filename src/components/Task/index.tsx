import { CheckCircle, Circle } from "phosphor-react";
import { ITask } from "../../App";
import { StyledTrash, Wrapper } from "./styles"

interface TaskProps extends ITask {
    editTask: (id: string) => void;
    deleteTask: (id: string) => void;
}

export function Task({name, status, id, deleteTask, editTask}: TaskProps){
    return (
        <Wrapper>
            <div className="wrapper-task-name" onClick={() => editTask(id)}>
                {status === 'done' ? <CheckCircle style={{marginRight: 8}}/> : <Circle style={{marginRight: 8}} /> }
                <span>{name}</span>
            </div>
            <StyledTrash style={{cursor: 'pointer'}} onClick={() => deleteTask(id)}/> 
        </Wrapper>
    )
}
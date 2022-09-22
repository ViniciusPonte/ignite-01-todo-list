import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 64px;
`;

export const Status = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StatusWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Counter = styled.div`
    background-color: var(--gray-300);
    padding: 2px 8px;
    border-radius: 999px;
    font-weight: 700;
    color: var(--gray-100);
`;

export const CreatedTasksCount = styled.span`
    font-weight: 700;
    color: var(--blue);
`;

export const DoneTasksCount = styled.span`
    font-weight: 700;
    color: var(--purple);
`;

export const TasksWrapper = styled.div`
    max-height: 500px;
    overflow: auto;
`;

export const EmptyList = styled.div`
    border-top: 1px solid var(--gray-400);
    border-radius: 8px;
    padding: 64px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    span {
        color: var(--gray-300);
        display: block;
    }
`;
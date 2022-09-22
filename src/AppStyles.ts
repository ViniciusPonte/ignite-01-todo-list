import styled from 'styled-components';

export const Container = styled.div`
    max-width: 736px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const InputAndButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: -1.5rem;

    .input-add-task{
        height: 3rem;
        width: 100%;
        background-color: var(--gray-500);
        outline: 0;
        border: 1px solid var(--gray-700);
        border-radius: 8px;
        padding: 1rem;
        color: var(--gray-100);
    }

    .button-add-task{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gray-100);
        background-color: var(--blue-dark);
        outline: 0;
        gap: 8px;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        border: 0;
    }
`;

export const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 64px;

    .status-header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .status {
            display: flex;
            gap: 8px;
            align-items: center;

            .status-text {
                font-weight: 700;
            }

            .status-counter {
                background-color: var(--gray-300);
                padding: 2px 8px;
                border-radius: 999px;
                font-weight: 700;
                color: var(--gray-100);
            }
        }
    }

    .tasks-list {
        max-height: 500px;
        overflow: auto;
    }
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
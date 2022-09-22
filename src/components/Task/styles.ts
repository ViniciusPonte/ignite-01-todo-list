import { Trash } from 'phosphor-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--gray-400);
    margin-bottom: 12px;
    padding: 16px;
    background-color: var(--gray-500);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
`;

export const StyledTrash = styled(Trash)`
    cursor: pointer;

    &:hover{
        color: var(--danger);
    }
`;
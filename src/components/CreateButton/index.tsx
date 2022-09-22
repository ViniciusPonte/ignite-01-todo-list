import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton(props: ButtonProps){
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}
import logoImg from '../../assets/images/logo.svg';
import { Container } from './styles';

export function Header(){
    return (
        <Container>
            <img src={logoImg} alt="logo todo list"/>
        </Container>
    )
}
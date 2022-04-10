import { Container, Numbers } from "./style";

type DisplayProps = {
    numbers: Array<number>
}

export function Display(props:DisplayProps) {
    return (
        <Container>
            <Numbers>{props.numbers}</Numbers>
        </Container>
    )
}
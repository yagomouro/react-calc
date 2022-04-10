import { Btn, Container } from './styles'

interface ButtonProps {
    changeNums: Function;
}


export function Buttons(props: ButtonProps) {

    const calcButtons = {
        soma: {
            value: '+',
            buttonFunc: (a: number, b: number) => a + b,
        },
        subtração: {
            value: '-',
            buttonFunc: (a: number, b: number) => a - b,
        },
        divisão: {
            value: '÷',
            buttonFunc: (a: number, b: number) => a / b,
        },
        multiplicação: {
            value: 'x',
            buttonFunc: (a: number, b: number) => a * b,
        },
        apagar: {
            value: 'C',
            buttonFunc: (a: number, b: number) => a + b,
        },
        resultado: {
            value: '=',
            buttonFunc: (a: number, b: number) => a + b,
        },

    }

    const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Container>
            {numButtons.map(num => <Btn onClick={ () => props.changeNums(num)} key={num}>{num}</Btn>)}
            {Object.entries(calcButtons).map(([key, calc]) => {
                return <Btn key={Math.random()}>{calc.value}</Btn>
            })}
        </Container>
    )
}
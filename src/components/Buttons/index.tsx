import { Btn, Container } from './styles'

interface ButtonProps {
    showNumbers: Function,
    showCalcs: Function
}


export function Buttons(props: ButtonProps) {

    const calcButtons = {
        soma: {
            value: '+',
            buttonFunc: (a: number, b: number) => a + b,
            showNextNumber: true
        },
        subtração: {
            value: '-',
            buttonFunc: (a: number, b: number) => a - b,
            showNextNumber: true
        },
        divisão: {
            value: '÷',
            buttonFunc: (a: number, b: number) => a / b,
            showNextNumber: true
        },
        multiplicação: {
            value: 'x',
            buttonFunc: (a: number, b: number) => a * b,
            showNextNumber: true
        },
        apagar: {
            value: 'C',
            buttonFunc: (a: Array<number>) => [0],
            showNextNumber: false
        },
        resultado: {
            value: '=',
            buttonFunc: () => {},
            showNextNumber: false
        },

    }

    const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Container>
            {numButtons.map(num => <Btn onClick={() => props.showNumbers(num)} key={num}>{num}</Btn>)}
            {Object.entries(calcButtons).map(([key, calc]) => {
                return <Btn onClick={() => props.showCalcs(calc)} key={Math.random()}>{calc.value}</Btn>
            })}
        </Container>
    )
}
import { Btn, Container } from './styles'


export function Buttons() {

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
            {numButtons.map(num => <Btn key={num}>{num}</Btn>)}
            {Object.entries(calcButtons).map(([key, calc]) => {
                return <Btn>{calc.value}</Btn>
            })}
            
        </Container>
    )
}
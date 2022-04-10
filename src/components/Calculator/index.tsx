import { useState } from 'react'
import { Buttons } from '../Buttons/'
import { Display } from '../Display'
import { CalcContainer } from './styles'

export function Calculator() {
    const [displayNums, setDisplayNums] = useState([0]);
    const [numberList, setNumberList] = useState([0]);
    const [lastNumber, setLastNumber] = useState(0);
    const [func, setFunc] = useState(() => (a: number) => a);

    function showNumbers(num: number | object) {
        if (typeof num === 'number') {
            if (displayNums[0] === 0) {
                setDisplayNums([num])
            } else {
                setDisplayNums([...displayNums, num])
            }
        } else if (typeof num === 'object') {
            if (!num.showNextNumber) {
                if (num.value === '=') {
                    let currentNumber = displayNums.join('');
                    showCalc(lastNumber, currentNumber, func);
                } else if (num.value === 'C') {
                    setDisplayNums([0])
                    setNumberList([])
                }
            } else {
                if (numberList !== [0]) {
                    let lastNumber = displayNums.join('')
                    setLastNumber(lastNumber)
                    console.log(numberList)
                    setFunc(() => num.buttonFunc)
                    setDisplayNums([0])
                }

            }
        }
    }

    function showCalc(a: number, b: number, calc: Function) {
        console.log(a)
        console.log(b)
        console.log(calc)
        let result = calc
            (a, b);
        setDisplayNums([result])
    }

    function clickButton() {
        console.log(numberList)
        console.log(lastNumber)
        console.log(displayNums)
        console.log(func)
        console.log(displayNums.join(''))
    }

    return (
        <CalcContainer>
            <Display numbers={displayNums} />
            <Buttons changeNums={(numb: number | Function) => showNumbers(numb)} />
        </CalcContainer>
    )
}
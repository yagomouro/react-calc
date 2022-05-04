import { useState } from 'react'
import { ICalc } from '../../types/ICalc';
import { Buttons } from '../Buttons/'
import { Display } from '../Display'
import { CalcContainer } from './styles'


export function Calculator() {


    interface showCalcProps {
        calc: (a: number, b: number) => number
    }


    const [displayNums, setDisplayNums] = useState([0]);
    const [numberList, setNumberList] = useState([0]);
    const [lastNumber, setLastNumber] = useState(0);
    const [func, setFunc] = useState((a:Function) => a);

    function showNumbers(num: number) {
        if (displayNums[0] === 0) {
            setDisplayNums([num])
        } else {
            setDisplayNums([...displayNums, num])
        }
    }

    function showCalcs(num: ICalc) {
        if (!num.showNextNumber) {
            if (num.value === '=') {
                let currentNumber = parseInt(displayNums.join(''));
                showCalc(lastNumber, currentNumber, func);
            } else if (num.value === 'C') {
                setDisplayNums([0])
                setNumberList([])
            }
        } else {
            if (numberList !== [0]) {
                let lastNumber = parseInt(displayNums.join(''))
                setLastNumber(lastNumber)
                setFunc(() => num.buttonFunc)
                setDisplayNums([0])
            }

        }
    }

    function showCalc(a: number, b: number, calc: Function) {
        let result = calc(a, b);
        setDisplayNums([result])
        return result
    }

    return (
        <CalcContainer>
            <Display numbers={displayNums} />
            <Buttons showNumbers={(numb: number) => showNumbers(numb)} showCalcs={(numb: ICalc) => showCalcs(numb)} />
        </CalcContainer>
    )
}
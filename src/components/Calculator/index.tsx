import { useState } from 'react'
import { Buttons } from '../Buttons/'
import { Display } from '../Display'
import { CalcContainer } from './styles'

export function Calculator() {
    const [displayNums, setDisplayNums] = useState([0]);

    function showNumbers(num: number) {
        if (displayNums[0] === 0) {
            setDisplayNums([num])
        } else {
            setDisplayNums([...displayNums, num])
        }
    }

    return (
        <CalcContainer>
            <Display numbers={displayNums} />
            <Buttons changeNums={(numb: number) => showNumbers(numb)} />
        </CalcContainer>
    )
}
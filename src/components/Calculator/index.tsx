import { Buttons } from '../Buttons/'
import { Display } from '../Display'
import { CalcContainer } from './styles'

export function Calculator() {
    return (
        <CalcContainer>
            <Display />
            <Buttons />
        </CalcContainer>
    )
}
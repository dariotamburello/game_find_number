import { useEffect } from "react"
import { useConfiguration } from "../hooks/useConfiguration"
import { useNumberPlay } from "../hooks/useNumberPlay"
import { useGame } from "../hooks/useGame"
import { ButtonChar } from "./shared/ButtonChar"
import { Backspace, Check } from "./shared/Icons"

export const Keyboard = () => {
    const { numberPlay, newNumberPlay, removeLastNumber } = useNumberPlay()
    const { finished, addNewNumberPlayed } = useGame()
    const { digits } = useConfiguration()

    const numbers = [...Array(10).keys()]

    const handleNumberClick = (e) => {
        if (finished || numberPlay.length >= digits) return
        newNumberPlay(e.target.value)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault()
            if (e.key === 'Backspace') {
                removeLastNumber()
            }
            if (e.key === 'Enter') {
                addNewNumberPlayed(numberPlay)
            } else if (!isNaN(e.key) && e.key >= 0 && e.key <= 9) {
                if (finished || numberPlay.length >= digits) return
                newNumberPlay(e.key)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [numberPlay, addNewNumberPlayed, removeLastNumber])

    return (
        <section className="grid grid-cols-12 pb-24 sm:pb-10 pt-1 px-5 gap-2 font-FigtreeBold">
            <div className="col-span-10 grid grid-cols-10 gap-2">
                {
                    numbers.map((num, index) => (
                        <ButtonChar key={index} value={num} onClick={handleNumberClick}>{num}</ButtonChar>
                    ))
                }
            </div>
            <div className="col-span-2 flex flex-col gap-2">
                <ButtonChar key='deleteButton' onClick={removeLastNumber}>
                    <Backspace height={32} width={32} stroke='black'></Backspace>
                </ButtonChar>
                <ButtonChar key='enterButton' onClick={() => addNewNumberPlayed(numberPlay)}>
                    <Check height={32} width={32} stroke='black'></Check>
                </ButtonChar>
            </div>
        </section>
    )
}

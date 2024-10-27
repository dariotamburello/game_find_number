import { useNumberPlay } from "../hooks/useNumberPlay"
import { useConfiguration } from "../hooks/useConfiguration"
import { useGame } from "../hooks/useGame"
import { EmptyInput } from "./shared/EmptyInput"
import { useTranslation } from "react-i18next"

export const Plays = () => {
    const { finished, win, points, movesLeft } = useGame()
    const { numberPlay } = useNumberPlay()
    const { digits } = useConfiguration()
    const { t } = useTranslation()

    const drawSquares = () => {
        let content = []
        for (let i = 0; i < digits; i++) {
            content.push(
                numberPlay[i]
                    ? <EmptyInput key={i}>{numberPlay[i]}</EmptyInput>
                    : <EmptyInput key={i} className='text-transparent dark:text-transparent select-none'>X</EmptyInput>
            )
        }
        return content
    }

    return (
        <section className="col-span-4 flex flex-col items-center mt-5 px-1">
            <div className="flex flex-row gap-4">
                {
                    digits > 0
                        ? drawSquares()
                        : <>{t('game.loading')}...</>
                }
            </div>
            <div className="mt-3 uppercase font-semibold">
                {
                    finished
                        ?
                        win
                            ? <p className="text-lime-600 dark:text-lime-400">{t('game.you_win')} <span>(+{points} {t('game.points')})</span></p>
                            : <p className="text-red-500">{t('game.you_loose')} :(</p>
                        : <p>{t('game.moves_left')}: {movesLeft()}</p>
                }
            </div>
        </section>
    )
}

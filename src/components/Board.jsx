import { useEffect, useRef } from "react";
import { useGame } from "../hooks/useGame"
import Confetti from 'react-confetti-boom';
import { useConfiguration } from "../hooks/useConfiguration";
import { useTranslation } from "react-i18next";

export const Board = () => {
    const { partialResult, win } = useGame()
    const { maxAttempts } = useConfiguration()
    const sectionRef = useRef(null)
    const { t } = useTranslation()

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollTop = sectionRef.current.scrollHeight
        }
    }, [partialResult])

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-start h-full py-5 gap-2 overflow-y-scroll no-scrollbar">
            {win && <Confetti mode="boom" particleCount={90}></Confetti>}
            {
                partialResult.length > 0
                    ? partialResult.map(({ id, value, someChoise, fixedChoise }, index) => (
                        <div key={id} className="w-full flex justify-center sm:grid-cols-6 gap-5 text-lg">
                            <div className=" sm:col-start-2 sm:col-span-2 justify-end flex items-end gap-1">
                                <div className="min-w-10 text-xs text-right text-black/40 dark:text-white/40">({index + 1}/{maxAttempts})</div>
                                <div className="flex flex-row gap-1">
                                    {
                                        value.length > 0
                                            ? [...value].map((value, index) => (
                                                <div key={index} className="min-w-6 text-center rounded-md px-1 text-xl border border-slate-400 dark:border-slate-500">{value}</div>
                                            ))
                                            : <></>
                                    }
                                </div>
                            </div>
                            <div className="text-center sm:col-span-2 flex flex-row gap-1">
                                <div className="min-w-11">{fixedChoise} 🟢</div>
                                <div className="min-w-11">{someChoise} 🟡</div>
                            </div>
                        </div>
                    ))
                    : <p>{t('game.hit_numbers_to_play')}!</p>
            }
        </section>
    )
}

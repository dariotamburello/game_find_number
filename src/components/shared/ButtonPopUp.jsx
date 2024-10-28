// eslint-disable-next-line react/prop-types
export const ButtonPopUp = ({ children, action, styles }) => {
    return (
        <button onClick={action} aria-label={`Button for ${children}`} className={`rounded-md px-2 py-1 transition-all ${styles}
        bg-slate-200 hover:bg-slate-400 hover:text-white
        dark:bg-slate-500 dark:hover:bg-slate-600`}>{children}</button>
    )
}

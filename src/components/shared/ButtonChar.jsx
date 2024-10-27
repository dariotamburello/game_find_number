
// eslint-disable-next-line react/prop-types
export const ButtonChar = ({ children, onClick, value }) => {
    return (
        <button key='enterButton' onClick={onClick} value={value}
            className="col-span-2 flex justify-center rounded-md py-2 text-2xl font-bold transition-all
            bg-slate-100 active:bg-slate-400 hover:bg-slate-300
            dark:bg-slate-800 dark:active:bg-slate-500 dark:hover:bg-slate-600">
            {children}
        </button>
    )
}

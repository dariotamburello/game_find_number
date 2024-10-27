/* eslint-disable react/prop-types */
export const EmptyInput = ({ i, children, className }) => {
    return (
        <div key={i} className={`min-w-12 border rounded-md flex items-center px-3 justify-center font-bold text-3xl ${className}
        bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-800`}>
            {children}
        </div>
    )
}

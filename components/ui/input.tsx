import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  btnOnClick?: React.MouseEventHandler<HTMLButtonElement>
  btnLabel?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, btnOnClick, btnLabel = "Go", ...props }, ref) => {
    if (btnOnClick) {
      return (
      <div className="flex text-background bg-foreground/80 items-center p-5 flex-1 rounded-3xl border border-input text-2xl shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring">
        <input
        type={type}
        className={cn(
          "flex-1 outline-none bg-transparent border-none text-2xl placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        />
        <button
          type="button"
          onClick={btnOnClick}
          className=" flex text-foreground items-center justify-center rounded-2xl bg-background text-xl font-bold hover:bg-accent transition-colors w-12 h-12"
          style={{ aspectRatio: "1 / 1" as any }}
        >
          {btnLabel}
        </button>
      </div>
      )
    }
    return (
      <div className="flex text-background bg-foreground/80 items-center p-5 flex-1 rounded-3xl border border-input text-2xl shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring">
        <input
        type={type}
        className={cn(
          "flex-1 outline-none bg-transparent border-none text-2xl placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

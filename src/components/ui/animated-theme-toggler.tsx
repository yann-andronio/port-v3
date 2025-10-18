import { useRef, useCallback } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "../../lib/utils"

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  isDark: boolean
  toggleTheme: () => void
  duration?: number
}

export const AnimatedThemeToggler = ({
  isDark,
  toggleTheme,
  className,
  duration = 2000,
  ...props
}: AnimatedThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

 const handleClick = useCallback(async () => {
  if (!buttonRef.current) return

  await document.startViewTransition(() => {
    flushSync(() => {
      toggleTheme() 
    })
  }).ready

  // centre de l'écran
  const x = window.innerWidth / 2
  const y = window.innerHeight / 2
  const maxRadius = Math.hypot(window.innerWidth, window.innerHeight)
  

/*  ambony a droite ou sur le btn    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )
 */

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    }
  )
}, [toggleTheme, duration])


  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

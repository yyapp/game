import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

type NavigateFn = (to: string) => void

const NavContext = createContext<NavigateFn | null>(null)

export const NavProvider = NavContext.Provider

export function useAppNavigate(): NavigateFn {
  const ctx = useContext(NavContext)
  return ctx ?? ((to: string) => {
    window.location.href = to
  })
}

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
}

/**
 * Router-agnostic internal link. Renders a real <a href> for accessibility
 * and SEO; when a NavProvider is present it intercepts the click for SPA
 * navigation. Works both inside react-router (real app) and in the
 * router-less Artifact preview.
 */
export function AppLink({ to, children, onClick, ...rest }: AppLinkProps) {
  const ctx = useContext(NavContext)
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e)
        if (ctx && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey) {
          e.preventDefault()
          ctx(to)
        }
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

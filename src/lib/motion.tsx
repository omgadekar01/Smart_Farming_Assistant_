import type { ComponentProps, ReactNode } from 'react'
import { createElement } from 'react'

function animated(tag: keyof HTMLElementTagNameMap) {
  return function MotionElement({ children, ...props }: ComponentProps<'div'> & { children?: ReactNode }) {
    return createElement(tag, props, children)
  }
}

export const motion = {
  div: animated('div'),
  aside: animated('aside'),
}

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

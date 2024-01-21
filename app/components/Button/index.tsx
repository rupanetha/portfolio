import clsx from 'clsx'
import React from 'react'

import { ButtonProps } from '@/app/types/button'

export default function Button<C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) {
  const { children, className, as } = props

  const Component = as || 'button'

  const buttonClasses =
    'px-10 py-3 rounded-[30px] shadow-[0_0_6px_0_rgba(0,0,0,0.06)] text-center text-white tracking-[1px] text-base bg-[#383838] hover:translate-y-[-4px] transition-all duration-200 ease leading-[30px]'

  return (
    <Component className={clsx(buttonClasses, className)}>{children}</Component>
  )
}

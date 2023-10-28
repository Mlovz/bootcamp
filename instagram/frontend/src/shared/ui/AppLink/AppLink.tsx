import { classNames } from '@/shared/lib/classNames'
import { type FC, type ReactNode } from 'react'
import { NavLink, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

type AppLinkProps = {
  className?: string
  children: ReactNode
} & LinkProps

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className = '', ...rest } = props

  return (
      <NavLink
        to={to}
        className={classNames(cls.appLink, {}, [className])}
        {...rest}
      >
          {children}
      </NavLink>
  )
}

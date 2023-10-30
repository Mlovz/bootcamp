import React, { forwardRef, type FC, type InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import { type Mods, classNames } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: string
  value: string
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
  const { className = '', value = 'asdsad', error, placeholder, ...rest } = props

  const mods: Mods = {
    [cls.active]: value,
    [cls.errorField]: error
  }

  return (
      <div className={classNames(cls.field, mods, [className])}>
          <div className={cls.label}>
              <input ref={ref} value={value} {...rest} />
              {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
          </div>

          <span className={classNames(cls.error, { [cls.errorActive]: error }, [])}>{error}</span>
      </div>

  )
});

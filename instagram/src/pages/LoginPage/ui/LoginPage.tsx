import React from 'react'
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const {t} = useTranslation('loginPage')
  
  return (
    <div>{t('Страница логина')}</div>
  )
}

export default LoginPage
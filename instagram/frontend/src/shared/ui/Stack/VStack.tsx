import { type FC } from 'react'
import Flex, { type FlexProps } from './Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = ({ ...rest }) => {
  return (
      <Flex direction='column' {...rest}/>
  )
}

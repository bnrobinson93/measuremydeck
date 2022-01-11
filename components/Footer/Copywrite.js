import { Text, TextProps } from '@chakra-ui/layout'
import * as React from 'react'

export const Copywrite = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
  </Text>
)
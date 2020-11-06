import React from 'react'
import TextBody from '../components/text-body'

import TextTitle from '../components/text-title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Hello World 1</TextTitle>
    <TextTitle bold={false}>Hello World 2</TextTitle>
  </div>
)

export const Body = () => (
  <div>
    <TextBody bold={true}>Hello Body</TextBody>
    <TextBody>Hello Body</TextBody>
  </div>
)

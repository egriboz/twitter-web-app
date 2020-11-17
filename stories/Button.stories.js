import React, { Fragment } from 'react'

// import { Button } from './Button'
// add on
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Button from '../components/button'
import NavItemButton from '../components/navitem-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import TweetBtn from '../components/tweet-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Default = () => <Button>Save</Button>
export const TweetButton = () => (
  <Stack column gap={10}>
    <TweetBtn>Tweet</TweetBtn>
    <TweetBtn full>Tweet Full</TweetBtn>
    <TweetBtn full large>
      Tweet Large
    </TweetBtn>
  </Stack>
)
export const MenuButton = () => (
  <NavItemButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavItemButton>
)
export const Menu = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="home" />
}

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

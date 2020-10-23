import React from 'react'

// import { Button } from './Button'

import Button from '../components/button'
import NavItemButton from '../components/navitem-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}

export const Default = () => <Button>Save</Button>
export const MenuButton = () => (
  <NavItemButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavItemButton>
)
export const Menu = () => <Navigation selectedKey="home" />

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

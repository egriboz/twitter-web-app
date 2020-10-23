import React from 'react'

import NavItemButton from './navitem-button'
import TitleBold from './title-bold'

import {
  Bookmark,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notification,
  Profile,
  Twitter
} from './icons'
import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavItemButton>
        <Twitter />
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavItemButton>
      <NavItemButton notify={15} selected={selectedKey === 'notification'}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavItemButton>
    </nav>
  )
}

export default Navigation

import React from 'react'

import NavItemButton from './navitem-button'
import TextTitle from './text-title'

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
        <TextTitle>Home</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavItemButton>
      <NavItemButton notify={15} selected={selectedKey === 'notification'}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavItemButton>
      <NavItemButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavItemButton>
    </nav>
  )
}

export default Navigation

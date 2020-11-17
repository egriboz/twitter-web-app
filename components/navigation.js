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

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    title: 'Notification',
    notify: 27
  },
  {
    key: 'messages',
    icon: <Messages />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    title: 'More',
    notify: 0
  }
]

import styles from './navigation.module.css'

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        return (
          <NavItemButton
            key={menu.key}
            notify={menu.notify}
            selected={selectedKey === menu.key}
          >
            {menu.icon}
            {showTitle > 0 && <TextTitle>{menu.title}</TextTitle>}
          </NavItemButton>
        )
      })}
    </nav>
  )
}

export default Navigation

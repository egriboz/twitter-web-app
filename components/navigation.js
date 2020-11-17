import React from 'react'
import { MENU } from '../constants/constants'

import styles from './navigation.module.css'

import NavItemButton from './navitem-button'
import TextTitle from './text-title'

function Navigation({ flat = false, selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = selectedKey === menu.key
        return (
          <NavItemButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle > 0 && <TextTitle>{menu.title}</TextTitle>}
          </NavItemButton>
        )
      })}
    </nav>
  )
}

export default Navigation

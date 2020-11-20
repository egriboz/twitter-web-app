import React from 'react'
import { MENU } from '../constants/constants'
import { useRouter } from 'next/router'
import styles from './navigation.module.css'

import NavItemButton from './navitem-button'
import TextTitle from './text-title'

function Navigation({ flat = false }) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path

        return (
          <NavItemButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
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

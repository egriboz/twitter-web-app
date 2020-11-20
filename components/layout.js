// const { isResSent } = require('next/dist/next-server/lib/utils')

import React from 'react'

import cn from 'classnames'

import useWindowSize from '../hooks/useWindowSize'
import styles from './layout.module.css'

import Sidebar from './col-sidebar'
import CONST from '../constants/constants.js'
import Main from './col-main'
import Extra from './col-extra'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>

      <Main>
        {children}
        {/* {JSON.stringify(size)} */}
      </Main>

      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </div>
  )
}

export default Layout

import React, { Fragment } from 'react'
import cn from 'classnames'

import styles from './list.module.css'

import TextBody from '../text/body'
import Button from '../button'
import { MoreShort } from '../icons'

function ListBox({
  flat = false,
  location = 'Trending location',
  tname = 'Mytwitteranniversary',
  slug = '77K Tweet'
}) {
  // console.log(flat + ' is flat ?')
  return (
    <>
      <div className={cn([styles.box])}>
        <MoreShort className={cn([styles.icon])} />
        <a href="#">
          <TextBody className={styles.slug}>{location}</TextBody>
          <TextBody bold>#{tname}</TextBody>
          <TextBody className={styles.slug}>{slug}</TextBody>
        </a>
      </div>
      <div className={cn([styles.box])}>
        <MoreShort className={cn([styles.icon])} />
        <a href="#">
          <TextBody className={styles.slug}>{location}</TextBody>
          <TextBody bold>#{tname}</TextBody>
          <TextBody className={styles.slug}>{slug}</TextBody>
        </a>
      </div>
      <div className={cn([styles.box])}>
        <MoreShort className={cn([styles.icon])} />
        <a href="#">
          <TextBody className={styles.slug}>{location}</TextBody>
          <TextBody bold>#{tname}</TextBody>
          <TextBody className={styles.slug}>{slug}</TextBody>
        </a>
      </div>
    </>
  )
}

export default ListBox

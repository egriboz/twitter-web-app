import React, { Fragment } from 'react'
import cn from 'classnames'

import styles from './list.module.css'

import TextBody from '../text/body'
import Button from '../button'
import { MoreShort, Options } from '../icons'

function ListBox({
  flat = false,
  location = 'Trending location',
  tname = 'Mytwitteranniversary',
  slug = '77K Tweet'
}) {
  // console.log(flat + ' is flat ?')
  return (
    <>
      <div className={cn([styles.boxWrapper])}>
        <header className={cn([styles.Header])}>
          <TextBody bold style={{ fontSize: 20 }}>
            Trends for you
          </TextBody>
          <Options className={cn([styles.icon])} />
        </header>
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

        <footer className={cn([styles.Footer])}>
          <TextBody>
            <a href="#">Show more</a>
          </TextBody>
        </footer>
      </div>
    </>
  )
}

export default ListBox

import Link from 'next/link'
import React from 'react'
import styles from './ButtonLogout.module.css'
import IconLogout from '../Icons/IconLogout'

export default function ButtonLogout() {
  return (
    <Link href="/" className={styles.button_logout}>
        <IconLogout />
    </Link>
  )
}

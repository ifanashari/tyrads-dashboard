import React from 'react'
import styles from "./Navbar.module.css"
import NavbarPageControl from './NavbarPageControl/NavbarPageControl'
import ButtonLogout from '../Button/ButtonLogout'
import IconFire from '../Icons/IconFire'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/dashboard" className={styles.logo_brand}>
        <IconFire />
      </Link>
      <NavbarPageControl />
      <div>
        <ButtonLogout />
      </div>
    </div>
  )
}

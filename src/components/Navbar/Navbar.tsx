import React from 'react'
import styles from "./Navbar.module.css"
import NavbarPageControl from './NavbarPageControl/NavbarPageControl'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>top</div>
      <NavbarPageControl />
      <div>bottom</div>

    </div>
  )
}

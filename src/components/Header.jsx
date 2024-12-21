import React from 'react'
import { LogOut } from 'lucide-react'

import styles from './Layout.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1></h1>
      <button  className={styles.logoutButton}>
        <LogOut size={20} />
        <span className={styles.logoutText}>Salir</span>
      </button>
    </header>
  )
}

export default Header


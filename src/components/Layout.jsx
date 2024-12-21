import React, { ReactNode } from 'react'
import Header from './Header'
import Aside from './Aside'
import styles from './Layout.module.css'


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Aside />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout


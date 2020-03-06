import React, { Fragment } from "react"

import Footer from "../footer/Footer"

import styles from "./layout.module.scss"

const Layout = props => {
  return (
    <Fragment>
      <main className={styles.root}>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout

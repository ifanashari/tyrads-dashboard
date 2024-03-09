import React from 'react'
import styles from './Highlight.module.css'
import CardHighlight from '../Card/CardHighlight'

export default function Highlight() {
  return (
    <div className={styles.highlightSection}>
        <CardHighlight title="Expense and invoice" />
        <CardHighlight title="Latest spending" />
        <CardHighlight title="Got premium" />
    </div>
  )
}

'use client';
import styles from './page.module.css'

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className={styles.main}>
      There was an error..
    </main>
  )
}

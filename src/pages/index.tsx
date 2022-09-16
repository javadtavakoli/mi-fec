import styles from './layout.module.css';
import Button from '../components/button';
import { ReactNode } from 'react';
type AppLayoutProps = {
  children: ReactNode;
  headerExtra?: ReactNode;
};
const PagesLayout = (props: AppLayoutProps) => {
  return (
    <>
      <header className={styles.header}>
        Videos {/** TODO: Add navabar */} {props.headerExtra}
      </header>
      <main className={styles.main}>
        <h1>VManager Demo v0.0.1</h1>
        {props.children}
      </main>
      <footer className={styles.footer}>VManager Demo v0.0.1</footer>
    </>
  );
};
export default PagesLayout;
